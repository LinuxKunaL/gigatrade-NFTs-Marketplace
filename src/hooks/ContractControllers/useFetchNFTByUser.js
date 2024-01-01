import ContractInstance from "../useContract";

const fetchNFT = async (_from) => {
  try {
    const CreatedNfts = await ContractInstance.methods
      .CreatedNFTsByUserAddress(_from)
      .call();

    const OwnedNfts = await ContractInstance.methods
      .OwnedNFTsByUserAddress(_from)
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
