//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet, Zap, Shield, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ethers } from 'ethers';
import { usePrivy, useWallets } from '@privy-io/react-auth';

interface TokenBalance {
  contract: string;
  balance: string;
  symbol: string;
  decimals: number;
}

interface HeaderProps {
  glitchEffect?: boolean;
  userStakingPower?: number;
  erc20Contracts?: string[]; // Array of ERC20 contract addresses
}

const Header: React.FC<HeaderProps> = ({ 
  glitchEffect = false, 
  userStakingPower = 0,
  erc20Contracts = [],
  connectWallet
}) => {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);
  const [tokenBalances, setTokenBalances] = useState<TokenBalance[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const { authenticated, user, logout } = usePrivy();
  const { wallets } = useWallets();
  const wallet = wallets[0];
  const walletAddress = wallet?.address;

  const truncatedAddress = walletAddress 
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : '';

  useEffect(() => {
    if (isHovering && authenticated && walletAddress && erc20Contracts.length > 0 && wallet) {
      fetchTokenBalances();
    }
  }, [isHovering, authenticated, walletAddress, erc20Contracts, wallet]);

const fetchTokenBalances = async () => {
  if (!wallet || !walletAddress) return;

  setIsLoading(true);
  setTokenBalances([]);

  try {
    const privyProvider = await wallet.getEthereumProvider();
  
    const provider = new ethers.providers.Web3Provider(privyProvider);
    console.log("provider",provider)

    const balanceOfAbi = ['function balanceOf(address) view returns (uint256)'];

    const balances = await Promise.all(
      erc20Contracts.map(async ({contractAddress,symbol,decimal}) => {
        try {
          // Validate contract address format
          if (!ethers.utils.isAddress(contractAddress)) {
            console.warn(`Invalid contract address: ${contractAddress}`);
            return null;
          }

          const contract = new ethers.Contract(contractAddress, balanceOfAbi, provider);

          // Use callStatic to simulate safely
          const balance = await contract.callStatic.balanceOf(walletAddress).catch(() => {
            console.warn(`Skipping invalid ERC20: ${contractAddress}`);
            return null;
          });
          console.log("balance",ethers.utils.formatUnits(balance, decimal))

          if (balance === null) return null;

          return {
            contract: contractAddress,
            balance: ethers.utils.formatUnits(balance, decimal),
            symbol
          };
        } catch (error) {
          console.warn(`Balance check failed for ${contractAddress}`, error.message);
          return null;
        }
      })
    );

    setTokenBalances(
      balances.filter((b) => b && b.balance !== '0.0') as TokenBalance[]
    );
  } catch (error) {
    console.error('Token balance fetch error:', error);
  } finally {
    setIsLoading(false);
  }
};


  const handleWalletClick = () => {
    if (authenticated) {
      router.push('/profile');
    }
  };



  return (
    <motion.header 
      className="border-b border-cyan-400/30 bg-black/50 backdrop-blur-md sticky top-0 z-40"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <motion.div 
          className="flex items-center space-x-3 sm:space-x-4"
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-pink-400 rounded-lg flex items-center justify-center flex-shrink-0">
            <Zap className="text-black w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-black bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              NEURAL_TIP
            </h1>
            <p className="text-xs text-gray-400 font-mono hidden sm:block">ARTIST_SUPPORT_PROTOCOL</p>
          </div>
        </motion.div>

        <div className="w-full sm:w-auto flex items-center justify-end space-x-2 sm:space-x-4">
          {authenticated && (
            <>
              <motion.div 
                className="flex items-center space-x-2 bg-gray-900/50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-cyan-400/30 flex-shrink-0"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
                <span className="text-xs sm:text-sm font-mono text-green-400">{userStakingPower} SP</span>
              </motion.div>

              <div className="relative">
                <motion.button
                  onClick={handleWalletClick}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="flex items-center space-x-2 bg-gray-900/50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border border-cyan-400/30 hover:bg-gray-800/50 transition-colors"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Wallet className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                  <span className="text-xs sm:text-sm font-mono text-cyan-400">{truncatedAddress}</span>
                </motion.button>

                <AnimatePresence>
                  {isHovering && authenticated && (
                    <motion.div
                      className="absolute right-0 mt-2 w-48 sm:w-64 z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-gray-900 border border-cyan-400/30 rounded-lg shadow-lg overflow-hidden">
                        <div className="p-3 border-b border-cyan-400/20">
                          <p className="text-xs font-mono text-cyan-400">Token Balances</p>
                        </div>
                        <div className="max-h-60 overflow-y-auto">
                          {isLoading ? (
                            <div className="p-3 flex justify-center">
                              <div className="animate-pulse text-xs text-gray-400">Loading balances...</div>
                            </div>
                          ) : tokenBalances.length > 0 ? (
                            tokenBalances.map((token, index) => (
                              <div 
                                key={token.contract} 
                                className={`p-2 flex justify-between items-center ${index !== tokenBalances.length - 1 ? 'border-b border-cyan-400/10' : ''}`}
                              >
                                <span className="text-xs font-mono text-gray-300">{token.symbol}</span>
                                <span className="text-xs font-mono text-cyan-400">
                                  {parseFloat(token.balance).toFixed(4)}
                                </span>
                              </div>
                            ))
                          ) : (
                            <div className="p-3">
                              <p className="text-xs text-gray-400 text-center">
                                {erc20Contracts.length > 0 ? 'No token balances found' : 'No tokens configured'}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </>
          )}

          {authenticated ? (
            <motion.button
              onClick={logout}
              className="flex-shrink-0 flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-mono font-bold transition-all duration-300 text-sm sm:text-base bg-red-600/20 text-red-400 border border-red-400/50 hover:bg-red-600/30 hover:shadow-lg hover:shadow-red-500/10"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">DISCONNECT</span>
            </motion.button>
          ) : (
            <motion.button
              onClick={connectWallet}
              disabled={authenticated}
              className={`flex-shrink-0 flex items-center justify-center space-x-1.5 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-mono font-bold transition-all duration-300 text-sm sm:text-base ${
                authenticated
                  ? 'bg-green-600/20 text-green-400 border border-green-400/50'
                  : 'bg-gradient-to-r from-cyan-600 to-pink-600 hover:from-cyan-700 hover:to-pink-700 text-white border border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/25'
              } ${glitchEffect ? 'animate-pulse' : ''}`}
              whileHover={!authenticated ? { scale: 1.02 } : {}}
              whileTap={!authenticated ? { scale: 0.98 } : {}}
            >
              <Wallet size={16} />
              <span>{authenticated ? 'NEURAL_LINK_ACTIVE' : 'CONNECT_WALLET'}</span>
            </motion.button>
          )}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;