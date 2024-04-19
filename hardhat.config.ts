// Imports
// ========================================================
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import * as dotenv from "dotenv"; 

// Load Environment Variables
// ========================================================
dotenv.config();

// Main Hardhat Config
// ========================================================
const config: HardhatUserConfig = {
     solidity: {
        compilers: [
            {
              version: "0.8.19",
            },
            {
              version: "0.5.0",
              settings: {
                evmVersion: "constantinople" 
              },
            },
          
          ],
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
  networks: {
    // For localhost network
    hardhat: {
      chainId: 1337,
    },
    // NOTE: hardhat viem currently doesn't yet support this method for custom chains through Hardhat config ↴
    berachainTestnet: {
      chainId: parseInt(`${process.env.CHAIN_ID}`),
      url: `${process.env.RPC_URL || ''}`,
      accounts: process.env.WALLET_PRIVATE_KEY
        ? [`${process.env.WALLET_PRIVATE_KEY}`]
        : [],
    }
  }
};

// Exports
// ========================================================
export default config;