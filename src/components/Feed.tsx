//@ts-nocheck
// components/Feed.tsx
"use client"
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Heart, MessageSquare, Zap, Activity, Gift } from "lucide-react";
import { Toaster } from 'react-hot-toast';
import { useFeeds } from "../app/providers/FeedProvider";
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';


type FeedType = 'all' | 'content' | 'activity' | 'donations';

export default function Feed() {
  const { ready, authenticated } = usePrivy();
  const { wallets } = useWallets();
  const { feeds, loading, hasMore, fetchMore, handleLike, isProcessingLike } = useFeeds();
   const router = useRouter();

  
  const [activeTab, setActiveTab] = useState<FeedType>('all');
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });

  // Memoize the wallet address to prevent unnecessary re-renders
  const walletAddress = useMemo(() => wallets?.[0]?.address || null, [wallets]);

  // Filter and memoize the current feed items to prevent duplicate processing
  const currentFeedItems = useMemo(() => {
    if (!feeds[activeTab]?.length) return [];
    
    // Deduplicate items by ID
    const uniqueItems = feeds[activeTab].filter(
      (item, index, self) => self.findIndex(i => i.id === item.id) === index
    );

    return uniqueItems;
  }, [feeds, activeTab]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleProfileClick = (userId: string) => {
    router.push(`/profile/${userId}`);
  };

  const renderItem = (item: any) => {
    // Get the correct user object based on item type
    const user = item.data.user || 
                 item.data.donor || 
                 item.data.author || 
                 { username: 'User', avatar: null };

    const isLiked = walletAddress && item.data.likes?.some((like: any) => like.userId === walletAddress);
    const likeCount = item.data.likes?.length || 0;
    const isProcessing = isProcessingLike[item.id];

    return (
      <motion.div 
        key={`${item.type}-${item.id}`}
        className="relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Glow effect container */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px at ${glowPosition.x}px ${glowPosition.y}px, rgba(100, 255, 255, 0.1), transparent 80%)`
          }}
        />
        
        <div 
          className="border border-cyan-400/20 bg-gray-900/80 backdrop-blur-sm p-6 mb-4 
                    relative z-10 hover:border-cyan-400/40 transition-all duration-300
                    shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20"
          onMouseMove={handleMouseMove}
        >
          {/* Item content */}
          <div className="flex items-start gap-4">
            {/* Avatar with neon border */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-400 blur-md opacity-20 animate-pulse" />
              {user.avatar ? (
                <img 
                  onClick={()=>{handleProfileClick(user.id)}}
                  src={user.avatar} 
                  alt={user.username} 
                  className="w-12 h-12 rounded-full relative z-10 border border-cyan-400/30"
                />
              ) : (
                <div
                 onClick={()=>{handleProfileClick(user.id)}}
                 className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-pink-400/20 flex items-center justify-center relative z-10 border border-cyan-400/30">
                  {user.username?.[0] || 'U'}
                </div>
              )}
            </div>

            <div className="flex-1">
              {/* Header with username and time */}
              <div className="flex items-center mb-2">
                <span
                onClick={()=>{handleProfileClick(user.id)}}
                className="font-bold text-cyan-100 tracking-wide">
                  {user.username}
                </span>
                <span className="text-xs text-cyan-400 ml-auto font-mono">
                  {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>

              {/* Content specific rendering */}
              {item.type === 'post' && (
                <div className="mb-3">
                  <h3 className="text-lg font-medium text-cyan-50 mb-1">{item.data.title}</h3>
                  {item.data.content && <p className="text-cyan-100 text-sm">{item.data.content}</p>}
                </div>
              )}

              {/* Activity message with icon */}
              <div className="flex items-start gap-2 mb-2">
                <span className="text-cyan-400 mt-0.5">
                  {item.type === 'tip' ? (
                    <Gift className="h-5 w-5" />
                  ) : item.type === 'activity' ? (
                    <Activity className="h-5 w-5" />
                  ) : (
                    <Zap className="h-5 w-5" />
                  )}
                </span>
                <p className="text-cyan-100 text-sm">
                  {item.data.message || item.data.content || 'New activity'}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-4 mt-3">
                <button 
                  onClick={() => authenticated ? handleLike(item.id) : toast.error('Connect your wallet to like posts')}
                  disabled={isProcessing || !authenticated}
                  className={`flex items-center gap-1 text-xs font-mono tracking-wider ${
                    isLiked ? 'text-pink-400' : 'text-cyan-400 hover:text-cyan-300'
                  } ${isProcessing || !authenticated ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <Heart className="h-4 w-4" fill={isLiked ? 'currentColor' : 'none'} />
                  <span>[{likeCount}]</span>
                </button>
                
                {item.type === 'post' && (
                  <button className="flex items-center gap-1 text-xs font-mono tracking-wider text-cyan-400 hover:text-cyan-300">
                    <MessageSquare className="h-4 w-4" />
                    <span>[{item.data.comments?.length || 0}]</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Animated border bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400/0 via-cyan-400/80 to-cyan-400/0" />
        </div>
      </motion.div>
    );
  };

  // Loading and auth states remain the same...
  if (!ready) return <LoadingView />;
  if (!authenticated) return <AuthRequiredView />;

  return (
    <div className="min-h-screen bg-gray-950 text-cyan-100 font-mono">
      {/* Glow background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 to-transparent" />
      </div>

      <Toaster position="top-center" toastOptions={{ 
        duration: 3000,
        style: {
          background: 'rgba(17, 24, 39, 0.9)',
          border: '1px solid rgba(34, 211, 238, 0.2)',
          color: '#e5e7eb',
          backdropFilter: 'blur(10px)',
          padding: '12px 16px',
          borderRadius: '4px',
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.1)'
        }
      }} />
      
      <div className="max-w-2xl mx-auto px-4 py-8 relative z-10">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          NEURAL_FEED
        </motion.h1>
        
        {/* Tabs */}
        <div className="flex border-b border-cyan-400/20 mb-6 relative">
          <motion.div
            layoutId="tabIndicator"
            className="absolute bottom-0 h-0.5 bg-cyan-400"
            style={{ 
              width: `${100 / 4}%`,
              left: `${['all', 'content', 'donations', 'activity'].indexOf(activeTab) * (100 / 4)}%`
            }}
            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
          />
          
          {(['all', 'content', 'donations', 'activity'] as FeedType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                if (feeds[tab]?.length === 0) {
                  fetchMore(tab);
                }
              }}
              className={`px-4 py-3 text-sm font-medium relative uppercase tracking-wider ${
                activeTab === tab
                  ? 'text-cyan-400'
                  : 'text-gray-400 hover:text-cyan-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Feed items */}
        <div className="space-y-6">
          {currentFeedItems.length > 0 ? (
            currentFeedItems.map(renderItem)
          ) : (
            !loading && <EmptyFeedView />
          )}
        </div>

        {/* Load more button */}
        {hasMore[activeTab] && (
          <LoadMoreButton 
            loading={loading} 
            onClick={() => fetchMore(activeTab)} 
          />
        )}
      </div>
    </div>
  );
}

// Extracted components for better readability
const LoadingView = () => (
  <div className="min-h-screen bg-gray-950 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-pulse text-cyan-400 text-lg mb-2">INITIALIZING NEURAL INTERFACE</div>
      <div className="text-xs text-cyan-400/60 font-mono tracking-wider">CONNECTING TO PRIVY NETWORK...</div>
    </div>
  </div>
);

const AuthRequiredView = () => (
  <div className="min-h-screen bg-gray-950 flex items-center justify-center">
    <div className="text-center">
      <div className="text-cyan-400 text-lg mb-2">AUTHENTICATION REQUIRED</div>
      <div className="text-xs text-cyan-400/60 font-mono tracking-wider">PLEASE CONNECT YOUR WALLET TO ACCESS FEED</div>
    </div>
  </div>
);

const EmptyFeedView = () => (
  <motion.div
    className="text-center py-12 text-cyan-400/60"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <div className="text-lg mb-2">NO ACTIVITY DETECTED</div>
    <div className="text-xs font-mono tracking-wider">SYSTEM AWAITING INPUT</div>
  </motion.div>
);

const LoadMoreButton = ({ loading, onClick }: { loading: boolean; onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    disabled={loading}
    className={`mt-8 w-full py-3 text-sm flex items-center justify-center gap-2
              border border-cyan-400/30 hover:border-cyan-400/60
              ${loading ? 'text-gray-500' : 'text-cyan-400 hover:text-cyan-300'}
              transition-all duration-300 relative overflow-hidden group`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    {loading ? (
      <>
        <span className="animate-pulse">SYNCING...</span>
        <div className="h-4 w-4 border-2 border-cyan-400/50 border-t-cyan-400 rounded-full animate-spin" />
      </>
    ) : (
      <>
        <span>LOAD_MORE</span>
        <Zap className="h-4 w-4 group-hover:text-cyan-300 transition-colors" />
      </>
    )}
    <span className="absolute inset-0 bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors" />
  </motion.button>
);