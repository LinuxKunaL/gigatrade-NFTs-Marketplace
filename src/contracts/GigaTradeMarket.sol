// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GigatradeMarketplace is ERC721URIStorage, Ownable(msg.sender) {
    constructor() ERC721("Gigatrade marketplace by kunal", "GIGA") {}

    uint256 NFTsId = 0;

    uint256 platformFee = 2;

    struct NFTDetailsObject {
        uint256 createAt;
        uint256 creatorFees;
        bool isListed;
        uint256 price;
        address creator;
        address owner;
    }

    struct NFTAcctivity {
        uint256 NFTId;
        address to;
        address from;
        uint256 time;
        uint256 price;
    }

    struct NftObjectReturn {
        uint256 price;
        string uri;
        uint256 tokenId;
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
        NFTsId += 1;
    }

    function BuyNFT(uint256 Nftid) public payable {
        if (NFTsDetails[Nftid].price == msg.value) {
            address payable NFTOwner = payable(ownerOf(Nftid));
            address payable OwnerOfMarketPlace = payable(owner());
            PlatformFeeForOwner(OwnerOfMarketPlace, NFTOwner);
            NFTsDetails[Nftid].owner = msg.sender;
            transferFrom(NFTOwner, msg.sender, Nftid);
            // emit Transfer(NFTOwner, msg.sender, Nftid);
        } else {
            revert("Payment was Revert");
        }
    }

    function ApproveNFT(uint256 Nftid, bool IsApproved) public {
        _setNFTApprove(IsApproved, Nftid);
    }

    function GetListOfNfts() public view returns (uint256) {
        return NFTsId;
    }

    function GetPriceOfNft(uint256 nftId) public view returns (uint256) {
        return NFTsDetails[nftId].price;
    }

    function NftByUserAddress(address _from)
        public
        view
        returns (NftObjectReturn[] memory)
    {
        uint256 leg = _nftOfAddress[_from].length;
        NftObjectReturn[] memory nfts = new NftObjectReturn[](leg);
        for (uint256 i = 0; i < leg; i++) {
            uint256 nftId = _nftOfAddress[_from][i];
            nfts[i] = NftObjectReturn({
                price: GetPriceOfNft(nftId),
                uri: tokenURI(nftId),
                tokenId: nftId
            });
        }

        return nfts;
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
        NFTsDetails[nftid].price = _price;
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
    {
        uint256 amountForOwner = (msg.value * platformFee) / 100;
        uint256 amountForSeller = msg.value - amountForOwner;
        Owner.transfer(amountForOwner);
        Seller.transfer(amountForSeller);
    }

    function totalSupply() public view returns (uint256) {
        return GetListOfNfts();
    }
}
