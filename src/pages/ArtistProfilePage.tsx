import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaGlobe, FaHeart, FaRegHeart } from 'react-icons/fa';
import { CommentSection } from '../components/CommentSection';
import { Artist, Comment } from '../types/artist';

// Datos de ejemplo - En una aplicación real, estos vendrían de una API
const mockArtist: Artist = {
  id: 'artist-123',
  name: 'NeonDreamer',
  avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
  bio: 'Digital artist creating cyberpunk and futuristic artwork. Lover of neon lights and synthwave music.',
  stats: {
    followers: 12450,
    likes: 89234,
    artworks: 47,
  },
  socialLinks: {
    twitter: 'neondreamer',
    instagram: 'neon.dreamer.art',
    website: 'neondreamer.art',
  },
};

// Comentarios de ejemplo
const mockComments: Comment[] = [
  {
    id: 'comment-1',
    author: 'CyberExplorer',
    authorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    content: '¡Increíble trabajo! Me encanta cómo juegas con los colores neón.',
    timestamp: '2023-06-18T14:30:00Z',
    likes: 24,
    dislikes: 2,
    artistId: 'artist-123',
  },
  {
    id: 'comment-2',
    author: 'TechSamurai',
    authorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    content: '¿Qué software usas para crear estas obras de arte?',
    timestamp: '2023-06-17T09:15:00Z',
    likes: 8,
    dislikes: 0,
    artistId: 'artist-123',
  },
];

export const ArtistProfilePage = () => {
  const { artistId } = useParams<{ artistId: string }>();
  console.log('ArtistProfilePage - artistId:', artistId);
  const navigate = useNavigate();
  const [artist, setArtist] = useState<Artist | null>(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);

  // Cargar datos del artista
  const loadArtistData = useCallback(async (id: string) => {
    if (!id) return;
    
    setIsLoading(true);
    try {
      // En una aplicación real, harías una llamada a la API aquí
      // const response = await fetch(`/api/artists/${id}`);
      // const data = await response.json();
      // setArtist(data);
      
      // Simulación de carga
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Usar datos de ejemplo por ahora
      const foundArtist = mockArtist.id === id ? mockArtist : null;
      if (!foundArtist) {
        navigate('/not-found');
        return;
      }
      
      setArtist(foundArtist);
      setComments(mockComments.filter(comment => comment.artistId === id));
    } catch (error) {
      console.error('Error loading artist data:', error);
      navigate('/error', { state: { error: 'Failed to load artist data' } });
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  // Cargar datos cuando cambia el ID del artista
  useEffect(() => {
    if (artistId) {
      loadArtistData(artistId);
    } else {
      navigate('/');
    }
  }, [artistId, loadArtistData, navigate]);

  const handleFollow = async () => {
    try {
      // En una aplicación real, harías una llamada a la API aquí
      await new Promise(resolve => setTimeout(resolve, 300));
      setIsFollowing(prev => !prev);
    } catch (error) {
      console.error('Error updating follow status:', error);
    }
  };

  const handleAddComment = async (content: string, artistId: string) => {
    // En una aplicación real, enviarías el comentario a la API
    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      author: 'Current User', // Esto vendría del contexto de autenticación
      authorAvatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      content,
      timestamp: new Date().toISOString(),
      likes: 0,
      dislikes: 0,
      artistId,
    };
    
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setComments(prev => [newComment, ...prev]);
        resolve();
      }, 300);
    });
  };

  const handleReact = async (commentId: string, reaction: 'like' | 'dislike' | null) => {
    // En una aplicación real, enviarías la reacción a la API
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setComments(prev => 
          prev.map(comment => {
            if (comment.id !== commentId) return comment;
            
            let newLikes = comment.likes;
            let newDislikes = comment.dislikes;
            
            // Lógica para manejar las reacciones
            if (reaction === 'like') {
              if (comment.userReaction === 'like') {
                newLikes--;
              } else {
                if (comment.userReaction === 'dislike') newDislikes--;
                newLikes++;
              }
            } else if (reaction === 'dislike') {
              if (comment.userReaction === 'dislike') {
                newDislikes--;
              } else {
                if (comment.userReaction === 'like') newLikes--;
                newDislikes++;
              }
            }
            
            return {
              ...comment,
              likes: newLikes,
              dislikes: newDislikes,
              userReaction: reaction === comment.userReaction ? null : reaction,
            };
          })
        );
        resolve();
      }, 200);
    });
  };

  const handleLoadComments = async (artistId: string) => {
    // En una aplicación real, harías una llamada a la API para obtener los comentarios del artista
    return new Promise<Comment[]>((resolve) => {
      setTimeout(() => {
        resolve(comments);
      }, 300);
    });
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
              <div className="absolute inset-0 rounded-full bg-cyan-500 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white text-sm font-medium">Change</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {artist.name}
                  </h1>
                  <p className="text-gray-400 mt-1">Digital Artist</p>
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
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-gray-800 rounded-lg overflow-hidden group relative"
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <h3 className="font-bold text-white">Artwork {item}</h3>
                      <p className="text-sm text-gray-300">Digital Art • {2023 - item} days ago</p>
                    </div>
                  </div>
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
                id: 'current-user-123',
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
