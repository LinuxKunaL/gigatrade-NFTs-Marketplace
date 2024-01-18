import ContractInstance from "../useContract";
import { web3 } from "../useContract";

const NFTsChartData = async (_NftId) => {
  const ConvertCodeText = (Code) => {
    if (Code == 98) {
      return "mint";
    } else if (Code == 76) {
      return "sell";
    }
  };

  try {
    const Response = await ContractInstance.getPastEvents("NFTsActivity", {
      filter: {
        tokenId: _NftId,
        action: 76,
      },
      fromBlock: 0,
      toBlock: "latest",
    });
    
    const NFTChartData = Response.map((item) => {
      return {
        price: Number(
          web3.utils.fromWei(parseInt(item.returnValues.price), "ether")
        ).toFixed(5),
        time: parseInt(item.returnValues.time),
      };
    });

    return NFTChartData;
  } catch (error) {
    console.log(error + " Error in NFTsActivityEvent");
    return null;
  }
};

export { NFTsChartData };
