"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, X } from "lucide-react";
import { useWallets } from "@privy-io/react-auth";
import { ethers } from "ethers";
import { toast } from "react-hot-toast";
import ModalPortal from "./ModalPortal"; // ✅ Import the portal

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
  const { wallets } = useWallets();
  const wallet = wallets[0];

  const tokenOptions = [
    { address: "0x82B9e52b26A2954E113F94Ff26647754d5a4247D", symbol: "MXNB", decimal: 6 },
  ];

  const handleTip = async () => {
    if (!wallet?.address) {
      toast.error("Connect your wallet to send tips");
      return;
    }

    if (!amount || isNaN(parseFloat(amount))) {
      toast.error("Enter a valid amount");
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(await wallet.getEthereumProvider());
      const signer = provider.getSigner();

      const token = tokenOptions.find((t) => t.symbol === selectedToken);
      if (!token) throw new Error("Invalid token selected");
        console.log("token",token.address)
        console.log("recipient",recipientWallet)
      const erc20 = new ethers.Contract(
        token.address,
        ["function transfer(address to, uint256 amount) returns (bool)"],
        signer
      );

      const decimals = token.decimal;
      const tx = await erc20.transfer(
        recipientWallet,
        ethers.utils.parseUnits("1", decimals)
      );

      const response = await fetch("/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-cyan-600/20 to-pink-600/20 border border-cyan-400/30 rounded-lg text-xs font-mono text-cyan-400 hover:bg-cyan-600/30 transition-colors"
      >
        <Zap className="w-3 h-3" />
        TIP
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
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        className="flex-1 bg-transparent px-4 py-3 text-base text-cyan-100 outline-none"
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
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleTip}
                      className="w-full py-3 bg-gradient-to-r from-cyan-600 to-pink-600 text-sm font-mono font-bold text-white rounded-lg hover:from-cyan-700 hover:to-pink-700 transition-all flex items-center justify-center gap-2"
                    >
                      <Zap className="w-4 h-4" />
                      CONFIRM TIP
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
