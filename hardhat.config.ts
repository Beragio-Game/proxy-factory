import { HardhatUserConfig } from "hardhat/config";
import { getRemoteNetworkConfig, mnemonic } from "./config";

import "hardhat-deploy";
// To make hardhat-waffle compatible with hardhat-deploy
// we have aliased hardhat-ethers to hardhat-ethers-deploy in package.json
import "@nomiclabs/hardhat-waffle";
// import "@typechain/hardhat";
import "solidity-coverage";

const accounts = {
    count: 10,
    initialIndex: 0,
    mnemonic,
    path: "m/44'/60'/0'/0",
};

const config: HardhatUserConfig = {
    defaultNetwork: "berachain",
    namedAccounts: {
        deployer: 0, // Do not use this account for testing
        admin: 1,
        trader: 2,
    },
    networks: {
        berachain: { 
            url: `https://artio.rpc.berachain.com/`,   
            accounts: [`${process.env.PRIVATE_KEY_DEPLOY}`]
         },
         sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/wJ4MOyRL_MQ9a3jJiFVpBGrfZf9jmVKL`,
            accounts: [`${process.env.PRIVATE_KEY_DEPLOY}`]
        },
    },
    paths: {
        artifacts: "./artifacts",
        cache: "./cache",
        sources: "./contracts",
    },
    solidity: {
        compilers: [
            {
                version: "0.5.10",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            }
        ],
    }
};

export default config;
