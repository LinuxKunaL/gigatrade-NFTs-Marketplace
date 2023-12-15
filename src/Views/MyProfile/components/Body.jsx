import React from "react";
import TrendingNFts from "../components/Home/TrendingNFts";
import TrendingCollections from "../components/Home/TrendingCollections";
import { GoArrowUpRight } from "react-icons/go";
import row from "../../../assets/images/row.png";
import { Route, Routes } from "react-router-dom";
import RecentlyAddedCollections from "./Home/RecentlyAddedCollections";
import TopCreators from "./Home/TopCreators";
import MyCollections from "./MyCollection/MyCollections";

import FavoriteCollection from "./MyFavorites/FavoriteCollection";
import FavoriteNFTs from "./MyFavorites/FavoriteNFTs";
import MyNFTs from "./MyNFTs/MyNFTs";

import EditProfile from "./Settings/EditProfile"
import EditAvatar from "./Settings/EditAvatar"

function Body() {
  return (
    <div
      id="body"
      className="p-10 flex overflow-y-auto h-[89%] gap-10 flex-row justify-between"
    >
      <div id="body-left" className="flex w-1 flex-auto h-max flex-col gap-8">
        <div className="h-[17pc] w-full rounded-2xl bg-gradient-to-r from-purple-500 overflow-hidden from-10% via-pink-500 via-100% p-5 flex  justify-between items-center">
          <div className="flex flex-col justify-evenly h-full">
            <h2 className="text-white/90 text-3xl font-semibold">
              Discover, create and <br /> sell your own NFT
            </h2>
            <div className="flex gap-4">
              <button
                type="button"
                className="py-2.5 px-7 text-md font-medium flex items-center gap-2 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 self-center dark:focus:ring-gray-700 dark:bg-darkBlue-400 dark:text-gray-100 border-none dark:hover:text-white"
              >
                Explore Now
                <GoArrowUpRight className="text-md font-semibold" />
              </button>
              <button
                type="button"
                className="py-2.5 px-7 text-md font-medium flex items-center gap-2 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 self-center dark:focus:ring-gray-700 dark:bg-darkBlue-400 dark:text-gray-100 border-none dark:hover:text-white"
              >
                Create Your NFTs
                <GoArrowUpRight className="text-md font-semibold" />
              </button>
            </div>
          </div>
          <div className="h-full w-[55%] flex justify-between -rotate-12">
            <img
              id="user-profile-row-image-animation-1"
              src={row}
              className="h-[50pc]"
              alt=""
            />
            <img
              id="user-profile-row-image-animation-2"
              src={row}
              className="h-[50pc]"
              alt=""
            />
            <img
              id="user-profile-row-image-animation-3"
              src={row}
              className="h-[50pc]"
              alt=""
            />
          </div>
        </div>
        <Routes>
          <Route index element={<><TrendingNFts /><TrendingCollections /></>}/>
          <Route path="myCollection" element={<MyCollections />} />
          <Route path="myFavorites"element={<><FavoriteCollection /><FavoriteNFTs /></>}/>
          <Route path="myNFTs" element={<MyNFTs />} />
          <Route path="setting" element={<><EditAvatar/><EditProfile/></>} />
        </Routes>
      </div>
      <div id="body-right" className="flex flex-col gap-7">
        <RecentlyAddedCollections />
        <TopCreators />
      </div>
    </div>
  );
}
export default Body;
