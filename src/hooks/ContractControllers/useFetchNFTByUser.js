  import ContractInstance from "../useContract";

  const fetchNFT = async (_from) => {
    try {
      const response = await ContractInstance.methods
        .NftByUserAddress(_from)
        .call();
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  export { fetchNFT };
