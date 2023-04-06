// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Mintable721 is ERC721URIStorage, Ownable{
    uint256 public _CUR_TOKEN_;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol){}

    function mint(
        address[] calldata receivers,
        string[] calldata uris
    )external onlyOwner{
        require(receivers.length == uris.length,"PARAMS NOT MATCHED");
        for(uint256 i = 0; i < receivers.length; i++){
            _safeMint(receivers[i], _CUR_TOKEN_);
            _setTokenURI(_CUR_TOKEN_, uris[i]);
            _CUR_TOKEN_ = _CUR_TOKEN_ + 1;
        }
    }
}