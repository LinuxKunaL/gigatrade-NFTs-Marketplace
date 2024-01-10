import { Router } from "express";

import {
  setProfilePhoto,
  getTopCreators,
  setProfileDetails,
  getProfileByEthAddress,
  getProfileDetailsByEthAddress,
  getProfileFavoriteByEthAddress
} from "../controllers/profile.controller.js";
import { Upload } from "../controllers/multer.controller.js";

const routerProfile = Router();

routerProfile.post("/getUserNamePicByEthAddress", getProfileByEthAddress);
routerProfile.post(
  "/getUserDetailsByEthAddress",
  getProfileDetailsByEthAddress
);
routerProfile.post(
  "/getUserFavoriteByEthAddress",
  getProfileFavoriteByEthAddress
);
routerProfile.post("/updateUser");

routerProfile.post("/addUserProfilePhoto", Upload.any("file"), setProfilePhoto);
routerProfile.post("/addUserProfileDetails", setProfileDetails);
routerProfile.post("/getTopCreators", getTopCreators);

export { routerProfile };
