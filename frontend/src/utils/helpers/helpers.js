import { timestamp } from "@vueuse/core";

export const tokenToDecimal = (tokenAmount) => {
    return tokenAmount / 1000000000;
}

export const shortenHex = (hex) => {
    const hexLen = hex.length;
    return hex.substring(0, 6) + '...' + hex.substring(hexLen - 4, hexLen);
}

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const formatProjects = (orgs) => {
    let projects = [];

    for (let [address, org] of Object.entries(orgs)) {
        let funds = Object.values(org.funds);
        const fund = funds[funds.length - 1]

        let project = {
            address: address,
            title: org.title,
            github: org.githubUrl,
            donationsTotal: tokenToDecimal(fund.donationsTotal),
            donationsGoal: tokenToDecimal(fund.donationsGoal),
            fundingRounds: Object.keys(org.funds).length,
            teamCount: Object.keys(org.contributors).length,
            fundStatus: fund.fundingState,
        }

        projects.push(project);
    }

    return projects;
}

export const formatVoters = (voters) => {
    let res = [];

    for (let [address, voter] of Object.entries(voters)) {
        voter.address = address;

        res.push(voter)
    }

    return res;
}

export const formatTimeStamp = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
}

export const getExplorerLink = address => {
    const explorer = 'https://explorer.test.siberium.net/address/'

    return explorer + address;
}