import mongoose from "mongoose";
import { config } from "../config/config.js";

const Connect = async () => {
  try {
    mongoose.connect(`${config.Database.ConnectUrl}/${config.Database.name}`);
    console.log("Database is connected 🎉");
  } catch (error) {
    console.log(error);
  }
};

export { Connect };
