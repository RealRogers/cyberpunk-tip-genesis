//@ts-nocheck
"use client";
import { useState, useEffect } from "react";
import {
  FaUser,
  FaImage,
  FaRobot,
  FaShieldAlt,
  FaEthereum,
  FaWallet,
} from "react-icons/fa";
import { SiWebauthn } from "react-icons/si";
import { useRouter } from "next/navigation";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useSupabaseStorage } from "@/app/providers/ImageProvider";

const Web3RegistrationForm = () => {
  const { uploadImage, isUploading, uploadError } = useSupabaseStorage();
  const router = useRouter();
  const { ready, authenticated, user, login, logout } = usePrivy();
  const { wallets } = useWallets();

  const [formData, setFormData] = useState({
    username: "",
    avatar: "",
    tier: "CYBER_NOVICE" as const,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [existingUser, setExistingUser] = useState<any>(null);

  // Get the first wallet address if connected
  const address = wallets[0]?.address;

  // Check if user exists when wallet connects
  useEffect(() => {
    const checkUserExists = async () => {
      if (!address) return;

      try {
        setIsLoading(true);
        const response = await fetch(`/api/users?wallet=${address}`);
        if (response.ok) {
          const user = await response.json();
          if (user) {
            setExistingUser(user);
            // Pre-fill form with existing user data
            setFormData({
              username: user.username,
              avatar: user.avatar || "",
              tier: user.tier || "CYBER_NOVICE",
            });
          }
        }
      } catch (err) {
        console.error("Error checking user:", err);
      } finally {
        setIsLoading(false);
      }
    };

    checkUserExists();
  }, [address]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!address) {
      setShowWalletModal(true);
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const userData = {
        wallet: address,
        username: formData.username,
        avatar: formData.avatar,
        tier: formData.tier,
        stakingPower: existingUser?.stakingPower || 100,
        reputation: existingUser?.reputation || 0,
      };

      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to save user data");
      }

      const user = await response.json();
      console.log("User upserted:", user);

      // Redirect to profile or dashboard
      window.location = "/profile";
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Registration failed. Please try again."
      );
      console.error("Registration error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const shortenAddress = (addr: string) => {
    return `${addr.substring(0, 6)}...${addr.substring(addr.length - 4)}`;
  };

  const handleConnect = async () => {
    try {
      if (!authenticated) {
        await login();
      }
      setShowWalletModal(false);
    } catch (err) {
      console.error("Login error:", err);
      setError("Failed to connect wallet");
    }
  };

  const handleDisconnect = async () => {
    try {
      await logout();
      // Redirect to home page after successful logout
      router.push("/");
    } catch (err) {
      console.error("Logout error:", err);
      setError("Failed to disconnect wallet");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      {/* Wallet Connection Modal */}
      {showWalletModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full border border-cyan-500/30">
            <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <SiWebauthn className="text-2xl" />
              Connect Your Wallet
            </h3>
            <p className="text-gray-300 mb-6">
              To continue, please connect your crypto wallet to verify
              ownership.
            </p>

            <button
              onClick={handleConnect}
              disabled={!ready || isLoading}
              className={`w-full flex items-center justify-center gap-3 py-3 px-4 rounded-lg font-medium mb-3 ${
                !ready || isLoading
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
              }`}
            >
              {isLoading ? (
                "Connecting..."
              ) : (
                <>
                  <FaEthereum className="text-xl" />
                  <span>Connect with Privy</span>
                </>
              )}
            </button>

            <button
              onClick={() => setShowWalletModal(false)}
              className="w-full py-2 text-gray-400 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Registration Form */}
      <div className="w-full max-w-md bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
            {existingUser ? "Update Your Profile" : "Complete Your Profile"}
          </h1>
          <p className="text-gray-400">
            {address ? (
              <div className="flex items-center justify-center gap-2">
                <FaWallet className="text-cyan-400" />
                <span className="text-cyan-300 font-mono">
                  {shortenAddress(address)}
                </span>
                <button
                  onClick={handleDisconnect}
                  className="text-xs text-red-400 hover:text-red-300 ml-2"
                >
                  (disconnect)
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowWalletModal(true)}
                className="text-cyan-400 hover:text-cyan-300 flex items-center justify-center gap-2 mx-auto"
              >
                <FaEthereum />
                <span>Connect Wallet</span>
              </button>
            )}
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Choose Your Handle
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-500" />
              </div>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                disabled={!address}
                minLength={3}
                maxLength={20}
                className="bg-gray-700 border border-gray-600 text-white rounded-lg block w-full pl-10 p-2.5 focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50"
                placeholder="cyberpunk_2077"
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">
              This will be your public identity in the community
            </p>
          </div>

          <div>
            <label
              htmlFor="avatarFile"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Upload Avatar (optional)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaImage className="text-gray-500" />
              </div>
              <input
                type="file"
                id="avatarFile"
                name="avatarFile"
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    try {
                      const url = await uploadImage(file);
                      console.log("url",url)
                      setFormData((prev) => ({ ...prev, avatar:url }));
                    } catch (err) {
                      console.error("Upload error:", err);
                      // Handle error, e.g., setError
                    }
                  }
                }}
                disabled={!address || isUploading}
                className="bg-gray-700 border border-gray-600 text-white rounded-lg block w-full pl-10 p-2.5 focus:ring-2 focus:ring-cyan-500 focus:border-transparent disabled:opacity-50 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-cyan-500 file:text-white hover:file:bg-cyan-600"
              />
            </div>
            {formData.avatar && (
              <p className="mt-1 text-xs text-gray-500 truncate">
                Uploaded: {formData.avatar}
              </p>
            )}
            {uploadError && (
              <p className="mt-1 text-xs text-red-400">{uploadError}</p>
            )}
            <p className="mt-1 text-xs text-gray-500">
              We&apos;ll upload to decentralized storage via Supabase.
            </p>
          </div>

          {/* Tier Selection */}
          <div>
            <label
              htmlFor="tier"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Membership Tier
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaShieldAlt className="text-gray-500" />
              </div>
              <select
                id="tier"
                name="tier"
                value={formData.tier}
                onChange={handleChange}
                disabled={!address}
                className="bg-gray-700 border border-gray-600 text-white rounded-lg block w-full pl-10 p-2.5 focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none disabled:opacity-50"
              >
                <option value="CYBER_NOVICE">Cyber Novice</option>
                <option value="DIGITAL_REBEL">Digital Rebel</option>
                <option value="CYBER_PATRON">Cyber Patron</option>
                <option value="NEURAL_LEGEND">Neural Legend</option>
              </select>
            </div>
            <div className="mt-2 text-xs text-gray-400">
              <div className="flex items-center space-x-1">
                <FaRobot className="text-cyan-400" />
                <span>Tier benefits are automatically calculated</span>
              </div>
            </div>
          </div>

          {/* Stats Preview */}
          {address && (
            <div className="border border-gray-700 rounded-lg p-4 animate-fade-in">
              <h3 className="text-sm font-medium text-gray-300 mb-2">
                Your Stats
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Staking Power</span>
                  <span className="font-mono">
                    {existingUser?.stakingPower || 100} SP
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Reputation</span>
                  <span className="font-mono">
                    {existingUser?.reputation || 0} XP
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Tier</span>
                  <span className="text-cyan-400">
                    {formData.tier.split("_").join(" ")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status</span>
                  <span
                    className={
                      existingUser ? "text-green-400" : "text-yellow-400"
                    }
                  >
                    {existingUser ? "Existing User" : "New User"}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || !address}
            className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all mt-4 ${
              isLoading
                ? "bg-gray-600 cursor-not-allowed"
                : !address
                ? "bg-gray-700 cursor-not-allowed text-gray-400"
                : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
            }`}
          >
            {isLoading ? (
              "Processing..."
            ) : !address ? (
              "Connect Wallet to Continue"
            ) : (
              <>
                <FaShieldAlt className="text-white" />
                <span>
                  {existingUser ? "Update Profile" : "Complete Registration"}
                </span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Web3RegistrationForm;
