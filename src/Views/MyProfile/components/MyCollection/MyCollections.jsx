import React, { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { ProductCollection } from "../../../../components/UiComponents/ProductCollection.jsx";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { getCollectionsByUser } from "../../../../apis/Collections.apis.js";
import { useSelector } from "react-redux";
import Product404 from "../../../../components/UiComponents/Product404.jsx";

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
        <h2 className="text-xl sm:text-2xl">My Collections</h2>
        <div className="flex mt-2 sm:mt-5 flex-row flex-wrap gap-5">
          {collections.length != 0 ? (
            collections.map((item, index) => (
              <ProductCollection
                key={index}
                link={"/myProfile/editCollection/"}
                width="20pc"
                item={item}
              />
            ))
          ) : (
            <Product404
              message="Collections Are not Created"
              subMessage="Create a collections"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MyCollections;
