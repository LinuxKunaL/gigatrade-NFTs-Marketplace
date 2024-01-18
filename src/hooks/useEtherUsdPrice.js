import axios from "axios";

const ethereumUsd = async () => {
  try {
    var ETH_USD = await axios.get(
      "https://www.binance.com/bapi/composite/v1/public/promo/cmc/cryptocurrency/quotes/latest?id=1839%2C1%2C1027%2C5426%2C52%2C3890%2C2010%2C5805%2C4206"
    );

    return ETH_USD.data.data.body.data[1027].quote.USD.price;
  } catch (error) {
    console.log(error);
  }
};

export { ethereumUsd };
