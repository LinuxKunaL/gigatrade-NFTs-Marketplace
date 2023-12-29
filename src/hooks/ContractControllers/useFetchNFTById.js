import ContractInstance from "../useContract";
import { web3 } from "../useContract";
import axios from "axios";

const fetchNFTById = async (NftId) => {
  try {
    const Owner = await ContractInstance.methods.ownerOf(NftId).call();
    const NFTUri = await ContractInstance.methods.tokenURI(NftId).call();
    const Price = await ContractInstance.methods.GetPriceOfNft(NftId).call();
    const metadataJson = (await getMetadata(NFTUri)).data;

    return {
      NFTId: NftId,
      Price: web3.utils.fromWei(Price.toString(), "ether"),
      Image: "https://gateway.pinata.cloud/ipfs/" + metadataJson.image.slice(7),
      Name: metadataJson.name + " #" + NftId,
      Description: metadataJson.description,
      Owner: Owner,
    };
  } catch (error) {
    console.log(error);
  }
};

const getMetadata = async (uri) => {
  return await axios.get("https://gateway.pinata.cloud/ipfs/" + uri.slice(7));
};

export { fetchNFTById };
