import { Router } from "express";
import { NFTsController } from "../controllers/shop.controller.js";

const routerNFTs = Router();

routerNFTs.post("/Nfts", NFTsController);
routerNFTs.get("/NftById");

export { routerNFTs };
