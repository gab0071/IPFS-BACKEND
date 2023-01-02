require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

// https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-etherscan
// npx hardhat run scripts/deploy.js --network mumbai

const URL = process.env.ALCHEMY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGON_API_KEY = process.env.POLYGON_API_KEY || ""

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: URL,
      accounts: [PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: POLYGON_API_KEY,
  },
};