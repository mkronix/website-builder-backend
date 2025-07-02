import express from "express";
import config from "./config/envconfig";
import routes from "./router/index";
import cors from "cors";
import mongoDBConfig from "./config/mongo.config";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));

// Routes
app.use("/v1/api", routes);

// database & server connection
mongoDBConfig()
  .then(() => {
    app.listen(config.port, () => {
      console.warn(`Server is running on http://localhost:${config.port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection fail:", error.message);
  });
