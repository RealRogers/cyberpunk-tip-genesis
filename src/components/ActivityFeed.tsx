//@ts-nocheck
// components/ActivityFeed.tsx
"use client";
import { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { Heart, DollarSign, Users, Trophy, Activity, MessageCircle } from "lucide-react";
import { useFeeds } from "../app/providers/FeedProvider";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { slideUpVariants, staggerContainerVariants, staggerItemVariants } from "../types/animations";

interface ActivityFeedItem {
  id: string;
  type: string;
  createdAt: string;
  data: {
    user?: {
      id: string;
      username: string;
      avatar: string | null;
    };
    artistName?: string;
    amount?: number;
    message?: string;
    likes?: Array<{ userId: string }>;
  };
}

export default function ActivityFeed() {
  const { ready, authenticated } = usePrivy();
  const { wallets } = useWallets();
  const { feeds, loading, hasMore, fetchMore, handleLike, isProcessingLike } =
    useFeeds();
  const router = useRouter();

  const walletAddress = useMemo(() => wallets?.[0]?.address || null, [wallets]);

  const currentFeedItems = useMemo(() => {
    if (!feeds['activity']?.length) return [];
   // console.log("activity",feeds['activity'])
    return feeds['activity'].filter(
      (item, index, self) => self.findIndex((i) => i.id === item.id) === index
    );
  }, [feeds]);

  const handleProfileClick = useCallback(
    (userId: string) => {
      router.push(`/profile/${userId}`);
    },
    [router]
  );

  const handleLikeClick = useCallback(
    (itemId: string) => {
      if (!authenticated) return;
      handleLike(itemId);
    },
    [authenticated, handleLike]
  );

  const getActivityIcon = useCallback((type: string) => {
    switch (type) {
      case 'tip':
        return <DollarSign size={14} className="text-green-400" />;
      case 'comment':
        return <MessageCircle size={14} className="text-cyan-400" />;
      case 'follow':
        return <Users size={14} className="text-purple-400" />;
      case 'achievement':
        return <Trophy size={14} className="text-yellow-400" />;
      case 'post':
        return <MessageCircle size={14} className="text-pink-400" />; // <- added post icon
      default:
        return <Activity size={14} className="text-gray-400" />;
    }
  }, []);
  
  const getActivityText = useCallback((item: ActivityFeedItem) => {
    const user = item.data.user || {
      id: "",
      username: "User",
      avatar: null,
    };
    const targetUser = item.data.artistName || user.username;
  
    switch (item.data.type) {
      case 'tip':
        return `sent $${item.data.amount || 0} to ${targetUser}`;
      case 'comment':
        return `commented on ${targetUser}'s profile`;
      case 'follow':
        return `is now following ${targetUser}`;
      case 'achievement':
        return item.data.message || 'unlocked a new achievement';
      case 'post':
        return `posted: "${item.data.content?.slice(0, 60) || 'a new post'}..."`; // <- added post text
      default:
        return 'performed an activity';
    }
  }, []);
  

  const renderItem = useCallback(
    (item: ActivityFeedItem) => {
      const user = item.data.user || {
        id: "",
        username: "User",
        avatar: null,
      };
  

      return (
        <motion.div
          key={item.id}
          variants={staggerItemVariants}
          className="group bg-gray-800/30 hover:bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-purple-400/30 p-4 transition-all duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-start space-x-3">
            <div 
              className="w-8 h-8 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-lg flex items-center justify-center text-black font-black text-xs flex-shrink-0 cursor-pointer"
              onClick={() => handleProfileClick(user.id)}
            >
              {user.username?.[0]?.toUpperCase() || "U"}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                {getActivityIcon(item.data.type)}
                <span 
                  className="text-sm font-bold text-white truncate cursor-pointer hover:text-cyan-300"
                  onClick={() => handleProfileClick(user.id)}
                >
                  {user.username}
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {item.data.message}
              </p>
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-gray-500 font-mono">
                  {new Date(item.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      );
    },
    [walletAddress, isProcessingLike, handleProfileClick, handleLikeClick, getActivityIcon, getActivityText]
  );

  if (!ready) return <LoadingView />;
  if (!authenticated) return <AuthRequiredView />;

  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900/50 via-black/80 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-lg flex items-center justify-center">
          <Activity size={16} className="text-black" />
        </div>
        <h2 className="text-xl font-black text-white">FEED_SOCIAL</h2>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
      </div>

      <motion.div 
        className="space-y-3 max-h-96 overflow-y-auto"
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {currentFeedItems.length > 0 ? (
          currentFeedItems.map(renderItem)
        ) : !loading && (
          <motion.div
            className="text-center py-12 text-cyan-400/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-lg mb-2">NO ACTIVITY DETECTED</div>
            <div className="text-xs font-mono tracking-wider">
              SYSTEM AWAITING INPUT
            </div>
          </motion.div>
        )}
      </motion.div>

      {hasMore['activity'] && (
        <motion.button
          onClick={() => fetchMore('activity')}
          disabled={loading}
          className={`mt-8 w-full py-3 text-sm flex items-center justify-center gap-2
                    border border-cyan-400/30 hover:border-cyan-400/60
                    ${loading ? "text-gray-500" : "text-cyan-400 hover:text-cyan-300"}
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
              <Activity className="h-4 w-4 group-hover:text-cyan-300 transition-colors" />
            </>
          )}
        </motion.button>
      )}
    </motion.div>
  );
}

const LoadingView = () => (
  <div className="bg-gradient-to-br from-gray-900/50 via-black/80 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm flex items-center justify-center h-64">
    <div className="animate-pulse text-cyan-400 text-lg">
      LOADING ACTIVITIES...
    </div>
  </div>
);

const AuthRequiredView = () => (
  <div className="bg-gradient-to-br from-gray-900/50 via-black/80 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm flex items-center justify-center h-64">
    <div className="text-cyan-400 text-center">
      <div className="text-lg mb-2">AUTHENTICATION REQUIRED</div>
      <div className="text-xs font-mono tracking-wider">
        PLEASE CONNECT YOUR WALLET
      </div>
    </div>
  </div>
);