import React from "react";
import { FaEthereum, FaFacebook, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button, Tooltip } from "flowbite-react";
import {
  MdContentCopy,
  MdOutlineOpenInNew,
  MdShoppingCart,
} from "react-icons/md";

function Author() {
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
  ];
  return (
    <div className="mt-5 flex flex-col gap-5">
      <div
        id="profile"
        className="relative h-[25pc] flex justify-center items-center"
      >
        <img
          id="bg-image"
          className="absolute top-0 rounded-lg opacity-40"
          src="https://rainbowit.net/html/nuron/assets/images/bg/bg-image-9.jpg"
          alt=""
        />
        <div className="z-10 relative flex flex-col gap-2 items-center w-max  p-3 rounded-lg">
          <img
            className="w-28 h-28 border-4 dark:border-darkBlue-200 rounded-lg"
            src="https://nftix-html.vercel.app/assets/img/avatar/avatar3.jpg"
            alt=""
          />
          <div className="z-[-1] bg-gradient-to-r from-purple-800 to-pink-600 absolute bottom-0 h-96 w-96 blur-[10pc] opacity-[30%]" />

          <h2 className="dark:text-white/90 text-2xl font-semibold p-1 px-5 rounded-lg backdrop-blur-md">
            MRS SUNAYRA AHSAN
          </h2>
          <span className="dark:text-white/70 text-md flex items-center gap-1  p-1 px-5 rounded-lg backdrop-blur-md">
            <FaEthereum /> 0x904df..2334
          </span>
          <p className="dark:text-white/50 text-md w-[30pc] text-center ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            perspiciatis, architecto saepe laborum
          </p>
          <div className="text-white/90 flex gap-2">
            <FaXTwitter className="h-7 p-1 w-8 active:bg-pink-700 transition-all rounded-md cursor-pointer hover:bg-pink-700/80" />
            <FaFacebook className="h-7 p-1 w-8 active:bg-pink-700 transition-all rounded-md cursor-pointer hover:bg-pink-700/80" />
            <FaTelegramPlane className="h-7 p-1 w-8 active:bg-pink-700 transition-all rounded-md cursor-pointer hover:bg-pink-700/80" />
          </div>
        </div>
      </div>
      <div id="profile-body" className="">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-darkBlue-600 dark:border-darkBlue-500 dark:text-gray-400">
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 "
            >
              Details
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              aria-current="page"
              className="inline-block p-4 text-pink-600 bg-gray-100 rounded-t-lg active dark:bg-darkBlue-500/70 dark:text-pink-500"
            >
              Collections
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 "
            >
              Owned
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 "
            >
              Liked
            </a>
          </li>
          <li className="me-2">
            <a
              href="#"
              className="inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 "
            >
              On Sale
            </a>
          </li>
        </ul>
        <div
          id="tab-body"
          className="rounded-lg p-5 dark:bg-darkBlue-700 border-darkBlue-600 dark:border-darkBlue-500 border-[1px]"
        >
          <div id="Details" className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 px-5">
              <li className="flex gap-4">
                {" "}
                <span className="text-white/50">Blockchain :</span>{" "}
                <b className="flex gap-1 items-center justify-center text-white/70">
                  {" "}
                  <FaEthereum /> Etheream
                </b>{" "}
              </li>
              <li className="flex gap-3">
                {" "}
                <span className="text-white/50">Profile Address :</span>{" "}
                <b className="flex gap-1 items-center justify-center text-white/70">
                  {" "}
                  <MdContentCopy className="cursor-pointer rounded-sm transition-all hover:bg-purple-500 active:bg-purple-700 h-6 w-6 p-1" />{" "}
                  0xce9e2..674B1F
                </b>{" "}
              </li>
              <li className="flex gap-3">
                {" "}
                <span className="text-white/50">Total Collection :</span>{" "}
                <b className="flex gap-1 items-center justify-center text-white/70">
                  2
                </b>{" "}
              </li>
              <li className="flex gap-3">
                {" "}
                <span className="text-white/50">Token NFTs :</span>{" "}
                <b className="flex gap-1 items-center justify-center text-white/70">
                  24
                </b>{" "}
              </li>
              <li className="flex gap-3">
                {" "}
                <span className="text-white/50">Join At :</span>{" "}
                <Tooltip
                  content="10 pm, 23dec 2021"
                  className="dark:bg-darkBlue-500 text-pink-500"
                  theme={{
                    arrow: {
                      style: {
                        dark: "bg-gray-900 dark:bg-darkBlue-500",
                        light: "bg-white",
                      },
                    },
                  }}
                  placement="right"
                >
                  <b className="flex gap-1 items-center justify-center text-white/70 cursor-pointer">
                    10 months ago
                  </b>{" "}
                </Tooltip>
              </li>
            </div>
          </div>
          {/* <div id="Owned" className="flex flex-wrap justify-center">
            {k.map((i) => (
              <div className="transition-all m-3 w-[17pc] bg-gradient-to-r from-darkBlue-400 to-darkBlue-300 rounded-lg hover:shadow-lg hover:-translate-y-3 0 p-[1px] cursor-pointer">
                <div className="p-3 bg-gradient-to-r from-darkBlue-600 via-darkBlue-400 to-darkBlue-500 rounded-lg flex flex-col gap-5">
                  <div
                    style={{ backgroundImage: `url(${i.img})` }}
                    className="bg-cover rounded-lg bg-center bg-[url('https://nftix-html.vercel.app/assets/img/images/sebastian-svenson.jpg')] h-[12pc] flex items-center justify-center"
                  />
                  <div className="flex gap-2 items-center justify-between">
                    <img
                      className="w-11 h-11"
                      src="https://nftix-html.vercel.app/assets/img/avatar/avatar2.jpg"
                      alt=""
                    />
                    <div>
                      <h2 className="text-white/90 text-sm font-semibold">
                        Baby doge #2123
                      </h2>
                      <span className="text-white/50 text-sm">lldlds sdsd</span>
                    </div>
                    <img
                      className="rounded-full w-7 h-7"
                      src="https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="flex gap-[0.1pc] flex-col">
                      <b className="dark:text-white/90">25.5 ETH</b>
                      <span className="dark:text-white/50">Bid Price</span>
                    </div>
                    <div className="flex gap-[0.1pc] flex-col">
                      <b className="dark:text-white/90">21.5 ETH</b>
                      <span className="dark:text-white/50">Offer for</span>
                    </div>{" "}
                    <div className="flex gap-[0.1pc] flex-col">
                      <b className="dark:text-white/90">1334 $</b>
                      <span className="dark:text-white/50">in Doller</span>
                    </div>
                  </div>
                  <button className=" items-center justify-center py-3 px-7 text-sm font-medium flex  gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white bg-gradient-to-r from-purple-800 to-purple-400 hover:from-purple-800 hover:to-purple-600 active:from-purple-600 active:to-purple-700">
                    Collect Now
                  </button>
                </div>
              </div>
            ))}
          </div> */}
          {/* <div id="Liked" className="flex flex-wrap justify-center">
            {k.map((i) => (
              <div className="transition-all m-3 w-[17pc] bg-gradient-to-r from-darkBlue-400 to-darkBlue-300 rounded-lg hover:shadow-lg hover:-translate-y-3 0 p-[1px] cursor-pointer">
                <div className="p-3 bg-gradient-to-r from-darkBlue-600 via-darkBlue-400 to-darkBlue-500 rounded-lg flex flex-col gap-5">
                  <div
                    style={{ backgroundImage: `url(${i.img})` }}
                    className="bg-cover rounded-lg bg-center bg-[url('https://nftix-html.vercel.app/assets/img/images/sebastian-svenson.jpg')] h-[12pc] flex items-center justify-center"
                  />
                  <div className="flex gap-2 items-center justify-between">
                    <img
                      className="w-11 h-11"
                      src="https://nftix-html.vercel.app/assets/img/avatar/avatar2.jpg"
                      alt=""
                    />
                    <div>
                      <h2 className="text-white/90 text-sm font-semibold">
                        Baby doge #2123
                      </h2>
                      <span className="text-white/50 text-sm">lldlds sdsd</span>
                    </div>
                    <img
                      className="rounded-full w-7 h-7"
                      src="https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="flex gap-[0.1pc] flex-col">
                      <b className="dark:text-white/90">25.5 ETH</b>
                      <span className="dark:text-white/50">Bid Price</span>
                    </div>
                    <div className="flex gap-[0.1pc] flex-col">
                      <b className="dark:text-white/90">21.5 ETH</b>
                      <span className="dark:text-white/50">Offer for</span>
                    </div>{" "}
                    <div className="flex gap-[0.1pc] flex-col">
                      <b className="dark:text-white/90">1334 $</b>
                      <span className="dark:text-white/50">in Doller</span>
                    </div>
                  </div>
                  <button className=" items-center justify-center py-3 px-7 text-sm font-medium flex  gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white bg-gradient-to-r from-purple-800 to-purple-400 hover:from-purple-800 hover:to-purple-600 active:from-purple-600 active:to-purple-700">
                    Collect Now
                  </button>
                </div>
              </div>
            ))}
          </div> */}
          {/* <div id="OnSale" className="flex flex-wrap justify-center">
            {k.map((i) => (
              <div className="transition-all m-3 w-[17pc] bg-gradient-to-r from-darkBlue-400 to-darkBlue-300 rounded-lg hover:shadow-lg hover:-translate-y-3 0 p-[1px] cursor-pointer">
                <div className="p-3 bg-gradient-to-r from-darkBlue-600 via-darkBlue-400 to-darkBlue-500 rounded-lg flex flex-col gap-5">
                  <div
                    style={{ backgroundImage: `url(${i.img})` }}
                    className="bg-cover rounded-lg bg-center bg-[url('https://nftix-html.vercel.app/assets/img/images/sebastian-svenson.jpg')] h-[12pc] flex items-center justify-center"
                  />
                  <div className="flex gap-2 items-center justify-between">
                    <img
                      className="w-11 h-11"
                      src="https://nftix-html.vercel.app/assets/img/avatar/avatar2.jpg"
                      alt=""
                    />
                    <div>
                      <h2 className="text-white/90 text-sm font-semibold">
                        Baby doge #2123
                      </h2>
                      <span className="text-white/50 text-sm">lldlds sdsd</span>
                    </div>
                    <img
                      className="rounded-full w-7 h-7"
                      src="https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png"
                      alt=""
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="flex gap-[0.1pc] flex-col">
                      <b className="dark:text-white/90">25.5 ETH</b>
                      <span className="dark:text-white/50">Bid Price</span>
                    </div>
                    <div className="flex gap-[0.1pc] flex-col">
                      <b className="dark:text-white/90">21.5 ETH</b>
                      <span className="dark:text-white/50">Offer for</span>
                    </div>{" "}
                    <div className="flex gap-[0.1pc] flex-col">
                      <b className="dark:text-white/90">1334 $</b>
                      <span className="dark:text-white/50">in Doller</span>
                    </div>
                  </div>
                  <button className=" items-center justify-center py-3 px-7 text-sm font-medium flex  gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white bg-gradient-to-r from-purple-800 to-purple-400 hover:from-purple-800 hover:to-purple-600 active:from-purple-600 active:to-purple-700">
                    Collect Now
                  </button>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
      <div
        id="collection"
        className="flex flex-col p-4 gap-3 dark:border-darkBlue-500 border-[1px]"
      >
        <h2 className="text-white/90 font-semibold text-2xl">
          All Collections
        </h2>
        <div id="collection" className="flex flex-wrap justify-center">
          {k.map(() => (
            <div className=" transition-all m-3 w-max bg-gradient-to-r from-darkBlue-400 to-darkBlue-300 rounded-lg hover:shadow-lg hover:-translate-y-3 0 p-[1px] cursor-pointer">
              <div className="p-3 bg-gradient-to-r relative from-darkBlue-600 via-darkBlue-400 to-darkBlue-500 rounded-lg flex flex-col gap-5">
                <div className="relative">
                  <img
                    className=" rounded-md  border-darkBlue-200"
                    src="https://rainbowit.net/html/nuron/assets/images/collection/collection-lg-01.jpg"
                    alt=""
                  />
                </div>
                <img
                  className="w-14 h-14 rounded-full border-2 absolute top-[12pc] left-[8.5pc] border-darkBlue-200"
                  src="https://rainbowit.net/html/nuron/assets/images/client/client-14.png"
                  alt=""
                />
                <div className="flex gap-2">
                  <img
                    className=" rounded-md  border-darkBlue-200"
                    src="https://rainbowit.net/html/nuron/assets/images/collection/collection-sm-01.jpg"
                    alt=""
                  />
                  <img
                    className=" rounded-md  border-darkBlue-200"
                    src="https://rainbowit.net/html/nuron/assets/images/collection/collection-sm-02.jpg"
                    alt=""
                  />
                  <img
                    className=" rounded-md  border-darkBlue-200"
                    src="https://rainbowit.net/html/nuron/assets/images/collection/collection-sm-03.jpg"
                    alt=""
                  />
                </div>
                <div className="flex w-full justify-between items-center">
                  <span className="text-white/70 text-lg hover:underline">
                    Orthogon#720
                  </span>
                  <button
                    type="button"
                    className="py-2 px-4 text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
                  >
                    10 Items
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Author;
