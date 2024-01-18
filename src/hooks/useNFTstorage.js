import { NFTStorage } from "nft.storage";

const client = new NFTStorage({
  token: process.env.REACT_APP_NFT_STORAGE_KEY,
});

const UploadMetadata = async (metadata) => {
  try {
    const response = await client.store({
      name: metadata.name,
      description: metadata.description,
      image: metadata.image,
      properties: metadata.properties,
      category: metadata.category,
    });
    return response;
  } catch (error) {
    console.error(error + " in UploadMetadata (useNFTstorage)");
  }
};

export { UploadMetadata };
