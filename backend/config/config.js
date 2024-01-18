const Config = {
  Server: {
    PORT: 90,
    HOST: "", //  ex. http://localhost:90
  },
  Database: {
    name: "gigatrade",
    ConnectUrl: "", // ex. mongodb+srv://thelosser321:<password>@clusterteehaven.fy29l9l.mongodb.net , localhost DB url 
  },
  web3: {
    ContractAddress: "", // ex. 0x9b27f429a6ced75d86ea6fd8fc2db10815f636c7
    Web3Provider: "", // ex. ws://localhost:8545 , ws://eth-sepolia.g.alchemy.com/v2/key , hardhat url , genash url
  },
};

export { Config };
