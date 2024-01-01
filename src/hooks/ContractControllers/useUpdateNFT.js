import ContractInstance from "../useContract";

const UriUpdate = async (_id, _account, _uri) => {
  try {
    await ContractInstance.methods.UpdateNFTUri(_uri, _id).send({
      from: _account,
    });
  } catch (error) {
    console.log(error + " In UriUpdate");
  }
};

const PriceUpdate = async (_id, _account, _price) => {
  try {
    await ContractInstance.methods.UpdateNftPrice(_id, _price).send({
      from: _account,
    });
  } catch (error) {
    console.log(error + " In PriceUpdate");
  }
};

const ApproveUpdate = async (_account, _id, _idApprove) => {
  try {
    await ContractInstance.methods.ApproveNFT(_id, _idApprove).send({
      from: _account,
    });
  } catch (error) {
    console.log(error + " In ApproveUpdate");
  }
};

export { UriUpdate, PriceUpdate, ApproveUpdate };
