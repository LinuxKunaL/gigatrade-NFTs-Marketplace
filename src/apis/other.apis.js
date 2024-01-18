import axios from "axios";

const addNFTFavorite = async (EthUser, NFTData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/addNFTFavorite`,
      {
        EthUser,
        NFTData,
      }
    );
    return response.data;
  } catch (error) {}
};

const addCollectionFavorite = async (EthUser, CollectionData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/addCollectionFavorite`,
      {
        EthUser,
        CollectionData,
      }
    );
    return response.data;
  } catch (error) {}
};

export { addNFTFavorite, addCollectionFavorite };
