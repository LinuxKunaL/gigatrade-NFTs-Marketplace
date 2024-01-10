import axios from "axios";

const addNFTFavorite = async (EthUser, NFTData) => {
  try {
    const response = await axios.post("http://localhost:90/addNFTFavorite", {
      EthUser,
      NFTData,
    });
    return response.data;
  } catch (error) {}
};

const addCollectionFavorite = async (EthUser, CollectionData) => {
  try {
    const response = await axios.post("http://localhost:90/addCollectionFavorite", {
      EthUser,
      CollectionData,
    });
    return response.data;
  } catch (error) {}
};

export { addNFTFavorite, addCollectionFavorite };
