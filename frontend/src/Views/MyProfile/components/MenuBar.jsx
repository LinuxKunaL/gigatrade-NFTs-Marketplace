import React, { useEffect } from "react";
import logo from "../../../assets/images/logo.png";
import { IoClose } from "react-icons/io5";
import { IoIosCreate } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";
import {
  MdCollectionsBookmark,
  MdOutlineCollectionsBookmark,
  MdOutlineSpaceDashboard,
  MdToken,
  MdSpaceDashboard,
  MdOutlineToken,
} from "react-icons/md";
import { IoLogOutOutline, IoLogOutSharp } from "react-icons/io5";
import {
  AiOutlineSetting,
  AiFillSetting,
  AiOutlineAppstore,
  AiFillAppstore,
} from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

function MenuBar({ className, close }) {
  const handleLogout = () => {
    localStorage.clear();
    window.location = "/";
  };

  return (
    <div
      id="aside"
      className={`flex ${className} xl:relative flex-col dark:bg-darkBlue-600 absolute xl:!translate-x-[0pc] h-screen w-min sm:w-[21pc] sm:gap-5 gap-2 border-r-darkBlue-300 border-r-[1px] xl:border-r-none xl:border-darkBlue-300/0`}
    >
      <div
        className="xl:hidden absolute h-9 w-9 bg-darkBlue-600 text-pink-500 rounded-lg flex items-center justify-center right-[-1pc] sm:m-3 top-[1pc] transition-all active:bg-darkBlue-500 border-[1px] border-gray-700"
        onClick={() => close()}
      >
        <IoClose />
      </div>
      <Link
        to="/"
        className="flex sm:p-4 px-8 py-2 self-center w-max items-center space-x-3 rtl:space-x-reverse"
      >
        <img src={logo} className="h-12" alt="Logo" />
        <span className="self-center text-base xs:text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white/80">
          GiGaTrade
        </span>
      </Link>
      <div className="flex flex-col sm:gap-6 gap-3">
        <div className="h-[1px] w-full bg-darkBlue-300" />
        <Link
          to="/myProfile/addNFT"
          className="py-2.5 px-8 sm:px-14 text-[0.8rem] sm:text-base font-medium flex items-center gap-2  text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 self-center dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
        >
          Create
          <IoIosCreate className="text-md" />
        </Link>
        <div className="h-[1px] w-full bg-darkBlue-300" />
      </div>
      <div className="flex flex-col gap-5 overflow-y-auto">
        <div className="flex flex-col gap-1 sm:gap-3">
          <b className="text-white/50 font-semibold p-3 px-5">Account</b>
          <div className="flex text-[0.9rem] sm:text-base flex-col gap-7 sm:gap-9">
            <NavLink to="/myProfile" className="relative">
              <span className="pl-10 relative group flex gap-2 items-center text-white/90 hover:text-pink-600 cursor-pointer">
                <div className="line hidden group-hover:flex absolute left-0 h-8 w-1 rounded-r-lg bg-pink-500"></div>
                <MdOutlineSpaceDashboard className="Outline text-xl transition-all group-hover:hidden text-white/50 group-hover:text-pink-600 " />
                <MdSpaceDashboard className="solid text-xl  transition-all hidden group-hover:flex text-white/50 group-hover:text-pink-600" />
                Home
              </span>
            </NavLink>
            <NavLink to="/myProfile/myCollection" className="relative">
              <span className="pl-10 relative group flex gap-2 items-center text-white/90 hover:text-pink-600 cursor-pointer">
                <div className="line hidden group-hover:flex absolute left-0 h-8 w-1 rounded-r-lg bg-pink-500"></div>
                <MdOutlineCollectionsBookmark className="Outline text-xl transition-all group-hover:hidden text-white/50 group-hover:text-pink-600 " />
                <MdCollectionsBookmark className="solid text-xl  transition-all hidden group-hover:flex text-white/50 group-hover:text-pink-600" />
                My collection
              </span>
            </NavLink>
            <NavLink to="/myProfile/myNFTs" className="relative">
              <span className="pl-10  flex group cursor-pointer gap-2 items-center text-white/90 hover:text-pink-600 ">
                <div className="line hidden group-hover:flex absolute left-0 h-8 w-1 rounded-r-lg bg-pink-500"></div>
                <MdOutlineToken className="Outline text-xl  transition-all group-hover:hidden text-white/50 group-hover:text-pink-600" />
                <MdToken className="solid text-xl  transition-all hidden group-hover:flex text-white/50 group-hover:text-pink-600" />
                My NFTs
              </span>
            </NavLink>
            <NavLink to="/myProfile/myFavorites" className="relative">
              <span className="pl-10  flex group cursor-pointer gap-2 items-center text-white/90 hover:text-pink-600 ">
                <div className="line hidden group-hover:flex absolute left-0 h-8 w-1 rounded-r-lg bg-pink-500"></div>
                <FaRegHeart className="Outline text-xl  transition-all group-hover:hidden text-white/50 group-hover:text-pink-600" />
                <FaHeart className="solid text-xl  transition-all hidden group-hover:flex text-white/50 group-hover:text-pink-600" />
                Your favorites
              </span>
            </NavLink>
            <NavLink to="/myProfile/setting" className="relative">
              <span className="pl-10 flex group cursor-pointer gap-2 items-center text-white/90 hover:text-pink-600 ">
                <div className="line hidden group-hover:flex absolute left-0 h-8 w-1 rounded-r-lg bg-pink-500"></div>
                <AiOutlineSetting className="Outline text-xl  transition-all group-hover:hidden text-white/50 group-hover:text-pink-600" />
                <AiFillSetting className="solid text-xl transition-all hidden group-hover:flex text-white/50 group-hover:text-pink-600" />
                Settings
              </span>
            </NavLink>
            <span
              onClick={handleLogout}
              className="pl-10 flex group cursor-pointer gap-2 items-center text-white/90 hover:text-pink-600 "
            >
              <div className=" hidden group-hover:flex absolute left-0 h-8 w-1 rounded-r-lg bg-pink-500"></div>
              <IoLogOutOutline className=" text-xl  transition-all group-hover:hidden text-white/50 group-hover:text-pink-600" />
              <IoLogOutSharp className=" text-xl  transition-all hidden group-hover:flex text-white/50 group-hover:text-pink-600" />
              Logout
            </span>
            <NavLink
              target="_blank"
              to={`${process.env.REACT_APP_BLOCK_EXPLORE_URL}/token/${process.env.REACT_APP_CONTRACT_ADDRESS}`}
              className="relative"
            >
              <span className="pl-10 flex group cursor-pointer gap-2 items-center text-white/90 hover:text-pink-600 ">
                <div className="line hidden group-hover:flex absolute left-0 h-8 w-1 rounded-r-lg bg-pink-500"></div>
                <FaEthereum />
                Contract
              </span>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col gap-1 sm:gap-3">
          <b className="text-white/50 font-semibold p-3 px-5">Market</b>
          <div className="flex text-[0.9rem] sm:text-base flex-col gap-7 sm:gap-9">
            <Link to="/explore/collections">
              <span className="pl-10 relative group flex gap-2 items-center text-white/90 hover:text-pink-600 cursor-pointer">
                <div className=" hidden group-hover:flex absolute left-0 h-8 w-1 rounded-r-lg bg-pink-500"></div>
                <MdOutlineCollectionsBookmark className=" text-xl transition-all group-hover:hidden text-white/50 group-hover:text-pink-600" />
                <MdCollectionsBookmark className=" text-xl  transition-all hidden group-hover:flex text-white/50 group-hover:text-pink-600" />
                Collections
              </span>
            </Link>
            <Link to="/explore">
              <span className="pl-10  flex group cursor-pointer gap-2 items-center text-white/90 hover:text-pink-600 ">
                <div className=" hidden group-hover:flex absolute left-0 h-8 w-1 rounded-r-lg bg-pink-500"></div>
                <AiOutlineAppstore className=" text-xl  transition-all group-hover:hidden text-white/50 group-hover:text-pink-600" />
                <AiFillAppstore className=" text-xl  transition-all hidden group-hover:flex text-white/50 group-hover:text-pink-600" />
                Explore
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="gap-4 flex mt-auto flex-col w-full  dark:text-white/60">
        <div className="h-[1px] w-full bg-darkBlue-300" />
        <span className="self-center p-3">@2024 gigaTrade</span>
      </div>
    </div>
  );
}

export default MenuBar;
