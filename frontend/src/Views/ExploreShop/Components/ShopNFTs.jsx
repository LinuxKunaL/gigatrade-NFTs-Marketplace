import React, { useState, useEffect } from "react";
import Product404 from "../../../components/UiComponents/Product404";
import LoadingBar from "react-top-loading-bar";
import {
  ProductNFT,
  SkeletonProductNFT,
} from "../../../components/UiComponents/ProductNFT";
import { fetchAllNFTs } from "../../../apis/FetchNFTs";

function ShopNFTs({ filters }) {
  const DummySkeletonData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [limit, setLimit] = useState(10);
  const [NFTsItems, setNFTsItems] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(30);

  useEffect(() => {
    filters.set("search", "");
    filters.set("category", "");
  }, []);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const response = await fetchAllNFTs(
          filters.get("search"),
          filters.get("category"),
          limit
        );
        setNFTsItems(response);
      } catch (error) {
        console.log(error);
      }
      setProgress(100);
      setIsLoading(true);
    };
    fetchNFTs();
  }, [filters, limit]);

  const loadMore = () => {
    setLimit(limit + 5);
  };

  return (
    <>
      <LoadingBar
        color="#f00076"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div
        id="all"
        className="flex relative z-10 flex-wrap gap-5 justify-evenly"
      >
        {IsLoading ? (
          NFTsItems.length > 0 ? (
            NFTsItems.map((item) => (
              <ProductNFT button="Buy" link="/nft/" data={item} />
            ))
          ) : (
            <div className="h-[30pc] flex justify-center items-center">
              <Product404
                message="NFTs not found"
                subMessage="reload page or wait for fetching !"
              />
            </div>
          )
        ) : (
          DummySkeletonData.map((item) => <SkeletonProductNFT key={item} />)
        )}
      </div>
      <button
        type="button"
        className="py-2.5 px-5 self-center text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
        onClick={loadMore}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={`${IsLoading ? "hidden" : "flex"}`}
        >
          <path
            d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            opacity=".25"
            fill="grey"
          />
          <path
            fill="white"
            d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="0.75s"
              values="0 12 12;360 12 12"
              repeatCount="indefinite"
            />
          </path>
        </svg>
        Load More
      </button>
    </>
  );
}

export default ShopNFTs;
