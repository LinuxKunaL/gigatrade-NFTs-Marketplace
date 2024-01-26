import React from "react";

function Section_4() {
  return (
    <div
      id="section-4"
      className="flex mt-10 justify-center gap-7 lg:gap-20 flex-col h-full lg:h-[34pc] w-full"
    >
      <h1 className="dark:text-white/80 text-2xl font-semibold sm:text-4xl">
        Create and Sell Your{" "}
        <b className="border-2 sm:text-2xl text-lg lg:shadow-none font-semibold lg:shadow-purple-800/80 sm:border-0 rounded-md shadow-lg shadow-purple-800/80 p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
          NFTs
        </b>
      </h1>
      <div className="flex justify-between w-full flex-wrap gap-7 p-4">
        <div
          id="nft-steps"
          className="hover:outline-darkBlue-100 flex-auto transition-all active:scale-95 hover:rotate-2 cursor-pointer outline-2 hover:outline-double bg-darkBlue-600 rounded-lg w-[20pc] p-5 flex flex-col gap-4"
        >
          <div className="flex justify-between relative">
            <span className="text-white/50">Step - 1</span>
            <img
              className="w-16 lg:w-20 absolute right-0 -translate-y-10"
              src="https://rainbowit.net/html/nuron/assets/images/icons/shape-7.png"
              alt=""
            />
          </div>
          <h2 className="dark:text-white/90  sm:text-lg">Set up your wallet</h2>
          <p className="dark:text-white/50 sm:text-lg">
            Powerful features and inclusions, which makes Neuron standout,
            easily customizable and scalable.
          </p>
        </div>
        <div
          id="nft-steps"
          className="hover:outline-darkBlue-100 flex-auto transition-all active:scale-95 hover:rotate-2 cursor-pointer outline-2 hover:outline-double  bg-darkBlue-600 rounded-lg w-[20pc] p-5 flex flex-col gap-4"
        >
          <div className="flex justify-between relative">
            <span className="text-white/50">Step - 2</span>
            <img
              className="w-16 lg:w-20 absolute right-0 -translate-y-10"
              src="https://rainbowit.net/html/nuron/assets/images/icons/shape-1.png"
              alt=""
            />
          </div>
          <h2 className="dark:text-white/90 sm:text-lg">
            Create your collection
          </h2>
          <p className="dark:text-white/50 sm:text-lg">
            A great collection of beautiful website templates for your need.
            Choose the best suitable template.
          </p>
        </div>
        <div
          id="nft-steps"
          className="hover:outline-darkBlue-100 flex-auto transition-all active:scale-95 hover:rotate-2 cursor-pointer outline-2 hover:outline-double  bg-darkBlue-600 rounded-lg w-[20pc] p-5 flex flex-col gap-4"
        >
          <div className="flex justify-between relative">
            <span className="text-white/50">Step - 3</span>
            <img
              className="w-16 lg:w-20 absolute right-0 -translate-y-10"
              src="https://rainbowit.net/html/nuron/assets/images/icons/shape-5.png"
              alt=""
            />
          </div>
          <h2 className="dark:text-white/90 sm:text-lg">Add your NFT's</h2>
          <p className="dark:text-white/50 sm:text-lg">
            We've made the template fully responsive, so it looks great on all
            devices: desktop, tablets and.
          </p>
        </div>
        <div
          id="nft-steps"
          className="hover:outline-darkBlue-100  flex-auto transition-all active:scale-95 hover:rotate-2 cursor-pointer outline-2 hover:outline-double  bg-darkBlue-600 rounded-lg w-[20pc] p-5 flex flex-col gap-4"
        >
          <div className="flex justify-between relative">
            <span className="text-white/50">Step - 4</span>
            <img
              className="w-16 lg:w-20 absolute right-0 -translate-y-10"
              src="https://rainbowit.net/html/nuron/assets/images/icons/shape-6.png"
              alt=""
            />
          </div>
          <h2 className="dark:text-white/90 sm:text-lg">Sell Your NFT's</h2>
          <p className="dark:text-white/50 sm:text-lg">
            I throw myself down among the tall grass by the stream as I lie
            close to the earth NFT's.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section_4;
