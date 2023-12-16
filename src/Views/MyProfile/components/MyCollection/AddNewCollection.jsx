import React from "react";
import { BsStars } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TiUpload } from "react-icons/ti";
function AddNewCollection() {
  return (
    <div className="flex flex-col p-5 overflow-y-auto">
      <h1 className="text-white/90 font-semibold text-2xl mt-4">
        Create New Collection
      </h1>
      <div className="flex flex-row gap-2 items-center text-md mt-4 text-white/70">
        <BsStars />
        <p>once created a Collection we cannot change its details </p>
      </div>
      <div className="h-full flex gap-8">
        <div className="flex-auto mt-10">
          <form className="flex ml-10 flex-col gap-6">
            <div className="flex gap-3 items-center">
              <div className="flex flex-1 flex-col gap-4">
                <label htmlFor="" className="text-white/70 font-semibold">
                  Collection Name *
                </label>
                <input
                  className=" bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
                  type="text"
                  placeholder="Collection Name"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <label htmlFor="" className="text-white/70 font-semibold">
                  Collection tag *
                </label>
                <select
                  className="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
                  name=""
                  id=""
                >
                  <option selected>Choose a tag</option>
                </select>
              </div>
            </div>

            <div className="flex w-full flex-wrap ">
              <div
                id="image-box"
                className="flex-auto mx-5 my-10 rounded-xl outline-dashed outline-pink-500/30 pb-14 pt-14 flex flex-col dark:bg-darkBlue-500 p-3 gap-4 items-center justify-center"
              >
                <TiUpload className="text-purple-500 text-2xl" />
                <b className="text-white/80">Upload cover</b>
                <span className="text-white/70">
                  Drag or choose your file to upload
                </span>
                <p className="text-white/50">
                  PNG, GIF, WEBP, MP4 or MP3.Max 1Gb.
                </p>
                <button className="py-3 px-8 flex flex-row items-center gap-2 text-white/90 font-semibold text-sm  bg-gradient-to-tr from-pink-500 to-purple-500 rounded-xl ">
                  Create <FaArrowLeftLong className="-rotate-[-140deg]" />
                </button>
              </div>
              <div
                id="image-box"
                className="flex-auto mx-5 my-10 rounded-xl pb-14 pt-14 outline-dashed outline-pink-500/30  flex flex-col dark:bg-darkBlue-500 p-3 gap-4 items-center justify-center"
              >
                <TiUpload className="text-purple-500 text-2xl" />
                <b className="text-white/80">Upload cover</b>
                <span className="text-white/70">
                  Drag or choose your file to upload
                </span>
                <p className="text-white/50">
                  PNG, GIF, WEBP, MP4 or MP3.Max 1Gb.
                </p>
                <button className="py-3 px-8 flex flex-row items-center gap-2 text-white/90 font-semibold text-sm  bg-gradient-to-tr from-pink-500 to-purple-500 rounded-xl ">
                  Create <FaArrowLeftLong className="-rotate-[-140deg]" />
                </button>
              </div>
              <div
                id="image-box"
                className="flex-auto mx-5 my-10 rounded-xl outline-dashed pb-14 pt-14 outline-pink-500/30  flex flex-col dark:bg-darkBlue-500 p-3 gap-4 items-center justify-center"
              >
                <TiUpload className="text-purple-500 text-2xl" />
                <b className="text-white/80">Upload cover</b>
                <span className="text-white/70">
                  Drag or choose your file to upload
                </span>
                <p className="text-white/50">
                  PNG, GIF, WEBP, MP4 or MP3.Max 1Gb.
                </p>
                <button className="py-3 px-8 flex flex-row items-center gap-2 text-white/90 font-semibold text-sm  bg-gradient-to-tr from-pink-500 to-purple-500 rounded-xl ">
                  Create <FaArrowLeftLong className="-rotate-[-140deg]" />
                </button>
              </div>
              <div
                id="image-box"
                className="flex-auto mx-5 my-10 rounded-xl pb-14 pt-14 outline-dashed outline-pink-500/30  flex flex-col dark:bg-darkBlue-500 p-3 gap-4 items-center justify-center"
              >
                <TiUpload className="text-purple-500 text-2xl" />
                <b className="text-white/80">Upload cover</b>
                <span className="text-white/70">
                  Drag or choose your file to upload
                </span>
                <p className="text-white/50">
                  PNG, GIF, WEBP, MP4 or MP3.Max 1Gb.
                </p>
                <button className="py-3 px-8 flex flex-row items-center gap-2 text-white/90 font-semibold text-sm  bg-gradient-to-tr from-pink-500 to-purple-500 rounded-xl ">
                  Create <FaArrowLeftLong className="-rotate-[-140deg]" />
                </button>
              </div>
            </div>
            <button
              type="submit"
              class="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm self-start sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewCollection;
