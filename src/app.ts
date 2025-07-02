import express from "express";
import config from "./config/envconfig";
import routes from "./router/index";
import cors from "cors";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));

// Routes
app.use("/v1/api", routes);

// database & server connection
app.listen(config.port, () => {
  console.log("server is running");
});
