import axios from "axios";

const fetchAllNFTs = async (search, category, limit) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/Nfts`, {
      search,
      category,
      limit,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchAllNFTs };
