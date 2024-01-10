const MainMiddleware = (app, cors, express) => {
  app.use(cors());
  app.use(express.json());
};

export { MainMiddleware };
