import React from "react";
import { FaEthereum } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";

import { Link } from "react-router-dom";

function AuthorDetails({ details }) {
  function timeAgo(date) {
    const now = new Date();
    const diff = now - date;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (months >= 2) {
      return `${months} months ago`;
    } else if (months === 1) {
      return "1 month ago";
    } else if (days >= 2) {
      return `${days} days ago`;
    } else if (days === 1) {
      return "1 day ago";
    } else if (hours >= 2) {
      return `${hours} hours ago`;
    } else if (hours === 1) {
      return "1 hour ago";
    } else if (minutes >= 2) {
      return `${minutes} min ago`;
    } else if (minutes === 1) {
      return "1 min ago";
    } else {
      return "Just now";
    }
  }
  return (
    <div id="Details" className="flex flex-col gap-4 text-sm sm:text-base">
      <div className="flex flex-col gap-3  sm:px-5">
        <li className="flex gap-4">
          <span className="text-white/50">View on Etherscan :</span>
          <b className="flex gap-1 items-center justify-center text-white/70">
            <Link
              target="_blank"
              to={`${process.env.REACT_APP_BLOCK_EXPLORE_URL}/address/${details.profileAddress}`}
              className="flex gap-1 items-center text-blue-600 hover:underline"
            >
              view <MdOutlineOpenInNew/>
            </Link>
          </b>
        </li>
        <li className="flex gap-4">
          <span className="text-white/50">Blockchain :</span>
          <b className="flex gap-1 items-center justify-center text-white/70">
            <FaEthereum /> Ethereum
          </b>
        </li>
        <li className="flex gap-3">
          <span className="text-white/50">Profile Address :</span>
          <b className="flex gap-1 items-center justify-center text-white/70 text-xs sm:text-base">
            {details.profileAddress
              ? `${details.profileAddress.slice(
                  0,
                  6
                )}...${details.profileAddress.slice(38)}`
              : null}
          </b>
        </li>
        <li className="flex gap-3">
          <span className="text-white/50">Total Collection :</span>
          <b className="flex gap-1 items-center justify-center text-white/70">
            {details.collections}
          </b>
        </li>
        <li className="flex gap-3">
          <span className="text-white/50">Token NFTs :</span>
          <b className="flex gap-1 items-center justify-center text-white/70">
            {details.nft}
          </b>
        </li>
        <li className="flex gap-3">
          <span className="text-white/50">Join At :</span>
          <b className="flex gap-1 items-center justify-center text-white/70 cursor-pointer">
            {timeAgo(details.createdAt)}
          </b>
        </li>
      </div>
    </div>
  );
}

export default AuthorDetails;
