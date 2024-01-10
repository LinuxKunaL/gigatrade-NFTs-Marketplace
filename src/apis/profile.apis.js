import axios from "axios";
import store from "../app/redux/ReduxStore";
import { setEthAccount } from "../app/redux/ReduxSlices";

const setProfilePhoto = async (file, user) => {
  try {
    const response = await axios.post(
      "http://localhost:90/addUserProfilePhoto",
      { Image: file, EthUser: user },
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

const setProfileDetails = async (details) => {
  try {
    const response = await axios.post(
      "http://localhost:90/addUserProfileDetails",
      { data: details }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserNamePicByEthAddress = async (EthUserId) => {
  try {
    const response = await axios.post(
      "http://localhost:90/getUserNamePicByEthAddress",
      { EthUser: EthUserId }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserDetailsByEthAddress = async (EthUserId) => {
  try {
    const response = await axios.post(
      "http://localhost:90/getUserDetailsByEthAddress",
      { EthUser: EthUserId }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export {
  setProfilePhoto,
  getUserNamePicByEthAddress,
  setProfileDetails,
  getUserDetailsByEthAddress,
};
