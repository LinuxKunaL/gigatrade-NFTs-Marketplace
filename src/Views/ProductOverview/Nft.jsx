import React, { useState, useEffect } from "react";
import { FaEthereum, FaRegHeart } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

import { ProductNFT } from "../../components/UiComponents/ProductNFT";
import NftDetail from "./components/NftDetail";
import NftActivity from "./components/NftActivity";
import NftChart from "./components/NftChart";
import NftListing from "./components/NftListing";
import NftBuy from "./components/NftBuy";
import NftBid from "./components/NftBId";
import { useParams } from "react-router-dom";
import { fetchNFTById } from "../../hooks/ContractControllers/useFetchNFTById";
import { web3 } from "../../hooks/useContract";
import { NFTsActivityEvent } from "../../hooks/ContractControllers/useFetchEventForNFT";
import { useSelector } from "react-redux";
import { addNFTFavorite } from "../../apis/other.apis";
import { Toaster } from "react-hot-toast";
import { SuccessToast } from "../../app/Toast/Success";

function Nft() {
  const { id } = useParams();
  const navigate = useNavigate();
  const EthAccount = useSelector((state) => state.EthAccountStates.account);

  const [paramState, setParamState] = useSearchParams({
    info: "details",
  });
  const [NFTsItems, setNFTsItems] = useState([]);

  const [NFTActivityTable, setNFTActivityTable] = useState([]);

  const [ComponentLoad, setComponentLoad] = useState(0);

  const NftComponents = {
    details: (
      <NftDetail
        data={{
          TokenId: id,
          Description: NFTsItems.Description,
          CreateAt: NFTsItems.CreateAt,
          creatorFees: NFTsItems.creatorFees,
          category: NFTsItems.Category,
        }}
      />
    ),
    chart: <NftChart />,
    listing: <NftListing />,
    activity: <NftActivity data={NFTActivityTable} />,
  };

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetchNFTById(id);
        const activityTable = await NFTsActivityEvent(id);
        if (!response) {
          navigate("/");
          return null;
        }
        setNFTsItems(response);
        setNFTActivityTable(activityTable);
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, [id, ComponentLoad]);

  const handleFavorite = async () => {
    try {
      const result = await addNFTFavorite(EthAccount, {
        NFTid: id,
        createdBy: NFTsItems.Creator,
        image: NFTsItems.Image,
        price: NFTsItems.Price,
      });
      if (result.success) {
        SuccessToast(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sm:p-0 p-4">
      <Toaster position="bottomleft" />
      <div
        id="section-1"
        className="flex flex-col gap-3 w-full h-[15pc] items-center justify-center "
      >
        <h2 className="text-2xl sm:text-3xl dark:text-white/90 font-semibold">
          NFTs Details
        </h2>
        <div className="flex gap-3 text-sm sm:text-base dark:text-white">
          <span className="dark:text-white/80">Home</span>/
          <span className="dark:text-white/50">NFT Details</span>
        </div>
      </div>
      <div id="section-2" className="flex xl:flex-row flex-col gap-8 xl:gap-28">
        <div className="flex-1 h-full">
          <img
            className="h-full w-full rounded-2xl"
            src={NFTsItems.Image}
            alt=""
          />
          <div className="bg-gradient-to-r from-purple-800/20 to-purple-600/40 absolute right-1 bottom-[50%] h-96 w-96 blur-[10pc] opacity-[30%]" />
        </div>
        <div className="flex flex-col gap-5 sm:gap-7 flex-1 relative">
          <div className="flex gap-1 items-center sm:flex-row dark:text-white/80 justify-between">
            <div className="sm:text-base text-sm">
              by{" "}
              <Link
                to={`/author/${NFTsItems.Creator}`}
                className="font-semibold text-pink-600"
              >
                {NFTsItems.Creator
                  ? NFTsItems.Creator.slice(0, 7) +
                    ".." +
                    NFTsItems.Creator.slice(38)
                  : null}
              </Link>
            </div>
            <div className="flex gap-3 items-center">
              <div
                onClick={handleFavorite}
                className="flex gap-2 items-center p-2 dark:bg-darkBlue-500 rounded-xl"
              >
                <FaRegHeart className="cursor-pointer rounded-sm transition-all hover:text-purple-500 active:text-purple-700  h-5 w-5 sm:h-6 sm:w-6 p-1" />
              </div>
            </div>
          </div>
          <h1 className="font-semibold dark:text-white text-2xl sm:text-5xl">
            {NFTsItems.Name}
          </h1>
          <p className="dark:text-white/80 sm:text-base text-sm">
            {NFTsItems.Description}
          </p>
          <div className="flex sm:gap-10 sm:justify-start justify-between">
            <div className="flex flex-col gap-2">
              <span className="dark:text-white/90 font-semibold sm:text-base text-sm">
                Creator
              </span>
              <div className="flex gap-2 items-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://nftix-html.vercel.app/assets/img/avatar/avatar3.jpg"
                  alt=""
                />
                <Link
                  to={`/author/${NFTsItems.Creator}`}
                  className="dark:text-white/60 hover:text-pink-500 transition-all cursor-pointer sm:text-base text-sm"
                >
                  {NFTsItems.Creator
                    ? NFTsItems.Creator.slice(0, 6) +
                      ".." +
                      NFTsItems.Creator.slice(38)
                    : null}
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="dark:text-white/90 font-semibold sm:text-base text-sm">
                Current Owner
              </span>
              <div className="flex gap-2 items-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://nftix-html.vercel.app/assets/img/avatar/avatar3.jpg"
                  alt=""
                />
                <Link
                  to={`/author/${NFTsItems.CurrentOwner}`}
                  className="dark:text-white/60 hover:text-pink-500 transition-all cursor-pointer sm:text-base text-sm"
                >
                  {NFTsItems.CurrentOwner
                    ? NFTsItems.CurrentOwner == EthAccount
                      ? "You"
                      : `${NFTsItems.CurrentOwner.slice(
                          0,
                          6
                        )}...${NFTsItems.CurrentOwner.slice(38)}`
                    : null}
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="dark:text-white/80 font-semibold sm:text-base text-sm">
              NFT Properties
            </span>
            <div className="flex gap-3 flex-wrap">
              {NFTsItems.Properties
                ? NFTsItems.Properties.map((items) => (
                    <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-4 py-1 bg-darkBlue-400  text-white sm:flex-none flex-1 sm:text-base text-sm">
                      {items}
                    </span>
                  ))
                : null}
            </div>
          </div>
          <div className="flex justify-between gap-8">
            <NftBuy
              price={NFTsItems.Price}
              isListed={NFTsItems.IsListed}
              ComponentLoad={setComponentLoad}
              nftId={id}
            />
            {/* <NftBid /> */}
          </div>
          <div className="">
            <ul className="flex gap-2 flex-wrap text-sm font-medium text-center text-gray-500 border-b border-darkBlue-600 dark:border-darkBlue-500 dark:text-gray-400">
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
                  setParamState({ info: "chart" });
                }}
                className="cursor-pointer"
              >
                <div
                  className={
                    paramState.get("info") == "chart"
                      ? "inline-block p-4 text-pink-600 dark:bg-darkBlue-500/70 dark:text-pink-500 bg-gray-100 rounded-t-lg active sm:text-base text-xs"
                      : "inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 sm:text-base text-xs"
                  }
                >
                  chart
                </div>
              </li>
              <li
                onClick={() => {
                  setParamState({ info: "listing" });
                }}
                className="cursor-pointer"
              >
                <div
                  className={
                    paramState.get("info") == "listing"
                      ? "inline-block p-4 text-pink-600 dark:bg-darkBlue-500/70 dark:text-pink-500 bg-gray-100 rounded-t-lg active sm:text-base text-xs"
                      : "inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 sm:text-base text-xs"
                  }
                >
                  Listing
                </div>
              </li>
              <li
                onClick={() => {
                  setParamState({ info: "activity" });
                }}
                className="cursor-pointer"
              >
                <div
                  className={
                    paramState.get("info") == "activity"
                      ? "inline-block p-4 text-pink-600 dark:bg-darkBlue-500/70 dark:text-pink-500 bg-gray-100 rounded-t-lg active sm:text-base text-xs"
                      : "inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 sm:text-base text-xs"
                  }
                >
                  Activity
                </div>
              </li>
            </ul>
            <div className="border-l-[2px] h-[25pc] items-center border-r-[1px] border-b-[2px] border-darkBlue-600 flex flex-col gap-4 p-4">
              {NftComponents[paramState.get("info")] ? (
                NftComponents[paramState.get("info")]
              ) : (
                <p className="text-white/80">url problem</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        id="section-3"
        className="flex-col gap-5 flex h-full mt-10 justify-evenly"
      >
        <div className="flex flex-row justify-between items-center">
          <h1 className="dark:text-white/90 text-2xl sm:text-4xl">
            Related{" "}
            <b className="border-2 sm:text-2xl text-lg lg:shadow-none lg:shadow-purple-800/80 sm:border-0 rounded-md shadow-lg shadow-purple-800/80 p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
              NFTs
            </b>
          </h1>
        </div>
        <div className="flex mt-10 relative z-10 flex-wrap gap-7 justify-evenly">
          {/* {NFTsItems.map((item, index) => (
            <ProductNFT kay={index} data={item} />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Nft;
