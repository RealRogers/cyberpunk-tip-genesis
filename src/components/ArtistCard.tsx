
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Zap, TrendingUp } from 'lucide-react';
import { Artist } from '../data/mockData';

interface ArtistCardProps {
  artist: Artist;
  onTip: (artist: Artist) => void;
  walletConnected: boolean;
  index: number;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist, onTip, walletConnected, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5 }
    }
  };

  return (
    <motion.div
      className="group bg-gradient-to-br from-gray-900/80 via-black/90 to-gray-900/80 rounded-2xl border border-gray-700/50 hover:border-cyan-400/50 p-6 transition-all duration-500 backdrop-blur-sm relative overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0, 255, 255, 0.1)"
      }}
    >
      {/* Rank Badge */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-black text-xs font-black px-2 py-1 rounded-full">
        #{artist.rank}
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <div className="relative z-10">
        <div className="flex items-start space-x-4 mb-4">
          <motion.div 
            className="relative"
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
            <h3 className="text-xl font-black text-white mb-1">{artist.name}</h3>
            <p className="text-xs text-cyan-400 font-mono mb-2">{artist.genre}</p>
            <p className="text-sm text-gray-300 leading-relaxed">{artist.bio}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
            <div className="flex items-center space-x-2 mb-1">
              <Zap size={14} className="text-yellow-400" />
              <span className="text-xs text-gray-400 font-mono">STAKING_POWER</span>
            </div>
            <p className="text-lg font-black text-yellow-400">{artist.stakingPower.toLocaleString()}</p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700/50">
            <div className="flex items-center space-x-2 mb-1">
              <TrendingUp size={14} className="text-green-400" />
              <span className="text-xs text-gray-400 font-mono">TOTAL_TIPS</span>
            </div>
            <p className="text-lg font-black text-green-400">{artist.totalTips}</p>
          </div>
        </div>

        <motion.button
          onClick={() => onTip(artist)}
          disabled={!walletConnected}
          className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 disabled:opacity-50 px-4 py-3 rounded-xl transition-all duration-300 disabled:cursor-not-allowed font-mono font-black border border-cyan-400/50"
          whileHover={walletConnected ? { scale: 1.05 } : {}}
          whileTap={walletConnected ? { scale: 0.95 } : {}}
        >
          <Send size={16} />
          <span>{walletConnected ? 'SEND_TIPS' : 'CONNECT_WALLET'}</span>
          <Zap size={16} className="animate-pulse text-yellow-400" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ArtistCard;
