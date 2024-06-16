interface SpUSDInfo {
    tvl: number,
    contract: string
}

interface PlatformInfo {
    contract: string,
    count: number,
    orgs: string[]
}

interface RootInfo {
    spUSD: SpUSDInfo,
    platform: PlatformInfo
}

interface ContributorInfo {
    name: string,
    githubAccount: string
}

interface TreasuryInfo {
    contract: string,
    balance: number,
    allowances: {
        [address: string]: number
    }
}

interface GenericStateInfo {
    state: string,
    at: number
}

interface DAOProposalVoterInfo {
    vote: string,
    votedAt: number
}

interface DAOProposalInfo {
    title: string,
    description: string,
    createdAt: number,
    createdBy: string,
    proposalState: string
    states: GenericStateInfo[]
    for: number,
    abstain: number,
    voters: {
        [address: string]: DAOProposalVoterInfo
    }
}

interface GovernanceInfo {
    governor: string,
    token: string,
    proposals: {
        [address: string]: DAOProposalInfo
    }
}

interface DocumentsInfo {
    contract: string,
    proposal: string,
    reports: string[]
}

interface VestingInfo {
    vestingSchedule: string,
    startingAmount: number,
    remainingAmount: number,
    releasable: number,
    released: number,
    startTimestamp: number,
    endTimestamp: number
}

interface FundInfo {
    sponsorWhitelist: {
        [address: string]: boolean
    },
    sponsors: {
        [address: string]: number
    },
    fundingState: string,
    states: GenericStateInfo[],
    donationsGoal: number,
    donationsTotal: number,
    minimalDonation: number,
    vestingStartsAt: number,
    collectStartsAt: number,
    sponsorToken: string,
    sponsorGovernor: string,
    proposals: {},
    documents: DocumentsInfo,
    vesting: VestingInfo
}

interface OrgInfo {
    title: string,
    description: string,
    homepage: string,
    githubUrl: string,
    socials: string[],
    maintainers: string[],
    contributors: {
        [address: string]: ContributorInfo
    },
    treasury: TreasuryInfo,
    governance: GovernanceInfo,
    funds: {
        [address: string]: FundInfo
    }
}

interface SystemInfo {
    platform: RootInfo,
    orgs: {
        [address: string]: OrgInfo
    }
}

export type {
    SystemInfo,
    OrgInfo
};