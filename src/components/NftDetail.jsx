import React from "react";
import { FaEthereum, FaRegHeart } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";

function NftDetail() {
  return (
    <div>
      <div
        id="section-1"
        className="flex flex-col gap-3 w-full h-[15pc] items-center justify-center "
      >
        <h2 className="text-3xl dark:text-white/90 font-semibold">
          NFTs Details
        </h2>
        <div className="flex gap-3 dark:text-white">
          <span className="dark:text-white/80">Home</span>/
          <span className="dark:text-white/50">NFT Details</span>
        </div>
      </div>
      <div id="section-2" className="flex h-screen">
        <div className="flex-1">
          <img
            className="h-[40pc] rounded-2xl"
            src="https://nftix-html.vercel.app/assets/img/images/hands/hand-6.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-7 flex-1">
          <div className="flex gap-1 items-center dark:text-white/80 justify-between">
            <div>
              by{" "}
              <span className="font-semibold text-pink-600">
                Billionaires NTFt Club
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex gap-2 items-center p-2 dark:bg-darkBlue-500 rounded-xl">
                <span>2.2k</span>
                <IoEyeOutline className="cursor-pointer rounded-sm transition-all  h-6 w-6 p-[2px]" />
              </div>
              <div className="flex gap-2 items-center p-2 dark:bg-darkBlue-500 rounded-xl">
                <span>23</span>
                <FaRegHeart className="cursor-pointer rounded-sm transition-all hover:text-purple-500 active:text-purple-700 h-6 w-6 p-1" />
              </div>
              <BsFillShareFill className="cursor-pointer rounded-sm transition-all hover:bg-purple-500 active:bg-purple-700 h-6 w-6 p-1" />
            </div>
          </div>
          <h1 className="font-semibold dark:text-white text-5xl">
            Golden Skull
          </h1>
          <p className="dark:text-white/80">
            Hey guys! New exploration about NFT Marketplace Web Design, this
            time I'm inspired by one of my favorite NFT website called Rarible
            (with crypto payment)! What do you think?
          </p>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <span className="dark:text-white/90 font-semibold">Creator</span>
              <div className="flex gap-2 items-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://nftix-html.vercel.app/assets/img/avatar/avatar3.jpg"
                  alt=""
                />
                <span className="dark:text-white/90">0x32323sdsww334</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="dark:text-white/90 font-semibold">
                Current Owner
              </span>
              <div className="flex gap-2 items-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://nftix-html.vercel.app/assets/img/avatar/avatar3.jpg"
                  alt=""
                />
                <span className="dark:text-white/90">0x32323sdsww334</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="dark:text-white/80 font-semibold">
              NFT Properties
            </span>
            <div className="flex gap-3 flex-wrap">
              <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-4 py-1 bg-darkBlue-400  text-white font-s">
                PINK
              </span>
              <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-4 py-1  bg-darkBlue-400  text-white font-s">
                Skeleton
              </span>{" "}
              <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-4 py-1  bg-darkBlue-400  text-white font-s">
                Box
              </span>
              <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-4 py-1  bg-darkBlue-400  text-white font-s">
                Mounted
              </span>
            </div>
          </div>
          <div className="flex justify-between gap-8">
            <div className="flex flex-col gap-3 rounded-lg p-4 flex-1 border-darkBlue-300/50 border-[1px] bg-darkBlue-500/70">
              <span className="dark:text-white/80 font-semibold">
                Current Price
              </span>
              <div className="flex gap-3 items-baseline">
                <b className="text-5xl dark:text-white/90">~6.78 ETH</b>{" "}
                <span className="dark:text-white/60">($3,566.34)</span>
              </div>
              <b className="dark:text-white/50 font-normal">
                Last sale price ~5.67 ETH
              </b>
              <button
                type="button"
                class="py-2.5 w-full px-5 text-lg justify-evenly font-medium flex items-center gap-3 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
              >
                Buy now for{" "}
                <div className="flex gap-2 items-center">
                  <FaEthereum /> 6.78 ETH{" "}
                </div>
              </button>
            </div>
            <div className="flex flex-col gap-3 rounded-lg p-4 flex-1 border-darkBlue-300/50 border-[1px] bg-darkBlue-500/70">
              <span className="dark:text-white/80 font-semibold">
                Auction Live
              </span>
              <div className="flex gap-3 items-baseline">
                <b className="text-5xl dark:text-white/90">~6.78 ETH</b>{" "}
                <span className="dark:text-white/60">($3,566.34)</span>
              </div>
              <b className="dark:text-white/50 font-normal">
                Last sale price ~5.67 ETH
              </b>
              <button
                type="button"
                class="py-2.5 w-full px-5 text-lg justify-evenly font-medium flex items-center gap-3 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
              >
                Buy now for{" "}
                <div className="flex gap-2 items-center">
                  <FaEthereum /> 6.78 ETH{" "}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftDetail;
