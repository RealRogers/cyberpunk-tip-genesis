
import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Zap, MessageCircle } from 'lucide-react';
import { Donation } from '../data/mockData';
import { staggerItemVariants } from '../types/animations';

interface DonationItemProps {
  donation: Donation;
  index: number;
}

const DonationItem: React.FC<DonationItemProps> = ({ donation, index }) => {
  return (
    <motion.div
      className="group bg-gray-800/30 hover:bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-cyan-400/30 p-4 transition-all duration-300"
      variants={staggerItemVariants}
      custom={index}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-lg flex items-center justify-center text-black font-black text-xs">
            {donation.artist.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-white text-sm">{donation.artist}</p>
            <p className="text-xs text-gray-400 font-mono">{donation.donor}</p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="flex items-center space-x-1 text-green-400">
            <DollarSign size={14} />
            <span className="font-black">${donation.amount}</span>
          </div>
          <div className="flex items-center space-x-1 text-yellow-400 text-xs">
            <Zap size={12} />
            <span>+{donation.stakingPower} SP</span>
          </div>
        </div>
      </div>

      {donation.message && (
        <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700/30">
          <div className="flex items-start space-x-2">
            <MessageCircle size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-300 leading-relaxed">{donation.message}</p>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mt-3">
        <p className="text-xs text-gray-500 font-mono">{donation.timestamp}</p>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

export default DonationItem;
