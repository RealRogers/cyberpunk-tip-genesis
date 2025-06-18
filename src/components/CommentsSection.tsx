
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Heart, Send, User } from 'lucide-react';
import { Comment } from '../types/social';
import { mockComments } from '../data/socialData';
import { staggerContainerVariants, staggerItemVariants } from '../types/animations';

interface CommentsSectionProps {
  artistId: number;
  walletConnected: boolean;
}

const CommentsSection: React.FC<CommentsSectionProps> = ({ artistId, walletConnected }) => {
  const [comments, setComments] = useState<Comment[]>(
    mockComments.filter(comment => comment.artistId === artistId)
  );
  const [newComment, setNewComment] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !walletConnected) return;

    const comment: Comment = {
      id: comments.length + 1,
      artistId,
      userId: '0x5555...aaaa',
      username: 'CyberPatron',
      message: newComment,
      timestamp: 'JUST NOW',
      likes: 0
    };

    setComments(prev => [comment, ...prev]);
    setNewComment('');
  };

  const handleLikeComment = (commentId: number) => {
    setComments(prev => prev.map(comment =>
      comment.id === commentId
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  return (
    <motion.div 
      className="bg-gray-800/30 rounded-xl border border-gray-700/30 overflow-hidden"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-800/50 transition-colors"
      >
        <div className="flex items-center space-x-2">
          <MessageCircle size={16} className="text-cyan-400" />
          <span className="text-sm font-mono text-white">COMENTARIOS</span>
          <span className="text-xs text-gray-400">({comments.length})</span>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          className="text-gray-400"
        >
          ↓
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="border-t border-gray-700/30"
          >
            {/* Comment Form */}
            {walletConnected && (
              <form onSubmit={handleSubmitComment} className="p-4 border-b border-gray-700/30">
                <div className="flex space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                    <User size={16} className="text-black" />
                  </div>
                  <div className="flex-1">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Comparte tu opinión sobre este artista..."
                      className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg p-3 text-sm text-white placeholder-gray-400 resize-none"
                      rows={2}
                    />
                    <div className="flex justify-end mt-2">
                      <button
                        type="submit"
                        disabled={!newComment.trim()}
                        className="flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 disabled:bg-gray-600 disabled:opacity-50 px-4 py-2 rounded-lg transition-colors text-sm font-mono disabled:cursor-not-allowed"
                      >
                        <Send size={14} />
                        <span>ENVIAR</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}

            {/* Comments List */}
            <motion.div
              className="max-h-80 overflow-y-auto"
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {comments.length > 0 ? (
                comments.map((comment, index) => (
                  <motion.div
                    key={comment.id}
                    variants={staggerItemVariants}
                    className="p-4 border-b border-gray-700/20 last:border-b-0 hover:bg-gray-800/20 transition-colors"
                  >
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
                        {comment.avatar ? (
                          <img src={comment.avatar} alt={comment.username} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-pink-400 flex items-center justify-center text-black font-black text-xs">
                            {comment.username.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-bold text-white">{comment.username}</span>
                          <span className="text-xs text-gray-500 font-mono">{comment.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed mb-2">{comment.message}</p>
                        <button
                          onClick={() => handleLikeComment(comment.id)}
                          className="flex items-center space-x-1 text-xs text-gray-400 hover:text-pink-400 transition-colors"
                        >
                          <Heart size={12} />
                          <span>{comment.likes}</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="p-8 text-center text-gray-400">
                  <MessageCircle size={24} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Sé el primero en comentar</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CommentsSection;
