import ContractInstance from "../useContract";

export const test = async () => {
  try {
    const address = await ContractInstance.methods.owner().call();
    return address;
  } catch (error) {
    console.log(error);
  }
};
