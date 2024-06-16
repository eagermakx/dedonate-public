// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Governor} from "@openzeppelin/contracts/governance/Governor.sol";
import {GovernorVotes} from "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import {GovernorCountingSimple} from "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import {GovernorSettings} from "@openzeppelin/contracts/governance/extensions/GovernorSettings.sol";
import {GovernorStorage} from "@openzeppelin/contracts/governance/extensions/GovernorStorage.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {IVotes} from "@openzeppelin/contracts/governance/utils/IVotes.sol";

import {SponsorToken} from "./SponsorToken.sol";
import {VestingSchedule} from "./VestingSchedule.sol";
import {Documents} from "./Documents.sol";

contract SponsorGovernor is GovernorVotes, GovernorCountingSimple {
    string constant NAME = "DeDonate CrowdFund Governor";

    string public roundName;

    SponsorToken public immutable sponsorToken;
    VestingSchedule  public immutable vestingSchedule;
    Documents    public immutable documents;

    constructor(
        SponsorToken _token,
        VestingSchedule _vestingSchedule,
        Documents _documents,
        string memory _name
    ) Governor(NAME) GovernorVotes(_token) GovernorCountingSimple() {
        roundName = _name;
        sponsorToken = _token;
        vestingSchedule = _vestingSchedule;
        documents = _documents;
    }

    function votingDelay() public view override(Governor) returns (uint256) {
        return 600; // 10 mins
    }

    function votingPeriod() public view override(Governor) returns (uint256) {
        return 86400; // Half an hour
    }
    
    function quorum(uint256 timepoint) public view override(Governor) returns (uint256) {
        return token().getPastTotalSupply(timepoint) / 2 + 1;
    }
}