
import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

import { artistsData, donationsData, Artist, Donation } from '../data/mockData';
import Header from '../components/Header';
import ArtistCard from '../components/ArtistCard';
import DonationFeed from '../components/DonationFeed';
import Leaderboard from '../components/Leaderboard';
import UserStats from '../components/UserStats';
import TipModal from '../components/TipModal';
import BackgroundFX from '../components/BackgroundFX';
import SeasonBanner from '../components/SeasonBanner';
import ActivityFeed from '../components/ActivityFeed';
import DailyMissions from '../components/DailyMissions';
import CommentSection from '../components/CommentSection';

const Index = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [userStakingPower, setUserStakingPower] = useState(275);
  
  const [artists, setArtists] = useState<Artist[]>(artistsData);
  const [donations, setDonations] = useState<Donation[]>(donationsData);
  
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const connectWallet = () => {
    setGlitchEffect(true);
    toast.loading('Engaging Neural Link...', {
      style: { background: '#111', color: '#0ff' },
    });
    setTimeout(() => {
      setWalletConnected(true);
      setGlitchEffect(false);
      toast.dismiss();
      toast.success('CONNECTION_ESTABLISHED', {
        icon: '✅',
        style: { background: '#111', color: '#0f0' },
      });
    }, 1500);
  };

  const handleOpenModal = (artist: Artist) => {
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArtist(null);
  };

  const handleTip = (amount: number, message: string) => {
    if (!selectedArtist) return;

    // Apply season multiplier
    const seasonMultiplier = 1.5;
    const bonusStakingPower = Math.floor(amount * (seasonMultiplier - 1));

    const newDonation: Donation = {
      id: donations.length + 1,
      artist: selectedArtist.name,
      donor: '0x5555...aaaa',
      amount: amount.toString(),
      message: message || 'RESPECT THE CODE! Keep the rebellion alive! ⚡🔥',
      timestamp: 'JUST NOW',
      stakingPower: amount + bonusStakingPower
    };
    
    // Update donations feed
    setDonations(prev => [newDonation, ...prev]);
    
    // Update user staking power with season bonus
    setUserStakingPower(prev => prev + amount + bonusStakingPower);
    
    // Update artist stats
    setArtists(prev => prev.map(artist => 
      artist.id === selectedArtist.id 
        ? { ...artist, totalTips: artist.totalTips + 1, stakingPower: artist.stakingPower + amount + bonusStakingPower }
        : artist
    ));

    // Show season bonus notification
    if (bonusStakingPower > 0) {
      toast.success(`¡BONUS TEMPORAL! +${bonusStakingPower} SP extra por el evento`, {
        icon: '🎉',
        style: { background: '#111', color: '#f59e0b' },
        duration: 4000
      });
    }
    
    handleCloseModal();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden relative">
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <BackgroundFX />
      
      <Header 
        walletConnected={walletConnected} 
        glitchEffect={glitchEffect}
        connectWallet={connectWallet}
        userStakingPower={userStakingPower}
      />
      
      <main className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* Season Banner */}
        <div className="mb-8">
          <SeasonBanner />
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Artist Spotlight Section */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-center mb-8">
                <motion.h1 
                  className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  NEURAL_TIP_PROTOCOL
                </motion.h1>
                <p className="text-xl text-gray-300 font-mono">
                  SUPPORT_THE_DIGITAL_REBELLION • EMPOWER_CYBER_ARTISTS
                </p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-1 gap-6">
                {artists.map((artist, index) => (
                  <ArtistCard
                    key={artist.id}
                    artist={artist}
                    onTip={handleOpenModal}
                    walletConnected={walletConnected}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            <DonationFeed donations={donations} />
            <ActivityFeed />
            <div className="mt-12">
              <CommentSection 
                comments={[]}
                onAddComment={(content) => console.log('New comment:', content)}
                onReact={(commentId, reaction) => console.log('Reaction:', commentId, reaction)}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Leaderboard artists={artists} />
            {walletConnected && <UserStats userStakingPower={userStakingPower} />}
            <DailyMissions />
          </div>
        </motion.div>
      </main>

      <TipModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        artist={selectedArtist}
        onTip={handleTip}
      />
    </div>
  );
};

export default Index;
