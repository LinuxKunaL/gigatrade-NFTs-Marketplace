import React, { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { ProductCollection } from "../../../../components/UiComponents/ProductCollection.jsx";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getCollectionsByUser } from "../../../../apis/Collections.apis.js";
import { useSelector } from "react-redux";
import { TbMoodEmpty } from "react-icons/tb";

function MyCollections() {
  const EthAddress = useSelector((state) => state.EthAccountStates.account);
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      try {
        const result = await getCollectionsByUser(EthAddress);
        setCollections(result);
      } catch (error) {
        console.log(error);
      }
    };
    if (EthAddress) {
      fetching();
    }
  }, [EthAddress]);

  return (
    <div className="flex flex-col">
      <div className="h-full gap-4 xs:gap-0 xs:h-[10pc] flex-col mt-5 rounded-3xl flex xs:flex-row justify-between items-center w-full dark:bg-darkBlue-500/80  outline-dashed outline-offset-2 outline-pink-500/40 p-3 xs:p-5">
        <div className="flex flex-col gap-2 sm:items-start items-center">
          <h2 className="flex gap-2 sm:text-start text-center items-center text-pink-500 text-sm sm:text-xl">
            <FiPlusCircle /> Add new collection
          </h2>
          <p className="dark:text-white/50 text-sm sm:text-xl sm:text-start text-center">
            create and store the best collections of NFTs
          </p>
        </div>
        <Link className="w-full xs:w-auto" to="/myProfile/addCollection">
          <button className="py-3 px-10 justify-center xs:justify-start text-sm sm:text-base flex flex-row items-center gap-2 text-white/90 font-semibold text-md bg-gradient-to-tr w-full from-pink-500 to-purple-500 rounded-xl ">
            Create <FaArrowLeftLong className="-rotate-[-140deg]" />
          </button>
        </Link>
      </div>
      <div className="text-white/90 mt-10 text-2xl gap-5 flex flex-col font-semibold">
        <div className="flex gap-4 w-full sm:w-auto">
          <input
            className="bg-gray-50 text-gray-900 sm:text-base text-sm rounded-lg focus:ring-0 focus:dark:border-pink-500 block p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/50 w-full sm:w-auto"
            type="text"
            placeholder="Search Collection by title"
          />
          <button
            type="submit"
            className="text-white end-2.5 bottom-2.5 sm:text-base text-sm bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
          >
            Search
          </button>
        </div>
        <h2 className="text-xl sm:text-2xl">My Collections</h2>
        <div className="flex mt-2 sm:mt-5 flex-row flex-wrap gap-5">
          {collections.length != 0 ? (
            collections.map((item, index) => (
              <ProductCollection
                key={index}
                link={"/myProfile/editCollection/"}
                item={item}
              />
            ))
          ) : (
            <div className="text-xl sm:text-2xl flex gap-3 items-center flex-col justify-center w-full p-4">
              <TbMoodEmpty className="text-pink-500" />
              <h3>Collections Are not Created</h3>
              <p className="text-base text-white/50 font-normal">
                Create a collections{" "}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyCollections;
