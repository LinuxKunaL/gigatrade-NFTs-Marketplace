import React, { useState, useEffect } from "react";
import { MdRestartAlt } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoEyeOutline, IoClose } from "react-icons/io5";
import { Link, Route, Routes, useLocation } from "react-router-dom";

import ShopNFTs from "./Components/ShopNFTs";
import ShopCollections from "./Components/ShopCollections";

function Explore() {
  const URLpath = useLocation();
  return (
    <div className="sm:px-0 px-3">
      <div
        id="section-1"
        className="flex flex-col gap-3 w-full h-[9pc] sm:h-[15pc] items-center justify-center "
      >
        <h2 className="text-2xl sm:text-3xl dark:text-white/90 font-semibold">
          Explore NFTs
        </h2>
        <div className="flex gap-3 text-sm sm:text-base dark:text-white">
          <span className="dark:text-white/80">Home</span>/
          <span className="dark:text-white/50">Explore</span>
        </div>
      </div>

      <div id="section-2" className="flex lg:flex-row flex-col gap-10">
        <div
          id="filter"
          className="flex lg:z-10 flex-col gap-5 self-start res => z-20  rounded-lg border-gray-700 border-none bg-transparent p-0  w-full lg:w-auto sticky top-[8pc]"
        >
          <div className="flex justify-between items-center">
            <span className="dark:text-white/90 font-semibold sm:text-xl text-lg">
              Filters
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                className="py-2.5 px-3 hover:bg-darkBlue-400 active:bg-darkBlue-600 transition-all active:scale-95 bg-darkBlue-600 flex items-center justify-center gap-1 rounded-md text-white/90 sm:text-base text-sm"
              >
                <MdRestartAlt /> Reset
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3  lg:w-[19pc] ">
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
                <span className="flex flex-1 flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16  bg-darkBlue-400  text-white font-s">
                  All
                </span>
                <span className="flex flex-1 flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16 border-0 bg-purple-600 text-white font-s">
                  Best
                </span>
                <span className="flex flex-1 flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16 b bg-darkBlue-400  text-white font-s">
                  Offer
                </span>
                <span className="flex flex-1 flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 h-8 w-16 bg-darkBlue-400 text-white font-s">
                  New
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
          <div className="flex gap-7 relative z-10 flex-wrap justify-between">
            <div className="flex sm:text-base text-xs gap-3 sm:justify-start justify-center sm:gap-7 relative z-10 flex-wrap">
              <span className="flex sm:flex-0 flex-auto flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-6 py-2 bg-purple-600 text-white">
                All NFTs
              </span>
              <span className="flex sm:flex-0 flex-auto flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-6 py-2 bg-darkBlue-400 text-white">
                Sports
              </span>
              <span className="flex sm:flex-0 flex-auto flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-6 py-2 bg-darkBlue-400 text-white">
                Music
              </span>
              <span className="flex sm:flex-0 flex-auto flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-6 py-2 bg-darkBlue-400 text-white">
                Art
              </span>
              <span className="flex sm:flex-0 flex-auto flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-6 py-2 bg-darkBlue-400 text-white">
                Photography
              </span>
              <span className="flex sm:flex-0 flex-0 flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-6 py-2 bg-darkBlue-400 text-white">
                Utility
              </span>
            </div>

            <ul
              id="explore-page-ul"
              className="flex self-end flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400"
            >
              <li className="me-2">
                <Link
                  to="/explore"
                  className={
                    URLpath.pathname == "/explore"
                      ? "inline-block px-4 py-3 text-white bg-gradient-to-tr from-purple-700 to-purple-400 rounded-lg"
                      : "inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 bg-darkBlue-200/30 dark:hover:bg-darkBlue-400  dark:hover:text-white"
                  }
                >
                  Nfts only
                </Link>
              </li>
              <li className="me-2">
                <Link
                  to="/explore/collections"
                  className={
                    URLpath.pathname == "/explore/collections"
                      ? "inline-block px-4 py-3 text-white bg-gradient-to-tr from-pink-700 to-pink-400 rounded-lg"
                      : "inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 bg-darkBlue-200/30 dark:hover:bg-darkBlue-400  dark:hover:text-white"
                  }
                >
                  Collections
                </Link>
              </li>
            </ul>

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
          </div>
          <div className=" sm:bg-gradient-to-r from-purple-800 to-pink-600 absolute h-96 w-96 blur-[10pc] opacity-[30%]" />
          <div className="flex gap-7 relative z-10 flex-col justify-between">
            <Routes>
              <Route
                index
                filters={{
                  Status: "",
                  Price: "",
                  Rating: "",
                  Category: "",
                }}
                element={<ShopNFTs />}
              />
              <Route
                path="collections"
                filters={{
                  Status: "",
                  Price: "",
                  Rating: "",
                  Category: "",
                }}
                element={<ShopCollections />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
