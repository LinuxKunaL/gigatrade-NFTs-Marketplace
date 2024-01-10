import mongoose from "mongoose";
import { Config } from "../config/config.js";

const Connect = async () => {
  try {
    mongoose.connect(`mongodb://localhost:27017/${Config.Database.NAME}`);
  } catch (error) {
    console.log(error);
  }
};

export { Connect };
