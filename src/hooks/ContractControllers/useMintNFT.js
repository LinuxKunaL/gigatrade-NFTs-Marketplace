import ContractInstance from "../useContract";
import { web3 } from "../useContract";
import store from "../../app/redux/ReduxStore";
import { Await } from "react-router-dom";

// const EthAccount = store.getState().EthAccountStates.account;

const MintNFT = async (_account, _price, _uri) => {
  // const count = await web3.eth.getBlockTransactionCount("0x90F79bf6EB2c4f870365E785982E1f101E93b906");
  // console.log(count.toString());

  try {
    const response = await ContractInstance.methods.MintNFT(_uri, _price).send({
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
