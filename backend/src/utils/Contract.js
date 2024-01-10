import Web3, { HttpProvider } from "web3";
import { Config } from "../../config/config.js";
import Abi from "../utils/contract/Marketplace.json" assert { type: "json" };

const web3 = new Web3(
  new Web3.providers.WebsocketProvider("ws://localhost:8545")
);
// const web3 = new Web3(new HttpProvider(Config.web3.Web3Provider));

const ContractInstance = new web3.eth.Contract(
  Abi,
  Config.web3.ContractAddress
);

export { ContractInstance, web3 };
