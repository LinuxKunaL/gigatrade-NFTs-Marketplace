import express from "express";
import cors from "cors";

import { Config } from "../config/config.js";
import { MainMiddleware } from "./middlewares/MainMiddleware.js";

import { routerNFTs } from "./routes/shop.route.js";
import { routerProfile } from "./routes/profile.route.js";
import { routerCollection } from "./routes/collection.route.js";
import { routerDefault } from "./routes/default.route.js";

import { eventFetch } from "./utils/FetchDataFromBlockchain.js";

const app = express();

//━━━━━━━━━━━━━━━━ Middlewares ━━━━━━━━━━━━━━━━ ★
MainMiddleware(app, cors, express);
//━━━━━━━━━━━━━━━━ Middlewares ━━━━━━━━━━━━━━━━ ★

//━━━━━━━━━━━━━━━━ router ━━━━━━━━━━━━━━━━ ★
app.use(routerDefault);
app.use(routerNFTs);
app.use(routerProfile);
app.use(routerCollection);
//━━━━━━━━━━━━━━━━ router ━━━━━━━━━━━━━━━━ ★

eventFetch();

app.listen(Config.Server.PORT, () => {
  console.log(
    `Backend Server running on http://${Config.Server.HOST}:${Config.Server.PORT}`
  );
});
