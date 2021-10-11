pragma solidity >=0.4.21 <0.6.0;

import "./ERC721Full.sol";

contract MemoryToken is ERC721Full {
  string public tokenName;
  string public tokenSymbol;
  constructor(string memory _name, string memory _symbol)ERC721Full(_name, _symbol) public{
tokenName = _name;
tokenSymbol = _symbol;
 } 
function creatToken()public{}
function mintToken(address _to, string memory _tokenURI)public returns(bool){
  uint _tokenId = totalSupply().add(1);
    _mint(_to,_tokenId);
    _setTokenURI(_tokenId,_tokenURI);
    return true;
}

}
