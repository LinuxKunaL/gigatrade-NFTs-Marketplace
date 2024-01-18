import { Connect } from "../../database/connect.js";
import { Nfts } from "../../database/models.js";

Connect();

const NFTsController = async (req, res) => {
  const { search, category, limit } = req.body;
  try {
    const AllNFTs = await Nfts.find({
      title: { $regex: new RegExp(search, "i") },
      category: {
        $regex: new RegExp(category == "all" ? "" : category, "i"),
      },
    }).limit(limit);
    res.send(AllNFTs);
  } catch (error) {
    console.log(`${error} NFTsController(shop.controller.js)`);
  }
};

export { NFTsController };
