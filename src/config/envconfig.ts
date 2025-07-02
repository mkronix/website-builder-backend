import dotenv from "dotenv";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  db_url: string;
  db_name: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 4000,
  nodeEnv: process.env.NODE_ENV || "development",
  db_url: process.env.DB_URL || "",
  db_name: process.env.DB_NAME || "webbuilder",
};

export default config;
