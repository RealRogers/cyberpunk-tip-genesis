export interface Artist {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
  stats?: {
    followers: number;
    likes: number;
    artworks: number;
  };
  socialLinks?: {
    twitter?: string;
    instagram?: string;
    website?: string;
  };
}

export interface Comment {
  id: string;
  author: string;
  authorAvatar?: string;
  content: string;
  timestamp: string;
  likes: number;
  dislikes: number;
  userReaction?: 'like' | 'dislike' | null;
  artistId: string;
}
