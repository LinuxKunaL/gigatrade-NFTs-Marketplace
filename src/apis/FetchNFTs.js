import axios from "axios";

const fetchAllNFTs = async (params) => {
  const search = params.get("search");
  const category = params.get("category");
  try {
    const response = await axios.post("http://localhost:90/Nfts", {
      search,
      category,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchAllNFTs };
