import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Zap, Star, Lock, CheckCircle, Sparkles } from 'lucide-react';
import { Badge, Achievement } from '../types/social';
import { slideUpVariants, staggerContainerVariants, staggerItemVariants } from '../types/animations';

interface BadgesAndAchievementsProps {
  badges: Badge[];
  achievements: Achievement[];
}

const BadgesAndAchievements: React.FC<BadgesAndAchievementsProps> = ({ badges, achievements }) => {
  const unlockedBadges = badges.filter(badge => badge.unlocked);
  const lockedBadges = badges.filter(badge => !badge.unlocked);
  const completedAchievements = achievements.filter(ach => ach.progress >= ach.target);
  const inProgressAchievements = achievements.filter(ach => ach.progress < ach.target);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-400';
      case 'rare': return 'text-blue-400';
      case 'epic': return 'text-purple-400';
      case 'legendary': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'social': return <Sparkles size={16} />;
      case 'tipping': return <Zap size={16} />;
      case 'engagement': return <Award size={16} />;
      case 'milestone': return <Trophy size={16} />;
      default: return <Star size={16} />;
    }
  };

  return (
    <motion.div 
      className="space-y-8"
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Badges Section */}
      <motion.div variants={slideUpVariants} className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
            <Trophy size={16} className="text-black" />
          </div>
          <h2 className="text-xl font-black text-white">INSIGNIAS</h2>
          <span className="ml-auto text-sm text-gray-400">
            {unlockedBadges.length}/{badges.length} DESBLOQUEADAS
          </span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {badges.map((badge) => (
            <motion.div 
              key={badge.id}
              variants={staggerItemVariants}
              className={`relative group rounded-xl p-3 border-2 ${badge.unlocked ? 'border-cyan-400/50 bg-cyan-400/10' : 'border-gray-700/50 bg-gray-800/30'} transition-all`}
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <div className={`relative ${!badge.unlocked ? 'grayscale' : ''}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getRarityColor(badge.rarity)} bg-gradient-to-br from-gray-900 to-black`}>
                    {badge.icon || <Award size={24} />}
                  </div>
                  {!badge.unlocked && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Lock size={20} className="text-gray-600" />
                    </div>
                  )}
                </div>
                <div>
                  <h3 className={`text-sm font-bold ${badge.unlocked ? 'text-white' : 'text-gray-500'}`}>
                    {badge.name}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {badge.unlocked ? 'Desbloqueado' : 'Bloqueado'}
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 rounded-lg flex items-center justify-center p-2 transition-opacity">
                <p className="text-xs text-center text-gray-300">
                  {badge.unlocked ? badge.description : badge.unlockCondition}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Achievements Section */}
      <motion.div variants={slideUpVariants} className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Award size={16} className="text-black" />
          </div>
          <h2 className="text-xl font-black text-white">LOGROS</h2>
          <span className="ml-auto text-sm text-gray-400">
            {completedAchievements.length}/{achievements.length} COMPLETADOS
          </span>
        </div>
        
        <div className="space-y-3">
          {achievements.map((achievement) => {
            const progress = Math.min(100, (achievement.progress / achievement.target) * 100);
            const isCompleted = achievement.progress >= achievement.target;
            
            return (
              <motion.div 
                key={achievement.id}
                variants={staggerItemVariants}
                className={`relative group rounded-xl p-4 border-2 ${isCompleted ? 'border-green-400/50 bg-green-400/10' : 'border-gray-700/50 bg-gray-800/30'} transition-all`}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${isCompleted ? 'bg-green-500/20' : 'bg-gray-700/50'}`}>
                    {getCategoryIcon(achievement.category)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-sm font-bold ${isCompleted ? 'text-green-400' : 'text-white'}`}>
                        {achievement.name}
                      </h3>
                      <span className="text-xs text-gray-400">
                        {achievement.progress}/{achievement.target}
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 mt-1">
                      {achievement.description}
                    </p>
                    <div className="mt-2 h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${isCompleted ? 'bg-green-400' : 'bg-cyan-400'}`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {isCompleted ? (
                          <span className="text-green-400 flex items-center">
                            <CheckCircle size={14} className="mr-1" /> Completado
                          </span>
                        ) : (
                          `${Math.round(progress)}% completado`
                        )}
                      </span>
                      <span className="text-xs font-mono text-yellow-400">
                        +{achievement.xpReward} XP
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BadgesAndAchievements;
