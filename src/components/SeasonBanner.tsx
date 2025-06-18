
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Gift, Zap } from 'lucide-react';
import { mockCurrentSeason } from '../data/socialData';
import { slideUpVariants } from '../types/animations';

const SeasonBanner: React.FC = () => {
  const season = mockCurrentSeason;
  const daysLeft = Math.ceil((new Date(season.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <motion.div 
      className="bg-gradient-to-r from-purple-900/80 via-pink-900/80 to-orange-900/80 rounded-2xl border border-purple-400/50 p-6 backdrop-blur-sm relative overflow-hidden"
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 animate-pulse" />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
              <Gift size={20} className="text-black" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">{season.name}</h2>
              <p className="text-sm text-purple-200">{season.description}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-1 text-orange-400 mb-1">
              <Calendar size={16} />
              <span className="text-sm font-mono">{daysLeft} DÍAS</span>
            </div>
            <span className="text-xs text-gray-300">RESTANTES</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div 
            className="bg-black/30 rounded-xl p-4 border border-purple-400/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <Zap size={16} className="text-yellow-400" />
              <span className="text-sm text-purple-200 font-mono">MULTIPLICADOR_ACTIVO</span>
            </div>
            <p className="text-3xl font-black text-yellow-400">{season.tipMultiplier}x</p>
            <p className="text-xs text-gray-400">en todas las propinas</p>
          </motion.div>

          <motion.div 
            className="bg-black/30 rounded-xl p-4 border border-pink-400/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center space-x-2 mb-2">
              <Gift size={16} className="text-pink-400" />
              <span className="text-sm text-pink-200 font-mono">NFT_REWARDS</span>
            </div>
            <p className="text-3xl font-black text-pink-400">{season.rewards.length}</p>
            <p className="text-xs text-gray-400">disponibles este evento</p>
          </motion.div>
        </div>

        <motion.div 
          className="mt-4 p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-400/20"
          animate={{ 
            boxShadow: ["0 0 20px rgba(168, 85, 247, 0.3)", "0 0 30px rgba(236, 72, 153, 0.3)", "0 0 20px rgba(168, 85, 247, 0.3)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <p className="text-center text-sm text-white">
            🎉 <span className="font-black">EVENTO ESPECIAL ACTIVO</span> - ¡Todas las propinas otorgan {season.tipMultiplier}x Staking Power! 🎉
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SeasonBanner;
