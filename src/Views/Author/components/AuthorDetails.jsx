import React from "react";

import { FaEthereum } from "react-icons/fa";
import { Tooltip } from "flowbite-react";
import { MdContentCopy } from "react-icons/md";

function AuthorDetails() {
  return (
    <div id="Details" className="flex flex-col gap-4 text-sm sm:text-base">
      <div className="flex flex-col gap-3  sm:px-5">
        <li className="flex gap-4">
          <span className="text-white/50">Blockchain :</span>
          <b className="flex gap-1 items-center justify-center text-white/70">
            <FaEthereum /> Ethereum
          </b>
        </li>
        <li className="flex gap-3">
          <span className="text-white/50">Profile Address :</span>
          <b className="flex gap-1 items-center justify-center text-white/70 text-xs sm:text-base">
            <MdContentCopy className="cursor-pointer rounded-sm transition-all hover:bg-purple-500 active:bg-purple-700 h-6 w-6 p-1" />
            0xce9e2..674B1F
          </b>
        </li>
        <li className="flex gap-3">
          <span className="text-white/50">Total Collection :</span>
          <b className="flex gap-1 items-center justify-center text-white/70">
            2
          </b>
        </li>
        <li className="flex gap-3">
          <span className="text-white/50">Token NFTs :</span>
          <b className="flex gap-1 items-center justify-center text-white/70">
            24
          </b>
        </li>
        <li className="flex gap-3">
          <span className="text-white/50">Join At :</span>
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
            </b>
          </Tooltip>
        </li>
      </div>
    </div>
  );
}

export default AuthorDetails;
