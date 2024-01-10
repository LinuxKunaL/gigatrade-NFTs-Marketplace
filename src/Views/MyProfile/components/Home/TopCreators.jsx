import React, { useEffect, useState } from "react";
import { getTopCreators } from "../../../../apis/profile.apis";
import { Link } from "react-router-dom";

function TopCreators() {
  const [topCreators, setTopCreators] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const response = await getTopCreators(5);
      console.log(response);
      setTopCreators(response);
      // setLatestCollections(response);
      try {
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, []);

  return (
    <div className="dark:bg-darkBlue-600 sm:p-5 p-3 flex flex-col gap-2 rounded-lg">
      <h3 className=" sm:py-5 sm:px-3 px-2 py-1  font-semibold dark:text-white/90 text-lg sm:text-2xl ">
        Top Creators
      </h3>
      <div className="flex flex-col gap-6 text-[0.8rem] sm:text-base">
        {topCreators
          ? topCreators.map((items, index) => (
              <div
                key={items._id}
                className="flex flex-row justify-between items-center"
              >
                <div className="flex gap-2 items-center">
                  <span className="dark:text-white/80 font-semibold">
                    {index + 1}.
                  </span>
                  <div className="h-[4pc] w-[4pc] overflow-hidden flex items-center justify-center rounded-2xl">
                    <img className="w-full" src={items.userProfile} alt="" />
                  </div>

                  <div className="flex flex-col">
                    <b className="dark:text-white/70">{items.userName}</b>
                    <span className="dark:text-white/50">
                      {items
                        ? `${items.userEthAddress.slice(
                            0,
                            4
                          )}...${items.userEthAddress.slice(39)}`
                        : null}
                    </span>
                  </div>
                </div>
                <Link
                  to={`/author/${items.userEthAddress}`}
                  className="text-white/90 px-2 py-1 rounded-lg cursor-pointer dark:bg-darkBlue-500 dark:active:bg-pink-400 transition-all hover:dark:bg-pink-500"
                >
                  View
                </Link>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default TopCreators;
