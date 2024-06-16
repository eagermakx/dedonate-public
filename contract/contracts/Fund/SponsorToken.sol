// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {ERC20Votes} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import {spUSD} from "../Platform/spUSD.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

// Supposed to be owned by `SponsorshipGovernor`
// 
contract SponsorToken is ERC20Votes, Ownable {
    string constant ErrInvalidState = "invalid state";
    string constant ErrZeroBalance = "zero balance";
    string constant ErrDonationBelowMinimum = "donation below minimum";
    string constant ErrSponsorNotAllowed = "sponsor not allowed";

    string constant DOMAIN = "DeDonate CrowdFund Governance Token";
    string constant VERSION = "v0.1";

    enum FundingState {
        WAITING,
        COLLECTING,
        VESTING,
        ABORTED
    }

    FundingState public state;
    mapping(address => bool) isSponsorWhitelisted;
    address[] public sponsorWhitelist;

    spUSD SpUSD;
    uint256 public donationsTotal;
    uint256 public immutable donationsGoal;
    uint256 public immutable minimalDonation;

    uint64 public immutable collectStartsAt;
    uint64 public immutable vestingStartsAt;

    address private vestingSchedule;

    constructor(
        address _vestingSchedule,
        address _spUSD,
        string memory _name, 
        string memory _symbol,
        address[] memory _sponsorWhitelist,
        uint256 _donationsGoal,
        uint256 _minimalDonation,
        uint64 _collectStartsAt,
        uint64 _vestingStartsAt
    ) ERC20(_name, _symbol) EIP712(DOMAIN, VERSION) Ownable(msg.sender) {
        sponsorWhitelist = _sponsorWhitelist;
        for (uint i = 0; i < _sponsorWhitelist.length; i++) {
            address sponsor = _sponsorWhitelist[i];
            isSponsorWhitelisted[sponsor] = true;
        }

        vestingSchedule = _vestingSchedule;
        SpUSD = spUSD(_spUSD);
        state = FundingState.WAITING;
        donationsGoal = _donationsGoal;
        minimalDonation = _minimalDonation;
        collectStartsAt = _collectStartsAt;
        vestingStartsAt = _vestingStartsAt;
    }

    // __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __
    // State transitions

    function startCampaign() public {
        require(state == FundingState.WAITING, ErrInvalidState);
        if (block.timestamp >= collectStartsAt) {
            state = FundingState.COLLECTING;
        }
    }

    function finalizeCampaign() public {
        require(state == FundingState.COLLECTING, ErrInvalidState); 
        require(block.timestamp >= vestingStartsAt, "not so soon");

        if (donationsTotal > donationsGoal) {
            state = FundingState.VESTING;
            SafeERC20.safeIncreaseAllowance(IERC20(SpUSD), vestingSchedule, donationsTotal);
        } else {
            state = FundingState.ABORTED;
        }
    }

    // __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __
    // Token handling

    function makeDonation(uint256 _amount) public {
        require(state == FundingState.COLLECTING, ErrInvalidState);
        require(_amount > minimalDonation, ErrDonationBelowMinimum);

        // In certain cases we add shortlist for sponsors
        require(sponsorWhitelist.length == 0 || isSponsorWhitelisted[msg.sender], ErrSponsorNotAllowed);

        SafeERC20.safeTransferFrom(IERC20(SpUSD), msg.sender, address(this), _amount);
        donationsTotal += _amount;

        _mint(msg.sender, _amount);
    }

    function donationOf(address _account) external view returns (uint256) {
        return balanceOf(_account);
    }

    function remainingShareOf(uint256 _input) public view returns (uint256) {
        return (_input * SpUSD.balanceOf(address(this))) / donationsTotal;
    }

    function withdraw() public {
        require(state == FundingState.ABORTED, ErrInvalidState);
        address user = msg.sender;
        uint256 balance = balanceOf(user);
        require(balance > 0, ErrZeroBalance);
        require(SpUSD.balanceOf(address(this)) > balance, "not enough funds");

        _burn(user, balance);
        uint256 share = remainingShareOf(balance);
        SafeERC20.safeTransfer(IERC20(SpUSD), user, share);
    }
}