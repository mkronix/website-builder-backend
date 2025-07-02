import mongoose from "mongoose";
import config from "./envconfig";

const mongoDBConfig = async () => {
  try {
    await mongoose.connect(config.db_url, {
      dbName: config.db_name,
    });
    console.warn("Database connected successfully...");
  } catch (error: any) {
    console.error("Database connection error:", error.message);
    throw error;
  }
};

export default mongoDBConfig;
