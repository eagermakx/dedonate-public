import { ethers, Contract } from 'ethers';
import { chain } from './chain';

// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __
// Deployments

import spUSD_deployment from '../../contract/deployments/siberium_testnet/spUSD.json';
import platform_deployment from '../../contract/deployments/siberium_testnet/Platform.json';

import DAOGovernor_deployment from '../../contract/deployments/siberium_testnet/DAOGovernor.json';
import GovernanceToken_deployment from '../../contract/deployments/siberium_testnet/GovernanceToken.json';
import Treasury_deployment from '../../contract/deployments/siberium_testnet/Treasury.json';

import Documents_deployment from '../../contract/deployments/siberium_testnet/Documents.json';
import SponsorGovernor_deployment from '../../contract/deployments/siberium_testnet/SponsorGovernor.json';
import SponsorToken_deployment from '../../contract/deployments/siberium_testnet/SponsorToken.json';
import VestingSchedule_deployment from '../../contract/deployments/siberium_testnet/VestingSchedule.json';

// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __
// Compiled source

import spUSD_source from '../../contract/artifacts/contracts/Platform/spUSD.sol/spUSD.json';
import platform_source from '../../contract/artifacts/contracts/Platform/Platform.sol/Platform.json';

import DAOGovernor_source from '../../contract/artifacts/contracts/DAO/DAOGovernor.sol/DAOGovernor.json';
import GovernanceToken_source from '../../contract/artifacts/contracts/DAO/GovernanceToken.sol/GovernanceToken.json';
import Treasury_source from '../../contract/artifacts/contracts/DAO/Treasury.sol/Treasury.json';

import Documents_source from '../../contract/artifacts/contracts/Fund/Documents.sol/Documents.json';
import SponsorGovernor_source from '../../contract/artifacts/contracts/Fund/SponsorGovernor.sol/SponsorGovernor.json';
import SponsorToken_source from '../../contract/artifacts/contracts/Fund/SponsorToken.sol/SponsorToken.json';
import VestingSchedule_source from '../../contract/artifacts/contracts/Fund/VestingSchedule.sol/VestingSchedule.json';

// __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __
// Typechain types

import { 
    SpUSD, 
    Platform,
    DAOGovernor,
    GovernanceToken,
    Treasury,
    Documents,
    SponsorGovernor,
    SponsorToken,
    VestingSchedule
} from '../../contract/typechain-types';

export function useProvider() {
    return new ethers.JsonRpcProvider(chain().rpcUrl)
}

export function useContracts() {
    const provider = useProvider();

    return {
        SpUSD: (new Contract(spUSD_deployment.address, spUSD_source.abi, provider) as unknown) as SpUSD,
        Platform: (new Contract(platform_deployment.address, platform_source.abi, provider) as unknown) as Platform,

        DAOGovernor: (new Contract(DAOGovernor_deployment.address, DAOGovernor_source.abi, provider) as unknown) as DAOGovernor,
        GovernanceToken: (new Contract(GovernanceToken_deployment.address, GovernanceToken_source.abi, provider) as unknown) as GovernanceToken,
        Treasury: (new Contract(Treasury_deployment.address, Treasury_source.abi, provider) as unknown) as Treasury,

        Documents: (new Contract(Documents_deployment.address, Documents_source.abi, provider) as unknown) as Documents,
        SponsorGovernor: (new Contract(SponsorGovernor_deployment.address, SponsorGovernor_source.abi, provider) as unknown) as SponsorGovernor,
        SponsorToken: (new Contract(SponsorToken_deployment.address, SponsorToken_source.abi, provider) as unknown) as SponsorToken,
        VestingSchedule: (new Contract(VestingSchedule_deployment.address, VestingSchedule_source.abi, provider) as unknown) as VestingSchedule,
    }
}