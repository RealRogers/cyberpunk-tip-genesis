import React from 'react';
import { motion } from 'framer-motion';
import { User, Badge, Achievement, Reputation, TemporaryEvent } from '../types/social';
import { mockUser, mockBadges, mockAchievements, mockReputation, mockTemporaryEvents } from '../data/socialData';
import BadgesAndAchievements from '../components/BadgesAndAchievements';
import UserReputation from '../components/UserReputation';
import TemporaryEvents from '../components/TemporaryEvents';
import { slideUpVariants, staggerContainerVariants } from '../types/animations';

const ProfilePage: React.FC = () => {
  // En un caso real, estos datos vendrían de un estado global o de una API
  const user: User = mockUser;
  const badges: Badge[] = mockBadges;
  const achievements: Achievement[] = mockAchievements;
  const reputation: Reputation = mockReputation;
  const events: TemporaryEvent[] = mockTemporaryEvents;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-4 md:p-8">
      <motion.div
        className="max-w-6xl mx-auto space-y-8"
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header del Perfil */}
        <motion.div 
          className="bg-gradient-to-r from-gray-900/80 via-black/80 to-gray-900/80 rounded-2xl border border-gray-700/50 p-6 backdrop-blur-sm"
          variants={slideUpVariants}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
            {/* Avatar */}
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-cyan-400/50">
                <img 
                  src={user.avatar || 'https://via.placeholder.com/150'} 
                  alt={user.username} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-400 to-pink-500 text-black text-xs font-black px-2 py-1 rounded-full">
                Nv. {reputation.level}
              </div>
            </motion.div>

            {/* Información del Usuario */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between space-y-2 md:space-y-0">
                <div>
                  <h1 className="text-2xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">
                    {user.username}
                  </h1>
                  <p className="text-sm text-gray-400">@{user.username.toLowerCase().replace(/\s+/g, '')}</p>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs font-bold rounded-full border border-cyan-400/30">
                    {user.tier.split('_').join(' ')}
                  </div>
                  <div className="px-3 py-1 bg-pink-400/10 text-pink-400 text-xs font-bold rounded-full border border-pink-400/30">
                    {user.stakingPower} SP
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700/50">
                  <div className="text-gray-400">Seguidores</div>
                  <div className="font-bold">{user.followers?.length || 0}</div>
                </div>
                <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700/50">
                  <div className="text-gray-400">Siguiendo</div>
                  <div className="font-bold">{user.following?.length || 0}</div>
                </div>
                <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700/50">
                  <div className="text-gray-400">Tips</div>
                  <div className="font-bold">{user.totalTipsGiven}</div>
                </div>
                <div className="bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700/50">
                  <div className="text-gray-400">Racha</div>
                  <div className="font-bold">{user.streakDays} días</div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Sección de Reputación */}
        <UserReputation reputation={reputation} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sección de Insignias y Logros */}
          <div className="lg:col-span-2">
            <BadgesAndAchievements 
              badges={badges}
              achievements={achievements}
            />
          </div>

          {/* Sección de Eventos */}
          <div>
            <TemporaryEvents events={events} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
