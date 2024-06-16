import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import * as fs from "fs/promises" 

const deployPlatform: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
) {
    const {getNamedAccounts, deployments, network} = hre;
    const {execute, deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();

    const spUSD = await deploy("spUSD", {
        from: deployer,
        args: [],
        log: true,
    });

    // await hre.run("verify:verify", {
    //     address: spUSD.address,
    //     constructorArguments: [],
    //     network: "siberium_testnet",
    //     force: true
    // });

    const platform = await deploy("Platform", {
        from: deployer,
        args: [
            spUSD.address
        ],
        log: true
    })

    // await hre.run("verify:verify", {
    //     address: platform.address,
    //     constructorArguments: [
    //         spUSD.address
    //     ],
    //     network: "siberium_testnet",
    //     force: true
    // });

    // await execute(
    //     'spUSD',
    //     {from: deployer, log: true},
    //     "transferOwnership",
    //     platform.address,
    // );
}

export default deployPlatform;