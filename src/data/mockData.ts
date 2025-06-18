
export interface Artist {
  id: number;
  name: string;
  bio: string;
  image: string;
  stakingPower: number;
  totalTips: number;
  rank: number;
  genre: string;
}

export interface Donation {
  id: number;
  artist: string;
  donor: string;
  amount: string;
  message: string;
  timestamp: string;
  stakingPower: number;
}

export const artistsData: Artist[] = [
  { 
    id: 1, 
    name: 'NeonSynth', 
    bio: 'Cyberpunk synthwave producer crafting dystopian soundscapes.', 
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop', 
    stakingPower: 2350, 
    totalTips: 156, 
    rank: 1, 
    genre: 'SYNTHWAVE' 
  },
  { 
    id: 2, 
    name: 'CyberVixen', 
    bio: 'Digital sorceress creating AI-enhanced NFT art for the rebellion.', 
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', 
    stakingPower: 1890, 
    totalTips: 134, 
    rank: 2, 
    genre: 'AI ART' 
  },
  { 
    id: 3, 
    name: 'ByteBeast', 
    bio: 'Underground DJ hacking reality with bass-heavy compositions.', 
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop', 
    stakingPower: 1675, 
    totalTips: 98, 
    rank: 3, 
    genre: 'NEUROFUNK' 
  },
];

export const donationsData: Donation[] = [
  { 
    id: 1, 
    artist: 'NeonSynth', 
    donor: '0x1234...5678', 
    amount: '50', 
    message: 'SICK BEATS! Your synth work is LEGENDARY! ⚡', 
    timestamp: '2 min ago', 
    stakingPower: 50 
  },
  { 
    id: 2, 
    artist: 'CyberVixen', 
    donor: '0xabcd...efgh', 
    amount: '25', 
    message: 'Digital art revolution starts here 🔥', 
    timestamp: '5 min ago', 
    stakingPower: 25 
  },
  { 
    id: 3, 
    artist: 'ByteBeast', 
    donor: '0x9999...1111', 
    amount: '100', 
    message: 'MASSIVE DROP! Keep breaking the matrix! 💀⚡', 
    timestamp: '8 min ago', 
    stakingPower: 100 
  },
];
