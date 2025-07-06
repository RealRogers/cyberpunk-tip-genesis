//@ts-nocheck
"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import {
  Camera,
  Video,
  FileText,
  Image as ImageIcon,
  X,
  Send,
  Smile,
  Link as LinkIcon,
  Heart,
  MessageSquare,
  Eye,
} from "lucide-react";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import {useFeeds} from "../app/providers/FeedProvider";

interface ContentPost {
  id: string;
  title: string;
  content?: string;
  mediaUrl?: string;
  mediaType?: "IMAGE" | "VIDEO" | "AUDIO" | "EMBED";
  artist?: {
    id: number;
    name: string;
    image: string;
  };
  author: {
    id: string;
    username: string;
    avatar?: string;
  };
  likes: {
    id: string;
    userId: string;
  }[];
  comments: {
    id: string;
    content: string;
    author: {
      id: string;
      username: string;
      avatar?: string;
    };
    createdAt: string;
  }[];
  tags: string[];
  createdAt: string;
  viewCount: number;
}

export default function ContentWidget() {
    const { reloadAllFeeds } = useFeeds();
  const { ready, authenticated, user: privyUser } = usePrivy();
  const { wallets } = useWallets();
  const walletAddress = wallets[0]?.address;

  console.log("walleets",walletAddress)

  const [isCreating, setIsCreating] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    mediaUrl: "",
    mediaType: undefined,
    tags: [],
  });
  const [posts, setPosts] = useState<ContentPost[]>([]);
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!ready || !authenticated) return;

    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/content/posts");
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        toast.error("Failed to load content feed");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [ready, authenticated]);

  const handleCreatePost = async () => {
    if (!walletAddress) {
      toast.error("Wallet not connected");
      return;
    }

    try {
      const response = await fetch("/api/content/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newPost,
          authorId: walletAddress,
        }),
      });

      if (!response.ok) throw new Error("Failed to create post");

      const createdPost = await response.json();
      setPosts([createdPost, ...posts]);
      setNewPost({
        title: "",
        content: "",
        mediaUrl: "",
        mediaType: undefined,
        tags: [],
      });
      setIsCreating(false);
      reloadAllFeeds()
      toast.success("Post created successfully!");
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Failed to create post");
    }
  };

  const handleMediaUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const file = e.target.files[0];
    const fileType = file.type.split("/")[0].toUpperCase();

    if (!["IMAGE", "VIDEO"].includes(fileType)) {
      toast.error("Only images and videos are supported");
      return;
    }

    try {
      toast.loading("Uploading media...");

      // In a real app, you would upload to IPFS or your storage solution
      // This is just a mock implementation
      const mockUrl = URL.createObjectURL(file);

      setNewPost((prev) => ({
        ...prev,
        mediaUrl: mockUrl,
        mediaType: fileType as "IMAGE" | "VIDEO",
      }));

      toast.dismiss();
      toast.success("Media uploaded!");
    } catch (error) {
      console.error("Error uploading media:", error);
      toast.error("Failed to upload media");
    }
  };

  const removeMedia = () => {
    setNewPost((prev) => ({
      ...prev,
      mediaUrl: "",
      mediaType: undefined,
    }));
  };

  if (!ready || !authenticated) {
    return null;
  }

  return (
    <div className="mb-8 border border-cyan-400/20 bg-gray-900/50 backdrop-blur-md overflow-hidden">
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />

      {/* Create Post Button */}
      {!isCreating && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => setIsCreating(true)}
            className="w-full p-4 text-left text-gray-300 hover:text-cyan-400 transition-colors flex items-center"
          >
            <span className="bg-gray-800 rounded-full p-2 mr-3">
              {privyUser?.picture?.url ? (
                <img
                  src={privyUser.picture.url}
                  alt="User avatar"
                  className="w-6 h-6 rounded-full"
                />
              ) : (
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400/20 to-pink-400/20 flex items-center justify-center">
                  {privyUser?.name?.[0] || "U"}
                </div>
              )}
            </span>
            <span className="text-sm">CREATE_NEW_POST...</span>
          </button>
        </motion.div>
      )}

      {/* Post Creation Form */}
      <AnimatePresence>
        {isCreating && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4"
          >
            <div className="mb-4">
              <input
                type="text"
                placeholder="POST_TITLE"
                value={newPost.title}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
                className="w-full bg-gray-900/50 border border-gray-700 text-white p-3 text-sm focus:border-cyan-400 focus:outline-none mb-3"
              />
              <textarea
                placeholder="WHAT'S_ON_YOUR_MIND?"
                value={newPost.content}
                onChange={(e) =>
                  setNewPost({ ...newPost, content: e.target.value })
                }
                className="w-full bg-gray-900/50 border border-gray-700 text-white p-3 text-sm focus:border-cyan-400 focus:outline-none"
                rows={4}
              />
            </div>

            {/* Media Preview */}
            {newPost.mediaUrl && (
              <div className="relative mb-4 rounded-lg overflow-hidden">
                {newPost.mediaType === "IMAGE" ? (
                  <img
                    src={newPost.mediaUrl}
                    alt="Post media"
                    className="w-full max-h-96 object-contain"
                  />
                ) : (
                  <video
                    src={newPost.mediaUrl}
                    controls
                    className="w-full max-h-96"
                  />
                )}
                <button
                  onClick={removeMedia}
                  className="absolute top-2 right-2 bg-gray-900/80 rounded-full p-1 hover:bg-gray-800 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <div className="flex space-x-2">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                  title="Add media"
                >
                  <Camera className="h-5 w-5 text-cyan-400" />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleMediaUpload}
                  accept="image/*,video/*"
                  className="hidden"
                />
                <button
                  className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                  title="Add link"
                >
                  <LinkIcon className="h-5 w-5 text-cyan-400" />
                </button>
                <button
                  className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                  title="Add emoji"
                >
                  <Smile className="h-5 w-5 text-cyan-400" />
                </button>
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setIsCreating(false);
                    setNewPost({
                      title: "",
                      content: "",
                      mediaUrl: "",
                      mediaType: undefined,
                      tags: [],
                    });
                  }}
                  className="px-3 py-1 text-xs border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  CANCEL
                </button>
                <button
                  onClick={handleCreatePost}
                  disabled={
                    !newPost.title || (!newPost.content && !newPost.mediaUrl)
                  }
                  className={`px-3 py-1 text-xs flex items-center ${
                    !newPost.title || (!newPost.content && !newPost.mediaUrl)
                      ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                      : "bg-cyan-400/10 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20"
                  } transition-colors`}
                >
                  <Send className="h-3 w-3 mr-1" />
                  POST
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Posts Feed */}
      <div className="border-t border-cyan-400/20">
        {loading ? (
          <div className="p-8 text-center text-gray-400">LOADING_POSTS...</div>
        ) : posts.length === 0 ? (
          <div className="p-8 text-center text-gray-400">NO_POSTS_YET</div>
        ) : (
          posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-6 border-b border-cyan-400/10"
            >
              <div className="flex items-start mb-4">
                <div className="mr-3">
                  {post.author.avatar ? (
                    <img
                      src={post.author.avatar}
                      alt={post.author.username}
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400/20 to-pink-400/20 flex items-center justify-center">
                      {post.author.username[0]}
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <span className="font-bold mr-2">
                      {post.author.username}
                    </span>
                    {post.artist && (
                      <span className="text-xs bg-cyan-400/10 text-cyan-400 px-2 py-0.5 rounded-full">
                        {post.artist.name}
                      </span>
                    )}
                    <span className="text-xs text-gray-400 ml-auto">
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                  {post.content && (
                    <p className="text-gray-300 mb-4">{post.content}</p>
                  )}

                  {post.mediaUrl && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      {post.mediaType === "IMAGE" ? (
                        <img
                          src={post.mediaUrl}
                          alt="Post media"
                          className="w-full max-h-96 object-contain"
                        />
                      ) : (
                        <video
                          src={post.mediaUrl}
                          controls
                          className="w-full max-h-96"
                        />
                      )}
                    </div>
                  )}

                  {/* Post Actions */}
                  <div className="flex items-center text-xs text-gray-400 space-x-4">
                    <button className="flex items-center hover:text-cyan-400 transition-colors">
                      <Heart className="h-4 w-4 mr-1" />
                      <span>{post.likes?.length || 0} LIKES</span>
                    </button>
                    <button className="flex items-center hover:text-cyan-400 transition-colors">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span>{post.comments?.length || 0} COMMENTS</span>
                    </button>
                    <button className="flex items-center hover:text-cyan-400 transition-colors">
                      <Eye className="h-4 w-4 mr-1" />
                      <span>{post.viewCount || 0} VIEWS</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
