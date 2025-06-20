import { useState, useEffect, useRef } from 'react';
import { FaThumbsUp, FaThumbsDown, FaRegThumbsUp, FaRegThumbsDown, FaUserCircle } from 'react-icons/fa';

interface Comment {
  id: string;
  author: string;
  authorAvatar?: string;
  content: string;
  timestamp: string;
  likes: number;
  dislikes: number;
  userReaction?: 'like' | 'dislike' | null;
  artistId: string;
}

interface CommentSectionProps {
  artistId: string;
  artistName: string;
  currentUser?: {
    id: string;
    name: string;
    avatar?: string;
  } | null;
  initialComments?: Comment[];
  onAddComment?: (content: string, artistId: string) => Promise<void>;
  onReact?: (commentId: string, reaction: 'like' | 'dislike' | null) => Promise<void>;
  onLoadComments?: (artistId: string) => Promise<Comment[]>;
}

export const CommentSection = ({
  artistId,
  artistName,
  currentUser,
  initialComments = [],
  onAddComment,
  onReact,
  onLoadComments
}: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Track initial load to prevent unnecessary re-fetches
  const initialLoad = useRef(true);
  const prevArtistId = useRef(artistId);
  
  // Load comments when artistId changes or on initial load
  useEffect(() => {
    const loadComments = async () => {
      // Skip if this is not the initial load and we have initialComments
      // or if the artistId hasn't changed
      if ((!initialLoad.current && initialComments.length > 0) || 
          (prevArtistId.current === artistId && !initialLoad.current)) {
        return;
      }
      
      setIsLoading(true);
      setError(null);
      try {
        if (onLoadComments) {
          const loadedComments = await onLoadComments(artistId);
          setComments(loadedComments);
        } else if (initialComments.length > 0) {
          // Only use initialComments on first load
          setComments(initialComments.filter(comment => comment.artistId === artistId));
        } else {
          setComments([]);
        }
      } catch (err) {
        setError('Failed to load comments');
        console.error('Error loading comments:', err);
      } finally {
        setIsLoading(false);
        initialLoad.current = false;
        prevArtistId.current = artistId;
      }
    };

    loadComments();
  }, [artistId, onLoadComments, initialComments]);

  const handleAddComment = async () => {
    if (!newComment.trim() || !currentUser) return;
    
    const comment: Comment = {
      id: `temp-${Date.now()}`,
      author: currentUser.name,
      authorAvatar: currentUser.avatar,
      content: newComment,
      timestamp: new Date().toISOString(),
      likes: 0,
      dislikes: 0,
      artistId,
    };

    // Optimistic update
    setComments(prev => [comment, ...prev]);
    const previousComments = [...comments];
    
    try {
      if (onAddComment) {
        await onAddComment(newComment, artistId);
      }
      setNewComment('');
    } catch (err) {
      // Revert on error
      setComments(previousComments);
      setError('Failed to post comment');
      console.error('Error posting comment:', err);
    }
  };

  const handleReaction = async (commentId: string, reaction: 'like' | 'dislike') => {
    if (!currentUser) return;
    
    setComments(prev => {
      return prev.map(comment => {
        if (comment.id !== commentId) return comment;
        
        let newLikes = comment.likes;
        let newDislikes = comment.dislikes;
        let newUserReaction: 'like' | 'dislike' | null = reaction;

        // Toggle if clicking the same reaction
        if (comment.userReaction === reaction) {
          newUserReaction = null;
          if (reaction === 'like') newLikes--;
          else newDislikes--;
        } else {
          // If switching from like to dislike or vice versa
          if (comment.userReaction === 'like') newLikes--;
          else if (comment.userReaction === 'dislike') newDislikes--;
          
          if (reaction === 'like') newLikes++;
          else newDislikes++;
        }


        return {
          ...comment,
          likes: newLikes,
          dislikes: newDislikes,
          userReaction: newUserReaction
        };
      });
    });

    try {
      if (onReact) {
        await onReact(commentId, reaction);
      }
    } catch (err) {
      // Revert on error
      setError('Failed to update reaction');
      console.error('Error updating reaction:', err);
      // Recargar comentarios para restaurar el estado
      if (onLoadComments) {
        const loadedComments = await onLoadComments(artistId);
        setComments(loadedComments);
      }
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  if (isLoading && comments.length === 0) {
    return (
      <div className="comment-section bg-gray-900 text-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Comments for {artistName}</h2>
        <div className="flex justify-center py-8">
          <div className="animate-pulse text-cyan-400">Loading comments...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="comment-section bg-gray-900 text-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Comments for {artistName}</h2>
        <div className="text-red-400 mb-4">{error}</div>
        <button 
          onClick={() => window.location.reload()} 
          className="text-cyan-400 hover:underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="comment-section bg-gray-900 text-white p-6 rounded-lg border border-gray-800">
      <h2 className="text-2xl font-bold mb-2 text-cyan-400">Comments for {artistName}</h2>
      <p className="text-gray-400 text-sm mb-6">Share your thoughts about {artistName}'s work</p>
      
      {/* Comment Input */}
      {currentUser ? (
        <div className="mb-8 bg-gray-800 p-4 rounded-lg">
          <div className="flex items-start space-x-3">
            {currentUser.avatar ? (
              <img 
                src={currentUser.avatar} 
                alt={currentUser.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 text-gray-500">
                <FaUserCircle size={40} />
              </div>
            )}
            <div className="flex-1">
              <textarea
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none transition-colors"
                rows={3}
                placeholder={`Write a comment about ${artistName}'s work...`}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleAddComment();
                  }
                }}
              />
              <div className="flex justify-between items-center mt-2">
                <span className={`text-xs ${newComment.length > 500 ? 'text-red-400' : 'text-gray-400'}`}>
                  {newComment.length}/500
                </span>
                <button
                  onClick={handleAddComment}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-2 px-5 rounded-lg transition-all transform hover:scale-105"
                  disabled={!newComment.trim() || newComment.length > 500}
                >
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-6 p-4 bg-gray-800 rounded-lg text-center">
          <p className="text-gray-300">
            <button 
              onClick={() => {/* Aquí iría la lógica de autenticación */}}
              className="text-cyan-400 hover:underline font-medium"
            >
              Sign in
            </button>{' '}
            to leave a comment
          </p>
        </div>
      )}

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-400 italic">No comments yet. Be the first to share your thoughts about {artistName}'s work!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div 
              key={comment.id} 
              className="bg-gray-800 p-4 rounded-lg border-l-4 border-cyan-500 hover:border-cyan-400 transition-colors"
              data-comment-id={comment.id}
            >
              <div className="flex items-start space-x-3">
                {comment.authorAvatar ? (
                  <img 
                    src={comment.authorAvatar} 
                    alt={comment.author}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-10 h-10 text-gray-500 flex-shrink-0">
                    <FaUserCircle size={40} />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-cyan-400 truncate">{comment.author}</h3>
                      <p className="text-xs text-gray-400">{formatDate(comment.timestamp)}</p>
                    </div>
                    <div className="flex space-x-3 ml-2">
                      <button
                        onClick={() => handleReaction(comment.id, 'like')}
                        className={`flex items-center space-x-1 ${
                          comment.userReaction === 'like' 
                            ? 'text-green-400' 
                            : 'text-gray-400 hover:text-green-400'
                        }`}
                        aria-label="Like comment"
                      >
                        {comment.userReaction === 'like' ? 
                          <FaThumbsUp size={18} /> : 
                          <FaRegThumbsUp size={18} />
                        }
                        {comment.likes > 0 && <span>{comment.likes}</span>}
                      </button>
                      <button
                        onClick={() => handleReaction(comment.id, 'dislike')}
                        className={`flex items-center space-x-1 ${
                          comment.userReaction === 'dislike' 
                            ? 'text-red-400' 
                            : 'text-gray-400 hover:text-red-400'
                        }`}
                        aria-label="Dislike comment"
                      >
                        {comment.userReaction === 'dislike' ? 
                          <FaThumbsDown size={18} /> : 
                          <FaRegThumbsDown size={18} />
                        }
                        {comment.dislikes > 0 && <span>{comment.dislikes}</span>}
                      </button>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-100 whitespace-pre-wrap break-words">{comment.content}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
