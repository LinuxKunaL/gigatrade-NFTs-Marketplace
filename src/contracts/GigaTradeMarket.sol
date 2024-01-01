// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GigatradeMarketplace is ERC721URIStorage, Ownable(msg.sender) {
    constructor() ERC721("Gigatrade marketplace by kunal", "GIGA") {}

    uint256 NFTsId = 0;

    uint256 platformFee = 2;

    /*
     * @dev `indexed` keyword is used in event declarations to specify that the
     *       value of a particular parameter should be searchable or filterable
     *       when querying for events
     */

    event NFTsActivityEvent(
        uint256 indexed action,
        uint256 indexed NFTid,
        address from,
        address to,
        uint256 time,
        uint256 price
    );

    struct NFTDetailsObject {
        uint256 createAt;
        uint256 creatorFees;
        bool isListed;
        uint256 price;
        address creator;
        address owner;
    }

    struct NftObjectReturn {
        uint256 price;
        string uri;
        uint256 tokenId;
        address creator;
        address owner;
    }

    struct NftDataObjectReturn {
        uint256 price;
        string uri;
        address owner;
    }

    mapping(uint256 => NFTDetailsObject) public NFTsDetails;

    function MintNFT(
        string calldata TokenURI,
        uint256 CreatorFee,
        uint256 priceOfNFT,
        bool ApproveNft
    ) public {
        _safeMint(msg.sender, NFTsId);
        _setTokenURI(NFTsId, TokenURI);
        uint256 price = priceOfNFT * 1 ether;
        NFTsDetails[NFTsId] = NFTDetailsObject(
            block.timestamp,
            CreatorFee,
            ApproveNft,
            price,
            msg.sender,
            address(0)
        );
        ApproveNFT(NFTsId, ApproveNft);
        emit NFTsActivityEvent(
            98, // for mint code
            NFTsId,
            msg.sender,
            address(0),
            block.timestamp,
            price
        );
        NFTsId += 1;
    }

    function BuyNFT(uint256 Nftid) public payable {
        if (NFTsDetails[Nftid].price == msg.value) {
            address payable NFTOwner = payable(ownerOf(Nftid));
            address payable OwnerOfMarketPlace = payable(owner());
            uint256 RemeinNFTPrice = PlatformFeeForOwner(
                OwnerOfMarketPlace,
                NFTOwner
            );
            NFTsDetails[Nftid].owner = msg.sender;
            transferFrom(NFTOwner, msg.sender, Nftid);
            emit NFTsActivityEvent(
                76, // for BuyNFT code
                Nftid,
                NFTOwner,
                msg.sender,
                block.timestamp,
                RemeinNFTPrice
            );
        } else {
            revert("Payment was Revert");
        }
    }

    function ApproveNFT(uint256 Nftid, bool IsApproved) public {
        NFTsDetails[Nftid].isListed = IsApproved;
        _setNFTApprove(IsApproved, Nftid);
    }

    function GetPriceOfNft(uint256 nftId) public view returns (uint256) {
        return NFTsDetails[nftId].price;
    }

    function GetNFTById(uint256 NFTid)
        public
        view
        returns (NftDataObjectReturn memory)
    {
        NftDataObjectReturn memory nft;
        address onwerOfNFT = ownerOf(NFTid);
        string memory uriOfNFT = tokenURI(NFTid);
        uint256 price = NFTsDetails[NFTid].price;
        nft = NftDataObjectReturn({
            price: price,
            uri: uriOfNFT,
            owner: onwerOfNFT
        });
        return nft;
    }

    function GetNFTByIdForOverviewPage(uint256 NFTid) public {}

    function NftByUserAddressCreated() public view returns (uint256[] memory) {
        return NFTOfAddress(msg.sender).created;
    }

    function NftByUserAddressOwned() public view returns (uint256[] memory) {
        return NFTOfAddress(msg.sender).owned;
    }

    function OwnedNFTsByUserAddress(address _from)
        public
        view
        returns (NftObjectReturn[] memory)
    {
        uint256 leg = NFTOfAddress(_from).owned.length;
        NftObjectReturn[] memory userNfts = new NftObjectReturn[](leg);

        for (uint256 i = 0; i < leg; i++) {
            uint256 nftId = NFTOfAddress(_from).owned[i];
            userNfts[i] = NftObjectReturn({
                price: GetPriceOfNft(nftId),
                uri: tokenURI(nftId),
                tokenId: nftId,
                creator: NFTsDetails[nftId].creator,
                owner: NFTsDetails[nftId].owner
            });
        }
        return userNfts;
    }

    function CreatedNFTsByUserAddress(address _from)
        public
        view
        returns (NftObjectReturn[] memory)
    {
        uint256 leg = NFTOfAddress(_from).created.length;
        NftObjectReturn[] memory userNfts = new NftObjectReturn[](leg);

        for (uint256 i = 0; i < leg; i++) {
            uint256 nftId = NFTOfAddress(_from).created[i];
            userNfts[i] = NftObjectReturn({
                price: GetPriceOfNft(nftId),
                uri: tokenURI(nftId),
                tokenId: nftId,
                creator: NFTsDetails[nftId].creator,
                owner: NFTsDetails[nftId].owner
            });
        }
        return userNfts;
    }

    modifier verifyEdit(uint256 nftid) {
        if (msg.sender == ownerOf(nftid)) {
            _;
        } else {
            revert("you are not owner of this token for edit ");
        }
    }

    function UpdateNftPrice(uint256 nftid, uint256 _price)
        public
        verifyEdit(nftid)
    {
        NFTsDetails[nftid].price = _price * 1 ether;
    }

    function UpdateNFTUri(string calldata _uri, uint256 nftid)
        public
        verifyEdit(nftid)
    {
        _setTokenURI(nftid, _uri);
    }

    function PlatformFeeForOwner(address payable Owner, address payable Seller)
        public
        payable
        returns (uint256)
    {
        uint256 amountForOwner = (msg.value * platformFee) / 100;
        uint256 amountForSeller = msg.value - amountForOwner;
        Owner.transfer(amountForOwner);
        Seller.transfer(amountForSeller);
        return amountForSeller;
    }

    function totalSupply() public view returns (uint256) {
        return NFTsId;
    }
}
