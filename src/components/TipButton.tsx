//@ts-nocheck
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, X } from "lucide-react";
import { useWallets } from "@privy-io/react-auth";
import { ethers } from "ethers";
import { toast } from "react-hot-toast";
import ModalPortal from "./ModalPortal";
import abi from "../abi/ArtistFi.json"; // Import the ABI JSON file (save the provided JSON as abi.json)

interface TipButtonProps {
  recipientId: string;
  recipientWallet: string;
  postId?: string;
}

export default function TipButton({ recipientId, recipientWallet, postId }: TipButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [selectedToken] = useState("MXNB");
  const [loading, setLoading] = useState(false);
  const [needsApproval, setNeedsApproval] = useState(true);
  const { wallets } = useWallets();
  const wallet = wallets[0];

  const tokenOptions = [
    { address: "0x82B9e52b26A2954E113F94Ff26647754d5a4247D", symbol: "MXNB", decimal: 6 },
  ];

  const artistFi = { address: "0xb83ac4a3ece3dd7d09ec5a8641c701ebf96f08b0" };

  useEffect(() => {
    if (isOpen && amount && !isNaN(parseFloat(amount))) {
      checkAllowance();
    }
  }, [amount, isOpen]);

  const checkAllowance = async () => {
    if (!wallet?.address || !amount || isNaN(parseFloat(amount))) return;

    try {
      const provider = new ethers.providers.Web3Provider(await wallet.getEthereumProvider());
      const signer = provider.getSigner();

      const token = tokenOptions.find((t) => t.symbol === selectedToken);
      if (!token) throw new Error("Invalid token selected");

      const erc20Abi = [
        "function allowance(address owner, address spender) view returns (uint256)"
      ];

      const erc20 = new ethers.Contract(token.address, erc20Abi, signer);
      const decimals = token.decimal;
      const parsedAmount = ethers.utils.parseUnits(amount, decimals);

      const allowance = await erc20.allowance(wallet.address, artistFi.address);
      setNeedsApproval(allowance.lt(parsedAmount));
    } catch (error) {
      console.error("Error checking allowance:", error);
      setNeedsApproval(true);
    }
  };

  const checkArtistWallet = async () => {
    try {
      const response = await fetch('/api/artist/check-wallet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wallet: recipientWallet }),
      });
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error checking wallet:', error);
      return { exists: false, error: 'Failed to check wallet' };
    }
  };

  const handleOpenModal = async () => {
    if (!wallet?.address) {
      toast.error("Connect your wallet to send tips");
      return;
    }

    setLoading(true);
    try {
      const walletCheck = await checkArtistWallet();
      
      if (!walletCheck.exists) {
        toast.error("This wallet is not registered as an artist. The recipient needs to register as an artist to receive tips.");
        return;
      }

      setIsOpen(true);
    } catch (error) {
      console.error('Error checking artist wallet:', error);
      toast.error("Failed to verify artist wallet");
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async () => {
    if (!amount || isNaN(parseFloat(amount))) {
      toast.error("Enter a valid amount");
      return;
    }

    setLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(await wallet.getEthereumProvider());
      const signer = provider.getSigner();

      const token = tokenOptions.find((t) => t.symbol === selectedToken);
      if (!token) throw new Error("Invalid token selected");

      const erc20Abi = [
        "function approve(address spender, uint256 amount) returns (bool)"
      ];

      const erc20 = new ethers.Contract(token.address, erc20Abi, signer);
      const decimals = token.decimal;
      const parsedAmount = ethers.utils.parseUnits(amount, decimals);

      const approveTx = await erc20.approve(artistFi.address, parsedAmount);
      await approveTx.wait();
      
      toast.success("Approval successful!");
      setNeedsApproval(false);
    } catch (error: any) {
      console.error("Approval failed:", error);
      toast.error(error.message || "Failed to approve tokens");
    } finally {
      setLoading(false);
    }
  };

  const handleTip = async () => {
    setLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(await wallet.getEthereumProvider());
      const signer = provider.getSigner();

      const token = tokenOptions.find((t) => t.symbol === selectedToken);
      if (!token) throw new Error("Invalid token selected");

      const decimals = token.decimal;
      const parsedAmount = ethers.utils.parseUnits(amount, decimals);

      // Create tipping contract instance using the imported ABI
      const tippingContract = new ethers.Contract(artistFi.address, abi, signer);

      // Call tip on the contract (transfers tokens to contract via transferFrom internally)
      const tx = await tippingContract.tip(recipientWallet, parsedAmount);
      await tx.wait(); // Wait for confirmation

      const response = await fetch("/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recipientId,
          recipientWallet,
          donorWallet: wallet.address,
          amount,
          currency: selectedToken,
          message,
          postId,
          txHash: tx.hash,
        }),
      });

      if (!response.ok) throw new Error("Failed to record donation");

      toast.success("Tip sent successfully!");
      setIsOpen(false);
      setAmount("");
      setMessage("");
    } catch (error: any) {
      console.error("Tip failed:", error);
      toast.error(error.message || "Failed to send tip");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.button
        onClick={handleOpenModal}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-cyan-600/20 to-pink-600/20 border border-cyan-400/30 rounded-lg text-xs font-mono text-cyan-400 hover:bg-cyan-600/30 transition-colors"
        disabled={loading}
      >
        {loading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-3 h-3 border-2 border-cyan-400 border-t-transparent rounded-full"
          />
        ) : (
          <>
            <Zap className="w-3 h-3" />
            TIP
          </>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <ModalPortal>
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 isolate">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-md bg-gray-900 border border-cyan-400/30 rounded-xl shadow-2xl overflow-hidden"
              >
                <div className="p-4 border-b border-cyan-400/20 flex justify-between items-center">
                  <h3 className="text-sm font-mono text-cyan-400">SEND MXNB TIP</h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    disabled={loading}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-cyan-400">AMOUNT</label>
                    <div className="flex items-center border border-cyan-400/20 rounded-lg overflow-hidden">
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => {
                          setAmount(e.target.value);
                          setNeedsApproval(true); // Reset approval state when amount changes
                        }}
                        placeholder="0.00"
                        className="flex-1 bg-transparent px-4 py-3 text-base text-cyan-100 outline-none"
                        disabled={loading}
                      />
                      <div className="px-3 py-3 bg-gray-800 text-sm font-mono text-cyan-400">
                        MXNB
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono text-cyan-400">MESSAGE (OPTIONAL)</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Add a supportive message..."
                      className="w-full bg-gray-800/50 border border-cyan-400/20 rounded-lg px-4 py-3 text-sm text-cyan-100 placeholder-cyan-400/50 outline-none resize-none"
                      rows={3}
                      disabled={loading}
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={needsApproval ? handleApprove : handleTip}
                      disabled={loading || !amount || isNaN(parseFloat(amount))}
                      className={`w-full py-3 bg-gradient-to-r from-cyan-600 to-pink-600 text-sm font-mono font-bold text-white rounded-lg transition-all flex items-center justify-center gap-2 ${
                        loading ? "opacity-60 cursor-not-allowed" : "hover:from-cyan-700 hover:to-pink-700"
                      }`}
                    >
                      {loading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          <Zap className="w-4 h-4" />
                          {needsApproval ? "APPROVE" : "CONFIRM TIP"}
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400/80 to-cyan-400/0" />
              </motion.div>
            </div>
          </ModalPortal>
        )}
      </AnimatePresence>
    </>
  );
}