import React, { useEffect, useState } from "react";
import { FaRegHeart, FaTelegramPlane, FaFacebookSquare } from "react-icons/fa";
import {
  ProductNFT,
  SkeletonProductNFT,
} from "../../components/UiComponents/ProductNFT";
import { addCollectionFavorite } from "../../apis/other.apis";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCollectionsDetailsById } from "../../apis/Collections.apis";
import { Toaster } from "react-hot-toast";
import { SuccessToast } from "../../app/Toast/Success";
import { ErrorToast } from "../../app/Toast/Error";
import Product404 from "../../components/UiComponents/Product404";

function Collection() {
  const DummySkeletonData = [1, 2, 3, 4, 5, 6, 81, 2];
  const { id } = useParams();
  const [CollectionDetails, setCollectionDetails] = useState({});
  const [NFTsItems, setNFTsItems] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(30);
  const EthAccount = useSelector((state) => state.EthAccountStates);

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

  const handleFavorite = async () => {
    if (!EthAccount.isConnect) {
      ErrorToast("Wallet not connect ! 💔");
      return null;
    }
    try {
      const result = await addCollectionFavorite(EthAccount.account, {
        _id: id,
        CollectionImages: CollectionDetails.CollectionImages,
        NFTs: CollectionDetails.NFTs.length,
        CollectionName: CollectionDetails.CollectionName,
        CollectionTag: CollectionDetails.CollectionTag,
        EthUser: CollectionDetails.EthUser,
      });
      if (result.success) {
        SuccessToast(result.message);
      }
    } catch (error) {}
  };

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await getCollectionsDetailsById(id);
        setCollectionDetails(response);
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
    <div className="md:px-0 flex flex-col gap-4 px-3 relative">
      <Toaster position="bottomleft" />
      <div
        id="section-1"
        className="flex relative z-10 flex-col gap-5 md:gap-3 w-full  h-[18pc] md:h-[14pc] items-center justify-end"
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
          </div>
        </div>
      </div>
      <div
        id="section-2"
        className="flex  justify-center w-full flex-col gap-10"
      >
        <div className="flex relative z-[10] flex-col gap-3 sm:mt-0 mt-8 items-center">
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
            <Link to={`/author/${CollectionDetails.EthUser}`}>
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
          <div
            onClick={handleFavorite}
            className="flex gap-2 items-center p-2 text-white/80 dark:bg-darkBlue-500 rounded-xl"
          >
            <FaRegHeart className="cursor-pointer rounded-sm transition-all hover:text-purple-500 active:text-purple-700  h-5 w-5 sm:h-6 sm:w-6 p-1" />
          </div>
        </div>
        <div className="flex relative z-[1] gap-5 flex-col lg:flex-row">
          <div className="w-full relative flex flex-col gap-14">
            <div className="bg-gradient-to-r from-purple-800 to-pink-600 absolute right-1 bottom-[50%] h-96 w-96 blur-[10pc] opacity-[30%]" />
            <div className="flex gap-7 relative z-10 flex-col">
              <div id="all" className="flex relative z-10 flex-wrap gap-7 justify-center sm:justify-start">
                {CollectionDetails.NFTs ? (
                  CollectionDetails.NFTs.length > 0 ? (
                    CollectionDetails.NFTs.map((item, index) => (
                      <ProductNFT
                        link="/nft/"
                        button="Buy"
                        kay={index}
                        data={item}
                      />
                    ))
                  ) : (
                    <div className="h-[40dvh] w-full flex justify-center items-center">
                      <Product404
                        message="NFTs Not created by author"
                        subMessage="Explore the collections"
                      />
                    </div>
                  )
                ) : null}
              </div>
              <div className="bg-gradient-to-r -z-10 from-purple-800 to-pink-600 absolute bottom-2 left-1 h-96 w-96 blur-[10pc] opacity-[30%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
