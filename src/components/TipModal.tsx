
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Send, Zap, X, DollarSign } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Artist } from '../data/mockData';

interface TipModalProps {
  isOpen: boolean;
  onClose: () => void;
  artist: Artist | null;
  onTip: (amount: number, message: string) => void;
}

const TipModal: React.FC<TipModalProps> = ({ isOpen, onClose, artist, onTip }) => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  const handleSubmit = () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast.error('INVALID_CREDITS_AMOUNT', {
        style: { background: '#111', color: '#ff0066' },
      });
      return;
    }
    
    setIsLoading(true);
    toast.loading('TRANSMITTING_DATA...', { 
      style: { background: '#111', color: '#0ff' },
    });

    // Simulate blockchain transaction
    setTimeout(() => {
      setIsLoading(false);
      onTip(parseFloat(amount), message);
      toast.dismiss();
      toast.success('TRANSMISSION_COMPLETE!', { 
        icon: '⚡',
        style: { background: '#111', color: '#0f0' },
      });
      setAmount('');
      setMessage('');
    }, 2000);
  };

  const quickAmounts = [10, 25, 50, 100];

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 50 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 300, damping: 30 } 
    },
    exit: { 
      scale: 0.9, 
      opacity: 0, 
      y: 50, 
      transition: { duration: 0.2 } 
    },
  };

  if (!artist) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl p-6 max-w-md w-full border border-cyan-400/50 shadow-2xl shadow-cyan-500/20 relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 text-gray-500 hover:text-pink-400 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-12 h-12 rounded-lg object-cover border border-cyan-400/30"
                />
                <div>
                  <h3 className="text-xl font-black text-white">{artist.name}</h3>
                  <p className="text-sm text-cyan-400 font-mono">{artist.genre}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-mono text-gray-300 mb-2">CREDIT_AMOUNT</label>
                <div className="relative">
                  <DollarSign size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400" />
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-lg pl-10 pr-4 py-3 text-white font-mono focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                  />
                </div>
                
                <div className="flex space-x-2 mt-2">
                  {quickAmounts.map((quickAmount) => (
                    <button
                      key={quickAmount}
                      onClick={() => setAmount(quickAmount.toString())}
                      className="flex-1 bg-gray-700/50 hover:bg-cyan-600/20 border border-gray-600 hover:border-cyan-400/50 rounded-lg py-2 text-xs font-mono transition-colors"
                    >
                      ${quickAmount}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-mono text-gray-300 mb-2">MESSAGE (OPTIONAL)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white font-mono focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                  placeholder="RESPECT THE CODE! Keep the rebellion alive! ⚡🔥"
                  rows={3}
                  maxLength={200}
                />
                <p className="text-xs text-gray-500 mt-1 font-mono">{message.length}/200</p>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={onClose}
                  className="flex-1 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600 px-4 py-3 rounded-lg transition-colors font-mono"
                >
                  CANCEL
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!amount || isLoading}
                  className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 disabled:opacity-50 px-4 py-3 rounded-lg transition-all duration-300 disabled:cursor-not-allowed font-mono font-black border border-cyan-400/50"
                >
                  {isLoading ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-t-transparent border-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>PROCESSING...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>EXECUTE</span>
                      <Zap size={16} className="animate-pulse text-yellow-400" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TipModal;
