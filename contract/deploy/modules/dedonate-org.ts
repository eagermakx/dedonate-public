import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import * as fs from "fs/promises" 

const proposalHash = "0xc2d0aacaf1f82a7f96a3017e7f5237e812d67b1194a4a5d196d1ecb82e375964"

const params = {
    proposalHash: proposalHash,
    collectAt: 1718443708, // Sat Jun 15 2024 09:28:28 GMT+0000
    vestingAt: 1719307708, // Tue Jun 25 2024 09:28:28 GMT+0000
    vestingDuration: 7776000, // 90 days
    minimalDonation: 1000000000,
    donationsGoal: 1000000000000 // 1000 $
}

const deployDeDonateOrg: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
) {
    const {getNamedAccounts, deployments, network} = hre;
    const {execute, deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();

    const spUSD = await deployments.get("spUSD");

    const treasuryArgs = [
        spUSD.address
    ]
    const treasury = await deploy("Treasury", {
        from: deployer,
        args: treasuryArgs,
        log: true
    })
    // await hre.run("verify:verify", {
    //     address: treasury.address,
    //     constructorArguments: treasuryArgs,
    //     network: "siberium_testnet"
    // });

    // __ __ __ __ __

    const vestingScheduleArgs = [
        spUSD.address,
        treasury.address,
        params.vestingAt,
        params.vestingDuration
    ]
    const vestingSchedule = await deploy("VestingSchedule", {
        from: deployer,
        args: vestingScheduleArgs,
        log: true
    })
    // await hre.run("verify:verify", {
    //     address: vestingSchedule.address,
    //     constructorArguments: vestingScheduleArgs,
    //     network: "siberium_testnet"
    // });

    const documentsArgs = [
        proposalHash
    ]
    const documents = await deploy("Documents", {
        from: deployer,
        args: documentsArgs,
        log: true
    })
    // await hre.run("verify:verify", {
    //     address: documents.address,
    //     constructorArguments: documentsArgs,
    //     network: "siberium_testnet"
    // });

    const sponsorTokenArgs = [
        vestingSchedule.address,
        spUSD.address,
        "DeDonate CrowdFund Governance Token",
        "CrowdFundGovToken",
        [],
        params.donationsGoal,
        params.minimalDonation,
        params.collectAt,
        params.vestingAt
    ]
    const sponsorToken = await deploy("SponsorToken", {
        from: deployer,
        args: sponsorTokenArgs,
        log: true        
    })
    // await hre.run("verify:verify", {
    //     address: sponsorToken.address,
    //     constructorArguments: sponsorTokenArgs,
    //     network: "siberium_testnet"
    // });

    const sponsorGovernorArgs = [
        sponsorToken.address,
        vestingSchedule.address,
        documents.address,
        "DeDonate Sponsorship Governor"
    ]
    const sponsorGovernor = await deploy("SponsorGovernor", {
        from: deployer,
        args: sponsorGovernorArgs,
        log: true
    })
    // await hre.run("verify:verify", {
    //     address: sponsorGovernor.address,
    //     constructorArguments: sponsorGovernorArgs,
    //     network: "siberium_testnet"
    // });

    // __ __ __ __ __

    const governanceTokenArgs = [
        "DeDonate Governance Token for 'DeDonate'",
        "DDNTgov"
    ]
    const governanceToken = await deploy("GovernanceToken", {
        from: deployer,
        args: governanceTokenArgs,
        log: true
    })
    await hre.run("verify:verify", {
        address: governanceToken.address,
        constructorArguments: governanceTokenArgs,
        network: "siberium_testnet"
    });
    await governanceToken

    // __ __ __ __ __

    const governorArgs = [
        governanceToken.address,
        treasury.address,
        "t.me/i_am_eager",
        "DeDonate Platform Development",
        [deployer],
        [sponsorGovernor.address]
    ]
    const governor = await deploy("DAOGovernor", {
        from: deployer,
        args: governorArgs,
        log: true,
        gasLimit: 7000000
    })
    // await hre.run("verify:verify", {
    //     address: governor.address,
    //     constructorArguments: governorArgs,
    //     network: "siberium_testnet"
    // });

    // ###############################################3
    // Change ownerships

    // await execute(
    //     'GovernanceToken',
    //     {from: deployer, log: true},
    //     "transferOwnership",
    //     governor.address
    // );

    // await execute(
    //     'Documents',
    //     {from: deployer, log: true},
    //     "transferOwnership",
    //     governor.address
    // );
    
    // await execute(
    //     'VestingSchedule',
    //     {from: deployer, log: true},
    //     "transferOwnership",
    //     sponsorToken.address
    // );

    // await execute(
    //     'SponsorToken',
    //     {from: deployer, log: true},
    //     "transferOwnership",
    //     sponsorGovernor.address
    // );

    // await execute(
    //     'Treasury',
    //     {from: deployer, log: true},
    //     "transferOwnership",
    //     governor.address
    // );
}

export default deployDeDonateOrg;