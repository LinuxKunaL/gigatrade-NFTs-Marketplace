import React, { useState, useEffect } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Product404 from "../../../../components/UiComponents/Product404";

import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ProductNFT } from "../../../../components/UiComponents/ProductNFT";
import { fetchAllNFTs } from "../../../../apis/FetchNFTs";

function TrendingNFts() {
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

  var Change;
  return (
    <div className="text-white/90 text-sm sm:text-base sm:gap-10 gap-5 flex flex-col font-semibold overflow-hidden w-full">
      <h2 className="sm:text-2xl text-lg">Trending NFTs</h2>
      {TradingNFTs.length > 0 ? (
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
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              spaceBetween={20}
              grabCursor={true}
              onBeforeInit={(swiper) => (Change = swiper)}
              modules={[Autoplay]}
            >
              {TradingNFTs.map((item, index) => (
                <SwiperSlide className="!flex justify-center items-center">
                  <ProductNFT
                    key={index}
                    className="w-full !h-[30pc] xl:!h-[25pc]"
                    link="/nft/"
                    button="Buy"
                    data={item}
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
      ) : (
        <Product404
          message="Trending NFTs not found "
          subMessage="create a NFT"
        />
      )}
    </div>
  );
}

export default TrendingNFts;
