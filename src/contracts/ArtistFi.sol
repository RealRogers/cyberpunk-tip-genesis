// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function transfer(address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract CyberpunkTipGenesis {
    // The ERC20 token used for tipping
    IERC20 public token;
    
    // Mapping to track each user's staking power (based on tips received and not withdrawn)
    mapping(address => uint256) public stakingPower;
    
    // Total Value Locked (TVL) in the contract
    uint256 public totalTVL;
    
    // Event emitted when a tip is sent
    event Tipped(address indexed from, address indexed to, uint256 amount);
    
    // Event emitted when a user withdraws funds
    event Withdrawn(address indexed user, uint256 amount);
    
    /**
     * @dev Constructor to set the ERC20 token address.
     * @param _token The address of the ERC20 token contract.
     */
    constructor(address _token) {
        require(_token != address(0), "Invalid token address");
        token = IERC20(_token);
    }
    
    /**
     * @dev Allows a user to tip another address by transferring ERC20 tokens to the contract.
     * The sender must approve the contract to spend the tokens beforehand.
     * Increases the recipient's staking power and the total TVL.
     * @param recipient The address to tip.
     * @param amount The amount of tokens to tip.
     */
    function tip(address recipient, uint256 amount) external {
        require(amount > 0, "Tip amount must be greater than 0");
        require(recipient != address(0), "Invalid recipient address");
        
        bool success = token.transferFrom(msg.sender, address(this), amount);
        require(success, "Token transfer failed");
        
        stakingPower[recipient] += amount;
        totalTVL += amount;
        
        emit Tipped(msg.sender, recipient, amount);
    }
    
    /**
     * @dev Allows a user to withdraw their tipped tokens.
     * Decreases their staking power and the total TVL.
     * @param amount The amount to withdraw.
     */
    function withdraw(uint256 amount) external {
        require(stakingPower[msg.sender] >= amount, "Insufficient staking power");
        require(amount > 0, "Withdrawal amount must be greater than 0");
        
        stakingPower[msg.sender] -= amount;
        totalTVL -= amount;
        
        bool success = token.transfer(msg.sender, amount);
        require(success, "Token transfer failed");
        
        emit Withdrawn(msg.sender, amount);
    }
    
    /**
     * @dev Returns the total TVL in the contract.
     * @return The total value locked.
     */
    function getTotalTVL() external view returns (uint256) {
        return totalTVL;
    }
    
    /**
     * @dev Returns the staking power of a specific user.
     * @param user The address of the user.
     * @return The staking power of the user.
     */
    function getStakingPower(address user) external view returns (uint256) {
        return stakingPower[user];
    }
}