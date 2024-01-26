import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NftPlaceholder from "../../assets/images/nft_placeholder.svg";
import { getUserNamePicByEthAddress } from "../../apis/profile.apis";

export function ProductCollection({ item, key, link, width }) {
  const [CollectionCreatorAvatar, setCollectionCreatorAvatar] = useState({});
  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await getUserNamePicByEthAddress(item.EthUser);
        setCollectionCreatorAvatar(response.userProfile);
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, [item.EthUser]);
  return (
    <Link to={`${link}${item._id}`} key={key}>
      <div
        className={`transition-all w-[${width}] h-[25pc] rounded-lg hover:shadow-lg hover:-translate-y-3 0 p-[1px] cursor-pointer`}
      >
        <div className="p-3 relative h-full  border-[1px] border-gray-700/20 bg-darkBlue-600 rounded-lg flex flex-col gap-5">
          <div className="relative flex items-center flex-auto  justify-center h-[13pc] w-[19pc]s overflow-hidden rounded-lg bg-darkBlue-600">
            <img
              className="rounded-md w-full border-darkBlue-200"
              src={item.CollectionImages.one || NftPlaceholder}
              alt=""
            />
          </div>
          <div className="w-14 overflow-hidden flex justify-center items-center h-14 rounded-full border-2 absolute top-[12pc] left-[40%] right-[40%] border-darkBlue-200">
            <img className="w-full h-16" src={CollectionCreatorAvatar} alt="" />
          </div>

          <div className="flex gap-2">
            <div className="w-[6pc] rounded-md flex-1 overflow-hidden flex justify-center items-center h-[4pc]">
              <img
                className="border-darkBlue-200 "
                src={item.CollectionImages.two || NftPlaceholder}
                alt=""
              />
            </div>
            <div className="w-[6pc] rounded-md flex-1 overflow-hidden flex justify-center items-center h-[4pc]">
              <img
                className="border-darkBlue-200"
                src={item.CollectionImages.Three || NftPlaceholder}
                alt=""
              />
            </div>
            <div className="w-[6pc] rounded-md flex-1 overflow-hidden flex justify-center items-center h-[4pc]">
              <img
                className=" border-darkBlue-200"
                src={item.CollectionImages.four || NftPlaceholder}
                alt=""
              />
            </div>
          </div>
          <div className="flex w-full justify-between items-center ">
            <span className="text-white/70 text-lg hover:underline w-[10pc] line-clamp-1 leading-snug">
              {item.CollectionName} : #{item.CollectionTag.slice(0, 4)}...
            </span>
            <button
              type="button"
              className="py-2 px-4 text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
            >
              {typeof item.NFTs === "number" ? item.NFTs : item.NFTs.length}{" "}
              items
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

{
  /* <Link to={`${link}${item._id}`} key={key}>
<div className="transition-all  rounded-lg hover:shadow-lg hover:-translate-y-3 0 p-[1px] cursor-pointer">
  <div className="p-3 w  relative  border-[1px] border-gray-700/20 bg-darkBlue-600 rounded-lg flex flex-col gap-5">
    <div className="relative flex items-center flex-auto  justify-center h-[13pc] w-[19pc]s overflow-hidden rounded-lg bg-darkBlue-600">
      <img
        className="rounded-md w-full border-darkBlue-200"
        src={item.CollectionImages.one}
        alt=""
      />
    </div>
    <img
      className="w-14 h-14 rounded-full border-2 absolute top-[12pc] left-[40%] right-[40%] border-darkBlue-200"
      src={CollectionCreatorAvatar}
      alt=""
    />
    <div className="flex gap-2">
      <div className="w-[6pc] rounded-md flex-1 overflow-hidden flex justify-center items-center h-[4pc]">
        <img
          className="border-darkBlue-200 "
          src={item.CollectionImages.two}
          alt=""
        />
      </div>
      <div className="w-[6pc] rounded-md flex-1 overflow-hidden flex justify-center items-center h-[4pc]">
        <img
          className="border-darkBlue-200"
          src={item.CollectionImages.Three}
          alt=""
        />
      </div>
      <div className="w-[6pc] rounded-md flex-1 overflow-hidden flex justify-center items-center h-[4pc]">
        <img
          className=" border-darkBlue-200"
          src={item.CollectionImages.four}
          alt=""
        />
      </div>
    </div>
    <div className="flex w-full justify-between items-center ">
      <span className="text-white/70 text-lg hover:underline w-[13pc] line-clamp-1 leading-snug">
        {item.CollectionName} : #{item.CollectionTag.slice(0, 4)}...
      </span>
      <button
        type="button"
        className="py-2 px-4 text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
      >
        {(typeof item.NFTs) === "number" ? item.NFTs : item.NFTs.length} items
      </button>
    </div>
  </div>
</div>
</Link> */
}

export function SkeletonProductCollection({ key }) {
  return (
    <div
      key={key}
      className="animate-pulse transition-all w-max bg-gradient-to-r from-darkBlue-500 to-darkBlue-100 rounded-lg hover:shadow-lg hover:-translate-y-3 0 p-[1px] cursor-pointer"
    >
      <div className="p-3 bg-gradient-to-r relative from-darkBlue-600 via-darkBlue-400 to-darkBlue-500 rounded-lg flex flex-col gap-5">
        <div className="relative flex overflow-hidden items-center justify-center h-[13pc] w-[19pc] rounded-lg">
          <img
            className="rounded-md h-full w-full bg-darkBlue-300"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            alt="error in image"
          />
        </div>
        <img
          className="w-14 h-14 rounded-full border-4 absolute top-[12pc] left-[8.5pc] border-darkBlue-500 bg-darkBlue-300"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          alt="error in image"
        />
        <div className="flex gap-2">
          <img
            className="rounded-md w-[6pc] h-[4pc] bg-darkBlue-300"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            alt="error in image"
          />
          <img
            className="rounded-md w-[6pc] h-[4pc] bg-darkBlue-300"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            alt="error in image"
          />
          <img
            className="rounded-md w-[6pc] h-[4pc] bg-darkBlue-300"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            alt="error in image"
          />
        </div>
        <div className="flex w-full justify-between items-center ">
          <span className="text-white/70 text-lg hover:underline  w-[9pc] h-[1.7pc] rounded-md line-clamp-1 bg-darkBlue-300" />
          <div className="h-[2.3pc] w-[5.5pc] rounded-lg bg-darkBlue-300" />
        </div>
      </div>
    </div>
  );
}
