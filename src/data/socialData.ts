
import { 
  Comment, 
  User, 
  ActivityFeedItem, 
  DailyMission, 
  NFTReward, 
  Season, 
  Badge, 
  Achievement, 
  Reputation, 
  TemporaryEvent 
} from '../types/social';

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
  streakDays: 5,
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop'
};

export const mockBadges: Badge[] = [
  {
    id: 'b1',
    name: 'Primeros Pasos',
    description: 'Completa tu primer misión diaria',
    icon: '🎯',
    rarity: 'common',
    unlocked: true,
    unlockDate: '2023-05-15T14:30:00Z',
    unlockCondition: 'Completa una misión diaria',
    xpReward: 100
  },
  {
    id: 'b2',
    name: 'Mecenas Digital',
    description: 'Envía tu primer tip a un artista',
    icon: '💎',
    rarity: 'rare',
    unlocked: true,
    unlockDate: '2023-05-16T09:15:00Z',
    unlockCondition: 'Envía un tip a un artista',
    xpReward: 250
  },
  {
    id: 'b3',
    name: 'Coleccionista',
    description: 'Consigue 5 NFTs diferentes',
    icon: '🎨',
    rarity: 'epic',
    unlocked: false,
    unlockCondition: 'Consigue 5 NFTs diferentes',
    xpReward: 500
  },
  {
    id: 'b4',
    name: 'Leyenda de la Red',
    description: 'Alcanza el nivel 50 de reputación',
    icon: '🏆',
    rarity: 'legendary',
    unlocked: false,
    unlockCondition: 'Alcanza el nivel 50',
    xpReward: 1000
  }
];

export const mockAchievements: Achievement[] = [
  {
    id: 'a1',
    name: 'Primeros Pasos',
    description: 'Completa 5 misiones diarias',
    icon: '🚀',
    rarity: 'common',
    unlocked: true,
    unlockDate: '2023-05-20T11:20:00Z',
    unlockCondition: 'Completa 5 misiones diarias',
    xpReward: 100,
    category: 'milestone',
    progress: 5,
    target: 5,
    rewardType: 'xp'
  },
  {
    id: 'a2',
    name: 'Mecenas',
    description: 'Envía 10 tips a artistas',
    icon: '💎',
    rarity: 'rare',
    unlocked: false,
    unlockCondition: 'Envía 10 tips',
    xpReward: 250,
    category: 'tipping',
    progress: 3,
    target: 10,
    rewardType: 'xp'
  },
  {
    id: 'a3',
    name: 'Coleccionista de NFTs',
    description: 'Consigue 10 NFTs diferentes',
    icon: '🎨',
    rarity: 'epic',
    unlocked: false,
    unlockCondition: 'Consigue 10 NFTs',
    xpReward: 500,
    category: 'milestone',
    progress: 2,
    target: 10,
    rewardType: 'xp'
  },
  {
    id: 'a4',
    name: 'Influencer Digital',
    description: 'Consigue 100 seguidores',
    icon: '🌟',
    rarity: 'legendary',
    unlocked: false,
    unlockCondition: 'Consigue 100 seguidores',
    xpReward: 1000,
    category: 'social',
    progress: 42,
    target: 100,
    rewardType: 'xp'
  }
];

export const mockReputation: Reputation = {
  level: 12,
  xp: 1250,
  xpToNextLevel: 2000,
  title: 'Explorador Digital',
  badge: '👾',
  benefits: [
    'Acceso a canales exclusivos',
    'Descuento en comisiones del 10%',
    'NFT exclusivo al alcanzar el siguiente nivel'
  ]
};

export const mockTemporaryEvents: TemporaryEvent[] = [
  {
    id: 'event1',
    name: 'Festival Synthwave 2023',
    description: '¡El mayor evento de música synthwave del año! Participa en misiones especiales y gana recompensas exclusivas.',
    startDate: '2023-06-01T00:00:00Z',
    endDate: '2023-06-30T23:59:59Z',
    isActive: true,
    rewards: [
      { type: 'xp', amount: 500 },
      { type: 'badge', amount: 1, item: { name: 'Fan del Synthwave 2023' } },
      { type: 'nft', amount: 1, item: { name: 'NFT Exclusivo Synthwave' } }
    ],
    missions: [
      {
        id: 'm1',
        title: 'Primer Día',
        description: 'Inicia sesión durante el evento',
        type: 'custom',
        target: 1,
        progress: 1,
        reward: 50,
        completed: true
      },
      {
        id: 'm2',
        title: 'Mecenas del Synthwave',
        description: 'Envía tips a 3 artistas diferentes',
        type: 'tip',
        target: 3,
        progress: 1,
        reward: 150,
        completed: false
      },
      {
        id: 'm3',
        title: 'Comunidad Activa',
        description: 'Comenta en 5 publicaciones diferentes',
        type: 'comment',
        target: 5,
        progress: 2,
        reward: 200,
        completed: false
      }
    ],
    leaderboard: [
      { userId: 'user1', username: 'SynthMaster', avatar: 'https://i.pravatar.cc/40?img=1', score: 2450, position: 1 },
      { userId: 'user2', username: 'NeonRider', avatar: 'https://i.pravatar.cc/40?img=2', score: 1980, position: 2 },
      { userId: 'user3', username: 'CyberPunk', avatar: 'https://i.pravatar.cc/40?img=3', score: 1750, position: 3 },
      { userId: 'user4', username: 'DigitalDream', score: 1620, position: 4 },
      { userId: 'user5', username: 'RetroWave', avatar: 'https://i.pravatar.cc/40?img=4', score: 1480, position: 5 }
    ]
  },
  {
    id: 'event2',
    name: 'Carrera de NFTs',
    description: '¡Compite por los NFTs más raros y exclusivos!',
    startDate: '2023-07-15T00:00:00Z',
    endDate: '2023-07-31T23:59:59Z',
    isActive: false,
    rewards: [
      { type: 'xp', amount: 300 },
      { type: 'nft', amount: 1, item: { name: 'NFT de Carrera Exclusivo' } }
    ],
    missions: [
      {
        id: 'm4',
        title: 'Primeros Pasos',
        description: 'Completa tu primer misión',
        type: 'custom',
        target: 1,
        progress: 0,
        reward: 50,
        completed: false
      }
    ]
  }
];

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
