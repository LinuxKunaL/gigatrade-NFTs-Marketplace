import React, { useState } from "react";
import { BsStars } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TiUpload } from "react-icons/ti";
import { MdAdd } from "react-icons/md";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Tooltip } from "flowbite-react";
import { IoClose } from "react-icons/io5";

import { IoMdSearch } from "react-icons/io";
function EditCollection() {
  const k = [
    {
      img: "https://i.seadn.io/s/raw/files/cc8159e0ae3bb8191a60a243d72f0e2e.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/84624d83e4cef9e045c6f8c7e36b7028.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/db06245a1a357a3c20af708a3621c7ab.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/e7af4802b383764a1f6693b708d0a5cf.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/e7af4802b383764a1f6693b708d0a5cf.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/e7af4802b383764a1f6693b708d0a5cf.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/e7af4802b383764a1f6693b708d0a5cf.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/e7af4802b383764a1f6693b708d0a5cf.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/e7af4802b383764a1f6693b708d0a5cf.png?auto=format&dpr=1&w=256",
    },
  ];
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex flex-col p-5 overflow-y-auto">
      <div className="flex mt-5 mx-5 flex-col gap-2">
        <h1 className="text-white/90 font-semibold text-2xl mt-4">
          Edit Collection
        </h1>
        <span className="text-white/60">Orthogon#720</span>
      </div>
      <div className="mt-5">
        <form className="flex ml-10 flex-col gap-6">
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="text-white/70 font-semibold">
              Collection Name *
            </label>
            <input
              className=" bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
              type="text"
              defaultValue="Orthogon#720"
              placeholder="Collection Name"
            />
          </div>
          <div className="flex w-full gap-7">
            <div className="flex flex-col gap-7">
              <h2 className="text-white/90 font-semibold text-xl mt-4">
                Edit Collection cover
              </h2>
              <div className="flex gap-7">
                <div className="flex gap-7 flex-col">
                  <div
                    id="image-box"
                    className="flex-auto rounded-xl outline-dashed outline-pink-500/30 w-[10pc] h-[10pc] flex flex-col dark:bg-darkBlue-500 p-3 gap-4 items-center justify-center"
                  >
                    <img
                      className="w-full h-full rounded-lg"
                      src="https://rainbowit.net/html/nuron/assets/images/collection/collection-lg-01.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    id="image-box"
                    className="w-[10pc] h-[10pc] flex-auto  rounded-xl  outline-dashed outline-pink-500/30  flex flex-col dark:bg-darkBlue-500 p-3 gap-4 items-center justify-center"
                  >
                    <img
                      className="w-full h-full rounded-lg"
                      src="https://rainbowit.net/html/nuron/assets/images/collection/collection-lg-02.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-7 flex-col">
                  <div
                    id="image-box"
                    className=" w-[10pc] h-[10pc] flex-auto rounded-xl outline-dashed  outline-pink-500/30  flex flex-col dark:bg-darkBlue-500 p-3 gap-4 items-center justify-center"
                  >
                    <img
                      className="w-full h-full rounded-lg"
                      src="https://rainbowit.net/html/nuron/assets/images/collection/collection-lg-03.jpg"
                      alt=""
                    />
                  </div>
                  <div
                    id="image-box"
                    className=" w-[10pc] h-[10pc] flex-auto rounded-xl outline-dashed outline-pink-500/30  flex flex-col dark:bg-darkBlue-500 p-3 gap-4 items-center justify-center"
                  >
                    <img
                      className="w-full h-full rounded-lg"
                      src="https://rainbowit.net/html/nuron/assets/images/collection/collection-lg-04.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-7 flex-col">
              <h2 className="text-white/90 font-semibold text-xl mt-4">
                Add NFTs in{" "}
                <span className="text-white/50 underline font-normal">
                  Orthogon#720
                </span>{" "}
                collection
              </h2>
              <div className="border-2 h-[22pc] items-center overflow-y-auto flex p-4 flex-wrap rounded-lg border-gray-500/20">
                {k.map((i) => (
                  <div className="p-3 m-4 justify-between flex-auto dark:bg-darkBlue-600 rounded-lg flex flex-row items-center gap-5">
                    <div className="flex gap-1 items-center justify-between">
                      <img
                        src={i.img}
                        className="w-10 rounded-lg h-10"
                        alt=""
                      />{" "}
                      <h2 className="text-white/90 text-sm font-semibold">
                        Baby doge #2123
                      </h2>
                    </div>
                    <div className="p-4 w-max rounded-lg text-white/90 bg-darkBlue-300">
                      <IoClose />
                    </div>
                  </div>
                ))}
                <div className="h-9 self-center m-4 w-[1px] bg-darkBlue-300" />
                <Tooltip
                  theme={{
                    arrow: {
                      style: {
                        dark: "bg-gray-900 dark:bg-darkBlue-400 rounded-xl",
                        light: "bg-white",
                      },
                    },
                  }}
                  className="dark:bg-darkBlue-400/90 w-max"
                  content={
                    <div className="flex gap-2 flex-col items-center">
                      <span className="text-white/60 text-center">
                        Add NFTs from <br /> your Profile
                      </span>
                    </div>
                  }
                  placement="right"
                >
                  <div
                    onClick={() => setOpenModal(true)}
                    className="p-4 m-4 self-center h-max active:bg-darkBlue-400 hover:bg-darkBlue-300/70 cursor-pointer w-max rounded-lg text-white/90 bg-darkBlue-400"
                  >
                    <MdAdd />
                  </div>
                </Tooltip>
                <div
                  style={openModal ? { display: "flex" } : { display: "none" }}
                  id="Modal-popup"
                  className="dark:border-gray-600/30 fixed bottom-0 right-0 m-5 dark:bg-darkBlue-500 border-[1px] rounded-2xl p-4 flex gap-2 flex-col"
                >
                  <div className="flex justify-between items-center">
                    <h1 className="text-white/80 font-semibold text-xl">
                      Your NFTs
                    </h1>
                    <IoClose
                      onClick={() => setOpenModal(false)}
                      className="h-8 w-8 p-1.5 active:bg-darkBlue-400 hover:bg-darkBlue-300/70 cursor-pointer rounded-lg text-white/60 bg-darkBlue-300"
                    />
                  </div>
                  <div className="flex mt-5 flex-col flex-wrap justify-evenly gap-5">
                    <div className="relative">
                      <div className="absolute inset-y-0 end-0 flex items-center ps-3 mr-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        className="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
                        placeholder="Search NFTs..."
                        required
                      />
                    </div>
                    <div className="flex gap-2 flex-col h-[20pc] overflow-y-scroll">
                      {k.map((i) => (
                        <div className="p-3 dark:bg-darkBlue-600 rounded-lg flex flex-row items-center gap-5">
                          <img
                            src={i.img}
                            className="w-10 rounded-lg h-10"
                            alt=""
                          />
                          <div className="flex gap-3 items-center justify-between">
                            <h2 className="text-white/90 text-sm font-semibold">
                              Baby doge #2123
                            </h2>
                          </div>
                          <div className="p-4 w-max rounded-lg text-white/90 bg-darkBlue-300">
                            <MdAdd />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <button
              type="submit"
              className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
            >
              Submit
            </button>
            <button
              type="submit"
              className="text-white bg-darkBlue-700 hover:bg-darkBlue-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-darkBlue-500 dark:hover:bg-darkBlue-600 dark:focus:ring-darkBlue-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCollection;
