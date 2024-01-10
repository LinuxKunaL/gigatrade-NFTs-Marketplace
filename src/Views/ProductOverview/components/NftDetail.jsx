import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import { Tooltip } from "flowbite-react";
import { ContractAddress } from "../../../hooks/useContract";

function NftDetails({ data }) {
  return (
    <div
      id="Details"
      className="flex h-full sm:justify-evenly flex-col gap-2 sm:gap-4"
    >
      <p className="dark:text-white/80 sm:text-base text-sm">
        {data.Description}
      </p>
      <div className="flex flex-col gap-3 sm:px-5 sm:text-base text-sm">
        <li className="flex gap-4">
          {" "}
          <span className="text-white/50">Blockchain :</span>{" "}
          <b className="flex gap-1 items-center justify-center text-white/70">
            {" "}
            <FaEthereum /> Ethereum
          </b>{" "}
        </li>
        <li className="flex gap-4">
          {" "}
          <span className="text-white/50">Category :</span>{" "}
          <b className="flex gap-1 items-center justify-center text-white/70">
            {" "}
            {data.category}
          </b>{" "}
        </li>
        <li className="flex gap-3">
          {" "}
          <span className="text-white/50">Contract Address :</span>{" "}
          <b className="flex gap-1 items-center justify-center text-white/70">
            {" "}
            <Tooltip
              id="tooltip-id"
              content="copy address"
              className="dark:bg-darkBlue-500 text-pink-500"
              theme={{
                arrow: {
                  style: {
                    dark: "bg-gray-900 dark:bg-darkBlue-500",
                    light: "bg-white",
                  },
                },
              }}
              placement="left"
            >
              <MdContentCopy
                onClick={() => {
                  navigator.clipboard.writeText(ContractAddress);
                  document.getElementById("tooltip-id").innerText = "Copied!";
                }}
                className="cursor-pointer rounded-sm transition-all hover:bg-purple-500 active:bg-purple-700 h-6 w-6 p-1"
              />{" "}
            </Tooltip>
            {`${ContractAddress.slice(0, 6)}...${ContractAddress.slice(38)}`}
          </b>{" "}
        </li>
        <li className="flex gap-3">
          {" "}
          <span className="text-white/50">Token ID :</span>{" "}
          <b className="flex gap-1 items-center justify-center text-white/70">
            {`# ${data.TokenId}`}
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
            {`${data.creatorFees}%`}
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
    </div>
  );
}

export default NftDetails;
