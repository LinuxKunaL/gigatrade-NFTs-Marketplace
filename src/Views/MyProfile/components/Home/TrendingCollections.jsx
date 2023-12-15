import React from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

function TrendingCollections() {
  var Change;
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
      img: "https://i.seadn.io/s/raw/files/e7af4802b383764a1f6693b708d0a5cf.png?auto=format&dpr=1&w=256",
    },
  ];
  return (
    <div className="text-white/90 text-2xl gap-5 flex flex-col font-semibold">
      <h2>Trending Collections</h2>
      <div className="flex flex-col gap-5">
        <div>
          <Swiper
            slidesPerView={3}
            centeredSlides={false}
            spaceBetween={30}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            onBeforeInit={(swiper) => (Change = swiper)}
          >
            {k.map((i) => (
              <SwiperSlide>
                <div
                  id="collections"
                  className="flex relative z-10 flex-wrap gap-7 justify-evenly"
                >
                  <div className="transition-all bg-gradient-to-r from-darkBlue-400 to-darkBlue-300 rounded-lg hover:shadow-lg hover:-translate-y-3 0 p-[1px] cursor-pointer">
                    <div className="p-3 w-max bg-gradient-to-r relative from-darkBlue-600 via-darkBlue-400 to-darkBlue-500 rounded-lg flex flex-col gap-5">
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center gap-14">
          <FaArrowLeftLong
            className="text-white/60 h-7 w-16 p-1 rounded-lg cursor-pointer dark:active:bg-darkBlue-400 transition-all hover:dark:bg-darkBlue-500"
            onClick={() => Change?.slidePrev()}
          />
          <FaArrowRightLong
            className="text-white/60 h-7 w-16 p-1 rounded-lg cursor-pointer  dark:active:bg-darkBlue-400 transition-all hover:dark:bg-darkBlue-500"
            onClick={() => Change?.slideNext()}
          />
        </div>
      </div>
    </div>
  );
}

export default TrendingCollections;
