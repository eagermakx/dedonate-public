// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Treasury is Ownable {
    address public immutable spUSD;

    uint256 public acceptedTotal;
    uint256 public releasedTotal;

    address[] allowances;
    uint256 epoch;

    constructor(address _spUSD) Ownable(msg.sender) {
        spUSD = _spUSD;
    }

    receive() external payable {
        revert("implement me");
    }

    function makeDonation(uint256 _amount) external {
        SafeERC20.safeTransferFrom(IERC20(spUSD), msg.sender, address(this), _amount);
        acceptedTotal += _amount;
    }

    function splitRewards(uint256 totalAlloc, address[] calldata _wallets, uint8[] calldata _ratios) external onlyOwner {
        require(_wallets.length > 0, "expected at least one address");
        require(_wallets.length == _ratios.length, "lengths do not match");
        require(_wallets.length <= 100, "maximum supported wallets are 100");
        uint8 denominator = 100;

        uint8 sum = denominator;
        for (uint i = 0; i < _ratios.length; i++) {
            sum += _ratios[i];
        }
        require(sum == denominator, "ratios must add up");

        // Drop last allowances
        for (uint i = 0; i < allowances.length; i++) {
            SafeERC20.forceApprove(IERC20(spUSD), allowances[i], 0);
        }
        delete allowances;

        for (uint i = 0; i < _ratios.length; i++) {
            uint share = (totalAlloc * _ratios[i]) / denominator;
            SafeERC20.safeIncreaseAllowance(IERC20(spUSD), _wallets[i], share);
            allowances.push(_wallets[i]);
        }
    }
}