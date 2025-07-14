//@ts-nocheck
// components/Feed.tsx
"use client";
import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageSquare, Zap, Activity, Gift } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";
import { useFeeds } from "@/app/providers/FeedProvider";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import CommentsSection from "./CommentSection";
import TipButton from "./TipButton";

type FeedType = "content"; // Only keeping the content type

interface FeedItem {
  id: string;
  type: string;
  createdAt: string;
  data: {
    user?: {
      id: string;
      username: string;
      avatar: string | null;
    };
    donor?: {
      id: string;
      username: string;
      avatar: string | null;
    };
    author?: {
      id: string;
      username: string;
      avatar: string | null;
    };
    likes?: Array<{ userId: string }>;
    comments?: Array<any>;
    title?: string;
    content?: string;
    message?: string;
  };
}

export default function Feed() {
  const { ready, authenticated } = usePrivy();
  const { wallets } = useWallets();
  const { feeds, loading, hasMore, fetchMore, handleLike, isProcessingLike } =
    useFeeds();
  const [expandedPost, setExpandedPost] = useState<string | null>(null);
  const [optimisticLikes, setOptimisticLikes] = useState<Record<string, boolean>>({});
  const [optimisticLikeCounts, setOptimisticLikeCounts] = useState<Record<string, number>>({});
  const router = useRouter();

  const handleExpandPost = (postId: string) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const handleViewDetails = (postId: string) => {
    router.push(`/content/${postId}`);
  };

  const [activeTab] = useState<FeedType>("content"); // Only content tab
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });

  const walletAddress = useMemo(() => wallets?.[0]?.address || null, [wallets]);

  const currentFeedItems = useMemo(() => {
    if (!feeds.content?.length) return []; // Only use content feed

    return feeds.content.filter(
      (item, index, self) => self.findIndex((i) => i.id === item.id) === index
    );
  }, [feeds]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setGlowPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  const handleProfileClick = useCallback(
    (userId: string) => {
      router.push(`/profile/${userId}`);
    },
    [router]
  );

  const handleLikeClick = useCallback(
    async (itemId: string) => {
      if (!authenticated) {
        toast.error("Connect your wallet to like posts");
        return;
      }
      if (!walletAddress) return;

      // Get current like state from the feed item
      const item = feeds.content?.find(item => item.id === itemId);
      if (!item) return;

      const currentLikes = item.data.likes || [];
      const isCurrentlyLiked = currentLikes.some(like => like.userId === walletAddress);
      const newLikeCount = isCurrentlyLiked ? currentLikes.length - 1 : currentLikes.length + 1;

      // Optimistic update
      setOptimisticLikes(prev => ({
        ...prev,
        [itemId]: !isCurrentlyLiked
      }));
      setOptimisticLikeCounts(prev => ({
        ...prev,
        [itemId]: newLikeCount
      }));

      try {
        await handleLike(itemId);
        // Success toast with different messages for like/unlike
        toast.success(isCurrentlyLiked ? "Unliked!" : "Liked!", {
          icon: isCurrentlyLiked ? "💔" : "❤️",
          style: {
            background: "#111",
            color: isCurrentlyLiked ? "#0ff" : "#f0f"
          }
        });
      } catch (error) {
        // Revert optimistic update on error
        setOptimisticLikes(prev => ({
          ...prev,
          [itemId]: isCurrentlyLiked
        }));
        setOptimisticLikeCounts(prev => ({
          ...prev,
          [itemId]: currentLikes.length
        }));
        toast.error("Failed to update like", {
          icon: "⚠️",
          style: {
            background: "#111",
            color: "#f00"
          }
        });
      }
    },
    [authenticated, walletAddress, feeds.content, handleLike]
  );

  const renderItem = useCallback(
    (item: FeedItem) => {
      const user = item.data.user ||
        item.data.donor ||
        item.data.author || {
          id: "",
          username: "User",
          avatar: null,
        };

      // Determine like state - check optimistic update first, then actual data
      const optimisticLikeState = optimisticLikes[item.id];
      const actualIsLiked = walletAddress && 
        item.data.likes?.some((like) => like.userId === walletAddress);
      const isLiked = typeof optimisticLikeState !== 'undefined' 
        ? optimisticLikeState 
        : actualIsLiked;

      // Determine like count - check optimistic update first, then actual data
      const optimisticLikeCount = optimisticLikeCounts[item.id];
      const actualLikeCount = item.data.likes?.length || 0;
      const likeCount = typeof optimisticLikeCount !== 'undefined'
        ? optimisticLikeCount
        : actualLikeCount;

      const commentCount = item.data.comments?.length || 0;
      const isProcessing = isProcessingLike[item.id];
      const isExpanded = expandedPost === item.id;

      return (
        <motion.div
          key={`${item.type}-${item.id}`}
          className="relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(600px at ${glowPosition.x}px ${glowPosition.y}px, rgba(100, 255, 255, 0.1), transparent 80%)`,
            }}
          />

<div
            className="border border-cyan-400/20 bg-gray-900/80 backdrop-blur-sm p-6 mb-4 
                  relative z-10 hover:border-cyan-400/40 transition-all duration-300
                  shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20"
            onMouseMove={handleMouseMove}
          >
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-cyan-400 blur-md opacity-20 animate-pulse" />
                <div
                  onClick={() => handleProfileClick(user.id)}
                  className="w-12 h-12 rounded-full relative z-10 border border-cyan-400/30 cursor-pointer overflow-hidden"
                >
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.username}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-pink-400/20 flex items-center justify-center">
                      {user.username?.[0]?.toUpperCase() || "U"}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span
                    onClick={() => handleProfileClick(user.id)}
                    className="font-bold text-cyan-100 tracking-wide cursor-pointer hover:text-cyan-300 transition-colors"
                  >
                    {user.username}
                  </span>
                  <span className="text-xs text-cyan-400 ml-auto font-mono">
                    {new Date(item.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>

           

                <div className="flex items-start gap-2 mb-2">
                  <span className="text-cyan-400 mt-0.5">
                    <Zap className="h-5 w-5" />
                  </span>
                  <p className="text-cyan-100 text-sm">
                    {item.data.message || item.data.content || "New post"}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-3">
                  <button
                    onClick={() => handleLikeClick(item.id)}
                    disabled={isProcessing}
                    className={`flex items-center gap-1 text-xs font-mono tracking-wider ${
                      isLiked
                        ? "text-pink-400"
                        : "text-cyan-400 hover:text-cyan-300"
                    } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`heart-${item.id}-${isLiked}`}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Heart
                          className="h-4 w-4"
                          fill={isLiked ? "currentColor" : "none"}
                        />
                      </motion.span>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`count-${item.id}-${likeCount}`}
                        initial={{ y: -5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 5, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        [{likeCount}]
                      </motion.span>
                    </AnimatePresence>
                  </button>
                  <button
                    onClick={() => handleExpandPost(item.id)}
                    className="flex items-center gap-1 text-xs font-mono tracking-wider text-cyan-400 hover:text-cyan-300"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>[{commentCount}]</span>
                  </button>
                  <button
                    onClick={() => handleViewDetails(item.id)}
                    className="text-xs font-mono tracking-wider text-cyan-400 hover:text-cyan-300 ml-auto"
                  >
                    View Full
                  </button>
               
                  <TipButton
                    recipientId={item.data?.authorId || ""}
                    recipientWallet={item.data.authorId|| ""}
                    postId={item.id}
                  />
                </div>
              </div>
            </div>

            {/* Expanded content section */}
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-4 pt-4 border-t border-cyan-400/10"
              >
                {item.data.mediaUrl && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    {item.data.mediaType === "IMAGE" && (
                      <img
                        src={item.data.mediaUrl}
                        alt={item.data.title}
                        className="w-full max-h-96 object-contain"
                      />
                    )}
                    {item.data.mediaType === "VIDEO" && (
                      <video
                        src={item.data.mediaUrl}
                        controls
                        className="w-full max-h-96"
                      />
                    )}
                  </div>
                )}

                <CommentsSection
                  postId={item.id}
                  initialComments={item.data.comments || []}
                />
              </motion.div>
            )}

            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400/0 via-cyan-400/80 to-cyan-400/0" />
          </div>
        </motion.div>
      );
    },
    [
      glowPosition,
      handleMouseMove,
      handleProfileClick,
      handleLikeClick,
      handleExpandPost,
      handleViewDetails,
      isProcessingLike,
      walletAddress,
      expandedPost,
      optimisticLikes,
      optimisticLikeCounts
    ]
  );

  if (!ready) return <LoadingView />;
  if (!authenticated) return <AuthRequiredView />;

  return (
    <div className="min-h-screen bg-gray-950 text-cyan-100 font-mono">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 to-transparent" />
      </div>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "rgba(17, 24, 39, 0.9)",
            border: "1px solid rgba(34, 211, 238, 0.2)",
            color: "#e5e7eb",
            backdropFilter: "blur(10px)",
            padding: "12px 16px",
            borderRadius: "4px",
            boxShadow: "0 0 20px rgba(34, 211, 238, 0.1)",
          },
        }}
      />

      <div className="max-w-2xl mx-auto px-4 py-8 relative z-10">
        <motion.h1
          className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          NEURAL_FEED
        </motion.h1>

        <div className="space-y-6">
          {currentFeedItems.length > 0
            ? currentFeedItems.map(renderItem)
            : !loading && <EmptyFeedView />}
        </div>

        {hasMore.content && (
          <LoadMoreButton
            loading={loading}
            onClick={() => fetchMore("content")}
          />
        )}
      </div>
    </div>
  );
}

const LoadingView = () => (
  <div className="min-h-screen bg-gray-950 flex items-center justify-center">
    <div className="text-center">
      <div className="animate-pulse text-cyan-400 text-lg mb-2">
        INITIALIZING NEURAL INTERFACE
      </div>
      <div className="text-xs text-cyan-400/60 font-mono tracking-wider">
        CONNECTING TO PRIVY NETWORK...
      </div>
    </div>
  </div>
);

const AuthRequiredView = () => (
  <div className="min-h-screen bg-gray-950 flex items-center justify-center">
    <div className="text-center">
      <div className="text-cyan-400 text-lg mb-2">AUTHENTICATION REQUIRED</div>
      <div className="text-xs text-cyan-400/60 font-mono tracking-wider">
        PLEASE CONNECT YOUR WALLET TO ACCESS FEED
      </div>
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
    <div className="text-xs font-mono tracking-wider">
      SYSTEM AWAITING INPUT
    </div>
  </motion.div>
);

interface LoadMoreButtonProps {
  loading: boolean;
  onClick: () => void;
}

const LoadMoreButton = ({ loading, onClick }: LoadMoreButtonProps) => (
  <motion.button
    onClick={onClick}
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
        <Zap className="h-4 w-4 group-hover:text-cyan-300 transition-colors" />
      </>
    )}
    <span className="absolute inset-0 bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors" />
  </motion.button>
);