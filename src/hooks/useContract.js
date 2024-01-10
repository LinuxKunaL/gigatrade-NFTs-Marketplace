import Web3 from "web3";
import marketAbi from "../contracts/Marketplace.json";

export const web3 = new Web3(window.ethereum);

export const ContractAddress = "0x217350EFc73b0d9538eC4F9c1a27eFE3CC5F0388";

const ContractInstance = new web3.eth.Contract(marketAbi, ContractAddress);

export default ContractInstance;