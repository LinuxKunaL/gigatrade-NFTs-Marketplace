import React, { useState, useEffect } from "react";

import { ProductNFT } from "../../../components/UiComponents/ProductNFT";
import { fetchAllNFTs } from "../../../apis/FetchNFTs";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Product404 from "../../../components/UiComponents/Product404";

import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Section_2() {
  const [TradingNFTs, setTradingNFTs] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const response = await fetchAllNFTs("", "", 7);
      setTradingNFTs(response);
      try {
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, []);

  return (
    <div
      id="section-2"
      className="flex flex-col gap-5 mt-14 lg:mt-14 justify-center"
    >
      <div className="flex sm:flex-row flex-col gap-4 justify-between items-center">
        <h1 className="dark:text-white/80 text-2xl font-semibold sm:text-3xl">
          Trending{" "}
          <b className="border-2 sm:text-2xl text-lg font-semibold text-white lg:shadow-none lg:shadow-purple-800/80 sm:border-0 rounded-md shadow-lg shadow-purple-800/80 p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
            NFTs
          </b>
        </h1>
      </div>
      {TradingNFTs ? (
        TradingNFTs.length > 0 ? (
          <div className="w-full mt-1 sm:mt-20 flex justify-center gap-10 sm:justify-start flex-wrap">
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
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              spaceBetween={60}
              grabCursor={true}
              modules={[Autoplay]}
              className="h-[29pc]"
            >
              {TradingNFTs.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className="!flex  justify-center items-center"
                >
                  <ProductNFT
                    className="w-full !h-[30pc] xl:!h-[25pc]"
                    link="/nft/"
                    button="Buy"
                    data={item}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="h-[40dvh] justify-center items-center flex">
            <Product404
              message="There is not trending NFTs"
              subMessage="Explore the NFTs"
            />
          </div>
        )
      ) :   <div className="h-[40dvh] justify-center items-center flex">
      <Product404
        message="There is not trending NFTs"
        subMessage="Explore the NFTs"
      />
    </div>}
    </div>
  );
}

export default Section_2;
