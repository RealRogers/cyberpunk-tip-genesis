
export interface Comment {
  id: number;
  artistId: number;
  userId: string;
  username: string;
  message: string;
  timestamp: string;
  likes: number;
  avatar?: string;
}

export interface User {
  id: string;
  username: string;
  avatar?: string;
  stakingPower: number;
  reputation: number;
  tier: UserTier;
  following: number[];
  followers: string[];
  totalTipsGiven: number;
  totalCommentsPosted: number;
  nftRewards: NFTReward[];
  dailyMissionsCompleted: number;
  streakDays: number;
}

export interface ActivityFeedItem {
  id: number;
  type: 'tip' | 'comment' | 'follow' | 'achievement' | 'mission';
  userId: string;
  username: string;
  artistId?: number;
  artistName?: string;
  amount?: string;
  message?: string;
  timestamp: string;
  icon?: string;
}

export interface DailyMission {
  id: number;
  title: string;
  description: string;
  reward: number;
  type: 'tip' | 'comment' | 'follow' | 'login';
  target: number;
  progress: number;
  completed: boolean;
  icon: string;
}

export interface NFTReward {
  id: number;
  name: string;
  description: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  image: string;
  earnedAt: string;
}

export interface Season {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  rewards: NFTReward[];
  tipMultiplier: number;
  isActive: boolean;
}

export type UserTier = 'CYBER_NOVICE' | 'DIGITAL_REBEL' | 'CYBER_PATRON' | 'NEURAL_LEGEND';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlocked: boolean;
  unlockDate?: string;
  unlockCondition: string;
  xpReward: number;
}

export interface Achievement extends Badge {
  category: 'social' | 'tipping' | 'engagement' | 'milestone';
  progress: number;
  target: number;
  rewardType: 'xp' | 'sp' | 'badge' | 'nft';
}

export interface Reputation {
  level: number;
  xp: number;
  xpToNextLevel: number;
  title: string;
  badge: string;
  benefits: string[];
}

export interface TemporaryEvent {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
  rewards: {
    type: 'xp' | 'sp' | 'badge' | 'nft';
    amount: number;
    item?: any;
  }[];
  missions: {
    id: string;
    title: string;
    description: string;
    type: 'tip' | 'comment' | 'social' | 'custom';
    target: number;
    progress: number;
    reward: number;
    completed: boolean;
  }[];
  leaderboard?: {
    userId: string;
    username: string;
    avatar?: string;
    score: number;
    position: number;
  }[];
}
