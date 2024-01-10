import { Router } from "express";
import { NFTsController } from "../controllers/shop.controller.js";
import { addNFTFavorite } from "../controllers/favorite.controller.js";

const routerNFTs = Router();

routerNFTs.post("/Nfts", NFTsController);
routerNFTs.post("/addNFTFavorite", addNFTFavorite);

export { routerNFTs };
