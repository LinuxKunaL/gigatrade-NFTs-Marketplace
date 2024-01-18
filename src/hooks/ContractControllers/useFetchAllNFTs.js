import ContractInstance from "../useContract";

const fetchAllNFTs = async () => {
  var AllNFTsData = [];
  try {
    const AllNumberOfNFTs = await ContractInstance.methods.totalSupply().call();
    for (let i = 0; i < AllNumberOfNFTs; i++) {
      const response = await ContractInstance.methods.getNFTById(i).call();
      AllNFTsData.push({
        NFTid: i,
        Price: response.price,
        Owner: response.owner,
        Creator:response.creator,
        Uri: response.uri,
      });
    }
  } catch (error) {
    console.log(error);
  }
  return AllNFTsData;
};

export { fetchAllNFTs };
