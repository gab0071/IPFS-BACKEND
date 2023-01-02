<h1 aling="center">NFT Collection with metadata stored on IPFS 👷‍♂️⛓</h1>

  <a href="https://github.com/maurodesouza/profile-readme-generator/blob/master/LICENSE.md" target="_blank">
    <img alt="Badge showing project license type" src="https://img.shields.io/github/license/maurodesouza/profile-readme-generator?color=f85149">
  </a>

  <a href="#" target="_blank">
    <img src="https://img.shields.io/badge/Solidity-%5E8.0.4-363636?style=flat-square" alt="Badge showing the solidity version"/>
  </a>

  <a href="#" target="_blank">
    <img src="https://img.shields.io/badge/hardhat-2.8.4-f8fc03?style=flat-square" alt="Badge showing the hardhat version"/>
  </a>

  <a href="https://github.com/gab0071" target="_blank">
    <img alt="Author" src="https://img.shields.io/badge/made%20by-CatellaTech-blueviolet?style=flat-square">
  </a>
 

  <br>
  <br>

This smart contract is an implementation of an ERC-721 contract (a type of decentralized cryptocurrency contract based on Ethereum that allows for the creation of non-fungible tokens). It is called `LW3Punks` and allows users to "mine" (create) one NFT (non-fungible token) per transaction by sending the appropriate amount of Ether. The NFT tokens have a `specified base URI` specified in the constructor call that is used to calculate the URI for each token. The contract also has a `setPaused` function that allows for pausing or resuming the contract, and a `withdraw` function that allows the contract owner to withdraw all Ether from the contract to their address. It also has a `receive` function and a `fallback` function that allow the contract to receive Ether from other addresses.

<h2> Requirements </h2>

- There should only exist 10 LearnWeb3 Punk NFT's and each one of them should be unique.
- User's should be able to mint only 1 NFT with one transaction.
- The metadata for the NFT's should be stored on IPFS
- There should be a website for your NFT Collection.
- The NFT contract should be deployed on Mumbai testnet

You can see the smart contract on Polygonscan: <a href="https://mumbai.polygonscan.com/address/0xe4a6a7249730a9d19587c7ef67e87d11a95d193c">Project</a>.

🚨 Note: Remember to put your polygonScan API in your `.env` file, as there is a script in `scripts/deploy.js` to instantly verify our smart contract after it is deployed.

<hr>
<h2> Installing / Getting started </h2>

```bash
# Clone this project
$ git clone https://github.com/gab0071/IPFS-BACKEND

# Access
$ cd IPFS-BACKEND

# Install dependencies
$ npm install

``` 

<h2>Commands</h2>

- $ ` npx hardhat compile `
- $ ` npx hardhat run scripts/deploy.js --network mumbai`

<h2> Technologies / Built With </h2>

- Solidity
- Metamask
- <a href="https://www.npmjs.com/package/@openzeppelin/contracts"> OpenZeppelin </a>
- <a href="https://hardhat.org/">Hardhat Framework</a>
- <a href="https://polygonscan.com/login">Polygonscan</a>

<h2>License</h2>

<p>This project is under license from MIT. For more details, see the LICENSE file.</p>

<h2>Contributing</h2>
Contributions are always welcome! Open a PR or an issue!

<br>
<br>

<p align="center">
<br/>
  Made with ❤️ by <b>catellaTech</b>.
<p/>