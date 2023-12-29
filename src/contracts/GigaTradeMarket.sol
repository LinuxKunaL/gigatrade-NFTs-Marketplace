// SPDX-License-Identifier: MIT OR MIT
pragma solidity 0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GigatradeMarketplace is ERC721URIStorage, Ownable(msg.sender) {
    constructor() ERC721("Gigatrade marketplace by kunal", "GIGA") {}

    uint256 NFTsId = 0;

    uint256 platformFee = 2;

    mapping(uint256 => uint256) private NFTsPrices;

    function MintNFT(string calldata TokenURI, uint256 priceOfNFT) public {
        _safeMint(msg.sender, NFTsId);

        _setTokenURI(NFTsId, TokenURI);

        NFTsPrices[NFTsId] = priceOfNFT * 1 ether;

        _setNFTApprove(false, NFTsId);

        NFTsId += 1;
    }

    function BuyNFT(uint256 Nftid) public payable {
        if (NFTsPrices[Nftid] == msg.value) {
            address payable NFTOwner = payable(ownerOf(Nftid));

            address payable OwnerOfMarketPlace = payable(owner());

            PlatformFeeForOwner(OwnerOfMarketPlace, NFTOwner);

            transferFrom(NFTOwner, msg.sender, Nftid);
        } else {
            revert("Payment was Revert");
        }
    }

    function ApproveNFT(uint256 Nftid) public {
        _setNFTApprove(true, Nftid);
    }

    function GetListOfNfts() public view returns (uint256) {
        return NFTsId;
    }

    function GetPriceOfNft(uint256 nftId) public view returns (uint256) {
        return NFTsPrices[nftId];
    }

    struct NftInfo {
        uint256 price;
        string uri;
        uint256 tokenId;
    }

    function NftByUserAddress(address  _from) public view returns (NftInfo[] memory) {
        uint256 leg = _nftOfAddress[_from].length;

        NftInfo[] memory nfts = new NftInfo[](leg);

        for (uint256 i = 0; i < leg; i++) {
            uint256 nftId = _nftOfAddress[_from][i];
            nfts[i] = NftInfo({
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
        NFTsPrices[nftid] = _price;
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
}
