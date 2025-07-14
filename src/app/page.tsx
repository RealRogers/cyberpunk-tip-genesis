//@ts-nocheck
"use client"
import React, { useState,useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Plus } from 'lucide-react';

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
import ContentModal from '../components/ContentModal';
import Feed from "../components/Feed";
import { useUser } from '../app/providers/UserProvider';

const Index = () => {
  const [isContentModalOpen, setIsContentModalOpen] = useState(false);
  const {
    user,
    loading,
    isAuthenticated,
    isRegistered,
    connectWallet,
    disconnectWallet,
    refreshUser,
    redirectToRegistration,
    walletAddress
  } = useUser();

  const [artists, setArtists] = useState<Artist[]>(artistsData);
  const [donations, setDonations] = useState<Donation[]>(donationsData);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [userStakingPower, setUserStakingPower] = useState(275);

  console.log("user",user)



  const handleOpenModal = (artist: Artist) => {
    if (!isAuthenticated) {
      toast.error('Please connect your wallet first', {
        style: { background: '#111', color: '#f00' },
      });
      return;
    }
    
    if (!isRegistered) {
      toast.error('Please complete registration first', {
        style: { background: '#111', color: '#f00' },
      });
      router.push('/users/registration');
      return;
    }
    
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArtist(null);
  };

  const handleTip = async (amount: number, message: string) => {
    if (!selectedArtist || !user?.wallet) return;

    try {
      // Apply season multiplier
      const seasonMultiplier = 1.5;
      const bonusStakingPower = Math.floor(amount * (seasonMultiplier - 1));

      const newDonation: Donation = {
        id: donations.length + 1,
        artist: selectedArtist.name,
        donor: `${user.wallet.slice(0, 6)}...${user.wallet.slice(-4)}`,
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
    } catch (error) {
      console.error('Tip error:', error);
      toast.error('Transaction failed. Please try again.', {
        style: { background: '#111', color: '#f00' },
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
  };

  if (loading ) {
    return (
      <div className="min-h-screen bg-black text-white font-mono flex items-center justify-center">
        <div className="text-center">
          <div className="animate-pulse text-cyan-400 text-xl">loading metaverse..</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden relative">
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <BackgroundFX />
      
      <Header 
        walletConnected={isAuthenticated} 
        glitchEffect={glitchEffect}
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
        userStakingPower={user?.stakingPower}
        walletAddress={walletAddress}
        erc20Contracts={[{contractAddress:"0x82B9e52b26A2954E113F94Ff26647754d5a4247D",symbol:"MXNB",decimal:6}]}
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
              <ActivityFeed />
              <Feed/>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <Leaderboard artists={artists} />
            {isAuthenticated && isRegistered && <UserStats wallet={walletAddress} />}
            {isAuthenticated && isRegistered && <DailyMissions />}
          </div>
        </motion.div>
      </main>

      <TipModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        artist={selectedArtist}
        onTip={handleTip}
        walletConnected={isAuthenticated && isRegistered}
      />
      
      {isAuthenticated && isRegistered && (
        <motion.button
          onClick={() => setIsContentModalOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-br from-cyan-400/80 to-pink-400/80 shadow-lg hover:shadow-cyan-400/30 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="h-6 w-6 text-white" />
        </motion.button>
      )}

      <ContentModal 
        isOpen={isContentModalOpen} 
        onClose={() => setIsContentModalOpen(false)} 
      />
    </div>
  );
};

export default Index;