import ContractInstance from "../useContract";
import { web3 } from "../useContract";
import axios from "axios";

const fetchNFTById = async (NftId) => {
  try {
    const response = await ContractInstance.methods.GetNFTById(NftId).call();
    const response_2 = await ContractInstance.methods.NFTsDetails(NftId).call();
    const metadataJson = (await getMetadata(response.uri)).data;

    // console.log(response);
    // console.log(response_2);

    return {
      NFTId: NftId,
      Price: web3.utils.fromWei(response.price.toString(), "ether"),
      CreateAt: response_2.createAt,
      creatorFees: response_2.creatorFees.toString(),
      IsListed: response_2.isListed,
      CurrentOwner: response_2.owner.toString(),
      Image: `https://gateway.pinata.cloud/ipfs/${metadataJson.image.slice(
        7
      )}` /*@dev from  metadataJson*/,
      Name: `${metadataJson.name} #${NftId}` /*@dev from  metadataJson*/,
      Properties: metadataJson.properties /*@dev from  metadataJson*/,
      Description: metadataJson.description /*@dev from  metadataJson*/,
      Creator: response_2.creator,
    };
  } catch (error) {
    console.log(error);
  }
};

const getMetadata = async (uri) => {
  return await axios.get(`https://gateway.pinata.cloud/ipfs/${uri.slice(7)}`);
};

export { fetchNFTById };
