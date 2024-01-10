import axios from "axios";

const createCollection = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:90/addCollection",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getCollectionsByUser = async (EthUser) => {
  try {
    const response = await axios.post(
      "http://localhost:90/getCollectionsByUser",
      {
        EthUser,
      }
    );
    return response.data;
  } catch (error) {}
};

const getCollectionById = async (id) => {
  try {
    const response = await axios.post("http://localhost:90/getCollectionById", {
      id,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getCollectionsDetailsById = async (id) => {
  try {
    const response = await axios.post(
      "http://localhost:90/getCollectionDetailsById",
      { id }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const updateCollectionById = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:90/updateCollectionById",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getCollections = async (params) => {
  const search = params.get("search");
  const category = params.get("category");
  try {
    const response = await axios.post("http://localhost:90/getCollections", {
      search,
      category,
    });
    return response.data;
  } catch (error) {}
};

const getFewCollections = async () => {
  try {
    const response = await axios.post("http://localhost:90/getFewCollections");
    return response.data;
  } catch (error) {}
};

export {
  createCollection,
  getCollectionsByUser,
  getCollections,
  getCollectionById,
  updateCollectionById,
  getCollectionsDetailsById,
  getFewCollections,
};
