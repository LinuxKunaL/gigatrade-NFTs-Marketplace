import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingBar from "react-top-loading-bar";
import {
  ProductCollection,
  SkeletonProductCollection,
} from "../../../components/UiComponents/ProductCollection";

function ShopCollections({ filters }) {
  const DummySkeletonData = [1, 2, 3, 4, 5, 6, 1, 2, 3];
  const [CollectionsItems, setCollectionsItems] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [progress, setProgress] = useState(30);

  const fetchPhotos = async () => {
    setTimeout(async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
      );
      var data = response.data;
      setCollectionsItems((pre) => [...pre, ...data]);
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
    fetchPhotos();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <LoadingBar
        color="#f00076"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div
        id="collections"
        className="flex relative z-10 flex-wrap gap-10 justify-center"
      >
        {IsLoading
          ? CollectionsItems.map((item, index) => (
              <ProductCollection kay={index} data={item} />
            ))
          : DummySkeletonData.map((item, index) => (
              <SkeletonProductCollection key={index} />
            ))}
      </div>
      <div className="bg-gradient-to-r from-purple-800 to-pink-600 absolute bottom-2 left-1 h-96 w-96 blur-[10pc] opacity-[30%]" />
      <button
        type="button"
        className="py-2.5 px-5 self-center text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
      >
        Load More
      </button>
    </>
  );
}

export default ShopCollections;
