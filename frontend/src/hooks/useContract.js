import Web3 from "web3";
import marketAbi from "../contracts/Marketplace.json";

export const web3 = new Web3(
  window.ethereum || process.env.REACT_APP_WEB3_PROVIDER
);

export const ContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

const ContractInstance = new web3.eth.Contract(marketAbi, ContractAddress);

export default ContractInstance;
