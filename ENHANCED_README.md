# ethereum-l2-base-comparison

Educational repository comparing deployment and performance of the same dApp on Base vs other Ethereum L2s.

## Overview
This repo helps developers understand the differences in gas costs, speed, and developer experience when deploying identical smart contracts on Base versus other L2s or Ethereum mainnet.

## Tech Stack
- Solidity ^0.8.20
- Hardhat or Foundry for development & testing
- Ethers.js / viem for interaction

## Getting Started

```bash
git clone https://github.com/Proxtox/ethereum-l2-base-comparison.git
cd ethereum-l2-base-comparison
npm install
```

## Deploy
On Base Sepolia:
```bash
npx hardhat run scripts/deploy.js --network baseSepolia
```

On Ethereum Sepolia:
```bash
npx hardhat run scripts/deploy.js --network sepolia
```

## What's Inside
- `contracts/ComparisonContract.sol` - Simple contract used for benchmarking
- Scripts for deployment and gas comparison

## Next Steps
- Add gas benchmarking scripts
- Compare with Optimism, Arbitrum, etc.
- Add frontend interaction example

## License
MIT