//@ts-nocheck
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "react-hot-toast";
import {
  Edit,
  Save,
  Camera,
  MapPin,
  Link as LinkIcon,
  Calendar,
  Users,
  Zap,
  Eye,
  Heart,
  LogOut,
  MessageSquare,
  Gift,
  Activity,
  X as CloseIcon,
} from "lucide-react";
import { useUser } from "../providers/UserProvider";
import { useRouter } from "next/navigation";
import { useSupabaseStorage } from "@/app/providers/ImageProvider"; // Adjust path as needed

interface UserSettings {
  notifications: {
    tips: boolean;
    follows: boolean;
    comments: boolean;
    email: boolean;
  };
  privacy: {
    showEmail: boolean;
    showTipHistory: boolean;
    allowDirectMessages: boolean;
  };
  profile: {
    showLocation: boolean;
    showWebsite: boolean;
  };
}

type ProfileTab = "about" | "activity" | "settings";
type ActivityTab = "all" | "posts" | "tips" | "interactions";

const defaultSettings: UserSettings = {
  notifications: {
    tips: true,
    follows: true,
    comments: true,
    email: false,
  },
  privacy: {
    showEmail: false,
    showTipHistory: true,
    allowDirectMessages: true,
  },
  profile: {
    showLocation: true,
    showWebsite: true,
  },
};

export default function Profile() {
  const router = useRouter();
  const {
    user,
    loading,
    isAuthenticated,
    isRegistered,
    connectWallet,
    disconnectWallet,
    updateProfile,
    refreshUser,
    activity,
    activityLoading,
    fetchUserActivity,
  } = useUser();

  const { uploadImage, isUploading, uploadError } = useSupabaseStorage();

  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(user || {});
  const [glitchEffect, setGlitchEffect] = useState(false);
  const [isArtist, setIsArtist] = useState(user?.isArtist || false);
  const [activeTab, setActiveTab] = useState<ProfileTab>("about");
  const [activeActivityTab, setActiveActivityTab] =
    useState<ActivityTab>("all");

  // Avatar upload modal
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [updateAvatarUrl, setUpdateAvatar] = useState<string | null>(null);

  // Initialize form with user data when loaded
  useEffect(() => {
    if (user) {
      setEditedProfile(user);
      setIsArtist(user.isArtist || false);
    }
  }, [user]);

  // Load activity when activity tab is selected
  useEffect(() => {
    if (activeTab === "activity" && !activity && isAuthenticated) {
      fetchUserActivity();
    }
  }, [activeTab, activity, isAuthenticated, fetchUserActivity]);

  // Clean up preview URL when modal closes
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleSaveProfile = async () => {
    if (!user?.wallet) {
      toast.error("Wallet not connected");
      return;
    }

    // Add validation for artist category
    if (isArtist && !editedProfile.category) {
      toast.error("Category is required for artist profiles", {
        style: { background: "#111", color: "#f00" },
      });
      return;
    }

    setGlitchEffect(true);
    toast.loading("Saving profile...", {
      style: { background: "#111", color: "#0ff" },
    });

    try {
      console.log("ediprofile", updateAvatarUrl);
      await updateProfile({
        ...editedProfile,
        avatar: updateAvatarUrl,
        isArtist,
      });

      setIsEditing(false);
      toast.success("Profile updated successfully", {
        icon: "✅",
        style: { background: "#111", color: "#0f0" },
      });
    } catch (error) {
      console.error("Error saving profile:", error);
      toast.error("Failed to save profile");
    } finally {
      setGlitchEffect(false);
    }
  };

  const handleCancelEdit = () => {
    setEditedProfile(user || {});
    setIsEditing(false);
    setPreviewUrl(null);
  };

  const updateSettings = (
    section: keyof UserSettings,
    key: string,
    value: boolean
  ) => {
    setSettings((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
    toast.success("Settings updated");
  };

  const toggleArtistProfile = () => {
    setIsArtist(!isArtist);
  };

  const filterActivities = () => {
    if (!activity) return [];

    let items: any[] = [];

    if (activeActivityTab === "all") {
      items = [
        ...(activity.posts || []).map((post) => ({ ...post, type: "post" })),
        ...(activity.donationsSent || []).map((donation) => ({
          ...donation,
          type: "donation",
        })),
        ...(activity.comments || []).map((comment) => ({
          ...comment,
          type: "comment",
        })),
        ...(activity.likes || []).map((like) => ({ ...like, type: "like" })),
        ...(activity.feedItems || []).map((item) => ({
          ...item,
          type: "feed",
        })),
      ];

      if (activity.artist) {
        items = [
          ...items,
          ...(activity.artist.donationsReceived || []).map((donation) => ({
            ...donation,
            type: "donation-received",
          })),
          ...(activity.artist.commentsReceived || []).map((comment) => ({
            ...comment,
            type: "comment-received",
          })),
        ];
      }
    } else if (activeActivityTab === "posts") {
      items = (activity.posts || []).map((post) => ({ ...post, type: "post" }));
    } else if (activeActivityTab === "tips") {
      items = (activity.donationsSent || []).map((donation) => ({
        ...donation,
        type: "donation",
      }));
      if (activity.artist) {
        items = [
          ...items,
          ...(activity.artist.donationsReceived || []).map((donation) => ({
            ...donation,
            type: "donation-received",
          })),
        ];
      }
    } else if (activeActivityTab === "interactions") {
      items = [
        ...(activity.comments || []).map((comment) => ({
          ...comment,
          type: "comment",
        })),
        ...(activity.likes || []).map((like) => ({ ...like, type: "like" })),
        ...(activity.feedItems || []).map((item) => ({
          ...item,
          type: "feed",
        })),
      ];
      if (activity.artist) {
        items = [
          ...items,
          ...(activity.artist.commentsReceived || []).map((comment) => ({
            ...comment,
            type: "comment-received",
          })),
        ];
      }
    }

    // Sort by date (newest first)
    return items.sort((a, b) => {
      const dateA = new Date(a.createdAt || a.timestamp);
      const dateB = new Date(b.createdAt || b.timestamp);
      return dateB.getTime() - dateA.getTime();
    });
  };

  const renderActivityItem = (item: any) => {
    switch (item.type) {
      case "post":
        return (
          <div className="flex items-start space-x-3">
            <Zap className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-cyan-100">NEW_POST</h4>
              <p className="text-sm text-gray-300">{item.title}</p>
              <p className="text-xs text-gray-500">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        );
      case "donation":
        return (
          <div className="flex items-start space-x-3">
            <Gift className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-yellow-100">TIP_SENT</h4>
              <p className="text-sm text-gray-300">
                You tipped {item.amount} ETH to{" "}
                {item.artist?.name || "an artist"}
              </p>
              {item.message && (
                <p className="text-xs text-gray-400 italic">"{item.message}"</p>
              )}
              <p className="text-xs text-gray-500">
                {new Date(item.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        );
      case "donation-received":
        return (
          <div className="flex items-start space-x-3">
            <Gift className="h-5 w-5 text-pink-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-pink-100">TIP_RECEIVED</h4>
              <p className="text-sm text-gray-300">
                Received {item.amount} ETH from{" "}
                {item.donor?.username || "a supporter"}
              </p>
              {item.message && (
                <p className="text-xs text-gray-400 italic">"{item.message}"</p>
              )}
              <p className="text-xs text-gray-500">
                {new Date(item.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        );
      case "comment":
        return (
          <div className="flex items-start space-x-3">
            <MessageSquare className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-green-100">COMMENT_POSTED</h4>
              <p className="text-sm text-gray-300">
                On: {item.post?.title || "a post"}
              </p>
              <p className="text-xs text-gray-400">{item.content}</p>
              <p className="text-xs text-gray-500">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        );
      case "comment-received":
        return (
          <div className="flex items-start space-x-3">
            <MessageSquare className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-purple-100">COMMENT_RECEIVED</h4>
              <p className="text-sm text-gray-300">
                From {item.user?.username || "a user"}
              </p>
              <p className="text-xs text-gray-400">"{item.message}"</p>
              <p className="text-xs text-gray-500">
                {new Date(item.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        );
      case "like":
        return (
          <div className="flex items-start space-x-3">
            <Heart className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-red-100">LIKE_GIVEN</h4>
              <p className="text-sm text-gray-300">
                Liked {item.post ? "a post" : "a comment"}
              </p>
              <p className="text-xs text-gray-500">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        );
      case "feed":
        return (
          <div className="flex items-start space-x-3">
            <Activity className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-blue-100">
                {item.type.toUpperCase()}
              </h4>
              <p className="text-sm text-gray-300">{item.message}</p>
              <p className="text-xs text-gray-500">
                {new Date(item.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderActivityTab = () => {
    if (activityLoading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
        </div>
      );
    }

    if (!activity) {
      return (
        <div className="text-center py-12 text-gray-400">
          <p>NO_ACTIVITY_FOUND</p>
          <button
            onClick={fetchUserActivity}
            className="mt-4 text-cyan-400 hover:underline"
          >
            RETRY
          </button>
        </div>
      );
    }

    const filteredActivities = filterActivities();

    return (
      <div className="space-y-4">
        {/* Activity filter tabs */}
        <div className="flex border-b border-gray-700 mb-6">
          <button
            className={`px-4 py-2 text-sm ${
              activeActivityTab === "all"
                ? "border-b-2 border-cyan-400 text-cyan-400"
                : "text-gray-400"
            }`}
            onClick={() => setActiveActivityTab("all")}
          >
            ALL
          </button>
          <button
            className={`px-4 py-2 text-sm ${
              activeActivityTab === "posts"
                ? "border-b-2 border-cyan-400 text-cyan-400"
                : "text-gray-400"
            }`}
            onClick={() => setActiveActivityTab("posts")}
          >
            POSTS
          </button>
          <button
            className={`px-4 py-2 text-sm ${
              activeActivityTab === "tips"
                ? "border-b-2 border-cyan-400 text-cyan-400"
                : "text-gray-400"
            }`}
            onClick={() => setActiveActivityTab("tips")}
          >
            TIPS
          </button>
          <button
            className={`px-4 py-2 text-sm ${
              activeActivityTab === "interactions"
                ? "border-b-2 border-cyan-400 text-cyan-400"
                : "text-gray-400"
            }`}
            onClick={() => setActiveActivityTab("interactions")}
          >
            INTERACTIONS
          </button>
        </div>

        {/* Activity items */}
        <div className="space-y-4">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((item, index) => (
              <motion.div
                key={`${item.type}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border border-cyan-400/20 bg-gray-900/50 p-4 rounded-lg"
              >
                {renderActivityItem(item)}
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12 text-gray-400">
              <p>NO_ACTIVITY_FOUND_FOR_SELECTED_FILTER</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const handleAvatarClick = () => {
    setShowAvatarModal(true);
    if (!isEditing) {
      setIsEditing(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUploadAndClose = async () => {
    if (!selectedFile) return;

    try {
      const url = await uploadImage(selectedFile);
      console.log("url", url);
      await updateProfile({
        ...editedProfile,
        avatar: url,
        isArtist,
      });
      toast.success("Image uploaded! Click Save to confirm changes.");
      setShowAvatarModal(false);
      setSelectedFile(null);
      setPreviewUrl(false);
    } catch (err) {
      toast.error(uploadError || "Failed to upload image");
    }
  };

  const closeModal = () => {
    setShowAvatarModal(false);
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <button
          onClick={connectWallet}
          className="bg-cyan-400/10 border border-cyan-400/50 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400/20 transition-colors"
        >
          CONNECT_WALLET_TO_VIEW_PROFILE
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="animate-pulse">Loading your profile...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden relative">
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />

      <main className="max-w-4xl mx-auto px-4 py-8 relative z-10">
        <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-gray-900/80 border border-cyan-400/20 px-3 py-1 text-xs flex items-center hover:bg-cyan-400/20 transition-colors z-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-1"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </button>

        {/* Profile Header */}
        <motion.div
          className="mb-8 border border-cyan-400/20 bg-gray-900/50 backdrop-blur-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="h-48 bg-gradient-to-r from-cyan-400/10 via-pink-400/10 to-cyan-400/10 relative">
            <button
              className={`absolute top-4 right-4 bg-gray-900/80 border border-cyan-400/20 px-3 py-1 text-xs flex items-center ${
                glitchEffect ? "glitch" : ""
              }`}
            >
              <Camera className="h-3 w-3 mr-2" />
              EDIT_BANNER
            </button>
          </div>

          <div className="p-6 pt-0">
            <div className="flex flex-col md:flex-row md:items-end md:space-x-6 -mt-20 relative z-10">
              {/* Avatar */}
              <div className="relative mb-4 md:mb-0">
                <div className="h-32 w-32 rounded-full border-4 border-gray-900 bg-gradient-to-br from-cyan-400/20 to-pink-400/20 overflow-hidden">
                  {(isEditing ? editedProfile.avatar : user?.avatar) ? (
                    <img
                      src={
                        (isEditing ? editedProfile.avatar : user?.avatar) || ""
                      }
                      alt={user?.name || ""}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl text-cyan-400">
                      {user?.name?.[0] || "U"}
                    </div>
                  )}
                </div>
                <button
                  onClick={handleAvatarClick}
                  className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0 bg-gray-900 border border-cyan-400/20 flex items-center justify-center"
                >
                  <Camera className="h-3 w-3" />
                </button>
              </div>

              {/* Profile Info */}
              <div className="flex-1 md:mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                    {user?.name || "New User"}
                  </h1>
                  {user?.verified && (
                    <span className="text-xs bg-cyan-400 text-black px-2 py-0.5 rounded-full">
                      VERIFIED
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mb-2">
                  @{user?.username || "newuser"}
                </p>
                <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    JOINED_{user?.joinDate || "RECENTLY"}
                  </div>
                  {settings.profile.showLocation && user?.location && (
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {user.location}
                    </div>
                  )}
                  {settings.profile.showWebsite && user?.website && (
                    <div className="flex items-center">
                      <LinkIcon className="h-3 w-3 mr-1" />
                      <a
                        href={user.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                      >
                        WEBSITE
                      </a>
                    </div>
                  )}
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 text-xs">
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3 text-cyan-400" />
                    <span className="font-bold">{user?.followers || 0}</span>
                    <span className="text-gray-400">FOLLOWERS</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3 text-pink-400" />
                    <span className="font-bold">{user?.following || 0}</span>
                    <span className="text-gray-400">FOLLOWING</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Zap className="h-3 w-3 text-yellow-400" />
                    <span className="font-bold">
                      {user?.totalTipsReceived || 0} ETH
                    </span>
                    <span className="text-gray-400">RECEIVED</span>
                  </div>
                </div>
              </div>

              {/* Edit Button */}
              <div className="md:mb-6">
                {isEditing ? (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSaveProfile}
                      className="bg-cyan-400/10 border border-cyan-400/50 text-cyan-400 px-3 py-1 text-xs flex items-center hover:bg-cyan-400/20 transition-colors"
                    >
                      <Save className="h-3 w-3 mr-2" />
                      SAVE
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-900/50 border border-gray-600 text-gray-300 px-3 py-1 text-xs flex items-center hover:bg-gray-800 transition-colors"
                    >
                      CANCEL
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {setIsEditing(true),setActiveTab("about")}}
                    className="bg-gray-900/50 border border-gray-600 text-gray-300 px-3 py-1 text-xs flex items-center hover:bg-gray-800 transition-colors"
                  >
                    <Edit className="h-3 w-3 mr-2" />
                    EDIT_PROFILE
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="space-y-6">
          <div className="flex border-b border-gray-700">
            <button
              className={`px-4 py-2 text-sm ${
                activeTab === "about"
                  ? "border-b-2 border-cyan-400 text-cyan-400"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("about")}
            >
              ABOUT
            </button>
            <button
              className={`px-4 py-2 text-sm ${
                activeTab === "activity"
                  ? "border-b-2 border-cyan-400 text-cyan-400"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("activity")}
            >
              ACTIVITY
            </button>
            <button
              className={`px-4 py-2 text-sm ${
                activeTab === "settings"
                  ? "border-b-2 border-cyan-400 text-cyan-400"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("settings")}
            >
              SETTINGS
            </button>
          </div>

          {activeTab === "about" && (
            <>
              {/* About Section */}
              <motion.div
                className="border border-cyan-400/20 bg-gray-900/50 p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                    USER_PROFILE_DATA
                  </h2>
                  {isEditing && (
               <label className="inline-flex items-center cursor-pointer">
               <input 
                 type="checkbox" 
                 checked={isArtist} 
                 onChange={toggleArtistProfile}
                 className="sr-only peer" 
               />
               <div className="relative w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></div>
               <span className="ml-3 text-sm font-medium text-gray-300">
                 {isArtist ? (
                   <span className="text-cyan-400">ARTIST_PROFILE <span className="text-red-400">*</span></span>
                 ) : (
                   'REGULAR_USER'
                 )}
               </span>
             </label>
                  )}
                </div>

                {isEditing ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">
                        DISPLAY_NAME
                      </label>
                      <input
                        value={editedProfile.name || ""}
                        onChange={(e) =>
                          setEditedProfile({
                            ...editedProfile,
                            name: e.target.value,
                          })
                        }
                        className="w-full bg-gray-900/50 border border-gray-700 text-white p-3 text-sm focus:border-cyan-400 focus:outline-none mb-4"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">
                        USERNAME
                      </label>
                      <input
                        value={editedProfile.username || ""}
                        onChange={(e) =>
                          setEditedProfile({
                            ...editedProfile,
                            username: e.target.value,
                          })
                        }
                        className="w-full bg-gray-900/50 border border-gray-700 text-white p-3 text-sm focus:border-cyan-400 focus:outline-none mb-4"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">
                        BIO
                      </label>
                      <textarea
                        value={editedProfile.bio || ""}
                        onChange={(e) =>
                          setEditedProfile({
                            ...editedProfile,
                            bio: e.target.value,
                          })
                        }
                        className="w-full bg-gray-900/50 border border-gray-700 text-white p-3 text-sm focus:border-cyan-400 focus:outline-none"
                        rows={4}
                      />
                    </div>
                    {isArtist && (
                      <div>
                        <div className="flex items-center">
                          <label className="block text-xs text-gray-400 mb-1">
                            CATEGORY
                          </label>
                          <span className="text-red-400 ml-1">*</span>
                        </div>
                        <div className="relative">
                          <input
                            value={editedProfile.category || ""}
                            onChange={(e) =>
                              setEditedProfile({
                                ...editedProfile,
                                category: e.target.value,
                              })
                            }
                            className={`w-full bg-gray-900/50 border ${
                              isArtist && !editedProfile.category
                                ? "border-red-400/50"
                                : "border-gray-700"
                            } text-white p-3 text-sm focus:border-cyan-400 focus:outline-none`}
                            placeholder="Enter your art category"
                          />
                          {isArtist && !editedProfile.category && (
                            <div className="absolute right-3 top-3 text-red-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                              </svg>
                            </div>
                          )}
                        </div>
                        {isArtist && !editedProfile.category && (
                          <p className="text-xs text-red-400 mt-1">
                            Category is required for artist profiles
                          </p>
                        )}
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">
                          LOCATION
                        </label>
                        <input
                          value={editedProfile.location || ""}
                          onChange={(e) =>
                            setEditedProfile({
                              ...editedProfile,
                              location: e.target.value,
                            })
                          }
                          className="w-full bg-gray-900/50 border border-gray-700 text-white p-3 text-sm focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-400 mb-1">
                          WEBSITE
                        </label>
                        <input
                          type="url"
                          value={editedProfile.website || ""}
                          onChange={(e) =>
                            setEditedProfile({
                              ...editedProfile,
                              website: e.target.value,
                            })
                          }
                          className="w-full bg-gray-900/50 border border-gray-700 text-white p-3 text-sm focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-bold text-gray-300 mb-2">
                        BIO
                      </h3>
                      <p className="text-gray-400">
                        {user?.bio || "NO_BIO_PROVIDED"}
                      </p>
                    </div>
                    {isArtist && user?.category && (
                      <div>
                        <h3 className="text-sm font-bold text-gray-300 mb-2">
                          CATEGORY
                        </h3>
                        <span className="inline-block bg-gray-800 text-cyan-400 px-2 py-1 text-xs rounded">
                          {user.category}
                        </span>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-bold text-gray-300 mb-2">
                          WALLET
                        </h3>
                        <p className="text-xs text-gray-400 font-mono break-all">
                          {user?.wallet || "NOT_CONNECTED"}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-300 mb-2">
                          TIER
                        </h3>
                        <span className="inline-block bg-gray-800 text-cyan-400 px-2 py-1 text-xs rounded">
                          {user?.tier?.replace("_", " ") || "CYBER_NOVICE"}
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-bold text-gray-300 mb-2">
                          STAKING_POWER
                        </h3>
                        <p className="text-xs text-gray-400">
                          {user?.stakingPower || 0} SP
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-gray-300 mb-2">
                          REPUTATION
                        </h3>
                        <p className="text-xs text-gray-400">
                          {user?.reputation || 0} XP
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Stats Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="border border-cyan-400/20 bg-gray-900/50 p-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <Zap className="h-5 w-5 mr-2 text-yellow-400" />
                    <h3 className="text-lg font-bold">TIPS_RECEIVED</h3>
                  </div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    {user?.totalTipsReceived || 0} ETH
                  </div>
                  <p className="text-xs text-gray-400">
                    FROM_{user?.followers || 0}_SUPPORTERS
                  </p>
                </motion.div>

                <motion.div
                  className="border border-pink-400/20 bg-gray-900/50 p-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center mb-4">
                    <Heart className="h-5 w-5 mr-2 text-pink-400" />
                    <h3 className="text-lg font-bold">TIPS_SENT</h3>
                  </div>
                  <div className="text-3xl font-bold text-pink-400 mb-2">
                    {user?.totalTipsSent || 0} ETH
                  </div>
                  <p className="text-xs text-gray-400">
                    SUPPORTING_{user?.following || 0}_CREATORS
                  </p>
                </motion.div>
              </div>

              {/* Additional Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="border border-purple-400/20 bg-gray-900/50 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center mb-4">
                    <Zap className="h-5 w-5 mr-2 text-purple-400" />
                    <h3 className="text-lg font-bold">STREAK</h3>
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">
                    {user?.streakDays || 0} DAYS
                  </div>
                  <p className="text-xs text-gray-400">
                    DAILY_MISSIONS: {user?.dailyMissionsCompleted || 0}
                  </p>
                </motion.div>

                <motion.div
                  className="border border-green-400/20 bg-gray-900/50 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    <Users className="h-5 w-5 mr-2 text-green-400" />
                    <h3 className="text-lg font-bold">SOCIAL</h3>
                  </div>
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    {(user?.followers || 0) + (user?.following || 0)}
                  </div>
                  <p className="text-xs text-gray-400">
                    {user?.followers || 0} FOLLOWERS • {user?.following || 0}{" "}
                    FOLLOWING
                  </p>
                </motion.div>

                <motion.div
                  className="border border-blue-400/20 bg-gray-900/50 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center mb-4">
                    <Eye className="h-5 w-5 mr-2 text-blue-400" />
                    <h3 className="text-lg font-bold">ACTIVITY</h3>
                  </div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    {user?.totalTipsGiven || 0}
                  </div>
                  <p className="text-xs text-gray-400">TOTAL_TIPS_GIVEN</p>
                </motion.div>
              </div>
            </>
          )}

          {activeTab === "activity" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {renderActivityTab()}
            </motion.div>
          )}

          {activeTab === "settings" && (
            <motion.div
              className="border border-cyan-400/20 bg-gray-900/50 p-6 space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {/* Notifications */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-cyan-400">
                  NOTIFICATIONS
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-1">
                        TIP_NOTIFICATIONS
                      </label>
                      <p className="text-xs text-gray-500">
                        ALERT_WHEN_RECEIVING_TIPS
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications.tips}
                        onChange={(e) =>
                          updateSettings(
                            "notifications",
                            "tips",
                            e.target.checked
                          )
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-1">
                        FOLLOW_NOTIFICATIONS
                      </label>
                      <p className="text-xs text-gray-500">
                        ALERT_WHEN_NEW_FOLLOWERS
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications.follows}
                        onChange={(e) =>
                          updateSettings(
                            "notifications",
                            "follows",
                            e.target.checked
                          )
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-1">
                        EMAIL_NOTIFICATIONS
                      </label>
                      <p className="text-xs text-gray-500">
                        RECEIVE_EMAIL_ALERTS
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications.email}
                        onChange={(e) =>
                          updateSettings(
                            "notifications",
                            "email",
                            e.target.checked
                          )
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-400"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Privacy */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-pink-400">
                  PRIVACY
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-1">
                        SHOW_EMAIL
                      </label>
                      <p className="text-xs text-gray-500">
                        DISPLAY_EMAIL_ON_PROFILE
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.privacy.showEmail}
                        onChange={(e) =>
                          updateSettings(
                            "privacy",
                            "showEmail",
                            e.target.checked
                          )
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-400"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-800 pb-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-1">
                        SHOW_TIP_HISTORY
                      </label>
                      <p className="text-xs text-gray-500">
                        PUBLIC_TIP_ACTIVITY
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.privacy.showTipHistory}
                        onChange={(e) =>
                          updateSettings(
                            "privacy",
                            "showTipHistory",
                            e.target.checked
                          )
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-400"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-1">
                        ALLOW_DIRECT_MESSAGES
                      </label>
                      <p className="text-xs text-gray-500">
                        RECEIVE_DM_FROM_USERS
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.privacy.allowDirectMessages}
                        onChange={(e) =>
                          updateSettings(
                            "privacy",
                            "allowDirectMessages",
                            e.target.checked
                          )
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-400"></div>
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Avatar Upload Modal */}
      {showAvatarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full border border-cyan-500/30 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-400 hover:text-white"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
            <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <Camera className="text-2xl" />
              Upload Profile Picture
            </h3>
            <p className="text-gray-300 mb-4">
              Select an image to upload as your new avatar.
            </p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg block p-2.5 mb-4 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-cyan-500 file:text-white hover:file:bg-cyan-600"
            />
            {previewUrl && (
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Preview:</p>
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-32 h-32 rounded-full object-cover mx-auto"
                />
              </div>
            )}
            {uploadError && (
              <p className="text-red-400 text-sm mb-4">{uploadError}</p>
            )}
            <button
              onClick={handleUploadAndClose}
              disabled={!selectedFile || isUploading}
              className={`w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg font-medium ${
                !selectedFile || isUploading
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600"
              }`}
            >
              {isUploading ? "Uploading..." : "Upload and Preview"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
