import Web3 from "web3";
import marketAbi from "../contracts/Marketplace.json";

export const web3 = new Web3(window.ethereum);

// 0x7E312354BDBc0aADf3Ac79b719c1Cfd7F5aDA746
const ContractAddress = "0xb0C4CD0275A190ec396b9F43bCc6609d97eAB3A8";

const ContractInstance = new web3.eth.Contract(marketAbi, ContractAddress);

export default ContractInstance;
