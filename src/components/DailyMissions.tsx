
import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle, Circle } from 'lucide-react';
import { DailyMission } from '../types/social';
import { mockDailyMissions } from '../data/socialData';
import { slideUpVariants, staggerContainerVariants, staggerItemVariants } from '../types/animations';

const DailyMissions: React.FC = () => {
  const completedMissions = mockDailyMissions.filter(mission => mission.completed).length;
  const totalRewards = mockDailyMissions.reduce((sum, mission) => sum + (mission.completed ? mission.reward : 0), 0);

  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900/50 via-black/80 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.7 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg flex items-center justify-center">
            <Target size={16} className="text-black" />
          </div>
          <h2 className="text-xl font-black text-white">MISIONES_DIARIAS</h2>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">COMPLETADAS</p>
          <p className="text-lg font-black text-orange-400">{completedMissions}/{mockDailyMissions.length}</p>
        </div>
      </div>

      <div className="bg-gray-800/30 rounded-xl p-4 mb-4 border border-gray-700/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-300 font-mono">RECOMPENSAS_HOY</span>
          </div>
          <div className="flex items-center space-x-1 text-yellow-400">
            <span className="text-lg font-black">+{totalRewards} SP</span>
          </div>
        </div>
      </div>

      <motion.div 
        className="space-y-3"
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {mockDailyMissions.map((mission, index) => (
          <motion.div
            key={mission.id}
            variants={staggerItemVariants}
            className={`group rounded-xl border p-4 transition-all duration-300 ${
              mission.completed 
                ? 'bg-green-900/20 border-green-400/30 hover:border-green-400/50' 
                : 'bg-gray-800/30 border-gray-700/30 hover:border-orange-400/30 hover:bg-gray-800/50'
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start space-x-3">
              <div className="text-2xl flex-shrink-0 mt-1">{mission.icon}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-bold text-white text-sm">{mission.title}</h3>
                  {mission.completed ? (
                    <CheckCircle size={16} className="text-green-400" />
                  ) : (
                    <Circle size={16} className="text-gray-400" />
                  )}
                </div>
                <p className="text-xs text-gray-300 mb-2">{mission.description}</p>
                
                {!mission.completed && (
                  <div className="mb-2">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                      <span>PROGRESO</span>
                      <span>{mission.progress}/{mission.target}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(mission.progress / mission.target) * 100}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <span className="text-xs">REWARD:</span>
                    <span className="font-black text-sm">+{mission.reward} SP</span>
                  </div>
                  {mission.completed && (
                    <span className="text-xs text-green-400 font-mono">COMPLETADA ✓</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default DailyMissions;
