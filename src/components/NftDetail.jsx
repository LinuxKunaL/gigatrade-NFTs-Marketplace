import React, { useEffect } from "react";
import { FaEthereum, FaRegHeart, FaLongArrowAltUp } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import {
  MdContentCopy,
  MdOutlineOpenInNew,
  MdShoppingCart,
} from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { Button, Tooltip } from "flowbite-react";
import ApexCharts from "apexcharts";

function NftDetail() {
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
      img: "https://i.seadn.io/s/raw/files/c0768357ae0354e3d985b5bcad665688.png?auto=format&dpr=1&w=256",
    },
  ];
  useEffect(() => {
    // let options = {
    //   chart: {
    //     height: "100%",
    //     maxWidth: "100%",
    //     type: "area",
    //     fontFamily: "Inter, sans-serif",
    //     dropShadow: {
    //       enabled: false,
    //     },
    //     toolbar: {
    //       show: false,
    //     },
    //   },
    //   tooltip: {
    //     enabled: true,
    //     x: {
    //       show: false,
    //     },
    //   },
    //   fill: {
    //     type: "gradient",
    //     gradient: {
    //       opacityFrom: 0.55,
    //       opacityTo: 0,
    //       shade: "#5521B5",
    //       gradientToColors: [""],
    //     },
    //   },
    //   dataLabels: {
    //     enabled: false,
    //   },
    //   stroke: {
    //     width: 4,
    //   },
    //   grid: {
    //     show: false,
    //     strokeDashArray: 4,
    //     padding: {
    //       left: 2,
    //       right: 2,
    //       top: 0,
    //     },
    //   },
    //   series: [
    //     {
    //       name: "Buy",
    //       data: [6500, 6418, 6456, 6526, 6356, 6456],
    //       color: "#D61F69",
    //     },
    //   ],
    //   xaxis: {
    //     categories: [
    //       "01 February",
    //       "02 February",
    //       "03 February",
    //       "04 February",
    //       "05 February",
    //       "06 February",
    //       "07 February",
    //     ],
    //     labels: {
    //       show: false,
    //     },
    //     axisBorder: {
    //       show: false,
    //     },
    //     axisTicks: {
    //       show: false,
    //     },
    //   },
    //   yaxis: {
    //     show: false,
    //   },
    // };
    // if (document.getElementById("area-chart")) {
    //   const chart = new ApexCharts(
    //     document.getElementById("area-chart"),
    //     options
    //   );
    //   chart.render();
    // }
  }, []);
  return (
    <div>
      <div
        id="section-1"
        className="flex flex-col gap-3 w-full h-[15pc] items-center justify-center "
      >
        <h2 className="text-3xl dark:text-white/90 font-semibold">
          NFTs Details
        </h2>
        <div className="flex gap-3 dark:text-white">
          <span className="dark:text-white/80">Home</span>/
          <span className="dark:text-white/50">NFT Details</span>
        </div>
      </div>
      <div id="section-2" className="flex">
        <div className="flex-1 relative">
          <img
            className="z-10 sticky top-[10pc] rounded-2xl"
            src="https://nftix-html.vercel.app/assets/img/images/hands/hand-6.jpg"
            alt=""
          />
          <div className="bg-gradient-to-r from-purple-800 to-pink-600 absolute right-1 bottom-[50%] h-96 w-96 blur-[10pc] opacity-[30%]" />
        </div>
        <div className="flex flex-col gap-7 flex-1 relative">
          <div className="flex gap-1 items-center dark:text-white/80 justify-between">
            <div>
              by{" "}
              <span className="font-semibold text-pink-600">
                Billionaires NTFt Club
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex gap-2 items-center p-2 dark:bg-darkBlue-500 rounded-xl">
                <span>2.2k</span>
                <IoEyeOutline className="cursor-pointer rounded-sm transition-all  h-6 w-6 p-[2px]" />
              </div>
              <div className="flex gap-2 items-center p-2 dark:bg-darkBlue-500 rounded-xl">
                <span>23</span>
                <FaRegHeart className="cursor-pointer rounded-sm transition-all hover:text-purple-500 active:text-purple-700 h-6 w-6 p-1" />
              </div>
              <BsFillShareFill className="cursor-pointer rounded-sm transition-all hover:bg-purple-500 active:bg-purple-700 h-6 w-6 p-1" />
            </div>
          </div>
          <h1 className="font-semibold dark:text-white text-5xl">
            Golden Skull
          </h1>
          <p className="dark:text-white/80">
            Hey guys! New exploration about NFT Marketplace Web Design, this
            time I'm inspired by one of my favorite NFT website called Rarible
            (with crypto payment)! What do you think?
          </p>
          <div className="flex gap-10">
            <div className="flex flex-col gap-2">
              <span className="dark:text-white/90 font-semibold">Creator</span>
              <div className="flex gap-2 items-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://nftix-html.vercel.app/assets/img/avatar/avatar3.jpg"
                  alt=""
                />
                <span className="dark:text-white/90">0x32323sdsww334</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="dark:text-white/90 font-semibold">
                Current Owner
              </span>
              <div className="flex gap-2 items-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://nftix-html.vercel.app/assets/img/avatar/avatar3.jpg"
                  alt=""
                />
                <span className="dark:text-white/90">0x32323sdsww334</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <span className="dark:text-white/80 font-semibold">
              NFT Properties
            </span>
            <div className="flex gap-3 flex-wrap">
              <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-4 py-1 bg-darkBlue-400  text-white font-s">
                PINK
              </span>
              <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-4 py-1  bg-darkBlue-400  text-white font-s">
                Skeleton
              </span>{" "}
              <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-4 py-1  bg-darkBlue-400  text-white font-s">
                Box
              </span>
              <span className="flex flex-wrap items-center justify-center rounded-full cursor-pointer transition-all hover:bg-purple-500 active:bg-purple-700 px-4 py-1  bg-darkBlue-400  text-white font-s">
                Mounted
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label
              for="counter-input"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Choose quantity:
            </label>
            <div className="relative flex items-center">
              <button
                type="button"
                id="decrement-button"
                data-input-counter-decrement="counter-input"
                className="flex-shrink-0 bg-gray-100 dark:bg-darkBlue-500 dark:hover:bg-darkBlue-400 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
              >
                <svg
                  className="w-2.5 h-2.5 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <input
                type="text"
                id="counter-input"
                data-input-counter
                className="flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
                placeholder=""
                defaultValue="1"
                required
              />
              <button
                type="button"
                id="increment-button"
                data-input-counter-increment="counter-input"
                className="flex-shrink-0 bg-gray-100 dark:bg-darkBlue-500 dark:hover:bg-darkBlue-400 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
              >
                <svg
                  className="w-2.5 h-2.5 text-gray-900 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-between gap-8">
            <div className="flex flex-col gap-3 rounded-lg p-4 flex-1 border-darkBlue-300/50 border-[1px] bg-darkBlue-500/70">
              <span className="dark:text-white/80 font-semibold">
                Current Price
              </span>
              <div className="flex gap-3 items-baseline">
                <b className="text-5xl dark:text-white/90">~6.78 ETH</b>{" "}
                <span className="dark:text-white/60">($3,566.34)</span>
              </div>
              <b className="dark:text-white/50 font-normal">
                Last sale price ~5.67 ETH
              </b>
              <button
                type="button"
                className="py-2.5 w-full px-5 text-lg justify-evenly font-medium flex items-center gap-3 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
              >
                Buy now for{" "}
                <div className="flex gap-2 items-center">
                  <FaEthereum /> 6.78 ETH{" "}
                </div>
              </button>
            </div>
            <div className="flex  flex-col gap-5 rounded-lg p-4 flex-1 border-darkBlue-300/50 border-[1px] bg-darkBlue-500/70">
              <div className="relative w-max">
                <span
                  id="LiveAuction"
                  className="dark:text-white/80 font-semibold w-max"
                >
                  Auction Live
                </span>
              </div>
              <div className="flex justify-between gap-2 items-center">
                <div className="flex gap-2 flex-col">
                  <span className="dark:bg-darkBlue-300 h-9 w-9 rounded-md dark:text-white/90 font-semibold flex justify-center items-center">
                    1
                  </span>
                  <b className="text-white/60 text-lg font-medium">Day</b>
                </div>
                <span className="dark:text-white/40 text-2xl">:</span>
                <div className="flex gap-2 flex-col">
                  <span className="dark:bg-darkBlue-300 h-9 w-9 rounded-md dark:text-white/90 font-semibold flex justify-center items-center">
                    03
                  </span>
                  <b className="text-white/60 text-lg font-medium">Hr's</b>
                </div>
                <span className="dark:text-white/40 text-2xl">:</span>
                <div className="flex gap-2 flex-col">
                  <span className="dark:bg-darkBlue-300 h-9 w-9 rounded-md dark:text-white/90 font-semibold flex justify-center items-center">
                    34
                  </span>
                  <b className="text-white/60 text-lg font-medium">Min's</b>
                </div>
                <span className="dark:text-white/40 text-2xl">:</span>
                <div className="flex gap-2 flex-col">
                  <span className="dark:bg-darkBlue-300 h-9 w-9 rounded-md dark:text-white/90 font-semibold flex justify-center items-center">
                    53
                  </span>
                  <b className="text-white/60 text-lg font-medium">Sec</b>
                </div>
              </div>
              <button
                type="button"
                className="py-2.5 w-full px-5 text-lg justify-evenly font-medium flex items-center gap-3 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
              >
                Place a bid
              </button>
            </div>
          </div>
          <div className="">
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-darkBlue-600 dark:border-darkBlue-500 dark:text-gray-400">
              <li className="me-2">
                <a
                  href="#"
                  aria-current="page"
                  className="inline-block p-4 text-pink-600 bg-gray-100 rounded-t-lg active dark:bg-darkBlue-500/70 dark:text-pink-500"
                >
                  Details
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className="inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 "
                >
                  chart
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className="inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 "
                >
                  Listing
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className="inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 "
                >
                  Activity
                </a>
              </li>
            </ul>
            <div className="border-l-[2px] border-r-[1px] border-b-[2px] border-darkBlue-600 flex flex-col gap-4 p-4">
              {/* <div id="Details" className="flex flex-col gap-4">
                <p className="dark:text-white/80">
                  Hey guys! New exploration about NFT Marketplace Web Design,
                  this time I'm inspired by one of my favorite NFT website
                  called Rarible (with crypto payment)! What do you think?
                </p>
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
                    <span className="text-white/50">
                      Contract Address :
                    </span>{" "}
                    <b className="flex gap-1 items-center justify-center text-white/70">
                      {" "}
                      <MdContentCopy className="cursor-pointer rounded-sm transition-all hover:bg-purple-500 active:bg-purple-700 h-6 w-6 p-1" />{" "}
                      0xce9e2..674B1F
                    </b>{" "}
                  </li>
                  <li className="flex gap-3">
                    {" "}
                    <span className="text-white/50">Token ID :</span>{" "}
                    <b className="flex gap-1 items-center justify-center text-white/70">
                      23443334
                    </b>{" "}
                  </li>
                  <li className="flex gap-3">
                    {" "}
                    <span className="text-white/50">Token Standard :</span>{" "}
                    <b className="flex gap-1 items-center justify-center text-white/70">
                      ERC-721
                    </b>{" "}
                  </li>
                  <li className="flex gap-3">
                    {" "}
                    <span className="text-white/50">Creator Fees :</span>{" "}
                    <b className="flex gap-1 items-center justify-center text-white/70">
                      0%
                    </b>{" "}
                  </li>
                  <li className="flex gap-3">
                    {" "}
                    <span className="text-white/50">Created At :</span>{" "}
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
              </div> */}
              {/* <div id="chart" className="flex w-full flex-col gap-4">
                <div className="w-full bg-white rounded-lg shadow dark:bg-darkBlue-500 bottom-2 p-4 md:p-6">
                  <div className="flex justify-between">
                    <div>
                      <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
                        34
                      </h5>
                      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Trade of this week
                      </p>
                    </div>
                    <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
                      12%
                      <FaLongArrowAltUp className="w-3 h-3 ms-1" />
                    </div>
                  </div>
                  <div id="area-chart"></div>
                </div>
              </div> */}
              {/* <div id="listing" className="flex w-full flex-col gap-4 h-[20pc]">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full relative text-sm text-left rtl:text-right text-white/40 dark:text-white/70">
                    <thead className="text-xs text-gray-700 sticky top-0 uppercase bg-gray-50 dark:bg-darkBlue-600 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          USD
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price Difference
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Expiration
                        </th>
                        <th scope="col" className="px-6 py-3">
                          From
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-darkBlue-500 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-darkBlue-400">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          23.34 ETH
                        </th>
                        <td className="px-6 py-4">$299</td>
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">23% below</td>
                        <td className="px-6 py-4">in 10 days</td>
                        <td className="px-6 py-4 text-right">
                          <a
                            href=""
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Kunal23d
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-darkBlue-500 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-darkBlue-400">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          23.34 ETH
                        </th>
                        <td className="px-6 py-4">$299</td>
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">23% below</td>
                        <td className="px-6 py-4">in 10 days</td>
                        <td className="px-6 py-4 text-right">
                          <a
                            href=""
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Kunal23d
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-darkBlue-500 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-darkBlue-400">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          23.34 ETH
                        </th>
                        <td className="px-6 py-4">$299</td>
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">23% below</td>
                        <td className="px-6 py-4">in 10 days</td>
                        <td className="px-6 py-4 text-right">
                          <a
                            href=""
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Kunal23d
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-darkBlue-500 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-darkBlue-400">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          23.34 ETH
                        </th>
                        <td className="px-6 py-4">$299</td>
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">23% below</td>
                        <td className="px-6 py-4">in 10 days</td>
                        <td className="px-6 py-4 text-right">
                          <a
                            href=""
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Kunal23d
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-darkBlue-500 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-darkBlue-400">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          23.34 ETH
                        </th>
                        <td className="px-6 py-4">$299</td>
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">23% below</td>
                        <td className="px-6 py-4">in 10 days</td>
                        <td className="px-6 py-4 text-right">
                          <a
                            href=""
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Kunal23d
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-darkBlue-500 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-darkBlue-400">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          23.34 ETH
                        </th>
                        <td className="px-6 py-4">$299</td>
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">23% below</td>
                        <td className="px-6 py-4">in 10 days</td>
                        <td className="px-6 py-4 text-right">
                          <a
                            href=""
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Kunal23d
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-darkBlue-500 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-darkBlue-400">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          23.34 ETH
                        </th>
                        <td className="px-6 py-4">$299</td>
                        <td className="px-6 py-4">2</td>
                        <td className="px-6 py-4">23% below</td>
                        <td className="px-6 py-4">in 10 days</td>
                        <td className="px-6 py-4 text-right">
                          <a
                            href=""
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            Kunal23d
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div> */}
              <div
                id="Activity"
                className="flex w-full flex-col gap-4 h-[20pc]"
              >
                <div className="">
                  <label
                    for="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white/70"
                  >
                    Select a filter
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-darkBlue-500 focus:border-darkBlue-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option selected>Choose a country</option>
                    <option value="US">All</option>
                    <option value="CA">sell</option>
                    <option value="FR">Transfer</option>
                  </select>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full relative text-sm text-left rtl:text-right text-white/40 dark:text-white/70">
                    <thead className="text-xs text-gray-700 sticky top-0 uppercase bg-gray-50 dark:bg-darkBlue-600 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Event
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          From
                        </th>
                        <th scope="col" className="px-6 py-3">
                          To
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b dark:bg-darkBlue-500 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-darkBlue-400">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div className="flex items-center gap-1">
                            {" "}
                            <MdShoppingCart />
                            Sell
                          </div>
                        </th>
                        <td className="px-6 py-4">0.49 ETH</td>
                        <td className="px-6 py-4">saytam_233</td>
                        <td className="px-6 py-4">Kunal34@</td>
                        <td className="px-6 py-4">
                          <a
                            href=""
                            className="font-medium flex gap-1 items-center text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            4 day ago <MdOutlineOpenInNew />
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-white border-b dark:bg-darkBlue-500 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-darkBlue-400">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <div className="flex items-center gap-1">
                            {" "}
                            <BsStars />
                            Mint
                          </div>
                        </th>
                        <td className="px-6 py-4"></td>
                        <td className="px-6 py-4">0000</td>
                        <td className="px-6 py-4">Kunal34@</td>
                        <td className="px-6 py-4">
                          <a
                            href=""
                            className="font-medium flex gap-1 items-center text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            7 day ago <MdOutlineOpenInNew />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="section-3" className=" flex-col flex h-[50pc] justify-evenly">
        <div className="flex flex-row justify-between items-center">
          <h1 className="dark:text-white/90 text-4xl">
            Related{" "}
            <b className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
              NFTs
            </b>
          </h1>
        </div>
        <div className="flex relative z-10 flex-wrap gap-7 justify-evenly">
          {k.map((i) => (
            <div className=" transition-all w-[17pc] bg-gradient-to-r from-darkBlue-400 to-darkBlue-300 rounded-lg hover:shadow-lg hover:-translate-y-3 0 p-[1px] cursor-pointer">
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
        </div>
      </div>
    </div>
  );
}

export default NftDetail;
