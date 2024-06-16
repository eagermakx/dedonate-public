import "@nomicfoundation/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/config";
import 'hardhat-deploy';
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-ignition-ethers";
import '@typechain/hardhat';

// Ensure your configuration variables are set before executing the script

const { vars } = require("hardhat/config");

const PRIVATE_KEY = vars.get("PRIVATE_KEY");
const BSCSCAN_API_KEY = vars.get("SIBERIUM_EXPLORER_API_KEY")

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.26",
        settings: {
          optimizer: {
            enabled: true,
            runs: 77,
          },
        },
      },
    ]
  },
  // networks: {
  //   siberium_testnet: {
  //     chainId: 111000,
  //     url: `https://rpc.test.siberium.net`,
  //     accounts: [
  //       vars.get("PRIVATE_KEY")
  //     ],
  //   },
  // },
  // etherscan: {
  //   customChains: [
  //     {
  //       network: "siberium_testnet",
  //       chainId: 111000,
  //       urls: {
  //         apiURL: "https://explorer.test.siberium.net/api",
  //         browserURL: "https://explorer.test.siberium.net"
  //       },
  //     }
  //   ],
  //   apiKey: {
  //     siberium_testnet: ""
  //   }
  // },
  networks: {
    siberium_testnet: {
      chainId: 111000,
      url: `https://rpc.test.siberium.net`,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    customChains: [
      {
        network: "siberium_testnet",
        chainId: 111000,
        urls: {
          apiURL: "https://explorer.test.siberium.net/api",
          browserURL: "https://explorer.test.siberium.net"
        },
      }
    ],
    apiKey: {
      siberium_testnet: "null"
    }
  },
  namedAccounts: {
    deployer: {
        default: 0, // here this will by default take the first account as deployer
    },
  },
  sourcify: {
    enabled: false,
    apiUrl: "https://sourcify.dev/server",
    browserUrl: "https://repo.sourcify.dev",
  },
};

export default config;