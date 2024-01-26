import React, { useState, useEffect } from "react";
import { getFewCollections } from "../../../../apis/Collections.apis";
import { Link } from "react-router-dom";
import Product404 from "../../../../components/UiComponents/Product404";

function RecentlyAddedCollections() {
  const [LatestCollections, setLatestCollections] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const response = await getFewCollections();
      setLatestCollections(response);
      try {
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, []);

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
    <div className="dark:bg-darkBlue-600 w-[25pc]m sm:p-5 p-3 flex flex-col gap-2 rounded-lg">
      {/* sm:text-sm text-[0.8rem] */}
      <h3 className=" sm:py-5 sm:px-3 px-2 py-1 font-semibold dark:text-white/90 text-lg sm:text-2xl">
        Recently added Collections
      </h3>
      <div className="flex xl:flex-col md:flex-row flex-col gap-6">
        {LatestCollections.length > 0 ? (
          <Link
            to={`/collection/${
              LatestCollections[0] ? LatestCollections[0]._id : null
            }`}
            className="flex flex-col gap-1 dark:bg-darkBlue-400 rounded-lg"
          >
            <div className="h-[12pc] rounded-t-lg overflow-hidden flex items-center justify-center w-full sm:w-[25pc]">
              <img
                className="w-full"
                src={
                  LatestCollections[0]
                    ? LatestCollections[0].CollectionImages
                      ? LatestCollections[0].CollectionImages.one
                      : null
                    : null
                }
                alt=""
              />
            </div>
            <div className="p-2 sm:py-4 py-2 flex justify-between items-center">
              <b className=" text-white/70 sm:text-lg text-sm font-semibold">
                {LatestCollections[0]
                  ? LatestCollections[0].CollectionName
                  : null}{" "}
                #
                {LatestCollections[0]
                  ? LatestCollections[0].CollectionTag
                  : null}
              </b>
              <span className="text-white/40 sm:text-lg text-sm">
                {LatestCollections[0]
                  ? timeAgo(LatestCollections[0].createdTime)
                  : null}{" "}
              </span>
            </div>
          </Link>
        ) : (
          <Product404
            message="Collections not found "
            subMessage="Collections not added"
          />
        )}
        <div className="flex flex-col w-full gap-4 sm:text-sm text-[0.8rem]">
          {LatestCollections.map((items, index) =>
            index == 0 ? (
              ""
            ) : (
              <Link
                to={`/collection/${items._id}`}
                className="flex px-3 py-1 hover:bg-darkBlue-400 rounded-lg transition-all cursor-pointer flex-row justify-between items-center"
              >
                <div className="flex gap-2 items-center">
                  <div className="h-[4pc] w-[4pc] rounded-t-lg overflow-hidden flex items-center justify-center">
                    <img
                      className="rounded-2xl"
                      src={
                        items
                          ? items.CollectionImages
                            ? items.CollectionImages.one
                            : null
                          : null
                      }
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <b className="dark:text-white/70 w-[10pc] line-clamp-1">
                      {items ? items.CollectionName : null} #{" "}
                      {items ? items.CollectionTag.slice(0, 5) + "..." : null}
                    </b>
                    <span className="dark:text-white/50">
                      {items
                        ? `${items.EthUser.slice(0, 4)}...${items.EthUser.slice(
                            39
                          )}`
                        : null}
                    </span>
                  </div>
                </div>
                <span className="dark:text-white/40 font-semibold">
                  {items ? timeAgo(items.createdTime) : null}
                </span>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentlyAddedCollections;
