// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.26;

// import {Treasury} from "./Treasury.sol";
// import {GovernanceToken} from "./GovernanceToken.sol";
// import {DAOGovernor} from "./Governor.sol";

// import {IVotes} from "@openzeppelin/contracts/governance/utils/IVotes.sol";

// contract DAODeployer {
//     GovernanceToken token;
//     DAOGovernor governor;
//     Treasury treasury;

//     constructor(
//         string memory _org,
//         string memory _repoUrl,
//         address[] memory _participants,
//         address _spUSDaddr
//     ) {
//         string memory ticker = string(abi.encodePacked("DeDonateDAO[", _org, "]"));
//         string memory tokenName = string(abi.encodePacked(_org, "- Governance Token"));
//         token = new GovernanceToken(address(this), tokenName, ticker);
//         treasury = new Treasury(address(this), _spUSDaddr);
//         governor = new DAOGovernor(token, treasury, _repoUrl, _org, _participants);
//         token.transferOwnership(address(governor));
//         treasury.transferOwnership(address(governor));
//     }
// }
