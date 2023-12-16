import React, { useEffect } from "react";
import {
  FaEthereum,
  FaRegHeart,
  FaLongArrowAltUp,
  FaTelegramPlane,
  FaFacebookSquare,
} from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { MdRestartAlt } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import {
  MdContentCopy,
  MdOutlineOpenInNew,
  MdShoppingCart,
} from "react-icons/md";
import { BsStars } from "react-icons/bs";

import { Button, Tooltip } from "flowbite-react";
import ApexCharts from "apexcharts";

function CollectionDetail() {
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
      img: "https://i.seadn.io/s/raw/files/c0768357ae0354e3d985b5bcad665688.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/c0768357ae0354e3d985b5bcad665688.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/c0768357ae0354e3d985b5bcad665688.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/c0768357ae0354e3d985b5bcad665688.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/c0768357ae0354e3d985b5bcad665688.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/c0768357ae0354e3d985b5bcad665688.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/c0768357ae0354e3d985b5bcad665688.png?auto=format&dpr=1&w=256",
    },
  ];
  return (
    <div>
      <div
        id="section-1"
        className="flex flex-col gap-3 w-full h-[14pc] items-center justify-end"
      >
        <h2 className="text-3xl dark:text-white/90 font-semibold">
          Explore Collections
        </h2>
        <div className="flex gap-3 dark:text-white">
          <span className="dark:text-white/80">Home</span>/
          <span className="dark:text-white/80">Pages</span>/
          <span className="dark:text-white/50">Explore Collections</span>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex gap-8 self-start w-max">
            <div className="flex gap-2 flex-col items-center">
              <b className=" dark:text-white/60 text-2xl">345</b>{" "}
              <span className=" dark:text-white/80 text-lg">Items</span>
            </div>
            <div className="flex gap-2 flex-col items-center">
              <b className=" dark:text-white/60 text-2xl">3.25 ETH</b>{" "}
              <span className=" dark:text-white/80 text-lg">Unite Price</span>
            </div>
            <div className="flex gap-2 flex-col items-center">
              <b className=" dark:text-white/60 text-2xl">5345</b>{" "}
              <span className=" dark:text-white/80 text-lg">Volume</span>
            </div>
          </div>
          <div className="flex gap-2 items-center w-max">
            <span className="text-white/70 text-xl">Follow us:</span>
            <div className="flex gap-4 items-center text-white/70 text-xl">
              <FaTelegramPlane className="h-7 p-1 w-8 active:bg-purple-700 transition-all rounded-md cursor-pointer hover:bg-purple-800/50" />
              <FaFacebookSquare className="h-7 p-1 w-8 active:bg-purple-700 transition-all rounded-md cursor-pointer hover:bg-purple-800/50" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="section-2"
        className="flex justify-center w-full flex-col gap-10"
      >
        <div className="flex flex-col gap-1 items-center">
          <img
            className="w-32 h-32 rounded-lg border-4"
            src="https://nftix-html.vercel.app/assets/img/images/pawel-czerwinski-unsplash.jpg"
            alt=""
          />
          <h2 className="text-2xl font-semibold dark:text-white/80">
            HandCraft
          </h2>
          <span className="dark:text-white/60">
            By <b className="font-semibold text-pink-600">kunal lokhande</b>{" "}
          </span>
        </div>
        <div className="flex gap-5">
          <div className="flex lg:z-10 flex-col gap-5 self-start res => z-20 bg-darkBlue-500 p-5 fixed lg:bg-transparent lg:p-0 lg:sticky lg:top-[8pc]">
            <div className="flex justify-between items-center">
              <span className="dark:text-white/90 font-semibold font-xl">
                Filters
              </span>
              <button
                type="button"
                className="py-2.5 px-5 text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 transition-all hover:from-darkBlue-300 hover:to-darkBlue-400 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-darkBlue-400 to-darkBlue-500"
              >
                <MdRestartAlt /> Reset
              </button>
            </div>
            <div className="flex gap-2">
              <div className="relative w-full">
                <input
                  type="text"
                  id="search"
                  className="bg-gray-50  text-gray-900 text-sm rounded-lg  block ps-4 p-2.5 w-[inherit] border-darkBlue-400/50 dark:bg-darkBlue-600/50 backdrop-blur-xl dark:placeholder-gray-500 dark:text-white focus:ring-purple-600/50 ring-transparent ring-offset-0"
                  placeholder="Search By Title...."
                  required
                />
              </div>
              <button
                type="button"
                className="py-2.5 px-3 text-sm font-medium flex items-center gap-1 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                Search
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
                  <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 px-3 bg-darkBlue-400 text-white font-s">
                    On Auction
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

                <div className="relative mb-6">
                  <label for="labels-range-input" className="sr-only">
                    Labels range
                  </label>
                  <input
                    id="labels-range-input"
                    type="range"
                    defaultValue="1000"
                    min="100"
                    max="1500"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <span className="text-sm flex items-center gap-1 text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">
                    <FaEthereum />
                    0.0005
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">
                    to
                  </span>
                  <span className="text-sm flex items-center gap-1 text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">
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
            <div className="bg-gradient-to-r from-purple-800 to-pink-600 absolute h-96 w-96 blur-[10pc] opacity-[30%]" />
            <div className="flex gap-7 relative z-10 flex-col justify-between">
              <div
                id="all"
                className="flex relative z-10 flex-wrap gap-7 justify-evenly"
              >
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
                          <span className="text-white/50 text-sm">
                            lldlds sdsd
                          </span>
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
                      <button className=" items-center justify-center py-3 px-7 text-sm font-medium flex  gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white bg-gradient-to-r from-purple-800 to-purple-400 hover:from-purple-800 hover:to-purple-600 active:from-purple-600 active:to-purple-700">
                        Collect Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-purple-800 to-pink-600 absolute bottom-2 left-1 h-96 w-96 blur-[10pc] opacity-[30%]" />
              <button
                type="button"
                className="py-2.5 px-5 self-center text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionDetail;
