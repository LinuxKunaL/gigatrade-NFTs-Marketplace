import ContractInstance from "../useContract";
import { web3 } from "../useContract";
import store from "../../app/redux/ReduxStore";
import { Await } from "react-router-dom";

// const EthAccount = store.getState().EthAccountStates.account;

const MintNFT = async (_account, _price, _uri, _creatorFee, _approveNft) => {
  try {
    const response = await ContractInstance.methods
      .MintNFT(_uri, _creatorFee, _price, _approveNft)
      .send({
        from: _account,
        // nonce: count,
      });
    return response;
  } catch (error) {
    console.log(error + " in useMintNFT ( Hook )");
    return error;
  }
};

export { MintNFT };
