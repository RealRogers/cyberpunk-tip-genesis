//@ts-nocheck
"use client"
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ContentWidget from "./ContentWidget";

export default function ContentModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-900/80 border border-cyan-400/20 text-cyan-400 hover:bg-gray-800 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="border border-cyan-400/20 bg-gray-900/90 rounded-lg overflow-hidden">
              <ContentWidget />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}