import { Router } from "express";

const routerDefault = Router();

routerDefault.get("/", (req, res) => {
  res.json({
    massage: "GigaTrade - NFTs Marketplace backend server working !",
  });
});

export { routerDefault };
