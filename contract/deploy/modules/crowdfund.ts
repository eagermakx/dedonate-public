// import { HardhatRuntimeEnvironment } from "hardhat/types";
// import { DeployFunction } from "hardhat-deploy/types";
// import * as fs from "fs/promises" 

// const proposalHash = "c2d0aacaf1f82a7f96a3017e7f5237e812d67b1194a4a5d196d1ecb82e375964"

// const params = {
//     proposalHash: proposalHash,
//     collectAt: 1718443708, // Sat Jun 15 2024 09:28:28 GMT+0000
//     vestingAt: 1719307708, // Tue Jun 25 2024 09:28:28 GMT+0000
//     vestingDuration: 7776000 // 90 days
// }

// const deployCrowdFund: DeployFunction = async function(
//     hre: HardhatRuntimeEnvironment
// ) {
//     const {getNamedAccounts, deployments, network} = hre;
//     const {execute, deploy, log} = deployments;
//     const {deployer} = await getNamedAccounts();

//     const spUSD = await deployments.get("spUSD");

//     const documentsArg = [
//         proposalHash
//     ]
//     const documents = await deploy("Documents", {
//         from: deployer,
//         args: documentsArg
//     })
//     await hre.run("verify:verify", {
//         address: documents.address,
//         constructorArguments: documentsArg,
//         network: "siberium_testnet"
//     });

//     // __ __ __ __ __

//     const vestingScheduleArgs = [
//         spUSD.address,

//     ]
//     const governanceToken = await deploy("GovernanceToken", {
//         from: deployer,
//         args: governanceTokenArgs,
//     })
//     await hre.run("verify:verify", {
//         address: governanceToken.address,
//         constructorArguments: governanceTokenArgs,
//         network: "siberium_testnet"
//     });

//     // __ __ __ __ __

//     const governorArgs = [
//         "DeDonate Governance Token for 'DeDonate'",
//         "DDNTgov"
//     ]
//     const governor = await deploy("Governor", {
//         from: deployer,
//         args: governorArgs,
//     })
//     await hre.run("verify:verify", {
//         address: governor.address,
//         constructorArguments: governorArgs,
//         network: "siberium_testnet"
//     });

// }

// export default deployDeDonateOrg;