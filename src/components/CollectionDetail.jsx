import React, { useEffect, useState } from "react";
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
import { ProductNFT, SkeletonProductNFT } from "./UiComponents/ProductNFT";

import axios from "axios";

import {
  MdContentCopy,
  MdOutlineOpenInNew,
  MdShoppingCart,
} from "react-icons/md";
import { BsStars } from "react-icons/bs";

import { Button, Tooltip } from "flowbite-react";
import ApexCharts from "apexcharts";
import { Link } from "react-router-dom";

function CollectionDetail() {
  const DummySkeletonData = [1, 2, 3, 4, 5, 6, 81, 2];
  const [NFTsItems, setNFTsItems] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(30);

  const fetchPhotos = async () => {
    setTimeout(async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
      );
      var data = response.data;
      setNFTsItems((pre) => [...pre, ...data]);
      setPage((pre) => pre + 1);
      setProgress(100);
      setIsLoading(true);
    }, 1000);
  };
  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      fetchPhotos();
    }
  };
  useEffect(() => {
    fetchPhotos();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:px-0 flex flex-col gap-4 px-3">
      <div
        id="section-1"
        className="flex flex-col gap-5 md:gap-3 w-full  h-[18pc] md:h-[14pc] items-center justify-end"
      >
        <h2 className="text-2xl sm:text-3xl dark:text-white/90 font-semibold">
          Explore Collections
        </h2>
        <div className="flex gap-3 text-sm sm:text-base dark:text-white">
          <span className="dark:text-white/80">Home</span>/
          <span className="dark:text-white/80">Pages</span>/
          <span className="dark:text-white/50">Explore Collections</span>
        </div>
        <div className="flex md:justify-between mt-5 md:mt-0 md:flex-row flex-col gap-5 items-center justify-center w-full">
          <div className="flex gap-8 md:self-start  w-max">
            <div className="flex gap-2 flex-col items-center">
              <b className=" dark:text-white/60 text-xl sm:text-2xl">345</b>{" "}
              <span className=" dark:text-white/80 text-sm sm:text-lg">
                Items
              </span>
            </div>
            <div className="flex gap-2 flex-col items-center">
              <b className=" dark:text-white/60 text-xl sm:text-2xl">
                3.25 ETH
              </b>{" "}
              <span className=" dark:text-white/80 text-sm">Unite Price</span>
            </div>
            <div className="flex gap-2 flex-col items-center">
              <b className=" dark:text-white/60 text-xl sm:text-2xl">5345</b>{" "}
              <span className=" dark:text-white/80 text-sm">Volume</span>
            </div>
          </div>
          <div className="flex gap-2 items-center w-max">
            <span className="text-white/70 sm:text-xl">Follow us:</span>
            <div className="flex gap-4 items-center text-white/70 text-lg sm:text-xl">
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
        {/* shadow-2xl shadow-pink-800/50 */}
        <div className="flex flex-col gap-3 sm:mt-0 mt-8 items-center">
          <img
            className="w-32 z-10 relative h-auto rounded-lg"
            src="https://lh6.googleusercontent.com/SI1hK2Mw3X7s-1wMOy1v-DTpFcN5M5J9NNIVOSFgBHZ-tsYK475-yX7HxN2N1VRNnqIK3fVusbUpyWD101cqE0_PltqLhJkHiuXL5PQHRbX9Mng7otIF92kJFNoU-KR0zCy2SNhI"
            alt=""
          />
          <img
            className="w-32 absolute blur-xl opacity-40 translate-y-8 h-28 border-2 border-pink-500"
            src="https://lh6.googleusercontent.com/SI1hK2Mw3X7s-1wMOy1v-DTpFcN5M5J9NNIVOSFgBHZ-tsYK475-yX7HxN2N1VRNnqIK3fVusbUpyWD101cqE0_PltqLhJkHiuXL5PQHRbX9Mng7otIF92kJFNoU-KR0zCy2SNhI"
            alt=""
          />
          <h2 className="text-xl sm:text-2xl font-semibold dark:text-white/80">
            HandCraft
          </h2>
          <span className="dark:text-white/60 text-sm flex items-start gap-2">
            By{" "}
            <Link to="/author">
              <b className="font-semibold text-pink-600 hover:underline">
                kunal lokhande
              </b>
            </Link>
          </span>
        </div>
        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="flex lg:z-10 flex-col gap-5 self-start res => z-20  rounded-lg border-gray-700 border-none bg-transparent p-0  w-full lg:w-auto sticky top-[8pc]">
            <div className="flex justify-between items-center">
              <span className="dark:text-white/90 font-semibold sm:text-xl text-lg">
                Filters
              </span>
              <button
                type="button"
                className="py-2.5 px-3 hover:bg-darkBlue-400 active:bg-darkBlue-600 transition-all active:scale-95 bg-darkBlue-600 flex items-center justify-center gap-1 rounded-md text-white/90 sm:text-base text-sm"
              >
                <MdRestartAlt /> Reset
              </button>
            </div>
            <div className="flex gap-2 w-full">
              <div className="flex w-full lg:w-auto gap-2">
                <input
                  className=" bg-gray-50 text-gray-900 rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70 text-sm sm:text-base"
                  type="text"
                  placeholder="Search by title..."
                />
              </div>
              <button
                type="button"
                className="py-2.5 px-3 hover:bg-darkBlue-400 active:bg-darkBlue-600 transition-all active:scale-95 bg-darkBlue-500 rounded-md text-white/90"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-3 lg:w-[19pc] ">
              <div
                id="status"
                className="border-[1px] rounded-xl flex flex-col gap-3 p-4 border-darkBlue-400/50 sm:text-base text-sm bg-darkBlue-600/50 backdrop-blur-xl"
              >
                <div className="flex justify-between items-center sm:text-base text-sm">
                  <span className="dark:text-white/90 ">Status</span>
                  <IoIosArrowDown className="text-white h-4 w-7 active:bg-purple-700 transition-all rounded-full cursor-pointer hover:bg-purple-800/50" />
                  {/* <IoIosArrowUp /> */}
                </div>
                <div className="flex gap-2">
                  <span className="flex flex-1 flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16  bg-darkBlue-400  text-white ">
                    All
                  </span>
                  <span className="flex flex-1 flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16 border-0 bg-purple-600 text-white font-s">
                    Best
                  </span>
                  <span className="flex flex-1 flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16 b bg-darkBlue-400  text-white !text-sm">
                    On Auction
                  </span>
                </div>
              </div>
              <div
                id="price"
                className="border-[1px]  rounded-xl flex flex-col gap-3 p-4 border-darkBlue-400/50 bg-darkBlue-600/50 backdrop-blur-xl sm:text-base text-sm"
              >
                <div className="flex justify-between items-center">
                  <span className="dark:text-white/90">Price</span>
                  <IoIosArrowDown className="text-white h-4 w-7 active:bg-purple-700 transition-all rounded-full cursor-pointer hover:bg-purple-800/50" />
                  {/* <IoIosArrowUp /> */}
                </div>

                <div className="relative mb-6">
                  <label htmlFor="labels-range-input" className="sr-only">
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
                className="border-[1px] rounded-xl flex flex-col justify-center gap-3 p-4 border-darkBlue-400/50 bg-darkBlue-600/50 backdrop-blur-xl sm:text-base text-sm"
              >
                <div className="flex justify-between items-center">
                  <span className="dark:text-white/90">Rating</span>
                  <IoIosArrowDown className="text-white h-4 w-7 active:bg-purple-700 transition-all rounded-full cursor-pointer hover:bg-purple-800/50" />
                  {/* <IoIosArrowUp /> */}
                </div>
                <div className="flex gap-2 w-full flex-wrap items-center">
                  <span className="flex flex-1 flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16 bg-darkBlue-400  text-white sm:text-base text-xs">
                    1
                  </span>
                  <span className="flex flex-1 flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16 border-0 bg-purple-600 text-white sm:text-base text-xs">
                    2
                  </span>
                  <span className="flex flex-1 flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16 bg-darkBlue-400 text-white sm:text-base text-xs">
                    3
                  </span>
                  <span className="flex flex-1 flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16 bg-darkBlue-400 text-white sm:text-base text-xs">
                    4
                  </span>
                  <span className="flex flex-1 flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16  bg-darkBlue-400 text-white sm:text-base text-xs">
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
                {IsLoading
                  ? NFTsItems.map((item, index) => (
                      <ProductNFT kay={index} data={item} />
                    ))
                  : DummySkeletonData.map((item, index) => (
                      <SkeletonProductNFT key={index} />
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
