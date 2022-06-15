const hre = require("hardhat");

const pk = process.env.dapk

async function main() {
  const CONTRACT_ID = "0x9FB4aE4F5C848f3d85CFEDc3Ee4776Fdae51ADAd";
  const CFNFT = await hre.ethers.getContractAt("CFNFT", CONTRACT_ID);

  const [owner] = await hre.ethers.getSigners()
  const signer = pk ? new hre.ethers.Wallet(pk, hre.ethers.provider) : owner

  const contract = CFNFT.connect(signer);
  await contract.pauseSale()

  console.log("Paused sale");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("something went wrong")
    console.error(error);
    process.exit(1);
  });
