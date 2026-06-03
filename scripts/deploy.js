const hre = require("hardhat");

async function main() {
  const ComparisonContract = await hre.ethers.getContractFactory("ComparisonContract");
  const contract = await ComparisonContract.deploy();
  await contract.deployed();
  console.log("ComparisonContract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});