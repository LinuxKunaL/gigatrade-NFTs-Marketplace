import React, { useState, useEffect } from "react";
import TrendingNFts from "../components/Home/TrendingNFts";
import TrendingCollections from "../components/Home/TrendingCollections";
import { GoArrowUpRight } from "react-icons/go";
import row_1 from "../../../assets/images/row.png";
import row_2 from "../../../assets/images/row_2.png";
import row_3 from "../../../assets/images/row_3.png";
import { Route, Routes } from "react-router-dom";
import RecentlyAddedCollections from "./Home/RecentlyAddedCollections";
import { Link } from "react-router-dom";
import TopCreators from "./Home/TopCreators";
import MyCollections from "./MyCollection/MyCollections";

import FavoriteCollection from "./MyFavorites/FavoriteCollection";
import FavoriteNFTs from "./MyFavorites/FavoriteNFTs";
import MyNFTs from "./MyNFTs/MyNFTs";

import EditProfile from "./Settings/EditProfile";
import EditAvatar from "./Settings/EditAvatar";
import { getUserFavoriteByEthAddress } from "../../../apis/profile.apis.js";
import { useSelector } from "react-redux";

function Body() {
  const [UserFavorite, setUserFavorite] = useState({});
  const EthUser = useSelector((state) => state.EthAccountStates.account);
  useEffect(() => {
    const fetching = async () => {
      const response = await getUserFavoriteByEthAddress(EthUser);
      setUserFavorite(response);
      try {
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, []);

  return (
    <div
      id="body"
      className="sm:p-10 p-4 flex overflow-y-auto overflow-x-auto h-[89%] w-full gap-10 flex-col xl:flex-row"
    >
      <div
        id="body-left"
        className="flex w-full xl:w-1 xl:flex-1 h-max flex-col sm:gap-8 gap-4"
      >
        <div className="sm:h-[17pc] relative rounded-2xl bg-gradient-to-r from-purple-500 overflow-hidden from-10% via-pink-500 via-100% sm:p-5 p-2 flex justify-between items-center">
          <div className="flex z-10 relative flex-col sm:justify-evenly gap-7 sm:m-0 h-full sm:w-auto w-full">
            <h2 className="text-white/90 sm:text-start text-center text-2xl sm:text-3xl font-semibold">
              Discover, create and <br /> sell your own NFT
            </h2>
            <div className="flex sm:gap-4 gap-1 w-full flex-row sm:justify-start justify-between items-start sm:flex-row">
              <Link
                to="/explore"
                className="sm:py-2.5 sm:px-7 py-2 px-4 sm:w-max w-[9pc] text-[0.9rem] sm:text-lg font-medium flex items-center gap-2 justify-between text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-darkBlue-300 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 self-center dark:focus:ring-gray-700 dark:bg-darkBlue-400 dark:text-gray-100 border-none dark:hover:text-white "
              >
                Explore Now
                <GoArrowUpRight className="text-md font-semibold" />
              </Link>
              <Link
                to="/myProfile/addNFT"
                className="sm:py-2.5 sm:px-7 py-2 px-4 sm:w-max w-[9pc] text-[0.9rem] sm:text-lg font-medium flex items-center gap-2 justify-between text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-darkBlue-300 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 self-center dark:focus:ring-gray-700 dark:bg-darkBlue-400 dark:text-gray-100 border-none dark:hover:text-white "
              >
                Create NFTs
                <GoArrowUpRight className="text-md font-semibold" />
              </Link>
            </div>
          </div>
          <div className="h-full w-[55%] z-[] md:opacity-100 opacity-10 md:relative absolute gap-5 flex justify-betweend -rotate-12">
            <img
              id="user-profile-row-image-animation-1"
              src={row_1}
              className="h-[50pc]"
              alt=""
            />
            <img
              id="user-profile-row-image-animation-2"
              src={row_2}
              className="h-[50pc]"
              alt=""
            />
            <img
              id="user-profile-row-image-animation-3"
              src={row_3}
              className="h-[50pc]"
              alt=""
            />
          </div>
        </div>
        <Routes>
          <Route
            index
            element={
              <>
                <TrendingNFts />
                <TrendingCollections />
              </>
            }
          />
          <Route path="myCollection" element={<MyCollections />} />
          <Route
            path="myFavorites"
            element={
              <>
                <FavoriteCollection
                  Collections={UserFavorite.FavoriteCollections}
                />
                <FavoriteNFTs NFTs={UserFavorite.FavoriteNFTs} />
              </>
            }
          />
          <Route path="myNFTs" element={<MyNFTs />} />
          <Route
            path="setting"
            element={
              <>
                <EditAvatar />
                <EditProfile />
              </>
            }
          />
        </Routes>
      </div>
      <div id="body-right" className="flex xl:w-max w-full flex-col gap-7">
        <RecentlyAddedCollections />
        <TopCreators />
      </div>
    </div>
  );
}
export default Body;
