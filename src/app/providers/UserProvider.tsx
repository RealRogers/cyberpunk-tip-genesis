//@ts-nocheck
// contexts/UserContext.tsx
"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

// Add this interface to your types
interface UserActivity {
  posts: any[];
  donationsSent: any[];
  comments: any[];
  likes: any[];
  feedItems: any[];
  artist?: {
    donationsReceived: any[];
    commentsReceived: any[];
    posts: any[];
  };
}

interface UserProfile {
  id: string;
  wallet: string;
  username: string;
  name?: string;
  email?: string;
  bio?: string;
  location?: string;
  website?: string;
  avatar: string;
  banner?: string;
  category?: string;
  joinDate: string;
  followers: number;
  following: number;
  totalTipsReceived: number;
  totalTipsSent: number;
  verified: boolean;
  stakingPower: number;
  reputation: number;
  tier: string;
  totalTipsGiven?: number;
  streakDays?: number;
  dailyMissionsCompleted?: number;
  isArtist?: boolean;
}

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

interface UserContextType {
  user: UserProfile | null;
  settings: UserSettings;
  loading: boolean;
  isAuthenticated: boolean;
  isRegistered: boolean;
  isArtist: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
  registerUser: (userData: Partial<UserProfile>) => Promise<void>;
  updateProfile: (updatedData: Partial<UserProfile>) => Promise<void>;
  updateSettings: (
    section: keyof UserSettings,
    key: string,
    value: boolean
  ) => void;
  toggleArtistProfile: () => Promise<void>;
  refreshUser: () => Promise<void>;
  getUserProfile: (userId: string) => Promise<UserProfile | null>;
  activity: UserActivity | null;
  activityLoading: boolean;
  fetchUserActivity: () => Promise<void>;
  refreshActivity: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

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

const defaultProfile: UserProfile = {
  id: "",
  wallet: "",
  name: "",
  username: "",
  bio: "",
  avatar: "",
  joinDate: new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  }),
  followers: 0,
  following: 0,
  totalTipsReceived: 0,
  totalTipsSent: 0,
  verified: false,
  stakingPower: 0,
  reputation: 0,
  tier: "CYBER_NOVICE",
  totalTipsGiven: 0,
  streakDays: 0,
  dailyMissionsCompleted: 0,
  isArtist: false,
};

export function UserProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { ready, authenticated, user: privyUser, login, logout } = usePrivy();
  const { wallets } = useWallets();

  const [user, setUser] = useState<UserProfile | null>(null);
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  const [loading, setLoading] = useState(authenticated);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isArtist, setIsArtist] = useState(true);

  const walletAddress = wallets[0]?.address;

  const [activity, setActivity] = useState<UserActivity | null>(null);
  const [activityLoading, setActivityLoading] = useState(false);

  // Add these functions
  const fetchUserActivity = useCallback(async () => {
    if (!walletAddress) {
      toast.error("Wallet not connected");
      return;
    }

    try {
      setActivityLoading(true);
      const response = await fetch(
        `/api/users/activity?wallet=${walletAddress}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch activity data");
      }

      const data = await response.json();
      setActivity(data.activity);
    } catch (error) {
      console.error("Error fetching user activity:", error);
      toast.error("Failed to load activity data");
      setActivity(null);
    } finally {
      setActivityLoading(false);
    }
  }, [walletAddress]);

  const refreshActivity = useCallback(async () => {
    await fetchUserActivity();
  }, [fetchUserActivity]);

  // Add automatic fetching when wallet changes
  useEffect(() => {
    if (walletAddress && authenticated) {
      fetchUserActivity();
    } else {
      setActivity(null);
    }
  }, [walletAddress, authenticated, fetchUserActivity]);

  // Fetch user data
  const fetchUserData = useCallback(async () => {
    if (!ready || !authenticated || !walletAddress) {
      // setLoading(false);
      return;
    }

    try {
      // Fetch user data
      const userResponse = await fetch(`/api/users?wallet=${walletAddress}`);
      const userData = await userResponse.json();
      console.log("user data ", userData);
      if (userData.error) {
        router.push("/user/registration");
      }

      // Check if user has artist profile
      const artistResponse = await fetch(`/api/artist?wallet=${walletAddress}`);
      const artistData = artistResponse.ok ? await artistResponse.json() : null;

      const mergedProfile = {
        ...defaultProfile,
        ...userData,
        id: walletAddress,
        wallet: walletAddress,
        name:
          privyUser?.name ||
          userData.username ||
          `User${walletAddress.slice(0, 6)}`,
        username: userData.username || `@user${walletAddress.slice(0, 6)}`,
        avatar: privyUser?.picture?.url || userData.avatar || "",
        ...(artistData
          ? {
              name: artistData.name || userData.username,
              bio: artistData.bio || "",
              avatar:
                artistData.image || privyUser?.picture?.url || userData.avatar,
              category: artistData.genre || "",
              totalTipsReceived: artistData.totalTips || 0,
              stakingPower: artistData.stakingPower || 0,
              isArtist: true,
            }
          : {}),
      };

      setUser(mergedProfile);
      setIsRegistered(true);
      setIsArtist(!!artistData);
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Failed to load user data");
    } finally {
      setLoading(false);
    }
  }, [ready, authenticated, walletAddress, privyUser]);

  // Check registration status on wallet change
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  // Connect wallet handler
  const connectWallet = useCallback(async () => {
    try {
      if (!authenticated) {
        await login();
      }
      toast.success("Wallet connected successfully");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to connect wallet");
    }
  }, [authenticated, login]);

  // Disconnect wallet handler
  const disconnectWallet = useCallback(async () => {
    try {
      await logout();
      setUser(null);
      setIsRegistered(false);
      setIsArtist(false);
      toast.success("Disconnected successfully");
      router.push("/");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to disconnect wallet");
    }
  }, [logout, router]);

  // Register new user
  const registerUser = useCallback(
    async (userData: Partial<UserProfile>) => {
      if (!walletAddress) {
        toast.error("Wallet not connected");
        return;
      }

      try {
        setLoading(true);

        const response = await fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            wallet: walletAddress,
            username: userData.username,
            avatar: userData.avatar,
            stakingPower: userData.stakingPower || 100,
            reputation: userData.reputation || 0,
            tier: userData.tier || "CYBER_NOVICE",
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to register user");
        }

        const newUser = await response.json();
        setUser((prev) => ({
          ...defaultProfile,
          ...prev,
          ...newUser,
          id: walletAddress,
          wallet: walletAddress,
        }));
        setIsRegistered(true);
        toast.success("Registration successful!");
      } catch (error) {
        console.error("Registration error:", error);
        toast.error("Registration failed. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [walletAddress]
  );

  // Update user profile
  const updateProfile = useCallback(
    async (updatedData: Partial<UserProfile>) => {
      if (!user || !walletAddress) {
        toast.error("User not authenticated");
        return;
      }

      try {
        setLoading(true);

        // Update user data
        const userResponse = await fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            wallet: walletAddress,
            username: updatedData.username || user.username,
            avatar: updatedData.avatar || user.avatar,
            stakingPower: updatedData.stakingPower || user.stakingPower,
            reputation: updatedData.reputation || user.reputation,
            tier: updatedData.tier || user.tier,
            totalTipsGiven: updatedData.totalTipsGiven || user.totalTipsGiven,
            streakDays: updatedData.streakDays || user.streakDays,
          }),
        });

        if (!userResponse.ok) {
          throw new Error("Failed to update user data");
        }

        // Handle artist profile if isArtist is true
        if (updatedData.isArtist) {
          const artistResponse = await fetch(
            `/api/artist?wallet=${walletAddress}`
          );
          const existingArtist = artistResponse.ok
            ? await artistResponse.json()
            : null;

          let artistSaveResponse;
          if (existingArtist?.id) {
            // Update existing artist profile
            artistSaveResponse = await fetch("/api/artist", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: existingArtist.id,
                wallet: walletAddress,
                name: updatedData.name || user.name,
                bio: updatedData.bio || user.bio,
                image: updatedData.avatar || user.avatar,
                genre: updatedData.category || user.category,
                stakingPower: updatedData.stakingPower || user.stakingPower,
              }),
            });
          } else {
            // Create new artist profile
            artistSaveResponse = await fetch("/api/artist", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                wallet: walletAddress,
                name: updatedData.name || user.name,
                bio: updatedData.bio || user.bio,
                image: updatedData.avatar || user.avatar,
                genre: updatedData.category || user.category,
                stakingPower:
                  updatedData.stakingPower || user.stakingPower || 0,
              }),
            });
          }

          if (!artistSaveResponse.ok) {
            throw new Error("Failed to save artist profile");
          }

          const updatedArtist = await artistSaveResponse.json();
          updatedData.totalTipsReceived =
            updatedArtist.totalTips || user.totalTipsReceived;
        }

        const updatedUser = await userResponse.json();
        setUser((prev) => ({
          ...prev!,
          ...updatedData,
          ...updatedUser,
        }));

        if (updatedData.isArtist !== undefined) {
          setIsArtist(updatedData.isArtist);
        }

        toast.success("Profile updated successfully");
      } catch (error) {
        console.error("Error updating profile:", error);
        toast.error("Failed to update profile");
      } finally {
        setLoading(false);
      }
    },
    [user, walletAddress]
  );

  // Toggle artist profile
  const toggleArtistProfile = useCallback(async () => {
    if (!user) return;

    try {
      setLoading(true);

      if (isArtist) {
        // Option to disable artist profile (or delete if needed)
        setIsArtist(false);
        await updateProfile({ isArtist: false });
      } else {
        // Enable artist profile
        setIsArtist(true);
        await updateProfile({
          isArtist: true,
          category: user.category || "Digital Art",
        });
      }

      toast.success(`Artist profile ${isArtist ? "disabled" : "enabled"}`);
    } catch (error) {
      console.error("Error toggling artist profile:", error);
      toast.error("Failed to update artist status");
    } finally {
      setLoading(false);
    }
  }, [isArtist, updateProfile, user]);

  // Update settings
  const updateSettings = useCallback(
    (section: keyof UserSettings, key: string, value: boolean) => {
      setSettings((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [key]: value,
        },
      }));
      toast.success("Settings updated");
    },
    []
  );

  // Refresh user data
  const refreshUser = useCallback(async () => {
    await fetchUserData();
  }, [fetchUserData]);

  const checkRegistration = useCallback(async (): Promise<boolean> => {
    if (!walletAddress) return false;

    try {
      const response = await fetch(`/api/users?wallet=${walletAddress}`);
      if (!response.ok) return false;

      const userData = await response.json();
      return !!userData;
    } catch (error) {
      console.error("Registration check error:", error);
      return false;
    }
  }, [walletAddress]);

  const redirectToRegistration = useCallback(() => {
    router.push("/user/registration");
  }, [router]);

  const getUserProfile = useCallback(
    async (walletAddress: string): Promise<UserProfile | null> => {
      try {
        setLoading(true);

        // Fetch user data by wallet address
        const userResponse = await fetch(`/api/users?wallet=${walletAddress}`);
        if (!userResponse.ok) {
          throw new Error("User not found");
        }
        const userData = await userResponse.json();

        // Fetch artist data if available
        let artistData = null;
        try {
          const artistResponse = await fetch(
            `/api/artist?wallet=${walletAddress}`
          );
          if (artistResponse.ok) {
            artistData = await artistResponse.json();
          }
        } catch (error) {
          console.error("Error fetching artist data:", error);
        }

        // Merge all data into a complete profile
        const completeProfile: UserProfile = {
          ...defaultProfile,
          ...userData,
          id: walletAddress,
          wallet: walletAddress,
          name: userData.name || `User${walletAddress.slice(0, 6)}`,
          username: userData.username || `@user${walletAddress.slice(0, 6)}`,
          avatar: userData.avatar || "",
          bio: userData.bio || "",
          location: userData.location || "",
          website: userData.website || "",
          banner: userData.banner || "",
          joinDate: userData.joinDate || defaultProfile.joinDate,
          verified: userData.verified || false,
          ...(artistData
            ? {
                name: artistData.name || userData.name,
                bio: artistData.bio || userData.bio,
                avatar: artistData.image || userData.avatar,
                category: artistData.genre || userData.category || "",
                location: artistData.location || userData.location || "",
                website: artistData.website || userData.website || "",
                totalTipsReceived:
                  artistData.totalTips || userData.totalTipsReceived || 0,
                stakingPower:
                  artistData.stakingPower || userData.stakingPower || 0,
                isArtist: true,
              }
            : {
                isArtist: false,
              }),
        };

        return completeProfile;
      } catch (error) {
        console.error("Error fetching user profile:", error);
        toast.error("Failed to load profile");
        return null;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return (
    <UserContext.Provider
      value={{
        user,
        settings,
        loading,
        isAuthenticated: authenticated,
        isRegistered,
        isArtist,
        connectWallet,
        disconnectWallet,
        registerUser,
        updateProfile,
        updateSettings,
        toggleArtistProfile,
        refreshUser,
        checkRegistration,
        redirectToRegistration,
        walletAddress,
        getUserProfile,
        activity,
        activityLoading,
        fetchUserActivity,
        refreshActivity,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
