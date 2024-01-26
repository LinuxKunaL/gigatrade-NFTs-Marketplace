// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GigatradeMarketplace is ERC721URIStorage, Ownable(msg.sender) {
    constructor() ERC721("gigatrade by kunal", "GIGA") {}

    uint256 private NFTNextId = 0;
    uint256 private platformFee = 2;

    event NFTsActivity(
        uint256 indexed action,
        uint256 indexed tokenId,
        address from,
        address to,
        uint256 time,
        uint256 price
    );

    event triggerNodejsServer();

    struct NFTDetailsObject {
        uint256 createAt;
        uint256 creatorFees;
        bool isListed;
        uint256 price;
        address creator;
        address owner;
    }

    struct NFTObjectReturn {
        uint256 price;
        string uri;
        uint256 tokenId;
        address creator;
        address owner;
    }

    struct NFTDataObjectReturn {
        uint256 price;
        string uri;
        address owner;
        address creator;
    }

    struct NFTsListed {
        uint256 tokenId;
        uint256 Prices;
    }

    mapping(uint256 => NFTDetailsObject) public NFTsDetails;

    function mintNFT(
        string calldata TokenURI,
        uint256 CreatorFee,
        uint256 priceOfNFT,
        bool ApproveNFT
    ) public {
        _safeMint(msg.sender, NFTNextId);
        _setTokenURI(NFTNextId, TokenURI);
        uint256 price = priceOfNFT;
        NFTsDetails[NFTNextId] = NFTDetailsObject(
            block.timestamp,
            CreatorFee,
            ApproveNFT,
            price,
            msg.sender,
            address(0)
        );
        approveNFT(NFTNextId, ApproveNFT);
        emit NFTsActivity(
            98, // for mint code
            NFTNextId,
            msg.sender,
            address(0),
            block.timestamp,
            price
        );
        NFTNextId += 1;
    }

    function buyNFT(uint256 tokenId) public payable {
        if (NFTsDetails[tokenId].price == msg.value) {
            address payable NFTOwner = payable(ownerOf(tokenId));

            address payable NFTCreator = payable(NFTsDetails[tokenId].creator);
            uint256 NFTCreatorFee = NFTsDetails[tokenId].creatorFees;

            address payable ownerOfMarketPlace = payable(owner());

            uint256 remeinNFTPrice = distributePaymentsAndApplyFees(
                ownerOfMarketPlace,
                NFTOwner,
                NFTCreator,
                NFTCreatorFee
            );

            NFTsDetails[tokenId].owner = msg.sender;
            NFTsDetails[tokenId].price = remeinNFTPrice;

            transferFrom(NFTOwner, msg.sender, tokenId);
            emit NFTsActivity(
                76, // for buyNFT code
                tokenId,
                NFTOwner,
                msg.sender,
                block.timestamp,
                remeinNFTPrice
            );
        } else {
            revert("Payment was Revert");
        }
    }

    function approveNFT(uint256 tokenId, bool IsApproved) public {
        NFTsDetails[tokenId].isListed = IsApproved;
        _setNFTApprove(IsApproved, tokenId);
        emit triggerNodejsServer();
    }

    function getPriceOfNFT(uint256 tokenId) public view returns (uint256) {
        return NFTsDetails[tokenId].price;
    }

    function getNFTById(uint256 tokenId)
        public
        view
        returns (NFTDataObjectReturn memory)
    {
        NFTDataObjectReturn memory NFT;
        address onwerOfNFT = ownerOf(tokenId);
        string memory uriOfNFT = tokenURI(tokenId);
        uint256 price = NFTsDetails[tokenId].price;
        address creator = NFTsDetails[tokenId].creator;
        NFT = NFTDataObjectReturn({
            price: price,
            uri: uriOfNFT,
            owner: onwerOfNFT,
            creator: creator
        });
        return NFT;
    }

    function getUserOwnedNFTs(address _user)
        public
        view
        returns (NFTObjectReturn[] memory)
    {
        uint256 length = getNFTsOfAddress(_user).owned.length;
        NFTObjectReturn[] memory userNFTs = new NFTObjectReturn[](length);

        for (uint256 i = 0; i < length; i++) {
            uint256 tokenId = getNFTsOfAddress(_user).owned[i];
            userNFTs[i] = NFTObjectReturn({
                price: getPriceOfNFT(tokenId),
                uri: tokenURI(tokenId),
                tokenId: tokenId,
                creator: NFTsDetails[tokenId].creator,
                owner: NFTsDetails[tokenId].owner
            });
        }
        return userNFTs;
    }

    function getUserCreatedNFTs(address _user)
        public
        view
        returns (NFTObjectReturn[] memory)
    {
        uint256 leg = getNFTsOfAddress(_user).created.length;
        NFTObjectReturn[] memory userNfts = new NFTObjectReturn[](leg);

        for (uint256 i = 0; i < leg; i++) {
            uint256 tokenId = getNFTsOfAddress(_user).created[i];
            userNfts[i] = NFTObjectReturn({
                price: getPriceOfNFT(tokenId),
                uri: tokenURI(tokenId),
                tokenId: tokenId,
                creator: NFTsDetails[tokenId].creator,
                owner: NFTsDetails[tokenId].owner
            });
        }
        return userNfts;
    }

    function setNFTPrice(uint256 tokenId, uint256 _price)
        public
        onlyTokenOwner(tokenId)
    {
        NFTsDetails[tokenId].price = _price;
        emit triggerNodejsServer();
    }

    function setNFTUri(string calldata _uri, uint256 tokenId)
        public
        onlyTokenOwner(tokenId)
    {
        _setTokenURI(tokenId, _uri);
        emit triggerNodejsServer();
    }

    function distributePaymentsAndApplyFees(
        address payable MarketOwner,
        address payable Seller,
        address payable Creator,
        uint256 fee
    ) public payable returns (uint256) {
        uint256 amountForMarketOwner = (msg.value * platformFee) / 100;
        uint256 amountForCreator = ((msg.value - amountForMarketOwner) * fee) /
            100;
        uint256 amountForSeller = (msg.value - amountForCreator) -
            amountForMarketOwner;
        MarketOwner.transfer(amountForMarketOwner);
        Seller.transfer(amountForSeller);
        Creator.transfer(amountForCreator);
        return amountForSeller;
    }

    modifier onlyTokenOwner(uint256 tokenId) {
        if (msg.sender == ownerOf(tokenId)) {
            _;
        } else {
            revert("you are not owner of this token for edit");
        }
    }

    function totalSupply() public view returns (uint256) {
        return NFTNextId;
    }
}
