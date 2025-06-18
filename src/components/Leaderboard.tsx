
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Zap } from 'lucide-react';
import { Artist } from '../data/mockData';

interface LeaderboardProps {
  artists: Artist[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ artists }) => {
  const sortedArtists = [...artists].sort((a, b) => b.stakingPower - a.stakingPower);

  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900/50 via-black/80 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center">
          <Trophy size={16} className="text-black" />
        </div>
        <h2 className="text-xl font-black text-white">RANKINGS</h2>
      </div>

      <div className="space-y-3">
        {sortedArtists.map((artist, index) => (
          <motion.div
            key={artist.id}
            className="flex items-center space-x-3 p-3 bg-gray-800/30 hover:bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-cyan-400/30 transition-all duration-300"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.02 }}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm ${
              index === 0 ? 'bg-gradient-to-br from-yellow-400 to-orange-400 text-black' :
              index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-400 text-black' :
              index === 2 ? 'bg-gradient-to-br from-orange-400 to-yellow-600 text-black' :
              'bg-gray-700 text-white'
            }`}>
              #{index + 1}
            </div>

            <div className="flex-1">
              <p className="font-bold text-white text-sm">{artist.name}</p>
              <div className="flex items-center space-x-2 text-xs">
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Zap size={10} />
                  <span>{artist.stakingPower.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1 text-green-400">
                  <TrendingUp size={10} />
                  <span>{artist.totalTips}</span>
                </div>
              </div>
            </div>

            {index < 3 && (
              <motion.div
                className="text-2xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Leaderboard;
