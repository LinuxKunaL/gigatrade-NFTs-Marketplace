import ContractInstance from "../useContract";
import { web3 } from "../useContract";
import store from "../../app/redux/ReduxStore";

const BuyNFT = async (nftId) => {
  const EthAddress = store.getState().EthAccountStates.account;
  const PriceOfNFT = await ContractInstance.methods.getPriceOfNFT(nftId).call();
  try {
    const response = await ContractInstance.methods.buyNFT(nftId).send({
      from: EthAddress,
      value: PriceOfNFT,
    });
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { BuyNFT };
