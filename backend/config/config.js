import dotenv from "dotenv";

if (process.env.NODE_ENV === 'development') {

  dotenv.config({ path: '.env.development' });

} else if (process.env.NODE_ENV === 'production') {

  dotenv.config({ path: '.env.production' });

}

const config = {
  Server: {
    PORT: process.env.SERVER_PORT,
    HOST: process.env.SERVER_HOST,
  },
  Database: {
    name: process.env.DB_NAME,
    ConnectUrl: process.env.DB_CONNECT_URL, 
  },
  web3: {
    ContractAddress: process.env.CONTRACT_ADDRESS,
    WebsocketProvider: process.env.WEB3_WEBSOCKET_PROVIDER, 
  },
};

export { config };
