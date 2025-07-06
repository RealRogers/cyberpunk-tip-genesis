//@ts-nocheck
"use client"
import { useState, useEffect, useCallback } from 'react';
import { FaTwitter, FaInstagram, FaGlobe, FaHeart, FaRegHeart } from 'react-icons/fa';
import { CommentSection } from '../../components/CommentSection';
import { Artist, Comment } from '../../types/artist';

const ArtistProfilePage = ({ params }: { params: { wallet: string } }) => {
  const walletAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
  const [artist, setArtist] = useState<Artist | null>(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);

  // Cargar datos del artista
  const loadArtistData = useCallback(async (wallet: string) => {
    if (!wallet) return;
    
    setIsLoading(true);
    try {
      // Fetch artist data from API
      const artistResponse = await fetch(`/api/artist?wallet=${wallet}`);
      if (!artistResponse.ok) {
        throw new Error('Failed to load artist data');
      }
      
      const artistData = await artistResponse.json();
      
      // Fetch user data if needed
      const userResponse = await fetch(`/api/users?wallet=${wallet}`);
      const userData = userResponse.ok ? await userResponse.json() : {};
      
      // Merge data into artist profile
      const mergedArtist: Artist = {
        id: wallet,
        name: artistData.name || userData.username || `Artist ${wallet.slice(0, 6)}`,
        avatar: artistData.image || userData.avatar || 'https://randomuser.me/api/portraits/lego/1.jpg',
        bio: artistData.bio || 'Digital artist creating unique artwork on the blockchain.',
        stats: {
          followers: artistData.followers || 0,
          likes: artistData.likes || 0,
          artworks: artistData.artworks || 0,
        },
        socialLinks: {
          twitter: artistData.twitter || '',
          instagram: artistData.instagram || '',
          website: artistData.website || '',
        },
      };
      
      setArtist(mergedArtist);
      
      // Load comments
      const commentsResponse = await fetch(`/api/comments?artistId=${wallet}`);
      if (commentsResponse.ok) {
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      }
    } catch (error) {
      console.error('Error loading artist data:', error);

    } finally {
      setIsLoading(false);
    }
  }, []);

  // Load data when wallet address changes
  useEffect(() => {
    if (walletAddress) {
      loadArtistData(walletAddress);
    }
  }, [walletAddress, loadArtistData]);

  const handleFollow = async () => {
    try {
      const response = await fetch('/api/follow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          artistId: walletAddress,
          action: isFollowing ? 'unfollow' : 'follow'
        }),
      });
      
      if (response.ok) {
        setIsFollowing(prev => !prev);
        // Update followers count
        if (artist) {
          setArtist({
            ...artist,
            stats: {
              ...artist.stats,
              followers: isFollowing ? artist.stats.followers - 1 : artist.stats.followers + 1
            }
          });
        }
      }
    } catch (error) {
      console.error('Error updating follow status:', error);
    }
  };

  const handleAddComment = async (content: string, artistId: string) => {
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          artistId,
          content
        }),
      });
      
      if (response.ok) {
        const newComment = await response.json();
        setComments(prev => [newComment, ...prev]);
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  const handleReact = async (commentId: string, reaction: 'like' | 'dislike' | null) => {
    try {
      const response = await fetch('/api/comments/react', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          commentId,
          reaction
        }),
      });
      
      if (response.ok) {
        const updatedComment = await response.json();
        setComments(prev => 
          prev.map(comment => 
            comment.id === commentId ? updatedComment : comment
          )
        );
      }
    } catch (error) {
      console.error('Error reacting to comment:', error);
    }
  };

  const handleLoadComments = async (artistId: string) => {
    try {
      const response = await fetch(`/api/comments?artistId=${artistId}`);
      if (response.ok) {
        return await response.json();
      }
      return [];
    } catch (error) {
      console.error('Error loading comments:', error);
      return [];
    }
  };

  if (isLoading || !artist) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-800 rounded w-1/3"></div>
            <div className="flex space-x-6">
              <div className="w-32 h-32 rounded-full bg-gray-800"></div>
              <div className="flex-1 space-y-4">
                <div className="h-6 bg-gray-800 rounded w-1/4"></div>
                <div className="h-4 bg-gray-800 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 py-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="relative group">
              <img
                src={artist.avatar}
                alt={artist.name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-cyan-500 object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {artist.name}
                  </h1>
                  <p className="text-gray-400 mt-1">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</p>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={handleFollow}
                    className={`flex items-center space-x-2 px-6 py-2 rounded-full font-medium transition-all ${
                      isFollowing
                        ? 'bg-gray-700 text-white hover:bg-gray-600'
                        : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600'
                    }`}
                  >
                    {isFollowing ? (
                      <>
                        <div className="text-red-500">
                          <FaHeart size={16} />
                        </div>
                        <span>Following</span>
                      </>
                    ) : (
                      <>
                        <FaRegHeart size={16} />
                        <span>Follow</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <p className="mt-4 text-gray-300 max-w-2xl">{artist.bio}</p>

              {/* Stats */}
              <div className="flex space-x-6 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {artist.stats?.followers.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {artist.stats?.likes.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-400">Likes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    {artist.stats?.artworks}
                  </div>
                  <div className="text-sm text-gray-400">Artworks</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                {artist.socialLinks?.twitter && (
                  <a
                    href={`https://twitter.com/${artist.socialLinks.twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={20} />
                  </a>
                )}
                {artist.socialLinks?.instagram && (
                  <a
                    href={`https://instagram.com/${artist.socialLinks.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-500 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
                  </a>
                )}
                {artist.socialLinks?.website && (
                  <a
                    href={artist.socialLinks.website.startsWith('http') ? artist.socialLinks.website : `https://${artist.socialLinks.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label="Website"
                  >
                    <FaGlobe size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Artwork Grid */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-cyan-400">Latest Artworks</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Placeholder for artworks - would fetch from API in real app */}
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-gray-800 rounded-lg overflow-hidden group relative"
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Comments */}
          <div className="lg:col-span-1">
            <CommentSection
              artistId={artist.id}
              artistName={artist.name}
              currentUser={{
                id: 'current-user-123', // Would come from auth context
                name: 'Current User',
                avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
              }}
              initialComments={comments}
              onAddComment={handleAddComment}
              onReact={handleReact}
              onLoadComments={handleLoadComments}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ArtistProfilePage;