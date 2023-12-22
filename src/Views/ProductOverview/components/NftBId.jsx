import React from "react";

function NftBId() {
  return (
    <div className="flex flex-col gap-5 rounded-lg p-4 flex-d1 sm:w-[50%] w-full border-darkBlue-300/50 border-[1px] bg-darkBlue-500/70">
      <div className="relative w-max">
        <span
          id="LiveAuction"
          className="dark:text-white/80 sm:text-base text-sm font-semibold w-max"
        >
          Auction Live
        </span>
      </div>
      <div className="flex sm:text-base text-sm justify-between gap-2 items-center">
        <div className="flex gap-2 flex-col">
          <span className="dark:bg-darkBlue-300 h-9 w-9 rounded-md dark:text-white/90 font-semibold flex justify-center items-center ">
            1
          </span>
          <b className="text-white/60 text-sm sm:text-lg font-medium">Day</b>
        </div>
        <span className="dark:text-white/40 text-xl sm:text-2xl">:</span>
        <div className="flex gap-2 flex-col">
          <span className="dark:bg-darkBlue-300 h-9 w-9 rounded-md dark:text-white/90 font-semibold flex justify-center items-center">
            03
          </span>
          <b className="text-white/60 text-sm sm:text-lg font-medium">Hr's</b>
        </div>
        <span className="dark:text-white/40 text-xl sm:text-2xl">:</span>
        <div className="flex gap-2 flex-col">
          <span className="dark:bg-darkBlue-300 h-9 w-9 rounded-md dark:text-white/90 font-semibold flex justify-center items-center">
            34
          </span>
          <b className="text-white/60 text-sm sm:text-lg font-medium">Min's</b>
        </div>
        <span className="dark:text-white/40 text-xl sm:text-2xl">:</span>
        <div className="flex gap-2 flex-col">
          <span className="dark:bg-darkBlue-300 h-9 w-9 rounded-md dark:text-white/90 font-semibold flex justify-center items-center">
            53
          </span>
          <b className="text-white/60 text-sm sm:text-lg font-medium">Sec</b>
        </div>
      </div>
      <button
        type="button"
        className="py-2.5 w-full px-5 text-sm sm:text-lg justify-evenly font-medium flex items-center gap-3 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
      >
        Place a bid
      </button>
    </div>
  );
}

export default NftBId;
