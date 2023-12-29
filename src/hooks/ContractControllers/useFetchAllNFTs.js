import ContractInstance from "../useContract";

const fetchAllNFTs = async () => {
  var AllNFTsData = [];
  try {
    const AllNumberOfNFTs = await ContractInstance.methods
      .GetListOfNfts()
      .call();
    for (let i = 0; i < AllNumberOfNFTs; i++) {
      const Owner = await ContractInstance.methods.ownerOf(i).call();
      const NFTUri = await ContractInstance.methods.tokenURI(i).call();
      const Price = await ContractInstance.methods.GetPriceOfNft(i).call();
      AllNFTsData.push({
        NFTid: i,
        Price: Price,
        Owner: Owner,
        Uri: NFTUri,
      });
    }
  } catch (error) {
    console.log(error);
  }
  return AllNFTsData;
};

export { fetchAllNFTs };
