import React from "react";
import { FaEthereum, FaRegHeart } from "react-icons/fa";

function NftBuy({ price }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg p-4 flex-aut border-darkBlue-300/50 border-[1px] bg-darkBlue-500/70 sm:w-auto w-full">
      <span className="dark:text-white/80 sm:text-base text-sm font-semibold">
        Current Price
      </span>
      <div className="flex gap-3 items-baseline">
        <b className="text-2xl sm:text-5xl dark:text-white/90">~{price} ETH</b>{" "}
        <span className="dark:text-white/60 text-sm sm:text-base">
          (${2365 * (price * 82)})
        </span>
      </div>
      <b className="dark:text-white/50 font-normal text-sm sm:text-base">
        Last sale price ~{price - 1.5} ETH
      </b>
      <button
        type="button"
        className="py-2.5 w-full px-5 text-sm sm:text-lg justify-evenly font-medium flex items-center gap-3 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
      >
        Buy now for
        <div className="flex gap-2 items-center">
          <FaEthereum /> {price} ETH
        </div>
      </button>
    </div>
  );
}

export default NftBuy;
