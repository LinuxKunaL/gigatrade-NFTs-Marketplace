import React, { useEffect, useState } from "react";
import { getTopCreators } from "../../../apis/profile.apis";
import demoUserAvatar from "../../../assets/images/user-demo-avatar.svg";
import { Link } from "react-router-dom";
import Product404 from "../../../components/UiComponents/Product404";

function Section_5() {
  const [Creator, setCreator] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await getTopCreators(10);
        setCreator(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, []);

  return (
    <div
      id="section-5"
      className="flex mt-10 gap-6 lg:gap-20 flex-col  lg:h-[20pc] w-full"
    >
      <h1 className="dark:text-white/90 text-2xl font-semibold sm:text-4xl">
        Top Seller in{" "}
        <b className="border-2 sm:text-2xl font-semibold text-lg lg:shadow-none lg:shadow-purple-800/80 sm:border-0 rounded-md shadow-lg shadow-purple-800/80 p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
          All Time
        </b>
      </h1>
      <div className="flex flex-col gap-10 flex-wrap mt-5">
        {Creator ? (
          Creator.length > 0 ? (
            <div className="flex w-full justify-center sm:justify-between gap-4 flex-wrap">
              {Creator.map((item, index) => (
                <Link
                  to={`/author/${item.userEthAddress}`}
                  key={index}
                  className="flex flex-autoe w-[11pc] h-[11pc] cursor-pointer items-center relative justify-start flex-col gap-2"
                >
                  <img
                    src={item.userProfile ? item.userProfile : demoUserAvatar}
                    className="h-[6pc] border-[1px] border-gray-700/50 rounded-lg w-[6pc]"
                    alt=""
                  />
                  <div className="right-5 -top-2 h-[1.5pc] absolute w-[1.5pc] text-xs rounded-full text-pink-500 font-semibold bg-white/90  flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <span className="text-white font-semibold hover:text-pink-500 transition-all">
                      {item.userName ? item.userName : "Not found"}
                    </span>
                    <p className="text-white/50 text-sm">
                      {item
                        ? `${item.userEthAddress.slice(
                            0,
                            4
                          )}...${item.userEthAddress.slice(39)}`
                        : null}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <Product404
              message="Creator not found"
              subMessage="Create our account"
            />
          )
        ) : (
          <Product404
            message="Creator not found"
            subMessage="Create our account"
          />
        )}
      </div>
    </div>
  );
}

export default Section_5;
