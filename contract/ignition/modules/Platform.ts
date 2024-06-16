import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Platform", (m) => {
    const platform = m.contract("Platform", []);
    const spUSD = m.call(platform, "getSpUSD", []);
    const owner = m.call(platform, "owner", []);
    console.log(owner);

    const deployer = m.contract("Deployer", [
        "DeDonate DAO",
        "github.com/eagermakx/dedonate",
        ["0x273A55B3768037033604fb6da608908dec54Facc"],
        await platform
    ])

    return { platform };
});
