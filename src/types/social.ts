
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
