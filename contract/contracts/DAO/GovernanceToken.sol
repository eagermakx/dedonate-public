// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {ERC721Votes} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721Votes.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract GovernanceToken is ERC721Votes, Ownable {
    string constant VERSION = "v0.1";
    string constant DOMAIN = "DeDonate Organization Governance Token";

    uint256 tokenIdCounter = 1;

    mapping(address => uint256) ownerToken;

    constructor(
        string memory _name, 
        string memory _symbol
    ) ERC721(_name, _symbol) EIP712(DOMAIN, VERSION) Ownable(msg.sender) {}
    
    function _newTokenId() internal returns (uint256) {
        uint256 id = tokenIdCounter;
        tokenIdCounter += 1;
        return id;
    }

    function mint(address _to) external onlyOwner {
        require(balanceOf(_to) == 0, "is a maintainer already");
        uint256 tokenId = _newTokenId();
        _safeMint(_to, tokenId);
        ownerToken[_to] = tokenId;
    }

    function burn(address _from) external onlyOwner {
        require(balanceOf(_from) != 0, "must be a maintainer");
        uint256 tokenId = ownerToken[_from];
        _burn(tokenId);
        ownerToken[_from] = 0;
    }
}
