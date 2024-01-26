import { WarringToast } from "../../app/Toast/Warring";
import ContractInstance from "../useContract";
import { web3 } from "../useContract";
import { ethereumUsd } from "../useEtherUsdPrice";

const MintNFT = async (_account, _price, _uri, _creatorFee, _approveNft) => {
  const ether = Number(_price / (await ethereumUsd())).toFixed(18);
  const _wei = web3.utils.toWei(ether, "ether");
  try {
    const response = await ContractInstance.methods
      .mintNFT(_uri, _creatorFee, _wei, _approveNft)
      .send({
        from: _account,
      });
    WarringToast("Waiting for transaction ....");
    return response;
  } catch (error) {
    console.log(error + " in useMintNFT ( Hook )");
    return error;
  }
};

export { MintNFT };
