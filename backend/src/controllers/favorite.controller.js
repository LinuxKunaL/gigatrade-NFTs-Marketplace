import { Users } from "../../database/models.js";
import { Config } from "../../config/config.js";

const addNFTFavorite = async (req, res) => {
  const { EthUser, NFTData } = req.body;
  try {
    const result = await Users.updateOne(
      { userEthAddress: EthUser },
      { $addToSet: { FavoriteNFTs: NFTData } },
      { upsert: true }
    );
    if (result.upserted) {
      return res.status(200).json({
        success: true,
        message: "NFT added in Favorite Section 🎉",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Profile avatar updated successfully! 🎉",
      });
    }
  } catch (error) {
    console.error("Error in setProfilePhoto:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const addCollectionFavorite = async (req, res) => {
  const { EthUser, CollectionData } = req.body;
  console.log(req.body);
  try {
    const result = await Users.updateOne(
      { userEthAddress: EthUser },
      { $addToSet: { FavoriteCollections: CollectionData } },
      { upsert: true }
    );
    if (result.upserted) {
      return res.status(200).json({
        success: true,
        message: "Collection added in Favorite Section 🎉",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Profile avatar updated successfully! 🎉",
      });
    }
  } catch (error) {
    console.error("Error in setProfilePhoto:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export { addNFTFavorite, addCollectionFavorite };
