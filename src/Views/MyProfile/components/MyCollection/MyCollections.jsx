import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
function MyCollections() {
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
      img: "https://i.seadn.io/s/raw/files/e7af4802b383764a1f6693b708d0a5cf.png?auto=format&dpr=1&w=256",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="h-[10pc] mt-5 rounded-3xl flex flex-row justify-between items-center w-full dark:bg-darkBlue-500/80 outline-dashed outline-offset-2  outline-pink-500/40 p-5">
        <div className="flex flex-col gap-2">
          <h2 className="flex gap-2 items-center text-pink-500 text-xl">
            <FiPlusCircle /> Add new collection
          </h2>
          <p className="dark:text-white/50">
            create and store the best collections of NFTs
          </p>
        </div>
        <Link to="/myProfile/addCollection">
          <button className="py-3 px-10 flex flex-row items-center gap-2 text-white/90 font-semibold text-md  bg-gradient-to-tr from-pink-500 to-purple-500 rounded-xl ">
            Create <FaArrowLeftLong className="-rotate-[-140deg]" />
          </button>
        </Link>
      </div>
      <div className="text-white/90 mt-10 text-2xl gap-5 flex flex-col font-semibold">
        <div className="flex gap-4">
          <input
            className="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block  p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30  dark:placeholder-gray-400 dark:text-white/50"
            type="text"
            placeholder="Search Collection by title"
          />
          <button
            type="submit"
            class="text-white end-2.5 bottom-2.5 bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
          >
            Search
          </button>
        </div>
        <h2 className="text-2xl">My Collections</h2>
        <div className="flex mt-5 flex-row flex-wrap justify-evenly gap-5">
          {k.map((i) => (
            <div
              id="collections"
              className="flex relative z-10 flex-wrap gap-7 justify-evenly"
            >
              <Link to="/myProfile/editCollection">
                <div className="transition-all bg-gradient-to-r from-darkBlue-400 to-darkBlue-300 rounded-lg hover:shadow-lg hover:-translate-y-3 0 p-[1px] cursor-pointer">
                  <div className="p-3 w-max bg-gradient-to-r relative from-darkBlue-600 via-darkBlue-400 to-darkBlue-500 rounded-lg flex flex-col gap-5">
                    <div className="relative">
                      <img
                        className=" rounded-md  border-darkBlue-200"
                        src="https://rainbowit.net/html/nuron/assets/images/collection/collection-lg-01.jpg"
                        alt=""
                      />
                    </div>
                    <img
                      className="w-14 h-14 rounded-full border-2 absolute top-[12pc] left-[8.5pc] border-darkBlue-200"
                      src="https://rainbowit.net/html/nuron/assets/images/client/client-14.png"
                      alt=""
                    />
                    <div className="flex gap-2">
                      <img
                        className=" rounded-md  border-darkBlue-200"
                        src="https://rainbowit.net/html/nuron/assets/images/collection/collection-sm-01.jpg"
                        alt=""
                      />
                      <img
                        className=" rounded-md  border-darkBlue-200"
                        src="https://rainbowit.net/html/nuron/assets/images/collection/collection-sm-02.jpg"
                        alt=""
                      />
                      <img
                        className=" rounded-md  border-darkBlue-200"
                        src="https://rainbowit.net/html/nuron/assets/images/collection/collection-sm-03.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex w-full justify-between items-center">
                      <span className="text-white/70 text-lg hover:underline">
                        Orthogon#720
                      </span>
                      <button
                        type="button"
                        className="py-2 px-4 text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
                      >
                        10 Items
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyCollections;
