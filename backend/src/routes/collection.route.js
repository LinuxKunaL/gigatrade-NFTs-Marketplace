import { Router } from "express";
import {
  createCollection,
  getCollectionImages,
  getCollectionsByUser,
  getCollections,
  getCollectionById,
  updateCollectionById,
  getCollectionDetailsById
} from "../controllers/collection.controller.js";
import { Upload } from "../controllers/multer.controller.js";

const routerCollection = Router();

routerCollection.post("/addCollection", Upload.any("file"), createCollection);
routerCollection.post("/getCollectionsByUser", getCollectionsByUser);
routerCollection.post("/getCollectionById", getCollectionById);
routerCollection.post(
  "/updateCollectionById",
  Upload.any("file"),
  updateCollectionById
);
routerCollection.post("/getCollections",getCollections)
routerCollection.post("/getCollectionDetailsById", getCollectionDetailsById);

routerCollection.get("/images/:imageName", getCollectionImages);

export { routerCollection };
