// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Governor} from "@openzeppelin/contracts/governance/Governor.sol";
import {GovernorVotes} from "@openzeppelin/contracts/governance/extensions/GovernorVotes.sol";
import {GovernorCountingSimple} from "@openzeppelin/contracts/governance/extensions/GovernorCountingSimple.sol";
import {GovernorSettings} from "@openzeppelin/contracts/governance/extensions/GovernorSettings.sol";
import {GovernorStorage} from "@openzeppelin/contracts/governance/extensions/GovernorStorage.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {IVotes} from "@openzeppelin/contracts/governance/utils/IVotes.sol";

import {GovernanceToken} from "./GovernanceToken.sol";
import {Treasury} from "./Treasury.sol";

contract DAOGovernor is GovernorVotes, GovernorCountingSimple {
    string constant NAME = "DeDonate Organization Governor";
    string constant VERSION = "v0.1";

    string public repositoryUrl;
    string public organization;

    address[] public funds;

    GovernanceToken governanceToken;
    Treasury treasury;

    address[] public founders;
    mapping(address => bool) public isFounder;

    constructor(
        GovernanceToken _token,
        Treasury _treasury,
        string memory _repoUrl,
        string memory _org,
        address[] memory _participants,
        address[] memory _funds
    ) Governor(NAME) GovernorVotes(_token) GovernorCountingSimple() {
        governanceToken = _token;
        treasury = _treasury;
        repositoryUrl = _repoUrl;
        organization = _org;
        funds = _funds;

        for (uint i = 0; i < _participants.length; i++) {
            address _user = _participants[i];
            isFounder[_user] = true;
        }
    }

    function founderClaim() external {
        address user = msg.sender;
        require(isFounder[user], "not a founder");
        require(governanceToken.balanceOf(user) == 0, "invalid user");

        _promote(user);
    }
    
    function _promote(address user) internal {
        require(governanceToken.balanceOf(user) == 0, "invalid user");
        governanceToken.mint(user);
    }

    function _demote(address user) internal {
        require(governanceToken.balanceOf(user) != 0, "invalid user");
        governanceToken.burn(user);
    }

    function promote(address user) public onlyGovernance {
        _promote(user);
    }

    function demote(address user) public onlyGovernance {
        _demote(user);
    }

    function votingDelay() public view override(Governor) returns (uint256) {
        return 600; // 10 mins
    }

    function votingPeriod() public view override(Governor) returns (uint256) {
        return 1800; // Half an hour
    }

    function quorum(uint256 timepoint) public view override(Governor) returns (uint256) {
        return token().getPastTotalSupply(timepoint) / 2 + 1;
    }
}