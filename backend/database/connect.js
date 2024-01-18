import mongoose from "mongoose";
import { Config } from "../config/config.js";

const Connect = async () => {
  try {
    mongoose.connect(
      `${Config.Database.ConnectUrl}/${Config.Database.name}`
    );
  } catch (error) {
    console.log(error);
  }
};

export { Connect };
