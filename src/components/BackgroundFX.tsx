
import React from 'react';
import { motion } from 'framer-motion';

const BackgroundFX = () => {
  return (
    <>
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-pink-500/20" />
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Neon Lines */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 bg-gradient-to-b from-cyan-400 to-transparent opacity-30"
            style={{
              height: '200px',
              left: `${20 + i * 20}%`,
              top: '-200px',
            }}
            animate={{
              y: ['0vh', '120vh'],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Glitch Effect Overlay */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-20"
        animate={{
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent transform skew-x-12" />
      </motion.div>
    </>
  );
};

export default BackgroundFX;
