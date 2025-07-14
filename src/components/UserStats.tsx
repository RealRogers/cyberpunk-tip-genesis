'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { User, Zap, TrendingUp, Award } from 'lucide-react';

interface UserStatsData {
  stakingPower: number;
  rank: string;
  tier: string;
}

interface Props {
  wallet: string; // Pass wallet to fetch user stats
}

const UserStatsClient: React.FC<Props> = ({ wallet }) => {
  const [stats, setStats] = useState<UserStatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!wallet) return;

    const fetchStats = async () => {
      try {
        const res = await fetch(`/api/user/${wallet}`);
        if (!res.ok) throw new Error('Failed to fetch user stats');
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error(error);
        setStats(null);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [wallet]);

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

      {loading ? (
        <p className="text-gray-400 text-sm">Loading...</p>
      ) : stats ? (
        <div className="space-y-4">
          <motion.div 
            className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <Zap size={16} className="text-yellow-400" />
              <span className="text-sm text-gray-300 font-mono">STAKING_POWER</span>
            </div>
            <p className="text-2xl font-black text-yellow-400">{stats.stakingPower.toLocaleString()}</p>
          </motion.div>

          <motion.div 
            className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <TrendingUp size={16} className="text-green-400" />
              <span className="text-sm text-gray-300 font-mono">RANK</span>
            </div>
            <p className="text-2xl font-black text-green-400">{stats.rank}</p>
          </motion.div>

          <motion.div 
            className="bg-gray-800/30 rounded-xl p-4 border border-gray-700/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <Award size={16} className="text-purple-400" />
              <span className="text-sm text-gray-300 font-mono">TIER</span>
            </div>
            <p className="text-lg font-black text-purple-400">{stats.tier}</p>
          </motion.div>
        </div>
      ) : (
        <p className="text-red-500 text-sm">Failed to load user stats.</p>
      )}
    </motion.div>
  );
};

export default UserStatsClient;
