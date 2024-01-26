import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import row_1 from "../../../assets/images/row.png";
import row_2 from "../../../assets/images/row_2.png";
import row_3 from "../../../assets/images/row_3.png";
function Section_3() {
  return (
    <div className="sm:h-[17pc] h-[27pc] mt-20 relative rounded-2xl bg-gradient-to-r from-purple-500 overflow-hidden from-10% via-pink-500 via-100% sm:p-5 p-2 flex justify-between items-center">
      <div className="flex z-10 relative flex-col justify-between sm:justify-evenly gap-6 sm:m-0 h-full sm:w-auto w-full">
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
      <div className="h-full w-[55%] z-[] md:opacity-100 opacity-30 md:relative absolute gap-5 flex justify-between -rotate-12">
        <img
          id="user-profile-row-image-animation-2"
          src={row_3}
          className="h-[50pc]"
          alt=""
        />
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
  );
}

export default Section_3;
