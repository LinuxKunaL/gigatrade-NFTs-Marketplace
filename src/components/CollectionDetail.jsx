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
import { Link, useParams } from "react-router-dom";
import { getCollectionsDetailsById } from "../apis/Collections.apis";

function CollectionDetail() {
  const DummySkeletonData = [1, 2, 3, 4, 5, 6, 81, 2];
  const { id } = useParams();
  const [CollectionDetails, setCollectionDetails] = useState({});
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
    // fetchPhotos();
    const fetching = async () => {
      try {
        const response = await getCollectionsDetailsById(id);
        setCollectionDetails(response);
        console.log(response);
        setProgress(100);
        setIsLoading(true);
      } catch (error) {}
    };
    fetching();
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
          <div className="flex gap-8 md:self-start w-max">
            <div className="flex gap-2 flex-col items-center">
              <b className=" dark:text-white/60 text-xl sm:text-2xl">
                {CollectionDetails.NFTs ? CollectionDetails.NFTs.length : null}
              </b>
              <span className=" dark:text-white/80 text-sm ">Items</span>
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
            <span className="text-white/70 sm:text-lg text-sm">Follow us:</span>
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
            src={
              CollectionDetails.CollectionImages
                ? CollectionDetails.CollectionImages.one
                : null
            }
            alt=""
          />
          <img
            className="w-32 absolute blur-xl opacity-40 translate-y-8 h-28 border-2 border-pink-500"
            src={
              CollectionDetails.CollectionImages
                ? CollectionDetails.CollectionImages.one
                : null
            }
            alt=""
          />
          <h2 className="text-xl sm:text-2xl font-semibold dark:text-white/80">
            {CollectionDetails.CollectionName}
          </h2>
          <span className="dark:text-white/60 text-sm flex items-start gap-2">
            By{" "}
            <Link to="/author">
              <b className="font-semibold text-pink-600 hover:underline">
                {CollectionDetails.EthUser
                  ? `${CollectionDetails.EthUser.slice(
                      0,
                      6
                    )}...${CollectionDetails.EthUser.slice(37)}`
                  : null}
              </b>
            </Link>
          </span>
        </div>
        <div className="flex gap-5 flex-col lg:flex-row">
          <div className="w-full relative flex flex-col gap-14">
            <div className="bg-gradient-to-r from-purple-800 to-pink-600 absolute right-1 bottom-[50%] h-96 w-96 blur-[10pc] opacity-[30%]" />
            <div className="bg-gradient-to-r from-purple-800 to-pink-600 absolute h-96 w-96 blur-[10pc] opacity-[30%]" />
            <div className="flex gap-7 relative z-10 flex-col justify-between">
              <div id="all" className="flex relative z-10 flex-wrap gap-7">
                {IsLoading
                  ? CollectionDetails.NFTs.map((item, index) => (
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
