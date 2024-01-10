import { Router } from "express";

import {
  setProfilePhoto,
  getProfileByEthAddress,
  setProfileDetails,
  getProfileDetailsByEthAddress,
} from "../controllers/profile.controller.js";
import { Upload } from "../controllers/multer.controller.js";

const routerProfile = Router();

routerProfile.post("/getUserNamePicByEthAddress", getProfileByEthAddress);
routerProfile.post("/getUserDetailsByEthAddress", getProfileDetailsByEthAddress);
routerProfile.post("/updateUser");

routerProfile.post("/addUserProfilePhoto", Upload.any("file"), setProfilePhoto);
routerProfile.post("/addUserProfileDetails", setProfileDetails);
routerProfile.post("/updateUserProfilePhoto");

export { routerProfile };
