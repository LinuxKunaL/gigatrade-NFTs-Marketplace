## This Project is Working Process 🚧

# GigaTrade - NFT Marketplace

GigaTrade is a decentralized NFT marketplace that empowers creators and collectors to seamlessly trade unique digital assets on the Ethereum blockchain. This project combines the power of smart contracts, a robust backend, and an intuitive frontend to provide a secure and user-friendly experience.

## screenshot

![image](https://github.com/LinuxKunaL/gigatrade-NFTs-Marketplace/assets/75113218/cffb8fab-f45b-4558-96a4-7a6314c8e3d8)

##

![image](https://github.com/LinuxKunaL/gigatrade-NFTs-Marketplace/assets/75113218/5d7df3b0-d397-4d94-b3c8-d0d3ef29edf7)

##

![image](https://github.com/LinuxKunaL/gigatrade-NFTs-Marketplace/assets/75113218/afacdcad-89cb-46ff-8a79-ab460e8c04f4)

##

![image](https://github.com/LinuxKunaL/gigatrade-NFTs-Marketplace/assets/75113218/aa9becb6-eda4-4a53-bd21-a0d0bad46c8c)

## Features:

### ERC-721 Smart Contracts:

- Solidity smart contracts that adhere to the ERC-721 standard for NFTs.
- Minting, buying, selling, and transferring functionalities.

### MERN Stack:

- Backend server built with Node.js and Express.js.
- MongoDB database for storing user data, NFT metadata, and transaction history.
- React.js frontend for a dynamic and engaging user interface.

### Wallet Integration:

- Seamless integration with Ethereum wallets (MetaMask, etc.).
- Users can connect their wallets to buy, sell, and manage NFTs securely.

### Payment Options:

- Support for cryptocurrency transactions (ETH) within the platform.
- Integration with a payment gateway for a smooth and secure payment experience.

### User Authentication and Authorization:

- Secure account creation and login processes.
- Authorization rules to control access to specific features.

### Documentation:

- Comprehensive README.md with setup instructions for smart contracts, backend, and frontend.
- Project structure, key files, and deployment guidelines are well-documented.

### Testing:

- Thorough unit tests for smart contracts, backend, and frontend components.
- Ensures the security and reliability of the platform.

## Getting Started:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/LinuxKunaL/gigatrade-NFTs-Marketplace.git
    ```

2.  **Setup .env file:**

        ```
        REACT_APP_API_URL= 'backend url'

        REACT_APP_ETH_CHAIN=sepolia

        REACT_APP_OPENSEA_URL=https://testnets.opensea.io

        REACT_APP_BLOCK_EXPLORE_URL=https://sepolia.etherscan.io

        REACT_APP_CONTRACT_ADDRESS=

        REACT_APP_NFT_STORAGE_KEY= 'i use https://nft.storage for ipfs'

        REACT_APP_CONTRACT_OWNER_ADDRESS=
        ```

3.  **Set up a custom ERC721 file: I have modified a default ERC721 contract file, so you need to replace it with the one I will provide you in the 'contract' folder"**

    _Copy the file code and paste it into the original ERC721 file, which can be found in the 'node_module' folder at 'node_module/@openzipline/token/ERC721.' Locate 'ERC721.sol' and replace it with the file that I will provide.


4.  **Setup Instructions:**

    Follow the guidelines in the README.md for setting up smart contracts, backend, and frontend.

5.  **Contribute:**

    Feel free to contribute by opening issues, submitting pull requests, or providing feedback.

## Project Structure:

- `/contracts`: Smart contracts written in Solidity.
- `/backend`: Node.js server and MongoDB database.
- `/frontend`: React.js user interface.

## Documentation:

For detailed information on the project, refer to the [Documentation](link-to-docs).
