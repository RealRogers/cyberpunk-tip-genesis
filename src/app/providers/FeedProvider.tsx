// contexts/FeedContext.tsx
"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { toast } from 'react-hot-toast';

type FeedType = 'all' | 'content' | 'activity' | 'donations';

interface FeedItem {
  type: 'post' | 'tip' | 'comment' | 'activity';
  id: string;
  createdAt: string;
  data: any;
}
// Update the FeedContextType interface to include the new method
interface FeedContextType {
  feeds: Record<FeedType, FeedItem[]>;
  loading: boolean;
  hasMore: Record<FeedType, boolean>;
  fetchMore: (type: FeedType) => void;
  handleLike: (postId: string) => Promise<void>;
  isProcessingLike: Record<string, boolean>;
  reloadAllFeeds: () => Promise<void>; // Add this
}
const FeedContext = createContext<FeedContextType | undefined>(undefined);

export function FeedProvider({ children }: { children: React.ReactNode }) {
  const { ready, authenticated } = usePrivy();
  const { wallets } = useWallets();
  const walletAddress = wallets[0]?.address;
  
  const [feeds, setFeeds] = useState<Record<FeedType, FeedItem[]>>({
    all: [],
    content: [],
    activity: [],
    donations: []
  });
  
  const [cursors, setCursors] = useState<Record<FeedType, string | null>>({
    all: null,
    content: null,
    activity: null,
    donations: null
  });
  
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState<Record<FeedType, boolean>>({
    all: true,
    content: true,
    activity: true,
    donations: true
  });
  
  const [optimisticLikes, setOptimisticLikes] = useState<Record<string, { count: number, isLiked: boolean }>>({});
  const [isProcessingLike, setIsProcessingLike] = useState<Record<string, boolean>>({});

  const fetchFeed = async (type: FeedType) => {
    if (!ready || !authenticated) return;

    try {
      setLoading(true);
      const cursor = cursors[type];
      let cursorParam = '';
      let cursorTypeParam = '';
      
      if (cursor) {
        const [id, t] = cursor.split('|');
        cursorParam = id;
        cursorTypeParam = t;
      }

      const response = await fetch(
        `/api/feed?limit=10${cursor ? `&cursor=${cursorParam}&cursorType=${cursorTypeParam}` : ''}${
          type !== 'all' ? `&type=${type}` : ''
        }`
      );
      
      if (!response.ok) throw new Error('Failed to fetch feed');
      
      const { items, nextCursor } = await response.json();
      
      setFeeds(prev => ({
        ...prev,
        [type]: cursor ? [...prev[type], ...items] : items
      }));
      
      setCursors(prev => ({
        ...prev,
        [type]: nextCursor
      }));
      
      setHasMore(prev => ({
        ...prev,
        [type]: items.length > 0
      }));
    } catch (error) {
      console.error('Error fetching feed:', error);
      toast.error('Failed to load feed');
    } finally {
      setLoading(false);
    }
  };

  const fetchInitialFeeds = async () => {
    await Promise.all([
      fetchFeed('all'),
      fetchFeed('content'),
      fetchFeed('activity'),
      fetchFeed('donations')
    ]);
  };

  useEffect(() => {
    if (ready && authenticated) {
      fetchInitialFeeds(); // initial call
    }
    const intervalId = setInterval(() => {
      fetchInitialFeeds();
    }, 1000); // every 10 seconds

    return () => clearInterval(intervalId); // cleanup
  }, [ready, authenticated]);
  

  const handleLike = async (postId: string) => {
    if (!walletAddress) {
      toast.error('Connect your wallet to like posts');
      return;
    }

    // Find the post in any feed
    const allPosts = [...feeds.all, ...feeds.content, ...feeds.activity, ...feeds.donations];
    const post = allPosts.find(item => item.id === postId && item.type === 'post');
    if (!post) return;

    const currentLikes = post.data?.likes || [];
    const isCurrentlyLiked = currentLikes.some((like: any) => like.userId === walletAddress);
    const newLikeCount = isCurrentlyLiked ? currentLikes.length - 1 : currentLikes.length + 1;

    // Optimistic update
    setIsProcessingLike(prev => ({ ...prev, [postId]: true }));
    setOptimisticLikes(prev => ({
      ...prev,
      [postId]: {
        count: newLikeCount,
        isLiked: !isCurrentlyLiked
      }
    }));

    try {
      const response = await fetch('/api/content/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId,
          userId: walletAddress
        }),
      });

      if (!response.ok) throw new Error('Failed to like post');

      const result = await response.json();
      
      // Update the post in all feeds
      const updatePostInFeed = (feed: FeedItem[]) => feed.map(item => {
        if (item.id === postId && item.type === 'post') {
          return {
            ...item,
            data: {
              ...item.data,
              likes: result.likes
            }
          };
        }
        return item;
      });

      setFeeds(prev => ({
        all: updatePostInFeed(prev.all),
        content: updatePostInFeed(prev.content),
        activity: updatePostInFeed(prev.activity),
        donations: updatePostInFeed(prev.donations)
      }));

      // Clear optimistic state
      setOptimisticLikes(prev => {
        const newState = { ...prev };
        delete newState[postId];
        return newState;
      });

      toast.success(result.action === 'liked' ? 'Post liked!' : 'Like removed');
    } catch (error) {
      console.error('Error liking post:', error);
      toast.error('Failed to like post');
      
      // Revert optimistic update on error
      setOptimisticLikes(prev => {
        const newState = { ...prev };
        delete newState[postId];
        return newState;
      });
    } finally {
      setIsProcessingLike(prev => ({ ...prev, [postId]: false }));
    }
  };

  const reloadAllFeeds = async () => {
  if (!ready || !authenticated) return;

  try {
    setLoading(true);
    // Reset cursors to fetch from beginning
    setCursors({
      all: null,
      content: null,
      activity: null,
      donations: null
    });

    // Reset hasMore flags
    setHasMore({
      all: true,
      content: true,
      activity: true,
      donations: true
    });

    // Clear existing feeds
    setFeeds({
      all: [],
      content: [],
      activity: [],
      donations: []
    });

    // Fetch all feeds fresh
    await fetchInitialFeeds();
    toast.success('Feeds refreshed');
  } catch (error) {
    console.error('Error reloading feeds:', error);
    toast.error('Failed to refresh feeds');
  } finally {
    setLoading(false);
  }
};

// Add it to the context provider value
return (
  <FeedContext.Provider value={{
    feeds,
    loading,
    hasMore,
    fetchMore: fetchFeed,
    handleLike,
    isProcessingLike,
    reloadAllFeeds // Add this to the context
  }}>
    {children}
  </FeedContext.Provider>
);
}

export function useFeeds() {
  const context = useContext(FeedContext);
  if (!context) {
    throw new Error('useFeeds must be used within a FeedProvider');
  }
  return context;
}