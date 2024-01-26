import Web3 from "web3";
import { config } from "../../config/config.js";
import Abi from "../utils/contract/Marketplace.json" assert { type: "json" };

const web3 = new Web3(
  new Web3.providers.WebsocketProvider(config.web3.WebsocketProvider)
);

const ContractInstance = new web3.eth.Contract(
  Abi,
  config.web3.ContractAddress
);

export { ContractInstance, web3 };
