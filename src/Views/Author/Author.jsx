import React, { useState } from "react";

import { FaEthereum, FaFacebook, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Button, Tooltip } from "flowbite-react";
import {
  MdContentCopy,
  MdOutlineOpenInNew,
  MdShoppingCart,
} from "react-icons/md";

import AuthorLinked from "./components/AuthorLinked";
import AuthorOwned from "./components/AuthorOwned";
import AuthorCollections from "./components/AuthorCollections";
import AuthorDetails from "./components/AuthorDetails";

import { useSearchParams } from "react-router-dom";

function Author() {
  const [paramState, setParamState] = useSearchParams({
    info: "owned",
  });

  const AuthorComponents = {
    details: <AuthorDetails />,
    owned: <AuthorOwned />,
    collections: <AuthorCollections />,
    liked: <AuthorLinked />,
  };

  return (
    <div className="mt-14 sm:p-0 p-5 flex flex-col gap-5">
      <div
        id="profile"
        className="relative h-[25pc] flex justify-center items-center"
      >
        <div className="absolute lg:h-auto lg-w-auto h-[50%] w-[60pc] xl:w-full top-0 rounded-lg opacity-40">
          <img
            id="bg-image"
            className="h-full w-full"
            src="https://rainbowit.net/html/nuron/assets/images/bg/bg-image-9.jpg"
            alt=""
          />
        </div>
        <div className="z-10 relative flex flex-col  gap-3 sm:gap-2 items-center w-max p-3 rounded-lg">
          <img
            className="w-28 h-28 border-4 dark:border-darkBlue-200 rounded-lg"
            src="https://nftix-html.vercel.app/assets/img/avatar/avatar3.jpg"
            alt=""
          />
          {/* <div className="z-[-1] bg-gradient-to-r from-purple-800 to-pink-600 absolute bottom-0 h-96 w-96 blur-[10pc] opacity-[30%]" /> */}
          <h2 className="dark:text-white/90 text-xl sm:text-2xl font-semibold p-1 px-5 rounded-lg backdrop-blur-md">
            MRS SUNAYRA AHSAN
          </h2>
          <span className="dark:text-white/70 text-md flex sm:text-base text-sm items-center gap-1 p-1 px-5 rounded-lg backdrop-blur-md">
            <FaEthereum /> 0x904df..2334
          </span>
          <p className="dark:text-white/50 text-md sm:w-[30pc] text-center sm:text-base text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            perspiciatis, architecto saepe laborum
          </p>
          <div className="text-white/90 flex sm:gap-2 gap-5">
            <FaXTwitter className="sm:h-7 sm:p-1 sm:w-8 active:bg-pink-700 transition-all rounded-md cursor-pointer hover:bg-pink-700/80 " />
            <FaFacebook className="sm:h-7 sm:p-1 sm:w-8 active:bg-pink-700 transition-all rounded-md cursor-pointer hover:bg-pink-700/80" />
            <FaTelegramPlane className="sm:h-7 sm:p-1 sm:w-8 active:bg-pink-700 transition-all rounded-md cursor-pointer hover:bg-pink-700/80" />
          </div>
        </div>
      </div>
      <div id="profile-body" className="">
        <ul className="flex gap-2 flex-wrap text-sm font-medium text-center text-gray-500 border-darkBlue-600 dark:border-darkBlue-500 dark:text-gray-400">
          <li
            onClick={() => setParamState({ info: "details" })}
            className="cursor-pointer"
          >
            <div
              className={
                paramState.get("info") == "details"
                  ? "inline-block p-4 text-pink-600 dark:bg-darkBlue-500/70 dark:text-pink-500 bg-gray-100 rounded-t-lg active sm:text-base text-xs"
                  : "inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 sm:text-base text-xs"
              }
            >
              Details
            </div>
          </li>
          <li
            onClick={() => {
              setParamState({ info: "collections" });
            }}
            className="cursor-pointer"
          >
            <div
              className={
                paramState.get("info") == "collections"
                  ? "inline-block p-4 text-pink-600 dark:bg-darkBlue-500/70 dark:text-pink-500 bg-gray-100 rounded-t-lg active sm:text-base text-xs"
                  : "inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 sm:text-base text-xs"
              }
            >
              Collections
            </div>
          </li>
          <li
            onClick={() => {
              setParamState({ info: "owned" });
            }}
            className="cursor-pointer"
          >
            <div
              className={
                paramState.get("info") == "owned"
                  ? "inline-block p-4 text-pink-600 dark:bg-darkBlue-500/70 dark:text-pink-500 bg-gray-100 rounded-t-lg active sm:text-base text-xs"
                  : "inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 sm:text-base text-xs"
              }
            >
              Owned
            </div>
          </li>
          <li
            onClick={() => {
              setParamState({ info: "liked" });
            }}
            className="cursor-pointer"
          >
            <div
              className={
                paramState.get("info") == "liked"
                  ? "inline-block p-4 text-pink-600 dark:bg-darkBlue-500/70 dark:text-pink-500 bg-gray-100 rounded-t-lg active sm:text-base text-xs"
                  : "inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 sm:text-base text-xs"
              }
            >
              Liked
            </div>
          </li>
        </ul>
        <div
          id="tab-body"
          className="p-3 dark:bg-darkBlue-700 border-darkBlue-600 rounded-b-lg dark:border-darkBlue-500 border-[1px]"
        >
          {AuthorComponents[paramState.get("info")]
            ? AuthorComponents[paramState.get("info")]
            : () => setParamState({ info: "details" })}
        </div>
      </div>
      <div
        id="collection"
        className="flex flex-col p-4 gap-3 dark:border-darkBlue-500 border-[1px]"
      >
        <h2 className="text-white/90 font-semibold text-xl sm:text-2xl">
          All Collections
        </h2>
        <div id="collection" className="flex flex-wrap justify-center"></div>
      </div>
    </div>
  );
}

export default Author;
