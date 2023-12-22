import React from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ProductNFT } from "../../../../components/UiComponents/ProductNFT";

function TrendingNFts() {
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
      img: "https://i.seadn.io/s/raw/files/db06245a1a357a3c20af708a3621c7ab.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/e7af4802b383764a1f6693b708d0a5cf.png?auto=format&dpr=1&w=256",
    },
  ];
  var Change;
  return (
    <div className="text-white/90 text-sm sm:text-base sm:gap-10 gap-5 flex flex-col font-semibold overflow-hidden w-full">
      <h2 className="sm:text-2xl text-lg">Trending NFTs</h2>
      <div className="flex flex-col gap-5">
        <div className="">
          <Swiper
            slidesPerView={3}
            centeredSlides={false}
            breakpoints={{
              200: {
                slidesPerView: 1,
                spaceBetween: 20,
                centeredSlides: false,
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1500: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            onBeforeInit={(swiper) => (Change = swiper)}
            modules={[Autoplay]}
          >
            {k.map((i, index) => (
              <SwiperSlide className="!flex justify-center items-center">
                <ProductNFT
                  key={index}
                  className="w-full !h-[30pc] xl:!h-[25pc]"
                  data={i}
                />
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

export default TrendingNFts;
