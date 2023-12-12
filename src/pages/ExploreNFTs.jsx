import React from "react";
import { MdRestartAlt } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";
function ExploreNFTs() {
  const k = [
    {
      img: "https://i.seadn.io/s/raw/files/cc8159e0ae3bb8191a60a243d72f0e2e.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/84624d83e4cef9e045c6f8c7e36b7028.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/db06245a1a357a3c20af708a3621c7ab.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/e7af4802b383764a1f6693b708d0a5cf.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/c0768357ae0354e3d985b5bcad665688.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/9bb4ca61672dab5a556db7d121c3b611.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/3256c186a9695acd0e50875dac2303f8.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/d87290e50684507736e8fe98bcb7c934.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/gcs/files/0d8e77ff73ae3ced35436ec66a9c3942.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/eb5fb7536b7cd216cc5d664af289f06f.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/c436388fce886d7f326e217e81b6b208.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/8b459b84fcf4f8fe5aae5b9eab9c9993.png?auto=format&dpr=1&w=256",
    },
  ];
  return (
    <div>
      <div
        id="section-1"
        className="flex flex-col gap-3 w-full h-[15pc] items-center justify-center "
      >
        <h2 className="text-3xl dark:text-white/90 font-semibold">
          Explore NFTs
        </h2>
        <div className="flex gap-3 dark:text-white">
          <span className="dark:text-white/80">Home</span>/
          <span className="dark:text-white/50">Explore</span>
        </div>
      </div>
      <div id="section-2" className="flex gap-10">
        {/* <div className="h-9 w-20 fixed z-30 bottom-10 left-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white/90 gap-2">
          <HiOutlineMenuAlt1 /> Filter
        </div> */}
        <div className="flex lg:z-10 flex-col gap-5 self-start res => z-20 bg-darkBlue-500 p-5 fixed lg:bg-transparent lg:p-0 lg:sticky lg:top-[8pc]">
          <div className="flex justify-between items-center">
            <span className="dark:text-white/90 font-semibold font-xl">
              Filters
            </span>
            <button
              type="button"
              class="py-2.5 px-5 text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 transition-all hover:from-darkBlue-300 hover:to-darkBlue-400 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-darkBlue-400 to-darkBlue-500"
            >
              <MdRestartAlt /> Reset
            </button>
          </div>
          <div className="flex flex-col gap-3 w-[19pc] ">
            <div
              id="status"
              className="border-[1px] rounded-xl flex flex-col gap-3 p-4 border-darkBlue-400/50 bg-darkBlue-600/50 backdrop-blur-xl"
            >
              <div className="flex justify-between items-center">
                <span className="dark:text-white/90">Status</span>
                <IoIosArrowDown className="text-white h-4 w-7 active:bg-purple-700 transition-all rounded-full cursor-pointer hover:bg-purple-800/50" />
                {/* <IoIosArrowUp /> */}
              </div>
              <div className="flex gap-2">
                <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16  bg-darkBlue-400  text-white font-s">
                  All
                </span>
                <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16 border-0 bg-purple-600 text-white font-s">
                  Best
                </span>
                <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16 b bg-darkBlue-400  text-white font-s">
                  Offer
                </span>
                <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16 bg-darkBlue-400 text-white font-s">
                  New
                </span>
              </div>
            </div>
            <div
              id="price"
              className="border-[1px]  rounded-xl flex flex-col gap-3 p-4 border-darkBlue-400/50 bg-darkBlue-600/50 backdrop-blur-xl"
            >
              <div className="flex justify-between items-center">
                <span className="dark:text-white/90">Price</span>
                <IoIosArrowDown className="text-white h-4 w-7 active:bg-purple-700 transition-all rounded-full cursor-pointer hover:bg-purple-800/50" />
                {/* <IoIosArrowUp /> */}
              </div>

              <div class="relative mb-6">
                <label for="labels-range-input" class="sr-only">
                  Labels range
                </label>
                <input
                  id="labels-range-input"
                  type="range"
                  defaultValue="1000"
                  min="100"
                  max="1500"
                  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <span class="text-sm flex items-center gap-1 text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                  <FaEthereum />
                  0.0005
                </span>
                <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                  to
                </span>
                <span class="text-sm flex items-center gap-1 text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
                  <FaEthereum />
                  134.0005
                </span>
              </div>
            </div>
            <div
              id="rating"
              className="border-[1px] rounded-xl flex flex-col justify-center gap-3 p-4 border-darkBlue-400/50 bg-darkBlue-600/50 backdrop-blur-xl"
            >
              <div className="flex justify-between items-center">
                <span className="dark:text-white/90">Rating</span>
                <IoIosArrowDown className="text-white h-4 w-7 active:bg-purple-700 transition-all rounded-full cursor-pointer hover:bg-purple-800/50" />
                {/* <IoIosArrowUp /> */}
              </div>
              <div className="flex gap-2 w-full flex-wrap items-center">
                <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16 bg-darkBlue-400  text-white font-s">
                  1
                </span>
                <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16 border-0 bg-purple-600 text-white font-s">
                  2
                </span>
                <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16 bg-darkBlue-400 text-white font-s">
                  3
                </span>
                <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16 bg-darkBlue-400 text-white font-s">
                  4
                </span>
                <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16  bg-darkBlue-400 text-white font-s">
                  5
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full relative flex flex-col gap-14">
          <div className="bg-gradient-to-r from-purple-800 to-pink-600 absolute right-1 bottom-[50%] h-96 w-96 blur-[10pc] opacity-[30%]" />
          <div className="flex gap-7 relative z-10 flex-wrap">
            <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-6 py-2 bg-purple-600 text-white">
              All NFTs
            </span>
            <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-6 py-2 bg-darkBlue-400 text-white">
              Sports
            </span>
            <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-6 py-2 bg-darkBlue-400 text-white">
              Music
            </span>
            <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-6 py-2 bg-darkBlue-400 text-white">
              Art
            </span>
            <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-6 py-2 bg-darkBlue-400 text-white">
              Photography
            </span>
            <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-6 py-2 bg-darkBlue-400 text-white">
              Utility
            </span>
          </div>
          <div className="bg-gradient-to-r from-purple-800 to-pink-600 absolute h-96 w-96 blur-[10pc] opacity-[30%]" />
          <div className="flex relative z-10 flex-wrap gap-7 justify-evenly">
            {k.map((i) => (
              <div className=" transition-all w-[17pc] bg-gradient-to-r from-darkBlue-400 to-darkBlue-300 rounded-lg hover:shadow-lg hover:-translate-y-3 0 p-[1px] cursor-pointer">
                <div className="p-3 bg-gradient-to-r from-darkBlue-600 via-darkBlue-400 to-darkBlue-500 rounded-lg flex flex-col gap-5">
                  <div
                    style={{ backgroundImage: `url(${i.img})` }}
                    className="bg-cover rounded-lg bg-center bg-[url('https://nftix-html.vercel.app/assets/img/images/sebastian-svenson.jpg')] h-[12pc] flex items-center justify-center"
                  />
                  <div className="flex gap-2 items-center justify-between">
                    <img
                      className="w-11 h-11"
                      src="https://nftix-html.vercel.app/assets/img/avatar/avatar2.jpg"
                      alt=""
                    />
                    <div>
                      <h2 className="text-white/90 text-sm font-semibold">
                        Baby doge #2123
                      </h2>
                      <span className="text-white/50 text-sm">lldlds sdsd</span>
                    </div>
                    <img
                      className="rounded-full w-7 h-7"
                      src="https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="flex gap-[0.1pc] flex-col">
                      <b className="dark:text-white/90">25.5 ETH</b>
                      <span className="dark:text-white/50">Bid Price</span>
                    </div>
                    <div className="flex gap-[0.1pc] flex-col">
                      <b className="dark:text-white/90">21.5 ETH</b>
                      <span className="dark:text-white/50">Offer for</span>
                    </div>{" "}
                    <div className="flex gap-[0.1pc] flex-col">
                      <b className="dark:text-white/90">1334 $</b>
                      <span className="dark:text-white/50">in Doller</span>
                    </div>
                  </div>
                  <button class=" items-center justify-center py-3 px-7 text-sm font-medium flex  gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white bg-gradient-to-r from-purple-800 to-purple-400 hover:from-purple-800 hover:to-purple-600 active:from-purple-600 active:to-purple-700">
                    Collect Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-purple-800 to-pink-600 absolute bottom-2 left-1 h-96 w-96 blur-[10pc] opacity-[30%]" />
          <button
            type="button"
            class="py-2.5 px-5 self-center text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExploreNFTs;
