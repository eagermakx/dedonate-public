// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

// Supposed to be owned by Project-DAO
//
contract Documents is Ownable {
    bytes32 private immutable projectDocHash;
    bytes32[] private projectReportHashes;

    constructor(
        bytes32 _projectDocHash
    ) Ownable(msg.sender) {
        projectDocHash = _projectDocHash;
    }

    function proposal() public view returns (bytes32) {
        return projectDocHash;
    }

    function reports() public view returns (bytes32[] memory) {
        return projectReportHashes;
    }

    function submitReport(bytes32 _docHash) public onlyOwner {
        projectReportHashes.push(_docHash);
    }
}