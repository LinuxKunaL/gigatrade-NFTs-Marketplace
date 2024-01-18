import axios from "axios";

const createCollection = async (data) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/addCollection`,
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
      `${process.env.REACT_APP_API_URL}/getCollectionsByUser`,
      {
        EthUser,
      }
    );
    return response.data;
  } catch (error) {}
};

const getCollectionById = async (id) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/getCollectionById`,
      {
        id,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getCollectionsDetailsById = async (id) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/getCollectionDetailsById`,
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
      `${process.env.REACT_APP_API_URL}/updateCollectionById`,
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

const getCollections = async (search, category, limit) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/getCollections`,
      {
        search,
        category,
        limit,
      }
    );
    return response.data;
  } catch (error) {}
};

const getFewCollections = async () => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/getFewCollections`
    );
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
