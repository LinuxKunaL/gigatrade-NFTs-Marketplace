import ContractInstance from "../useContract";

const fetchNFT = async (_user) => {
  try {
    const CreatedNfts = await ContractInstance.methods
      .getUserCreatedNFTs(_user)
      .call();

    const OwnedNfts = await ContractInstance.methods
      .getUserOwnedNFTs(_user)
      .call();

    return {
      Created: CreatedNfts,
      Owned: OwnedNfts,
    };
  } catch (error) {
    console.log(error);
  }
};

export { fetchNFT };
