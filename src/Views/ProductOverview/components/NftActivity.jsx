import React, { useState, useEffect } from "react";
import { MdOutlineOpenInNew, MdShoppingCart } from "react-icons/md";
import { BsStars } from "react-icons/bs";

function NftActivity({ data }) {
  const calculateTimeAgo = (solidityTimestamp) => {
    const timeDifference =
      Math.abs(solidityTimestamp * 1000 - Date.now()) / 1000; // Convert Solidity timestamp to milliseconds
    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;
    const secondsInMonth = 2592000;
    const secondsInYear = 31536000;

    if (timeDifference < secondsInMinute) {
      return `${Math.floor(timeDifference)} seconds ago`;
    } else if (timeDifference < secondsInHour) {
      return `${Math.floor(timeDifference / secondsInMinute)} minutes ago`;
    } else if (timeDifference < secondsInDay) {
      return `${Math.floor(timeDifference / secondsInHour)} hours ago`;
    } else if (timeDifference < secondsInMonth) {
      return `${Math.floor(timeDifference / secondsInDay)} days ago`;
    } else if (timeDifference < secondsInYear) {
      return `${Math.floor(timeDifference / secondsInMonth)} months ago`;
    } else {
      return `${Math.floor(timeDifference / secondsInYear)} years ago`;
    }
  };
  return (
    <div id="Activity" className="flex h-full  w-full flex-col gap-4">
      <div className="">
        <label
          for="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white/70"
        >
          Select a filter
        </label>
        <select
          id="countries"
          className="bg-gray-50 border sm:text-base text-sm border-gray-300 text-gray-900  rounded-lg focus:ring-darkBlue-500 focus:border-darkBlue-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white"
        >
          <option selected>Choose a country</option>
          <option value="US">All</option>
          <option value="CA">sell</option>
          <option value="FR">Transfer</option>
        </select>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-max sm:w-full h-full relative text-sm text-left rtl:text-right text-white/40 dark:text-white/70">
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
            {data.map((item) => (
              <tr className="bg-white border-b dark:bg-darkBlue-500 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-darkBlue-400">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <div className="flex items-center gap-1">
                    {item.action == "mint" ? <BsStars /> : <MdShoppingCart />}
                    {item.action}
                  </div>
                </th>
                <td className="px-6 py-4">{item.price} ETH</td>
                <td className="px-6 py-4">{`${item.from.slice(
                  0,
                  6
                )}...${item.from.slice(39)}`}</td>
                <td className="px-6 py-4">{`${item.to.slice(
                  0,
                  6
                )}...${item.to.slice(39)}`}</td>
                <td className="px-6 py-4">
                  <a
                    href=""
                    className="font-medium flex gap-1 items-center text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    {calculateTimeAgo(item.time)}
                    <MdOutlineOpenInNew />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NftActivity;
