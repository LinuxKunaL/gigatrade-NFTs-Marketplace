import ContractInstance from "../useContract";

const CheckIsOwner = async (NftId,currentOwner) => {
  try {
    const response = await ContractInstance.methods.ownerOf(NftId).call();
    return response == currentOwner ? true : false;
  } catch (error) {
    console.log(error);
  }
};

export { CheckIsOwner };
