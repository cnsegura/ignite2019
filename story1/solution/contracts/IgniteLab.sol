pragma solidity ^0.5.0;

import "./openZeppelin/token/ERC20/ERC20.sol";
import "./openZeppelin/token/ERC20/ERC20Detailed.sol";

contract IgniteLab is ERC20, ERC20Detailed {
    constructor(uint256 initialSupply) ERC20Detailed("Ignite", "IGNTE", 18) public {
        _mint(msg.sender, initialSupply);
    }
}