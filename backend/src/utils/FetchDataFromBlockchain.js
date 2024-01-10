import axios from "axios";
import { ContractInstance, web3 } from "./Contract.js";
import { Nfts } from "../../database/models.js";

const eventFetch = async () => {
  const allEvents = ContractInstance.events.TriggerNodejsServer();
  allEvents.on("data", async (event) => {
    const LengthOfNFTs = await ContractInstance.methods.totalSupply().call();
    for (let i = 0; i < LengthOfNFTs; i++) {
      const response = await ContractInstance.methods.GetNFTById(i).call();
      const metadataJson = await getMetadata(response.uri);
      const existingNft = await Nfts.findOne({ NFTid: i });
      if (existingNft) {
        await Nfts.updateMany(
          { NFTid: i },
          {
            $set: {
              NFTid: i,
              createdBy: response.creator,
              title: metadataJson.name,
              image: `https://gateway.pinata.cloud/ipfs/${metadataJson.image.slice(
                7
              )}`,
              category: metadataJson.category,
              price: web3.utils.fromWei(response.price.toString(), "ether"),
            },
          }
        );
      } else {
        const NewData = new Nfts({
          NFTid: i,
          createdBy: response.creator,
          title: metadataJson.name,
          image: `https://cloudflare-ipfs.com/ipfs/${metadataJson.image.slice(
            7
          )}`,
          category: metadataJson.category,
          price: web3.utils.fromWei(response.price.toString(), "ether"),
        });
        await NewData.save();
      }
    }
    console.log("New data is Inserted");
  });
};

const getMetadata = async (uri) => {
  try {
    const response = await axios.get(
      `https://cloudflare-ipfs.com/ipfs/${uri.slice(7)}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { eventFetch };
