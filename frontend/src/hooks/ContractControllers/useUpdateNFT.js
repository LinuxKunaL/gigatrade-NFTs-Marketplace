import ContractInstance from "../useContract";
import { web3 } from "../useContract";
import { ethereumUsd } from "../useEtherUsdPrice";

const UriUpdate = async (_id, _account, _uri) => {
  try {
    await ContractInstance.methods.setNFTUri(_uri, _id).send({
      from: _account,
    });
  } catch (error) {
    console.log(error + " In UriUpdate");
  }
};
const PriceUpdate = async (_id, _account, _price) => {
  const ether = Number(_price / (await ethereumUsd())).toFixed(18);
  const wei = web3.utils.toWei(ether, "ether");
  try {
    const response = await ContractInstance.methods.setNFTPrice(_id, wei).send({
      from: _account,
    });
    return response;
  } catch (error) {
    console.log(error + " In PriceUpdate");
  }
};

const ApproveUpdate = async (_account, _id, _idApprove) => {
  try {
    const response = await ContractInstance.methods
      .approveNFT(_id, _idApprove)
      .send({
        from: _account,
      });
    return response;
  } catch (error) {
    console.log(error + " In ApproveUpdate");
  }
};

export { UriUpdate, PriceUpdate, ApproveUpdate };
