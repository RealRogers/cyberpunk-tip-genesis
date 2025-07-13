//@ts-nocheck
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import axios from "axios";

interface DepositFormProps {
  userId: string; // Passed from parent component
}

const DepositForm: React.FC<DepositFormProps> = ({ userId }) => {
  const { authenticated } = usePrivy();
  const { wallets } = useWallets();
  const wallet = wallets[0];
  const walletAddress = wallet?.address;

  const [amount, setAmount] = useState("");
  const [clabe, setClabe] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const truncatedAddress = walletAddress
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : "";

  useEffect(() => {
    if (authenticated) {
      fetchClabe();
    }
  }, [authenticated]);

  const fetchClabe = async () => {
    try {
      const response = await axios.get("/api/clabe");
      setClabe(response.data.clabe);
    } catch (err) {
      setError("Failed to fetch CLABE");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authenticated || !walletAddress) {
      setError("NEURAL_LINK_DISCONNECTED: Connect wallet to proceed");
      return;
    }
    const parsedAmount = parseFloat(amount);
    if (!amount || parsedAmount < 100) {
      setError("INVALID_INPUT: Amount must be at least 100 MXN");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // In your handleSubmit function:
      const response = await axios.post("/api/issuance", {
        amount: parsedAmount,
        destinationAddress: walletAddress,
        userId,
        clabe, // Add this line to pass the CLABE
      });
      setSuccess(`DEPOSIT_INITIATED: ${parsedAmount} MXNB requested`);
      setAmount("");
    } catch (err) {
      setError(
        err.response?.data?.error || "DEPOSIT_FAILED: Unable to process request"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="max-w-md mx-auto p-6 bg-gray-900/50 border border-cyan-400/30 rounded-lg backdrop-blur-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2 className="text-xl font-black bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-4">
        DEPOSIT_MXN_PROTOCOL
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-xs font-mono text-gray-400">
            AMOUNT (MXN)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount (min 100 MXN)"
              min="100"
              step="0.01"
              required
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-cyan-400/30 rounded-lg text-sm text-cyan-400 font-mono focus:outline-none focus:border-cyan-400 hover:bg-gray-800/70 transition-colors"
              disabled={loading}
            />
          </div>
        </div>
        <div>
          <label className="text-xs font-mono text-gray-400">
            DESTINATION_ADDRESS
          </label>
          <div className="relative">
            <input
              type="text"
              value={
                authenticated ? truncatedAddress : "NEURAL_LINK_DISCONNECTED"
              }
              readOnly
              className="w-full px-4 py-2 bg-gray-800/50 border border-cyan-400/30 rounded-lg text-sm text-cyan-400 font-mono cursor-not-allowed"
            />
          </div>
        </div>
        <div>
          <label className="text-xs font-mono text-gray-400">
            CLABE FOR TRANSFER
          </label>
          <div className="relative">
            <input
              type="text"
              value={clabe || "LOADING..."}
              readOnly
              className="w-full px-4 py-2 bg-gray-800/50 border border-cyan-400/30 rounded-lg text-sm text-cyan-400 font-mono cursor-not-allowed"
            />
          </div>
          <p className="text-xs font-mono text-gray-400 mt-2">
            Transfer the amount to this CLABE via SPEI from your bank. For
            sandbox, use the button to simulate.
          </p>
        </div>
        <motion.button
          type="submit"
          disabled={loading || !authenticated || !clabe}
          className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-mono font-bold text-sm transition-all duration-300 ${
            loading || !authenticated
              ? "bg-gray-700/50 text-gray-400 border border-gray-400/50 cursor-not-allowed"
              : "bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-700 hover:to-pink-700 text-white border border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/25"
          }`}
          whileHover={authenticated && !loading ? { scale: 1.02 } : {}}
          whileTap={authenticated && !loading ? { scale: 0.98 } : {}}
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>PROCESSING...</span>
            </>
          ) : (
            <>
              <DollarSign className="w-4 h-4" />
              <span>SIMULATE_DEPOSIT (Sandbox)</span>
            </>
          )}
        </motion.button>
      </form>
      <AnimatePresence>
        {error && (
          <motion.div
            className="mt-4 p-3 bg-red-600/20 border border-red-400/50 rounded-lg flex items-center space-x-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <AlertCircle className="w-4 h-4 text-red-400" />
            <p className="text-xs font-mono text-red-400">{error}</p>
          </motion.div>
        )}
        {success && (
          <motion.div
            className="mt-4 p-3 bg-green-600/20 border border-green-400/50 rounded-lg flex items-center space-x-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <p className="text-xs font-mono text-green-400">{success}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DepositForm;
