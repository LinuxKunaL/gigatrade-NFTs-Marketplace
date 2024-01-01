import Web3 from "web3";
import marketAbi from "../contracts/Marketplace.json";

export const web3 = new Web3(window.ethereum);

export const ContractAddress = "0x4406202C3B7b2E029C7EEfdC71E2D22371c2E8D8";

const ContractInstance = new web3.eth.Contract(marketAbi, ContractAddress);

export default ContractInstance;
