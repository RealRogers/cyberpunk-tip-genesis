import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Send, Zap, TrendingUp, Users, UserPlus, UserCheck } from 'lucide-react';
import { Artist } from '../data/mockData';
import { slideUpVariants } from '../types/animations';
import CommentsSection from './CommentsSection';

interface ArtistCardProps {
  artist: Artist;
  onTip: (artist: Artist) => void;
  walletConnected: boolean;
  index: number;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, onTip, walletConnected, index }) => {
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(false);
  const [showComments, setShowComments] = useState(false);

  const handleButtonClick = (e: React.MouseEvent, callback: () => void) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    callback();
  };

  const handleFollow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setIsFollowing(!isFollowing);
    console.log(`${isFollowing ? 'Unfollowed' : 'Followed'} ${artist.name}`);
  };
  
  const handleCardClick = (e: React.MouseEvent) => {
    // Solo navegar si el clic no fue en un botón o enlace
    if (!(e.target instanceof HTMLButtonElement) && !(e.target instanceof HTMLAnchorElement)) {
      navigate(`/artist/${artist.id}`);
    }
  };

  return (
    <motion.div
      className="relative group cursor-pointer"
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onClick={handleCardClick}
    >
      <motion.div
        className="bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 p-6 transition-all duration-500 backdrop-blur-sm relative overflow-hidden"
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0, 255, 255, 0.1)"
        }}
      >
        {/* Rank Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-black text-xs font-black px-2 py-1 rounded-full z-20">
          #{artist.rank}
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

        <div className="relative z-20">
          <div className="flex items-start space-x-4 mb-4">
            <motion.div 
              className="relative z-20"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-16 h-16 rounded-xl object-cover border-2 border-cyan-400/30"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-black animate-pulse" />
            </motion.div>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl font-black text-white">{artist.name}</h3>
                {walletConnected && (
                  <motion.button
                    onClick={handleFollow}
                    className={`flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-mono transition-colors z-30 relative ${
                      isFollowing 
                        ? 'bg-purple-600/50 text-purple-200 hover:bg-purple-600/70' 
                        : 'bg-gray-700/50 text-gray-300 hover:bg-purple-600/50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isFollowing ? (
                      <>
                        <UserCheck size={12} />
                        <span>SIGUIENDO</span>
                      </>
                    ) : (
                      <>
                        <UserPlus size={12} />
                        <span>SEGUIR</span>
                      </>
                    )}
                  </motion.button>
                )}
              </div>
              <p className="text-xs text-cyan-400 font-mono mb-2">{artist.genre}</p>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">{artist.bio}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                <div className="flex items-center space-x-1 mb-1">
                  <Zap size={12} className="text-yellow-400" />
                  <span className="text-xs text-gray-400 font-mono">POWER</span>
                </div>
                <p className="text-sm font-black text-yellow-400">{artist.stakingPower.toLocaleString()}</p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                <div className="flex items-center space-x-1 mb-1">
                  <TrendingUp size={12} className="text-green-400" />
                  <span className="text-xs text-gray-400 font-mono">TIPS</span>
                </div>
                <p className="text-sm font-black text-green-400">{artist.totalTips}</p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
                <div className="flex items-center space-x-1 mb-1">
                  <Users size={12} className="text-purple-400" />
                  <span className="text-xs text-gray-400 font-mono">FANS</span>
                </div>
                <p className="text-sm font-black text-purple-400">{Math.floor(artist.stakingPower / 10)}</p>
              </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-4">
              <motion.button
                onClick={(e) => handleButtonClick(e, () => onTip(artist))}
                disabled={!walletConnected}
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 disabled:opacity-50 px-4 py-3 rounded-xl transition-all duration-300 disabled:cursor-not-allowed font-mono font-black border border-cyan-400/50 z-30 relative"
                whileHover={walletConnected ? { scale: 1.05 } : {}}
                whileTap={walletConnected ? { scale: 0.95 } : {}}
              >
                <Send size={14} />
                <span className="text-xs">{walletConnected ? 'TIP' : 'CONNECT'}</span>
                <Zap size={14} className="animate-pulse text-yellow-400" />
              </motion.button>

              <motion.button
                onClick={(e) => handleButtonClick(e, () => setShowComments(!showComments))}
                className="flex items-center justify-center space-x-2 bg-gray-700/50 hover:bg-gray-600/50 px-4 py-3 rounded-xl transition-all duration-300 font-mono font-black border border-gray-600/50 hover:border-gray-500/50 z-30 relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users size={14} />
                <span className="text-xs">COMUNIDAD</span>
              </motion.button>
          </div>

          {/* Comments Section */}
          {showComments && (
            <div className="relative z-20 mt-4">
              <CommentsSection artistId={artist.id} walletConnected={walletConnected} />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ArtistCard;
