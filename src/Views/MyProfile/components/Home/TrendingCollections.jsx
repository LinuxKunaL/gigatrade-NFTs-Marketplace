import React, { useState, useEffect } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ProductCollection } from "../../../../components/UiComponents/ProductCollection";
import { getCollections } from "../../../../apis/Collections.apis";
import Product404 from "../../../../components/UiComponents/Product404";

import "swiper/css";

function TrendingCollections() {
  var Change;

  const [TradingCollection, setTradingCollection] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const response = await getCollections("", "", 7);
      setTradingCollection(response);
      try {
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, []);
  return (
    <div className="text-white/90 text-2xl gap-5 flex flex-col font-semibold">
      <h2 className="sm:text-2xl text-lg">Trending Collections</h2>
      {TradingCollection.length > 0 ? (
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
              {TradingCollection.map((item, index) => (
                <SwiperSlide>
                  <ProductCollection
                    link={"/collection/"}
                    kay={index}
                    item={item}
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
          message="Trending Collections not found "
          subMessage="create a collections"
        />
      )}
    </div>
  );
}

export default TrendingCollections;
