import React from "react";
import { MdOutlineOpenInNew, MdShoppingCart } from "react-icons/md";
import { BsStars } from "react-icons/bs";

function NftActivity() {
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
  );
}

export default NftActivity;
