//@ts-nocheck
"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import { 
  MapPin, 
  Link as LinkIcon, 
  Calendar,
  Users,
  Zap,
  Eye,
  Heart,
  MessageSquare,
  Gift,
  Activity
} from "lucide-react";
import { useUser } from '../../providers/UserProvider';
import { useRouter, useParams } from 'next/navigation';
import { usePrivy, useWallets } from '@privy-io/react-auth';

type ProfileTab = 'about' | 'activity';
type ActivityTab = 'all' | 'posts' | 'tips' | 'interactions';

export default function ProfileView() {
      const {
    user: currentUser,
    getUserProfile,
    fetchUserActivity,
    fetchUserActivitybyId,
    walletAddress
  } = useUser();
  const router = useRouter();
  const params = useParams();
  const userId = params?.id as string;
  const { ready, authenticated } = usePrivy();
  const { wallets } = useWallets();
  const currentWallet = currentUser?.id;

  


  const [profileUser, setProfileUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<ProfileTab>('about');
  const [activeActivityTab, setActiveActivityTab] = useState<ActivityTab>('all');
  const [activity, setActivity] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isFollowLoading, setIsFollowLoading] = useState(false);
  const [followers, setFollowers] = useState<any[]>([]);
  const [following, setFollowing] = useState<any[]>([]);
  const [loadingStats, setLoadingStats] = useState(false);

  // Check follow status
  const checkFollowStatus = async () => {
    console.log("check for follow",ready,authenticated,currentWallet)
    if (!ready || !authenticated || !currentWallet) return;
    
    try {
      const res = await fetch(`/api/follow/${userId}`, {
        headers: { 'x-wallet-address': currentWallet }
      });
      const data = await res.json();
      console.log('data',data)
      setIsFollowing(data.isFollowing);
      setFollowers(data.followerCount)
      setFollowing(data.followingCount)
    } catch (error) {
      console.error("Failed to check follow status:", error);
    }
  };

  // Toggle follow
  const toggleFollow = async () => {
    if (!ready || !authenticated || !currentWallet) return;
    
    setIsFollowLoading(true);
    try {
      const res = await fetch(`/api/follow/${userId}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'x-wallet-address': currentWallet 
        },
        body: JSON.stringify({ wallet: currentWallet })
      });
      console.log("res",res)
      
      if (!res.ok) throw new Error("Follow action failed");
      
      const data = await res.json();
      setIsFollowing(data.isFollowing);
      toast.success(data.isFollowing ? "Followed!" : "Unfollowed");
      
      // Refresh follow counts
      await loadFollowData();
    } catch (error) {
      toast.error("Failed to update follow status");
      console.error(error);
    } finally {
      setIsFollowLoading(false);
    }
  };

  // Load follow data (followers and following)
  const loadFollowData = async () => {
    setLoadingStats(true);
    try {
      const [followersRes, followingRes] = await Promise.all([
        fetch(`/api/follow/${userId}/followers`),
        fetch(`/api/follow/${userId}/following`)
      ]);
      setFollowers(await followersRes.json());
      setFollowing(await followingRes.json());
    } catch (error) {
      console.error("Failed to load follow data:", error);
    } finally {
      setLoadingStats(false);
    }
  };


  useEffect(()=>{
   checkFollowStatus()
  },[currentUser])

  // Load profile data
  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        const userData = await getUserProfile(userId);
        const activity = await fetchUserActivitybyId(userId);
        setProfileUser(userData);
        setActivity(activity);
        
        // Load follow data
      } catch (error) {
        console.error('Error loading profile:', error);
        toast.error('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

   if(wallets) loadProfile();
  }, [userId, getUserProfile, fetchUserActivitybyId]);

  const filterActivities = () => {
    if (!activity) return [];

    let items = [];
    
    if (activeActivityTab === 'all') {
      items = [
        ...(activity.posts || []).map((post: any) => ({ ...post, type: 'post' })),
        ...(activity.comments || []).map((comment: any) => ({ ...comment, type: 'comment' })),
        ...(activity.likes || []).map((like: any) => ({ ...like, type: 'like' })),
      ];
      
      if (activity.artist) {
        items = [
          ...items,
          ...(activity.artist.donationsReceived || []).map((donation: any) => ({ 
            ...donation, 
            type: 'donation-received' 
          })),
          ...(activity.artist.commentsReceived || []).map((comment: any) => ({ 
            ...comment, 
            type: 'comment-received' 
          }))
        ];
      }
    } else if (activeActivityTab === 'posts') {
      items = (activity.posts || []).map((post: any) => ({ ...post, type: 'post' }));
    } else if (activeActivityTab === 'tips') {
      if (activity.artist) {
        items = [
          ...(activity.artist.donationsReceived || []).map((donation: any) => ({ 
            ...donation, 
            type: 'donation-received' 
          }))
        ];
      }
    } else if (activeActivityTab === 'interactions') {
      items = [
        ...(activity.comments || []).map((comment: any) => ({ ...comment, type: 'comment' })),
        ...(activity.likes || []).map((like: any) => ({ ...like, type: 'like' })),
      ];
      if (activity.artist) {
        items = [
          ...items,
          ...(activity.artist.commentsReceived || []).map((comment: any) => ({ 
            ...comment, 
            type: 'comment-received' 
          }))
        ];
      }
    }

    return items.sort((a: any, b: any) => {
      const dateA = new Date(a.createdAt || a.timestamp);
      const dateB = new Date(b.createdAt || b.timestamp);
      return dateB.getTime() - dateA.getTime();
    });
  };

  const renderActivityItem = (item: any) => {
    switch (item.type) {
      case 'post':
        return (
          <div className="flex items-start space-x-3">
            <Zap className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-cyan-100">POST</h4>
              <p className="text-sm text-gray-300">{item.title}</p>
              {item.content && <p className="text-xs text-gray-400">{item.content}</p>}
              <p className="text-xs text-gray-500">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        );
      case 'donation-received':
        return (
          <div className="flex items-start space-x-3">
            <Gift className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-pink-100">TIP_RECEIVED</h4>
              <p className="text-sm text-gray-300">
                Received {item.amount} ETH from {item.donor?.username || 'a supporter'}
              </p>
              {item.message && (
                <p className="text-xs text-gray-400 italic">"{item.message}"</p>
              )}
              <p className="text-xs text-gray-500">
                {new Date(item.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        );
      case 'comment':
        return (
          <div className="flex items-start space-x-3">
            <MessageSquare className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-green-100">COMMENT</h4>
              <p className="text-sm text-gray-300">On: {item.post?.title || 'a post'}</p>
              <p className="text-xs text-gray-400">{item.content}</p>
              <p className="text-xs text-gray-500">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        );
      case 'comment-received':
        return (
          <div className="flex items-start space-x-3">
            <MessageSquare className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-purple-100">COMMENT_RECEIVED</h4>
              <p className="text-sm text-gray-300">
                From {item.user?.username || 'a user'}
              </p>
              <p className="text-xs text-gray-400">"{item.message}"</p>
              <p className="text-xs text-gray-500">
                {new Date(item.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        );
      case 'like':
        return (
          <div className="flex items-start space-x-3">
            <Heart className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-red-100">LIKE</h4>
              <p className="text-sm text-gray-300">
                Liked {item.post ? 'a post' : 'a comment'}
              </p>
              <p className="text-xs text-gray-500">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderActivityTab = () => {
    if (!activity) {
      return (
        <div className="text-center py-12 text-gray-400">
          <p>NO_ACTIVITY_FOUND</p>
          <button 
            onClick={fetchUserActivity}
            className="mt-4 text-cyan-400 hover:underline"
          >
            RETRY
          </button>
        </div>
      );
    }

    const filteredActivities = filterActivities();

    return (
      <div className="space-y-4">
        <div className="flex border-b border-gray-700 mb-6">
          <button 
            className={`px-4 py-2 text-sm ${activeActivityTab === 'all' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-gray-400'}`}
            onClick={() => setActiveActivityTab('all')}
          >
            ALL
          </button>
          <button 
            className={`px-4 py-2 text-sm ${activeActivityTab === 'posts' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-gray-400'}`}
            onClick={() => setActiveActivityTab('posts')}
          >
            POSTS
          </button>
          <button 
            className={`px-4 py-2 text-sm ${activeActivityTab === 'tips' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-gray-400'}`}
            onClick={() => setActiveActivityTab('tips')}
          >
            TIPS
          </button>
          <button 
            className={`px-4 py-2 text-sm ${activeActivityTab === 'interactions' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-gray-400'}`}
            onClick={() => setActiveActivityTab('interactions')}
          >
            INTERACTIONS
          </button>
        </div>

        <div className="space-y-4">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((item, index) => (
              <motion.div
                key={`${item.type}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border border-cyan-400/20 bg-gray-900/50 p-4 rounded-lg"
              >
                {renderActivityItem(item)}
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-400">
              <p>NO_ACTIVITY_FOUND_FOR_SELECTED_FILTER</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-pulse">Loading profile...</div>
      </div>
    );
  }

  if (!profileUser) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div>Profile not found</div>
      </div>
    );
  }

  const isOwnProfile = userId === currentWallet;

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden relative">
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      
      <main className="max-w-4xl mx-auto px-4 py-8 relative z-10">
        <motion.div 
          className="mb-8 border border-cyan-400/20 bg-gray-900/50 backdrop-blur-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="h-48 relative">
            {profileUser?.banner ? (
              <img 
                src={profileUser.banner} 
                alt="Profile banner" 
                className="w-full h-full object-cover bg-gradient-to-r from-cyan-400/10 via-pink-400/10 to-cyan-400/10"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-r from-cyan-400/10 via-pink-400/10 to-cyan-400/10" />
            )}
            <div className="absolute top-4 right-4 flex space-x-2">
              {isOwnProfile && (
                <button 
                  onClick={() => router.push('/profile')}
                  className="bg-gray-900/80 border border-cyan-400/20 px-3 py-1 text-xs flex items-center"
                >
                  EDIT_PROFILE
                </button>
              )}
              {!isOwnProfile && authenticated && (
                <button
                  onClick={toggleFollow}
                  disabled={isFollowLoading}
                  className={`px-3 py-1 text-xs border ${
                    isFollowing
                      ? 'border-gray-600 text-gray-400 hover:bg-gray-800/50'
                      : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/10'
                  } transition-colors`}
                >
                  {isFollowLoading ? '...' : isFollowing ? 'FOLLOWING' : 'FOLLOW'}
                </button>
              )}
            </div>
          </div>
          
          <div className="p-6 pt-0">
            <div className="flex flex-col md:flex-row md:items-end md:space-x-6 -mt-20 relative z-10">
              <div className="relative mb-4 md:mb-0">
                <div className="h-32 w-32 rounded-full border-4 border-gray-900 bg-gradient-to-br from-cyan-400/20 to-pink-400/20 overflow-hidden">
                  {profileUser?.avatar ? (
                    <img src={profileUser.avatar} alt={profileUser.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl text-cyan-400">
                      {profileUser?.name?.[0] || 'U'}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 md:mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                    {profileUser?.name || 'User'}
                  </h1>
                  {profileUser?.verified && (
                    <span className="text-xs bg-cyan-400 text-black px-2 py-0.5 rounded-full">
                      VERIFIED
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mb-2">@{profileUser?.username || 'user'}</p>
                
                <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    JOINED_{profileUser?.joinDate || 'RECENTLY'}
                  </div>
                  {profileUser?.location && (
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {profileUser.location}
                    </div>
                  )}
                  {profileUser?.website && (
                    <div className="flex items-center">
                      <LinkIcon className="h-3 w-3 mr-1" />
                      <a href={profileUser.website} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                        WEBSITE
                      </a>
                    </div>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-6 text-xs">
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3 text-cyan-400" />
                    <span className="font-bold">{followers || 0}</span>
                    <span className="text-gray-400">FOLLOWERS</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3 text-pink-400" />
                    <span className="font-bold">{following || 0}</span>
                    <span className="text-gray-400">FOLLOWING</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-3 w-3 text-yellow-400" />
                    <span className="font-bold">{profileUser?.totalTipsReceived || 0} ETH</span>
                    <span className="text-gray-400">RECEIVED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          <div className="flex border-b border-gray-700">
            <button 
              className={`px-4 py-2 text-sm ${activeTab === 'about' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-gray-400'}`}
              onClick={() => setActiveTab('about')}
            >
              ABOUT
            </button>
            <button 
              className={`px-4 py-2 text-sm ${activeTab === 'activity' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-gray-400'}`}
              onClick={() => setActiveTab('activity')}
            >
              ACTIVITY
            </button>
          </div>

          {activeTab === 'about' ? (
            <>
              <motion.div 
                className="border border-cyan-400/20 bg-gray-900/50 p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="space-y-6">
                  {profileUser?.bio && (
                    <div>
                      <h3 className="text-sm font-bold text-gray-300 mb-2">BIO</h3>
                      <p className="text-gray-400 whitespace-pre-line">{profileUser.bio}</p>
                    </div>
                  )}
                  
                  {(profileUser?.isArtist || profileUser?.category) && (
                    <div>
                      <h3 className="text-sm font-bold text-gray-300 mb-2">
                        {profileUser?.isArtist ? 'ARTIST_CATEGORY' : 'INTERESTS'}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {profileUser.category && (
                          <span className="inline-block bg-gray-800 text-cyan-400 px-2 py-1 text-xs rounded">
                            {profileUser.category}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-bold text-gray-300 mb-2">TIER</h3>
                      <span className="inline-block bg-gray-800 text-cyan-400 px-2 py-1 text-xs rounded">
                        {profileUser?.tier?.replace('_', ' ') || 'CYBER_NOVICE'}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-300 mb-2">STAKING_POWER</h3>
                      <p className="text-gray-400">
                        {profileUser?.stakingPower || 0} SP
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-300 mb-2">REPUTATION</h3>
                      <p className="text-gray-400">
                        {profileUser?.reputation || 0} XP
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-300 mb-2">DAILY_MISSIONS</h3>
                      <p className="text-gray-400">
                        {profileUser?.dailyMissionsCompleted || 0} completed
                      </p>
                    </div>
                  </div>
                  
                  {profileUser?.wallet && (
                    <div>
                      <h3 className="text-sm font-bold text-gray-300 mb-2">WALLET_ADDRESS</h3>
                      <p className="text-xs text-gray-400 font-mono break-all">
                        {profileUser.wallet}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="border border-cyan-400/20 bg-gray-900/50 p-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <Zap className="h-5 w-5 mr-2 text-yellow-400" />
                    <h3 className="text-lg font-bold">TIPS_RECEIVED</h3>
                  </div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    {profileUser?.totalTipsReceived?.toFixed(3) || 0} ETH
                  </div>
                  <p className="text-xs text-gray-400">
                    FROM {followers?.length || 0} SUPPORTERS
                  </p>
                </motion.div>

                <motion.div 
                  className="border border-pink-400/20 bg-gray-900/50 p-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <Heart className="h-5 w-5 mr-2 text-pink-400" />
                    <h3 className="text-lg font-bold">TIPS_SENT</h3>
                  </div>
                  <div className="text-3xl font-bold text-pink-400 mb-2">
                    {profileUser?.totalTipsSent?.toFixed(3) || 0} ETH
                  </div>
                  <p className="text-xs text-gray-400">
                    SUPPORTING {following?.length || 0} CREATORS
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div 
                  className="border border-purple-400/20 bg-gray-900/50 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center mb-4">
                    <Zap className="h-5 w-5 mr-2 text-purple-400" />
                    <h3 className="text-lg font-bold">STREAK</h3>
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {profileUser?.streakDays || 0} DAYS
                  </div>
                  <p className="text-xs text-gray-400">
                    {profileUser?.dailyMissionsCompleted || 0} missions completed
                  </p>
                </motion.div>

                <motion.div 
                  className="border border-green-400/20 bg-gray-900/50 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    <Users className="h-5 w-5 mr-2 text-green-400" />
                    <h3 className="text-lg font-bold">SOCIAL</h3>
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {(followers || 0) + (following || 0)}
                  </div>
                  <p className="text-xs text-gray-400">
                    {followers || 0} FOLLOWERS • {following || 0} FOLLOWING
                  </p>
                </motion.div>

                <motion.div 
                  className="border border-blue-400/20 bg-gray-900/50 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center mb-4">
                    <Eye className="h-5 w-5 mr-2 text-blue-400" />
                    <h3 className="text-lg font-bold">ACTIVITY</h3>
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {profileUser?.totalTipsGiven || 0}
                  </div>
                  <p className="text-xs text-gray-400">
                    TOTAL TIPS GIVEN
                  </p>
                </motion.div>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {renderActivityTab()}
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}