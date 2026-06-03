// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title ComparisonContract
/// @notice Simple contract for educational comparison between Ethereum L2s and Base
contract ComparisonContract {
    uint256 public value;

    event ValueUpdated(uint256 newValue);

    function setValue(uint256 _value) external {
        value = _value;
        emit ValueUpdated(_value);
    }

    function getValue() external view returns (uint256) {
        return value;
    }
}