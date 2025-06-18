
import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Zap, Shield } from 'lucide-react';

interface HeaderProps {
  walletConnected: boolean;
  glitchEffect: boolean;
  connectWallet: () => void;
  userStakingPower: number;
}

const Header: React.FC<HeaderProps> = ({ walletConnected, glitchEffect, connectWallet, userStakingPower }) => {
  return (
    <motion.header 
      className="border-b border-cyan-400/30 bg-black/50 backdrop-blur-md sticky top-0 z-40"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-4"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-lg flex items-center justify-center">
            <Zap className="text-black" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              NEURAL_TIP
            </h1>
            <p className="text-xs text-gray-400 font-mono">ARTIST_SUPPORT_PROTOCOL</p>
          </div>
        </motion.div>

        <div className="flex items-center space-x-6">
          {walletConnected && (
            <motion.div 
              className="flex items-center space-x-2 bg-gray-900/50 px-4 py-2 rounded-lg border border-cyan-400/30"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Shield size={16} className="text-green-400" />
              <span className="text-sm font-mono text-green-400">{userStakingPower} SP</span>
            </motion.div>
          )}

          <motion.button
            onClick={connectWallet}
            disabled={walletConnected}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-mono font-bold transition-all duration-300 ${
              walletConnected
                ? 'bg-green-600/20 text-green-400 border border-green-400/50'
                : 'bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-700 hover:to-pink-700 text-white border border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/25'
            } ${glitchEffect ? 'animate-pulse' : ''}`}
            whileHover={!walletConnected ? { scale: 1.05 } : {}}
            whileTap={!walletConnected ? { scale: 0.95 } : {}}
          >
            <Wallet size={16} />
            <span>{walletConnected ? 'NEURAL_LINK_ACTIVE' : 'CONNECT_WALLET'}</span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
