import React from 'react';
import { motion } from 'framer-motion';
import { Star, Zap, Award, Shield, CheckCircle } from 'lucide-react';
import { Reputation } from '../types/social';
import { slideUpVariants, staggerItemVariants } from '../types/animations';

interface UserReputationProps {
  reputation: Reputation;
}

const UserReputation: React.FC<UserReputationProps> = ({ reputation }) => {
  const { level, xp, xpToNextLevel, title, badge, benefits } = reputation;
  const progress = Math.min(100, (xp / xpToNextLevel) * 100);
  
  const getLevelBadge = (level: number) => {
    if (level < 5) return 'NEOPHYTE';
    if (level < 10) return 'TRAILBLAZER';
    if (level < 20) return 'VISIONARY';
    if (level < 30) return 'PIONEER';
    return 'LEGEND';
  };

  const getLevelColor = (level: number) => {
    if (level < 5) return 'from-gray-400 to-gray-600';
    if (level < 10) return 'from-blue-400 to-blue-600';
    if (level < 20) return 'from-purple-400 to-purple-600';
    if (level < 30) return 'from-pink-400 to-red-600';
    return 'from-yellow-300 to-orange-500';
  };

  return (
    <motion.div 
      className="space-y-6"
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-gradient-to-br from-gray-900/80 via-black/80 to-gray-900/80 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">
              REPUTACIÓN
            </h2>
            <p className="text-sm text-gray-400">Tu nivel de influencia en la red</p>
          </div>
          <div className="text-right">
            <div className={`text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r ${getLevelColor(level)}`}>
              Nv. {level}
            </div>
            <div className="text-xs text-gray-400">{getLevelBadge(level)}</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400">Progreso</span>
            <span className="font-mono">{xp} / {xpToNextLevel} XP</span>
          </div>
          <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden">
            <motion.div 
              className={`h-full bg-gradient-to-r from-cyan-400 to-pink-400`}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
          <div className="text-xs text-gray-500 text-right">
            {xpToNextLevel - xp} XP para el siguiente nivel
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Current Rank */}
        <motion.div 
          variants={staggerItemVariants}
          className="bg-gradient-to-br from-gray-900/50 via-black/50 to-gray-900/50 rounded-xl border border-cyan-400/20 p-4"
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-cyan-400/10 rounded-lg border border-cyan-400/30">
              <Award className="text-cyan-400" size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Rango Actual</h3>
              <p className="text-xs text-cyan-300">{title}</p>
            </div>
          </div>
          <div className="flex justify-center py-2">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-2 border-cyan-400/50 flex items-center justify-center">
                <Shield className="text-cyan-400" size={32} />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-cyan-400 text-black text-xs font-black rounded-full w-6 h-6 flex items-center justify-center border-2 border-black">
                {level}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Next Milestone */}
        <motion.div 
          variants={staggerItemVariants}
          className="bg-gradient-to-br from-gray-900/50 via-black/50 to-gray-900/50 rounded-xl border border-pink-400/20 p-4"
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-pink-400/10 rounded-lg border border-pink-400/30">
              <Zap className="text-pink-400" size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Próximo Hito</h3>
              <p className="text-xs text-pink-300">Nivel {level + 1}</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-gray-300">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="text-green-400 mr-2 mt-0.5 flex-shrink-0" size={14} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UserReputation;
