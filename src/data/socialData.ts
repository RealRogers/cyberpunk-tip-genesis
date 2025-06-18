
import { Comment, User, ActivityFeedItem, DailyMission, NFTReward, Season } from '../types/social';

export const mockComments: Comment[] = [
  {
    id: 1,
    artistId: 1,
    userId: '0x1234...5678',
    username: 'CyberFan01',
    message: '¡Increíbles beats! Tu trabajo está revolucionando la escena synthwave 🔥',
    timestamp: '5 min ago',
    likes: 12,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop'
  },
  {
    id: 2,
    artistId: 1,
    userId: '0xabcd...efgh',
    username: 'NeuralDancer',
    message: 'Esta track me transporta al futuro. ¡Sigue así!',
    timestamp: '12 min ago',
    likes: 8,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b95b04e1?w=40&h=40&fit=crop'
  },
  {
    id: 3,
    artistId: 2,
    userId: '0x9999...1111',
    username: 'DigitalRebel',
    message: 'Tu arte AI está redefiniendo la creatividad digital 🎨✨',
    timestamp: '1 hour ago',
    likes: 15
  }
];

export const mockUser: User = {
  id: '0x5555...aaaa',
  username: 'CyberPatron',
  stakingPower: 275,
  reputation: 1250,
  tier: 'CYBER_PATRON',
  following: [1, 2],
  followers: [],
  totalTipsGiven: 8,
  totalCommentsPosted: 3,
  nftRewards: [],
  dailyMissionsCompleted: 2,
  streakDays: 5
};

export const mockActivityFeed: ActivityFeedItem[] = [
  {
    id: 1,
    type: 'tip',
    userId: '0x1234...5678',
    username: 'CyberFan01',
    artistId: 1,
    artistName: 'NeonSynth',
    amount: '50',
    timestamp: '2 min ago',
    icon: '💰'
  },
  {
    id: 2,
    type: 'follow',
    userId: '0xabcd...efgh',
    username: 'NeuralDancer',
    artistId: 2,
    artistName: 'CyberVixen',
    timestamp: '8 min ago',
    icon: '👥'
  },
  {
    id: 3,
    type: 'comment',
    userId: '0x9999...1111',
    username: 'DigitalRebel',
    artistId: 1,
    artistName: 'NeonSynth',
    message: 'Amazing work!',
    timestamp: '15 min ago',
    icon: '💬'
  },
  {
    id: 4,
    type: 'achievement',
    userId: '0x5555...aaaa',
    username: 'CyberPatron',
    message: 'Achieved CYBER_PATRON tier!',
    timestamp: '1 hour ago',
    icon: '🏆'
  }
];

export const mockDailyMissions: DailyMission[] = [
  {
    id: 1,
    title: 'Apoya la Revolución',
    description: 'Envía 3 propinas a diferentes artistas',
    reward: 50,
    type: 'tip',
    target: 3,
    progress: 2,
    completed: false,
    icon: '💸'
  },
  {
    id: 2,
    title: 'Construye Comunidad',
    description: 'Comenta en 2 perfiles de artistas',
    reward: 25,
    type: 'comment',
    target: 2,
    progress: 2,
    completed: true,
    icon: '💬'
  },
  {
    id: 3,
    title: 'Expande tu Círculo',
    description: 'Sigue a 1 nuevo artista',
    reward: 30,
    type: 'follow',
    target: 1,
    progress: 0,
    completed: false,
    icon: '👥'
  }
];

export const mockCurrentSeason: Season = {
  id: 1,
  name: 'CYBER_REBELLION_S1',
  description: 'La primera temporada de la revolución digital',
  startDate: '2024-01-01',
  endDate: '2024-03-31',
  rewards: [],
  tipMultiplier: 1.5,
  isActive: true
};
