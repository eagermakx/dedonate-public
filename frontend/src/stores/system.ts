import { defineStore } from "pinia";

import { ethers } from "ethers";
import type { SystemInfo } from "./types/types";

export const useSystem = defineStore("system", {
    state: () => {
        return {
            platform: {
                spUSD: {
                    tvl: 1000000000,
                    contract: "0xb6b0BC7A991C5027Ef61A5856e7d0c38f2644d73"
                },
                platform: {
                    contract: "0x62EFCAa78CE12A978Df1bA2Cf39fa36c18aD2FFF",
                    count: 1,
                    orgs: [
                        "0x99b71c93C56f0fF261a963993eC409C0C47640f7"
                    ]
                }
            },
            orgs: {
                "0x99b71c93C56f0fF261a963993eC409C0C47640f7": {
                    title: "Example project",
                    description: "Example description",
                    homepage: "homepage url",
                    githubUrl: "github",
                    socials: [
                        "discordUrlHere",
                        "twitterUrlHere"
                    ],
                    maintainers: [
                        "0x5058368e0a74c7c252c723dcd93829c9a2e1773c",
                        "0x1da7f8ec5e9f31a97d7241933fd44db510a35cba"
                    ],
                    contributors: {
                        "0x1da7f8ec5e9f31a97d7241933fd44db510a35cba": {
                            name: "nickname1",
                            githubAccount: "github.com/nickname1"
                        },
                        "0x5058368e0a74c7c252c723dcd93829c9a2e1773c": {
                            name: "nickname2",
                            githubAccount: "github.com/nickname2"
                        }
                    },
                    treasury: {
                        contract: "0x1ae6a35a82947B38e3436A493bcbFddA276D4332",
                        balance: 1000000000000,
                        allowances: {
                            "0x1da7f8ec5e9f31a97d7241933fd44db510a35cba": 500000000000,
                            "0x5058368e0a74c7c252c723dcd93829c9a2e1773c": 500000000000
                        }
                    },
                    governance: {
                        governor: "0x99b71c93C56f0fF261a963993eC409C0C47640f7",
                        token: "0x00eE4852E137b285F890873F3B431584B00AA1b6",
                        proposals: {
                            "0x8db21f1c0576591697eccc91d4d8c8f2426f27eef5ed0e1016e6936fabe45169": {
                                title: "Create fundraising campaign in 1200 USDT",
                                description: "Lorem ipsum dolor sit amet",
                                createdAt: 1718443708,
                                createdBy: "0x1da7f8ec5e9f31a97d7241933fd44db510a35cba",
                                proposalState: "active",
                                states: [
                                    {
                                        state: "published",
                                        at: 1718443708
                                    },
                                    {
                                        state: "active",
                                        at: 1718448708
                                    }
                                ],
                                for: 1,
                                abstain: 0,
                                against: 0,
                                voters: {
                                    "0x1da7f8ec5e9f31a97d7241933fd44db510a35cba": {
                                        vote: "for",
                                        votedAt: 1718443708
                                    }
                                }
                            },
                            "0x8db22fdcef76591697eccc91d4d8c8f2426f27eef5ed0e1016e6936fabe45169": {
                                title: "Distribute rewards from financing equally",
                                description: "Lorem ipsum dolor sit amet",
                                createdAt: 1718443708,
                                createdBy: "0x1da7f8ec5e9f31a97d7241933fd44db510a35cba",
                                proposalState: "executed",
                                states: [
                                    {
                                        state: "published",
                                        at: 1718443708
                                    },
                                    {
                                        state: "active",
                                        at: 1718448708
                                    },
                                    {
                                        state: "succeeded",
                                        at: 1718448708
                                    },
                                    {
                                        state: "executed",
                                        at: 1718448708
                                    }
                                ],
                                for: 2,
                                abstain: 0,
                                against: 0,
                                voters: {
                                    "0x1da7f8ec5e9f31a97d7241933fd44db510a35cba": {
                                        vote: "for",
                                        votedAt: 1718443708
                                    },
                                    "0x5058368e0a74c7c252c723dcd93829c9a2e1773c": {
                                        vote: "for",
                                        votedAt: 1718443108
                                    }
                                }
                            }
                        },
                    },
                    funds: {
                        "0xB3669eE6E6A8e3401Ddbf97E7075e00d95d56f30": {
                            sponsorWhitelist: {},
                            sponsors: {
                                "0x273A55B3768037033604fb6da608908dec54Facc": 150000000000
                            },
                            fundingState: "vesting",
                            states: [
                                {
                                    state: "pending",
                                    at: 1718403708
                                },
                                {
                                    state: "collecting",
                                    at: 1718403798
                                },
                                {
                                    state: "vesting",
                                    at: 1718413798
                                }
                            ],
                            donationsGoal: 1000000000000,
                            donationsTotal: 150000000000,
                            minimalDonation: 1000000000,
                            vestingStartsAt: 1719307708,
                            collectStartsAt: 1718443708,
                            sponsorToken: "0x82169EFdFa789FD77105cB93B1701d74f8Ce1afC",
                            sponsorGovernor: "0xB3669eE6E6A8e3401Ddbf97E7075e00d95d56f30",
                            proposals: {},
                            documents: {
                                contract: "0xfA19E124f8F9B17Fc81BD1C5E3B7F2c7de9C4491",
                                proposal: "0xc2d0aacaf1f82a7f96a3017e7f5237e812d67b1194a4a5d196d1ecb82e375964",
                                reports: [
                                    "0xc2d0aacaf1f82a7f96a3017e7f5237e812d67b1194a4a5d196d1ecb82e375964"
                                ]
                            },
                            vesting: {
                                vestingSchedule: "0x7282b499E9171AE2055Ffdcb2585020CDE2B5dF9",
                                startingAmount: 1100000000000,
                                remainingAmount: 1000000000000,
                                releasable: 200000000000,
                                released: 100000000000,
                                startTimestamp: 1719307708,
                                endTimestamp: 1727083708
                            }
                        }
                    }
                }
            }
        } as SystemInfo
    }
})