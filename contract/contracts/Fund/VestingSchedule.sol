// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {VestingWallet} from "@openzeppelin/contracts/finance/VestingWallet.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

import {spUSD} from "../Platform/spUSD.sol";

contract VestingSchedule is Ownable {
    event SpUSDReleased(uint256 amount);

    spUSD SpUSD;

    address public immutable beneficiary;
    uint256 private released;
    uint64 private immutable start;
    uint64 private immutable duration;

    /**
     * @dev Sets the sender as the initial owner, the beneficiary as the pending owner, the start timestamp and the
     * vesting duration of the vesting wallet.
     */
    constructor(
        address _spUSD,
        address _beneficiary, 
        uint64 _startTimestamp, 
        uint64 _durationSeconds
    ) payable Ownable(msg.sender) {
        SpUSD = spUSD(_spUSD);
        beneficiary = _beneficiary;
        start = _startTimestamp;
        duration = _durationSeconds;
    }

    /**
     * @dev Getter for the end timestamp.
     */
    function end() public view virtual returns (uint256) {
        return start + duration;
    }

    /**
     * @dev Getter for the amount of releasable eth.
     */
    function releasable() public view virtual returns (uint256) {
        return vestedAmount(uint64(block.timestamp)) - released;
    }

    /**
     * @dev Release the tokens that have already vested.
     *
     * Emits a {ERC20Released} event.
     */
    function release() public virtual {
        uint256 amount = releasable();
        released += amount;
        emit SpUSDReleased(amount);
        SafeERC20.safeTransferFrom(IERC20(SpUSD), owner(), beneficiary, amount);
    }

    /**
     * @dev Calculates the amount of tokens that has already vested. Default implementation is a linear vesting curve.
     */
    function vestedAmount(uint64 timestamp) public view virtual returns (uint256) {
        return _vestingSchedule(IERC20(SpUSD).allowance(owner(), address(this)) + released, timestamp);
    }

    /**
     * @dev Virtual implementation of the vesting formula. This returns the amount vested, as a function of time, for
     * an asset given its total historical allocation.
     */
    function _vestingSchedule(uint256 totalAllocation, uint64 timestamp) internal view virtual returns (uint256) {
        if (timestamp < start) {
            return 0;
        } else if (timestamp >= end()) {
            return totalAllocation;
        } else {
            return (totalAllocation * (timestamp - start)) / duration;
        }
    }
}