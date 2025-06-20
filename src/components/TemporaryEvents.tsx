import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Zap, Award, Trophy, ChevronDown, ChevronUp, Users, Gift } from 'lucide-react';
import { TemporaryEvent } from '../types/social';
import { slideUpVariants, staggerContainerVariants, staggerItemVariants } from '../types/animations';

interface TemporaryEventsProps {
  events: TemporaryEvent[];
}

const TemporaryEvents: React.FC<TemporaryEventsProps> = ({ events }) => {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null);
  const activeEvents = events.filter(event => event.isActive);
  const upcomingEvents = events.filter(event => !event.isActive && new Date(event.startDate) > new Date());
  const pastEvents = events.filter(event => !event.isActive && new Date(event.endDate) < new Date());

  const toggleEvent = (eventId: string) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  const getTimeRemaining = (endDate: string) => {
    const now = new Date();
    const end = new Date(endDate);
    const diff = end.getTime() - now.getTime();
    
    if (diff <= 0) return 'Finalizado';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) return `${days}d ${hours}h restantes`;
    if (hours > 0) return `${hours}h ${minutes}m restantes`;
    return `${minutes}m restantes`;
  };

  const renderEventCard = (event: TemporaryEvent, index: number) => {
    const isExpanded = expandedEvent === event.id;
    const timeRemaining = getTimeRemaining(event.endDate);
    const progress = event.missions.length > 0 
      ? (event.missions.filter(m => m.completed).length / event.missions.length) * 100 
      : 0;

    return (
      <motion.div 
        key={event.id}
        variants={staggerItemVariants}
        className={`overflow-hidden rounded-xl border ${event.isActive ? 'border-cyan-400/30' : 'border-gray-700/50'} bg-gradient-to-br from-gray-900/50 via-black/50 to-gray-900/50 backdrop-blur-sm`}
      >
        <button 
          onClick={() => toggleEvent(event.id)}
          className="w-full p-4 text-left flex items-center justify-between focus:outline-none"
        >
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg ${event.isActive ? 'bg-cyan-400/10 border border-cyan-400/30' : 'bg-gray-800/50'}`}>
              {event.isActive ? (
                <Zap className="text-cyan-400" size={20} />
              ) : new Date(event.startDate) > new Date() ? (
                <Clock className="text-yellow-400" size={20} />
              ) : (
                <Trophy className="text-purple-400" size={20} />
              )}
            </div>
            <div>
              <h3 className="font-bold text-white">{event.name}</h3>
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-gray-400">
                  {formatDate(event.startDate)} - {formatDate(event.endDate)}
                </span>
                {event.isActive && (
                  <span className="px-2 py-0.5 bg-cyan-400/10 text-cyan-400 rounded-full text-xs">
                    En curso
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {event.isActive && (
              <div className="text-xs text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                {timeRemaining}
              </div>
            )}
            {isExpanded ? (
              <ChevronUp className="text-gray-400" size={20} />
            ) : (
              <ChevronDown className="text-gray-400" size={20} />
            )}
          </div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 space-y-4">
                <p className="text-sm text-gray-300">{event.description}</p>
                
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Progreso del evento</span>
                    <span className="font-mono">
                      {event.missions.filter(m => m.completed).length}/{event.missions.length} misiones
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-cyan-400 to-pink-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>

                {/* Rewards */}
                <div>
                  <h4 className="text-xs font-bold text-gray-400 mb-2 flex items-center">
                    <Gift size={14} className="mr-1" /> RECOMPENSAS
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {event.rewards.map((reward, idx) => (
                      <div key={idx} className="flex items-center space-x-2 p-2 bg-gray-800/50 rounded-lg">
                        <div className="p-1.5 bg-cyan-400/10 rounded">
                          {reward.type === 'xp' && <Award size={16} className="text-yellow-400" />}
                          {reward.type === 'sp' && <Zap size={16} className="text-cyan-400" />}
                          {reward.type === 'badge' && <Trophy size={16} className="text-purple-400" />}
                          {reward.type === 'nft' && <div className="w-4 h-4 bg-gradient-to-br from-pink-400 to-purple-500 rounded-sm" />}
                        </div>
                        <span className="text-xs font-medium">
                          {reward.amount} {reward.type.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Leaderboard */}
                {event.leaderboard && event.leaderboard.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 mb-2 flex items-center">
                      <Users size={14} className="mr-1" /> CLASIFICACIÓN
                    </h4>
                    <div className="space-y-2">
                      {event.leaderboard.slice(0, 5).map((entry, idx) => (
                        <div key={entry.userId} className="flex items-center justify-between p-2 bg-gray-800/30 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-pink-400 flex items-center justify-center text-xs font-bold text-black">
                              {entry.position}
                            </div>
                            <span className="text-sm font-medium">{entry.username}</span>
                          </div>
                          <span className="text-xs font-mono text-cyan-400">{entry.score} pts</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <motion.div 
      className="space-y-6"
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Zap size={16} className="text-white" />
        </div>
        <h2 className="text-xl font-black text-white">EVENTOS_TEMPORALES</h2>
      </div>

      {activeEvents.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-pink-400 flex items-center">
            <Zap size={14} className="mr-1" /> EN CURSO
          </h3>
          {activeEvents.map((event, index) => renderEventCard(event, index))}
        </div>
      )}

      {upcomingEvents.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-yellow-400 flex items-center">
            <Clock size={14} className="mr-1" /> PRÓXIMAMENTE
          </h3>
          {upcomingEvents.map((event, index) => renderEventCard(event, index))}
        </div>
      )}

      {pastEvents.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-gray-400 flex items-center">
            <Trophy size={14} className="mr-1" /> EVENTOS ANTERIORES
          </h3>
          {pastEvents.map((event, index) => renderEventCard(event, index))}
        </div>
      )}

      {events.length === 0 && (
        <div className="text-center py-8 border-2 border-dashed border-gray-700/50 rounded-xl">
          <Zap size={32} className="mx-auto text-gray-500 mb-2" />
          <p className="text-gray-400">No hay eventos programados en este momento</p>
          <p className="text-xs text-gray-500 mt-1">Vuelve pronto para no perderte las próximas novedades</p>
        </div>
      )}
    </motion.div>
  );
};

export default TemporaryEvents;
