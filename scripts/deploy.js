const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL = "ipfs://QmUxBA5K9ehF3uwV8Xc5m4n2ENvU4XjnwXpzRPTN3EtbCV/";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so lw3PunksContract here is a factory for instances of our LW3Punks contract.
  */
  const lw3PunksContract = await ethers.getContractFactory("LW3Punks");

  // deploy the contract
  const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL);

  await deployedLW3PunksContract.deployed();

  // print the address of the deployed contract
  console.log("LW3Punks Contract Address:", deployedLW3PunksContract.address);

  console.log("Sleeping and waiting for verification✨.....");
  // Wait for polygonscan to notice that the contract has been deployed
  await sleep(40000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: deployedLW3PunksContract.address,
    constructorArguments: [ 
      // 50,
      metadataURL,
      // {
      //   x: 10,
      //   y: 5,
      // },
      //0x..
    ],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });