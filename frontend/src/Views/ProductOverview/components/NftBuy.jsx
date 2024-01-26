import React, { useState, useEffect } from "react";
import { FaEthereum, FaRegHeart } from "react-icons/fa";
import { BuyNFT } from "../../../hooks/ContractControllers/useBuyNFT";
import store from "../../../app/redux/ReduxStore";
import { SuccessToast } from "../../../app/Toast/Success";
import { Toaster } from "react-hot-toast";
import { ErrorToast } from "../../../app/Toast/Error";
import { ethereumUsd } from "../../../hooks/useEtherUsdPrice";
import { Tooltip } from "flowbite-react";

function NftBuy({ price, nftId, ComponentLoad, isListed }) {
  const [usdPrice, setUsdPrice] = useState(0);

  useEffect(() => {
    const converting = async () => {
      setUsdPrice(await ethereumUsd());
    };
    converting();
  }, []);

  const HandleBuyNFT = async () => {
    try {
      const response = await BuyNFT(nftId);
      ComponentLoad((pre) => pre + 1);
      SuccessToast(
        <div>
          NFT Buy successfully 🎉 ! <br />
          <div className=" line-clamp-1">
            Gas used :
            <b className=" font-normal text-darkBlue-50">
              {" "}
              {response.gasUsed.toString()}
            </b>{" "}
            in wei
          </div>
        </div>
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-3 rounded-lg p-4 flex-aut border-darkBlue-300/50 border-[1px] bg-darkBlue-500/70 sm:w-auto w-full">
      <Toaster position="leftbottom" />
      <span className="dark:text-white/80 sm:text-base text-sm font-semibold">
        Current Price
      </span>
      <div className="flex gap-3 items-baseline">
        <Tooltip
          className="dark:bg-darkBlue-400 text-pink-500"
          theme={{
            arrow: {
              style: {
                dark: "bg-gray-900 dark:bg-darkBlue-400",
                light: "bg-white",
              },
            },
          }}
          content={`${price} ETH`}
        >
          <b className="text-2xl cursor-pointer sm:text-5xl dark:text-white/90">
            ~{Number(price).toFixed(4)} ETH
          </b>
        </Tooltip>
        <Tooltip
          className="dark:bg-darkBlue-400 text-pink-500"
          theme={{
            arrow: {
              style: {
                dark: "bg-gray-900 dark:bg-darkBlue-400",
                light: "bg-white",
              },
            },
          }}
          content={`${usdPrice * price} $`}
        >
          <span className="dark:text-white/60 cursor-pointer text-sm sm:text-base">
            (${Number(usdPrice * price).toFixed(1)})
          </span>
        </Tooltip>
      </div>
      <b className="dark:text-white/50 font-normal text-sm sm:text-base">
        Rare NFT with Best Price!
      </b>
      {isListed ? (
        <button
          type="button"
          className="py-2.5 w-full px-5 text-sm sm:text-lg justify-evenly font-medium flex items-center gap-3 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
          onClick={HandleBuyNFT}
        >
          Buy now for
          <div className="flex gap-2 items-center">
            <FaEthereum /> {Number(price).toFixed(4)} ETH
          </div>
        </button>
      ) : (
        <button
          onClick={() => ErrorToast("This NFT is not listed")}
          type="button"
          className="py-2.5 w-full px-5 text-sm sm:text-lg justify-evenly font-medium flex items-center gap-3 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 dark:text-gray-100/50 border-none bg-gradient-to-r from-gray-700 to-gray-600 cursor-not-allowed"
        >
          This NFT is not listed
        </button>
      )}
    </div>
  );
}

export default NftBuy;
