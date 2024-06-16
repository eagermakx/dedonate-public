import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

import deployPlatform from "./modules/platform";
import deployDeDonateOrg from "./modules/dedonate-org";

const deployFn: DeployFunction = async function(
    hre: HardhatRuntimeEnvironment
) {
    await deployPlatform(hre);
    await deployDeDonateOrg(hre);
}

export default deployFn;
