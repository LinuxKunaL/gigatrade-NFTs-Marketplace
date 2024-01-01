import Web3 from "web3";
import marketAbi from "../contracts/Marketplace.json";

export const web3 = new Web3(window.ethereum);

export const ContractAddress = "0x5a2D5a3Bb1aE6973F702220e62B5e51f71EBc584";

const ContractInstance = new web3.eth.Contract(marketAbi, ContractAddress);

export default ContractInstance;
