
import React from 'react';
import { motion } from 'framer-motion';
import { User, Zap, TrendingUp, Award } from 'lucide-react';

interface UserStatsProps {
  userStakingPower: number;
}

const UserStats: React.FC<UserStatsProps> = ({ userStakingPower }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900/50 via-black/80 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
          <User size={16} className="text-black" />
        </div>
        <h2 className="text-xl font-black text-white">YOUR_STATS</h2>
      </div>

      <div className="space-y-4">
        <motion.div 
          className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <Zap size={16} className="text-yellow-400" />
            <span className="text-sm text-gray-300 font-mono">STAKING_POWER</span>
          </div>
          <p className="text-2xl font-black text-yellow-400">{userStakingPower.toLocaleString()}</p>
        </motion.div>

        <motion.div 
          className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp size={16} className="text-green-400" />
            <span className="text-sm text-gray-300 font-mono">RANK</span>
          </div>
          <p className="text-2xl font-black text-green-400">#42</p>
        </motion.div>

        <motion.div 
          className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center space-x-2 mb-2">
            <Award size={16} className="text-purple-400" />
            <span className="text-sm text-gray-300 font-mono">TIER</span>
          </div>
          <p className="text-lg font-black text-purple-400">CYBER_PATRON</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UserStats;
