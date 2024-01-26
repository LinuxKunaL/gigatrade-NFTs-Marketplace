import React from "react";
import { MdRestartAlt } from "react-icons/md";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import ShopNFTs from "./Components/ShopNFTs";
import ShopCollections from "./Components/ShopCollections";

function Explore() {
  const URLpath = useLocation();
  const category = [
    "all",
    "sports",
    "music",
    "art",
    "Photography",
    "utility",
    "gaming",
  ];

  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    category: "",
  });

  const handleParams = (e) => {
    setSearchParams((prevSearchParams) => {
      const newParams = new URLSearchParams(prevSearchParams);
      newParams.set(e.target.name, e.target.value);
      return newParams;
    });
  };

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
        <div className="w-full relative flex flex-col gap-14">
          {/* <div className="bg-gradient-to-r from-purple-800 to-pink-600 absolute right-1 bottom-[50%] h-96 w-96 blur-[10pc] opacity-[30%]" /> */}
          <div className="flex gap-7 relative z-10 flex-wrap justify-between">
            <div className="flex sm:text-base text-xs gap-3 sm:justify-start justify-center sm:gap-7 relative z-10 flex-wrap">
              {category.map((category) => (
                <label
                  key={category}
                  htmlFor={category}
                  className={`flex sm:flex-0 flex-auto flex-wrap border-[1px] border-gray-700/70 items-center justify-center rounded-full cursor-pointer backdrop-blur-lg transition-all capitalize hover:bg-purple-500/90 active:bg-purple-700 px-6 py-2 ${
                    searchParams.get("category") === category
                      ? "bg-purple-500/90"
                      : "bg-darkBlue-400/90"
                  } text-white`}
                >
                  <input
                    type="radio"
                    id={category}
                    name="category"
                    value={category}
                    className="hidden"
                    onClick={handleParams}
                  />
                  {category}
                </label>
              ))}
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
            <form className="flex gap-2 w-full">
              <div className="flex w-full lg:w-auto gap-2">
                <input
                  className=" bg-gray-50 text-gray-900 rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600/60 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70 text-sm sm:text-base"
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Search by title..."
                  required
                />
              </div>
              <button
                type="button"
                className="py-2.5 px-5 hover:bg-darkBlue-400 border-[1px] border-gray-700/70 active:bg-darkBlue-600 transition-all active:scale-95 bg-darkBlue-500 rounded-md text-white/90"
                onClick={() =>
                  setSearchParams((prevSearchParams) => {
                    const newParams = new URLSearchParams(prevSearchParams);
                    newParams.set(
                      "search",
                      document.getElementById("search").value
                    );
                    return newParams;
                  })
                }
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
              <button
                type="button"
                className="px-3 hover:bg-darkBlue-400 border-[1px] flex items-center gap-2 border-gray-700/70 active:bg-darkBlue-600 transition-all active:scale-95 bg-darkBlue-500 rounded-md text-white/90"
                onClick={() =>
                  setSearchParams((prevSearchParams) => {
                    const newParams = new URLSearchParams(prevSearchParams);
                    newParams.set("search", "");
                    newParams.set("category", "");
                    return newParams;
                  })
                }
              >
                <MdRestartAlt /> Reset
              </button>
            </form>
          </div>
          <div className=" sm:bg-gradient-to-r from-purple-800 to-pink-600 absolute h-96 w-96 blur-[10pc] opacity-[30%]" />
          <div className="flex gap-7 relative z-10 flex-col justify-between">
            <Routes>
              <Route index element={<ShopNFTs filters={searchParams} />} />
              <Route
                path="collections"
                element={<ShopCollections filters={searchParams} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
