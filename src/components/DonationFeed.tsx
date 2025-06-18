
import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { Donation } from '../data/mockData';
import DonationItem from './DonationItem';

interface DonationFeedProps {
  donations: Donation[];
}

const DonationFeed: React.FC<DonationFeedProps> = ({ donations }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-900/50 via-black/80 to-gray-900/50 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-lg flex items-center justify-center">
          <Activity size={16} className="text-black" />
        </div>
        <h2 className="text-xl font-black text-white">LIVE_FEED</h2>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      </div>

      <motion.div 
        className="space-y-4 max-h-96 overflow-y-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {donations.map((donation, index) => (
          <DonationItem key={donation.id} donation={donation} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default DonationFeed;
