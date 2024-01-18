import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  userBio: { type: String },
  userName: { type: String },
  userProfile: { type: String },
  userEthAddress: { type: String },
  phoneNumber: { type: Number },
  storeName: { type: String },
  emailAddress: { type: String },
  socialLink: {
    x: { type: String },
    telegram: { type: String },
    whatsapp: { type: String },
    facebook: { type: String },
  },
  FavoriteNFTs: { type: Array },
  FavoriteCollections: { type: Array },
  createdAt: { type: Number },
});

const nftsSchema = new mongoose.Schema({
  createdBy: { type: String },
  title: { type: String },
  image: { type: String },
  category: { type: String },
  price: { type: Number },
  NFTid: { type: Number },
});

const collection = new mongoose.Schema({
  EthUser: { type: String },
  CollectionName: { type: String },
  CollectionTag: { type: String },
  NFTs: { type: Array, required: true },
  CollectionImages: {
    one: { type: String },
    two: { type: String },
    Three: { type: String },
    four: { type: String },
  },
  createdTime: { type: Number },
});

const Users = mongoose.model("Users", usersSchema);
const Nfts = mongoose.model("Nfts", nftsSchema);
const Collection = mongoose.model("Collections", collection);

export { Users, Nfts, Collection };
