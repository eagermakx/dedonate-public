// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {spUSD} from "./spUSD.sol";

contract Platform is Ownable {
    address[] private orgs;
    mapping(address => bool) private validOrgs;

    spUSD public SpUSD;

    constructor(
        spUSD _SpUsd
    ) Ownable(msg.sender) {
        SpUSD = _SpUsd;
    }

    function add(address _orgRoot) public onlyOwner {
        orgs.push(_orgRoot);
        validOrgs[_orgRoot] = true;
    }

    function valid(address org) external view returns (bool) {
        return validOrgs[org];
    }

    function count() public view returns (uint256) {
        return orgs.length;
    }

    function index(uint256 _at) external view returns (address) {
        if (_at < count()) {
            return orgs[_at];
        }

        return address(0);
    }
}