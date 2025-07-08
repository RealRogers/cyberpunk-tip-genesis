
"use client"

import { motion } from 'framer-motion';
import ArtistRegistrationForm from '@/components/forms/ArtistRegistrationForm';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
      {/* Cyberpunk Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_theme(colors.cyan.500/0.1)_0%,_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_theme(colors.pink.500/0.1)_0%,_transparent_50%)]"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-mono font-bold mb-4 bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-wider">
            REGISTER_ARTIST_NODE
          </h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 font-mono mb-2"
          >
            Establish your neural signature on the network
          </motion.p>
          
          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent max-w-md mx-auto mb-8"
          ></motion.div>
          
          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-gray-400 font-mono text-sm uppercase tracking-wider"
          >
            Status: <span className="text-green-400">NEURAL_LINK_ACTIVE</span>
          </motion.p>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <ArtistRegistrationForm />
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 font-mono text-xs uppercase tracking-wider">
            Cyberpunk Tip Genesis • Neural Network Registration Protocol v2.077
          </p>
        </motion.div>
      </div>

      {/* Animated Corner Elements */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-cyan-500"
      ></motion.div>
      
      <motion.div
        animate={{ 
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-pink-500"
      ></motion.div>
    </div>
  );
}
