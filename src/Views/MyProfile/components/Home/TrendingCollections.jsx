import React from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ProductCollection } from "../../../../components/UiComponents/ProductCollection";

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
      <h2 className="sm:text-2xl text-lg">Trending Collections</h2>
      <div className="flex flex-col gap-5 overflow-y-auto">
        <div>
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
              <SwiperSlide>
                <ProductCollection key={index} data={i} />
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
