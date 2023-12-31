import Web3 from "web3";
import marketAbi from "../contracts/Marketplace.json";

export const web3 = new Web3(window.ethereum);

export const ContractAddress = "0xD4f1F94397208Bf4Ef08cfaAC05e66C0D8664c3c";

const ContractInstance = new web3.eth.Contract(marketAbi, ContractAddress);

export default ContractInstance;
