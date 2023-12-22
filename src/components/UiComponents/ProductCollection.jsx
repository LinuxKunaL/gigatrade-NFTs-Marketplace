import React from "react";
import { Link } from "react-router-dom";

export function ProductCollection({ data, key }) {
  return (
    <Link
      to="/collectionDetail"
      key={key}
      className="transition-all rounded-lg hover:shadow-lg hover:-translate-y-3 cursor-pointer p-3 bg-gradient-to-r relative border-[1px] border-gray-700/60 from-darkBlue-600 via-darkBlue-400 to-darkBlue-500 flex flex-col gap-5"
    >
      {/* <div className="p-3 bg-gradient-to-r relative from-darkBlue-600 via-darkBlue-400 to-darkBlue-500 rounded-lg flex flex-col gap-5"> */}
      <div className="relative flex overflow-hidden items-center justify-center h-[13pc] w-full ssm:w-[19pc] rounded-lg">
        <img
          className="rounded-md w-full bg-darkBlue-300"
          src={data.thumbnailUrl}
          alt=""
        />
      </div>
      <img
        className="w-14 h-14 rounded-full left-[43%] bottom-[30%] absolute border-[3px] border-darkBlue-200"
        src="https://rainbowit.net/html/nuron/assets/images/client/client-14.png"
        alt=""
      />
      <div className="flex gap-2 flex-wrap justify-center">
        <img
          className=" rounded-md flex-1 border-darkBlue-200"
          src="https://rainbowit.net/html/nuron/assets/images/collection/collection-sm-01.jpg"
          alt=""
        />
        <img
          className=" rounded-md flex-1 border-darkBlue-200"
          src="https://rainbowit.net/html/nuron/assets/images/collection/collection-sm-02.jpg"
          alt=""
        />
        <img
          className=" rounded-md flex-aut border-darkBlue-200"
          src="https://rainbowit.net/html/nuron/assets/images/collection/collection-sm-03.jpg"
          alt=""
        />
      </div>
      <div className="flex w-full justify-between items-center">
        <span className="text-white/70 text-base sm:text-lg hover:underline">
          Orthogon#720
        </span>
        <button
          type="button"
          className="py-2 px-4 text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
        >
          10 Items
        </button>
      </div>
    </Link>
  );
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
