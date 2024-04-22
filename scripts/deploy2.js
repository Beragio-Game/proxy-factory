const hre = require("hardhat");

async function main() {

   const MyContract = await hre.ethers.getContractFactory("ProxyWalletFactory");
   const myContract = await MyContract.deploy();

   await myContract.deployed();

   console.log(`Proxy Factory deployed to ${myContract.address}`);


}

main().catch((error) => {
   console.error(error);
   process.exitCode = 1;
});