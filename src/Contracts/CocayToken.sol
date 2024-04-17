// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CocayToken is ERC20 {
  constructor() ERC20("CocayToken", "Cocay") {
        _mint(address(this), 22000000 * (10 ** uint256(decimals())));
        _approve(address(this), msg.sender, totalSupply());
        _transfer(address(this), msg.sender, totalSupply());
  }
}