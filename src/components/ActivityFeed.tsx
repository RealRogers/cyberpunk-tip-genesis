
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, DollarSign, MessageCircle, Users, Trophy } from 'lucide-react';
import { ActivityFeedItem } from '../types/social';
import { mockActivityFeed } from '../data/socialData';
import { slideUpVariants, staggerContainerVariants, staggerItemVariants } from '../types/animations';

const ActivityFeed: React.FC = () => {
  const getActivityIcon = (type: ActivityFeedItem['type']) => {
    switch (type) {
      case 'tip':
        return <DollarSign size={14} className="text-green-400" />;
      case 'comment':
        return <MessageCircle size={14} className="text-cyan-400" />;
      case 'follow':
        return <Users size={14} className="text-purple-400" />;
      case 'achievement':
        return <Trophy size={14} className="text-yellow-400" />;
      default:
        return <Activity size={14} className="text-gray-400" />;
    }
  };

  const getActivityText = (item: ActivityFeedItem) => {
    switch (item.type) {
      case 'tip':
        return `envió $${item.amount} a ${item.artistName}`;
      case 'comment':
        return `comentó en el perfil de ${item.artistName}`;
      case 'follow':
        return `ahora sigue a ${item.artistName}`;
      case 'achievement':
        return item.message || 'logró un nuevo hito';
      default:
        return 'realizó una actividad';
    }
  };

  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900/50 via-black/80 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
      variants={slideUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 }}
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-lg flex items-center justify-center">
          <Activity size={16} className="text-black" />
        </div>
        <h2 className="text-xl font-black text-white">FEED_SOCIAL</h2>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
      </div>

      <motion.div 
        className="space-y-3 max-h-96 overflow-y-auto"
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {mockActivityFeed.map((item, index) => (
          <motion.div
            key={item.id}
            variants={staggerItemVariants}
            className="group bg-gray-800/30 hover:bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-purple-400/30 p-4 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-lg flex items-center justify-center text-black font-black text-xs flex-shrink-0">
                {item.username.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  {getActivityIcon(item.type)}
                  <span className="text-sm font-bold text-white truncate">{item.username}</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {getActivityText(item)}
                </p>
                <p className="text-xs text-gray-500 font-mono mt-1">{item.timestamp}</p>
              </div>
              <div className="text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ActivityFeed;
