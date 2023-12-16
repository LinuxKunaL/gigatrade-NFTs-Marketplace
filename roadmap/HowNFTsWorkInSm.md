# NFT Smart Contract Overview

This document provides an explanation of how NFTs (Non-Fungible Tokens) work within a smart contract and highlights key features offered by smart contracts to enable NFT functionality.

## Table of Contents

- [Unique Identification (Token ID)](#unique-identification-token-id)
- [Ownership Tracking](#ownership-tracking)
- [Minting](#minting)
- [Transferability](#transferability)
- [Standardized Interfaces](#standardized-interfaces)
- [Metadata](#metadata)
- [Royalties and Custom Logic](#royalties-and-custom-logic)
- [Summary](#summary)

## Unique Identification (Token ID)

Each NFT is assigned a unique identifier known as a "Token ID." This ID distinguishes one NFT from another, providing a way to differentiate and track individual tokens.

## Ownership Tracking

Smart contracts maintain a ledger of ownership for each NFT, stored on the blockchain. This ensures transparent, verifiable, and immutable ownership history.

## Minting

Minting is the process of creating a new NFT. This typically involves a smart contract function that generates a new token, assigns it a unique Token ID, and records ownership details. Minting is triggered by specific actions, such as a user purchasing an NFT or an artist creating digital art.

## Transferability

Smart contracts facilitate the transfer of NFTs between users. A transfer function allows the owner of an NFT to transfer ownership to another address, updating ownership records on the blockchain.

## Standardized Interfaces

Standards like ERC-721 and ERC-1155 define interfaces for smart contracts, ensuring interoperability. ERC-721 specifies the functions and events that a smart contract should implement to be considered an NFT on the Ethereum blockchain.

```solidity
// ERC-721 Interface
interface ERC721 {
    event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);
    // Other functions...
}
```

## Metadata

NFT smart contracts often include mechanisms to store metadata associated with each token. This metadata can include information like the title, description, and external links to associated content (e.g., digital art files).

## solidity

```solidity
// Storing metadata in ERC-721
mapping(uint256 => string) public tokenURIs;

```
## Royalties and Custom Logic
Smart contracts can be customized to include royalty mechanisms, allowing creators to earn a percentage of subsequent sales. Custom logic for specific use cases, such as auctions or time-limited access to content, can also be implemented in NFT smart contracts.

## Summary
In summary, NFTs in smart contracts leverage unique identifiers, ownership tracking, and standardized interfaces to represent ownership and authenticity of digital assets on the blockchain. Smart contracts provide the foundational functionality for creating, transferring, and interacting with these non-fungible tokens. Standards like ERC-721 and ERC-1155 ensure that NFTs can be recognized and utilized across different platforms and applications.
