import React from "react";
import Nft from "../assets/images/NFT.png";
import logo from "../assets/images/logo.png";
function Home() {
  return (
    <div id="home" className="flex flex-col justify-around">
      <div id="section-1" className="flex mt-20 items-center h-[40pc]">
        <div
          id="side-left"
          className="flex flex-col flex-1 relative z-10 h-full justify-around"
        >
          <h1 className="dark:text-white text-7xl font-semibold leading-tight">
            Explore, Buy and <br /> sell World <br />
          </h1>
          <b className="dark:text-white text-7xl self-start font-semibold leading-tight p-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500 ">
            Best NFTs!
          </b>
          <p className="text-gray-300">
            Non-fungible tokens, or NFTs, are artworks created on the <br />
            blockchain with unique encryption codes <br /> that can be validated
            for ownership.
          </p>
          <div id="buttons" className="flex gap-3">
            <button
              type="button"
              className="py-2.5 px-5  text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
            >
              Explore
            </button>
            <button
              type="button"
              className="py-2.5 px-5  text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-transparent border-2 dark:border-darkBlue-100 dark:text-gray-100 dark:hover:text-white dark:hover:bg-purple-700"
            >
              Explore
            </button>
          </div>
          <div id="stats" className="flex flex-row gap-14">
            <div className="flex flex-col gap-2 justify-between">
              <h2 className="text-white font-semibold text-[2rem]">345+</h2>
              <span className="text-white/70 text-[1rem]">Collections</span>
            </div>
            <div className="flex flex-col gap-2 justify-between">
              <h2 className="text-white font-semibold text-[2rem]">3k+</h2>
              <span className="text-white/70 text-[1rem]">Community</span>
            </div>
            <div className="flex flex-col gap-2 justify-between">
              <h2 className="text-white font-semibold text-[2rem]">1k +</h2>
              <span className="text-white/70 text-[1rem]">Assets</span>
            </div>
          </div>
          <div className="bg z-[-1]  bg-gradient-to-r from-purple-800 to-pink-600 absolute h-96 w-96 blur-[10pc] opacity-[50%]" />
        </div>
        <div
          id="side-right "
          className="flex-1 h-full flex items-center relative justify-center"
        >
          <div className="relative z-10 -skew-x-12">
            <div
              id="float-4"
              style={{ top: "-2pc" }}
              className="absolute -left-10 border-[1px] border-darkBlue-100/20 rounded-2xl backdrop-blur-lg w-[28pc] -z-2 h-[14pc] flex flex-col dark:bg-darkBlue-400/30 p-3 gap-1 items-center justify-start"
            />
            <img src={Nft} className=" relative w-[27pc]" alt="" />
            <div
              id="float-3"
              className="absolute -top-10 -right-6 border-[1px] border-darkBlue-100/20 rounded-2xl backdrop-blur-lg w-44 flex flex-col dark:bg-darkBlue-400/30 p-3 gap-1 items-center justify-start"
            >
              <h2 className="font-semibold text-white">BID NOW !</h2>
              <span className="text-white/60">latest Collections</span>
            </div>
            <div
              id="float-2"
              className="absolute bottom-20 -right-20 border-[1px] border-darkBlue-100/20 rounded-2xl backdrop-blur-lg dark:bg-darkBlue-400/30 p-2 w-48 gap-3 flex justify-start"
            >
              <div className="flex flex-col gap-1">
                <img src={logo} className="w-10" alt="" />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold text-white">CAPi #9383</h2>
                <span className="text-white/60">kunal lo.. </span>
              </div>
            </div>
            <div
              id="float-1"
              className="absolute -bottom-10 -left-14 border-2 border-darkBlue-100/50 rounded-2xl backdrop-blur-lg dark:bg-darkBlue-400/30 bg-gradient-to-t from-darkBlue-100/40 to-darkBlue-500/60 p-3 w-56 flex justify-between"
            >
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold text-white/80">15.43 ETH</h2>
                <span className="text-white/60">laos </span>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold text-white/80">15.43 ETH</h2>
                <span className="text-white/60">laos </span>
              </div>
            </div>
            <div
              id="float-5"
              className="absolute -bottom-20 left-5 border-[1px] border-darkBlue-100/20 rounded-2xl backdrop-blur-lg w-[24pc] -z-10 h-[14pc] flex flex-col dark:bg-darkBlue-400/30 p-3 gap-1 items-center justify-start"
            />
            <div
              id="float-6"
              className="absolute right-0 -bottom-28 border-[1px] border-darkBlue-100/20 rounded-2xl backdrop-blur-lg flex flex-row dark:bg-darkBlue-400/30 p-3 gap-3 items-center justify-start"
            >
              <div className="flex gap-[0.5pc] items-center flex-col">
                <b className="text-sm text-white/90">08</b>
                <span className="text-white/90 text-sm">Hours</span>
              </div>
              <b className=" text-white/90">:</b>
              <div className="flex  gap-[0.5pc] items-center flex-col">
                <b className="text-sm text-white/90">08</b>
                <span className=" text-white/90 text-sm">Minuets</span>
              </div>
              <b className="text-md text-white/90">:</b>
              <div className="flex gap-[0.5pc] items-center flex-col">
                <b className="text-sm text-white/90">08</b>
                <span className="text-white/90 text-sm">Seconds</span>
              </div>
            </div>
          </div>
          <div className="bg z-[1] bg-gradient-to-r from-purple-800 absolute h-64 w-64 blur-[10pc] opacity-[100%]" />
          <div className="h-[10pc] w-44 bg-gradient-to-r from-purple-800 blur-[10pc] absolute right-10 bottom-0 opacity-[20%]" />
        </div>
      </div>
      <div id="section-2" className="flex items-center h-[20pc]">
        <div className="rounded-2xl bg-gradient-to-r from-purple-500 from-10% via-pink-500 via-30% to-darkBlue-600 to-90% w-full p-5 flex h-28 justify-between items-center border-darkBlue-400/90 border-[2px]">
          <h2 className="text-gray-100 font-semibold text-2xl">
            Sell your latest NFT with GigaTrade
          </h2>
          <button
            type="button"
            className=" py-3 px-7 text-md font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
          >
            Explore
          </button>
        </div>
      </div>
      <div id="section-3" className="flex flex-col gap-5  justify-center">
        <div className="flex flex-row justify-between items-center">
          <h1 className="dark:text-white/90 text-4xl">
            Trending{" "}
            <b className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
              NFTs
            </b>
          </h1>
          <div className="relative">
            <h1 id="LiveBidding" className="dark:text-white/90 text-4xl">
              Live Bidding
            </h1>
          </div>
        </div>
        <div className="w-full mt-20 flex justify-between flex-wrap">
          <div className=" transition-all w-[20pc] bg-gradient-to-r from-darkBlue-400 to-darkBlue-300 rounded-lg hover:shadow-lg hover:-translate-y-3 0 p-[4px]">
            <div className="p-4 bg-gradient-to-r from-darkBlue-600 via-darkBlue-400 to-darkBlue-500 rounded-lg flex flex-col gap-5">
              <div className="bg-cover rounded-lg bg-center bg-[url('https://nftix-html.vercel.app/assets/img/images/sebastian-svenson.jpg')] w-auto h-[16pc] border flex items-center justify-center" />
              <div className="flex gap-2 justify-between">
                <img
                  className=" w-14"
                  src="https://nftix-html.vercel.app/assets/img/avatar/avatar2.jpg"
                  alt=""
                />
                <div>
                  <h2 className="text-white/90 font-semibold">
                    Baby doge #2123
                  </h2>
                  <span className="text-white/50">lldlds sdsd</span>
                </div>
                <img
                  className="rounded-full w-10 h-10"
                  src="https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png"
                  alt=""
                />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-[0.1pc] flex-col">
                  <b className="dark:text-white/90">25.5 ETH</b>
                  <span className="dark:text-white/50">Bid Price</span>
                </div>
                <div className="flex gap-[0.1pc] flex-col">
                  <b className="dark:text-white/90">21.5 ETH</b>
                  <span className="dark:text-white/50">Offer for</span>
                </div>{" "}
                <div className="flex gap-[0.1pc] flex-col">
                  <b className="dark:text-white/90">1334 $</b>
                  <span className="dark:text-white/50">in Doller</span>
                </div>
              </div>
              <button className=" items-center justify-center py-3 px-7 text-md font-medium flex  gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-purple-400">
                Collect Now
              </button>
            </div>
          </div>
          <div className=" transition-all  w-[20pc] bg-gradient-to-r from-darkBlue-400 to-darkBlue-300 rounded-lg hover:shadow-lg hover:-translate-y-3 0 p-[4px]">
            <div className="p-4 bg-gradient-to-r from-darkBlue-600 via-darkBlue-400 to-darkBlue-500 rounded-lg flex flex-col gap-5">
              <div className="bg-cover rounded-lg bg-center bg-[url('https://nftix-html.vercel.app/assets/img/images/simon-lee-ynm.jpg')] w-auto h-[16pc] border flex items-center justify-center" />
              <div className="flex gap-2 justify-between">
                <img
                  className=" w-14"
                  src="https://nftix-html.vercel.app/assets/img/avatar/avatar2.jpg"
                  alt=""
                />
                <div>
                  <h2 className="text-white/90 font-semibold">
                    Baby doge #2123
                  </h2>
                  <span className="text-white/50">lldlds sdsd</span>
                </div>
                <img
                  className="rounded-full w-10 h-10"
                  src="https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png"
                  alt=""
                />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-[0.1pc] flex-col">
                  <b className="dark:text-white/90">25.5 ETH</b>
                  <span className="dark:text-white/50">Bid Price</span>
                </div>
                <div className="flex gap-[0.1pc] flex-col">
                  <b className="dark:text-white/90">21.5 ETH</b>
                  <span className="dark:text-white/50">Offer for</span>
                </div>{" "}
                <div className="flex gap-[0.1pc] flex-col">
                  <b className="dark:text-white/90">1334 $</b>
                  <span className="dark:text-white/50">in Doller</span>
                </div>
              </div>
              <button className=" items-center justify-center py-3 px-7 text-md font-medium flex  gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-purple-400">
                Collect Now
              </button>
            </div>
          </div>{" "}
          <div className=" transition-all  w-[20pc] bg-gradient-to-r from-darkBlue-400 to-darkBlue-300 rounded-lg hover:shadow-lg hover:-translate-y-3 0 p-[4px]">
            <div className="p-4 bg-gradient-to-r from-darkBlue-600 via-darkBlue-400 to-darkBlue-500 rounded-lg flex flex-col gap-5">
              <div className="bg-cover rounded-lg bg-center bg-[url('https://nftix-html.vercel.app/assets/img/images/sebastian-svenson.jpg')] w-auto h-[16pc] border flex items-center justify-center" />
              <div className="flex gap-2 justify-between">
                <img
                  className=" w-14"
                  src="https://nftix-html.vercel.app/assets/img/avatar/avatar2.jpg"
                  alt=""
                />
                <div>
                  <h2 className="text-white/90 font-semibold">
                    Baby doge #2123
                  </h2>
                  <span className="text-white/50">lldlds sdsd</span>
                </div>
                <img
                  className="rounded-full w-10 h-10"
                  src="https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png"
                  alt=""
                />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-[0.1pc] flex-col">
                  <b className="dark:text-white/90">25.5 ETH</b>
                  <span className="dark:text-white/50">Bid Price</span>
                </div>
                <div className="flex gap-[0.1pc] flex-col">
                  <b className="dark:text-white/90">21.5 ETH</b>
                  <span className="dark:text-white/50">Offer for</span>
                </div>{" "}
                <div className="flex gap-[0.1pc] flex-col">
                  <b className="dark:text-white/90">1334 $</b>
                  <span className="dark:text-white/50">in Doller</span>
                </div>
              </div>
              <button className=" items-center justify-center py-3 px-7 text-md font-medium flex  gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-purple-400">
                Collect Now
              </button>
            </div>
          </div>{" "}
          <div className=" transition-all  w-[20pc] bg-gradient-to-r from-darkBlue-400 to-darkBlue-300 rounded-lg hover:shadow-lg hover:-translate-y-3 0 p-[4px]">
            <div className="p-4 bg-gradient-to-r from-darkBlue-600 via-darkBlue-400 to-darkBlue-500 rounded-lg flex flex-col gap-5">
              <div className="bg-cover rounded-lg bg-center bg-[url('https://nftix-html.vercel.app/assets/img/images/hans-eiskonen.jpg')] w-auto h-[16pc] border flex items-center justify-center" />
              <div className="flex gap-2 justify-between">
                <img
                  className=" w-14"
                  src="https://nftix-html.vercel.app/assets/img/avatar/avatar2.jpg"
                  alt=""
                />
                <div>
                  <h2 className="text-white/90 font-semibold">
                    Baby doge #2123
                  </h2>
                  <span className="text-white/50">lldlds sdsd</span>
                </div>
                <img
                  className="rounded-full w-10 h-10"
                  src="https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png"
                  alt=""
                />
              </div>
              <div className="flex justify-between">
                <div className="flex gap-[0.1pc] flex-col">
                  <b className="dark:text-white/90">25.5 ETH</b>
                  <span className="dark:text-white/50">Bid Price</span>
                </div>
                <div className="flex gap-[0.1pc] flex-col">
                  <b className="dark:text-white/90">21.5 ETH</b>
                  <span className="dark:text-white/50">Offer for</span>
                </div>{" "}
                <div className="flex gap-[0.1pc] flex-col">
                  <b className="dark:text-white/90">1334 $</b>
                  <span className="dark:text-white/50">in Doller</span>
                </div>
              </div>
              <button className=" items-center justify-center py-3 px-7 text-md font-medium flex  gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-purple-400">
                Collect Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        id="section-4"
        className="flex justify-center gap-20 flex-col h-[34pc] w-full"
      >
        <h1 className="dark:text-white/90 text-4xl ">
          Create and Sell Your{" "}
          <b className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
            NFTs
          </b>
        </h1>
        <div className="flex justify-between w-full p-4">
          <div
            id="nft-steps"
            className="hover:outline-darkBlue-100 transition-all active:scale-95 hover:rotate-2 cursor-pointer outline-2 hover:outline-double  bg-darkBlue-600 rounded-lg w-[20pc] p-5 flex flex-col gap-4"
          >
            <div className="flex justify-between relative">
              <span className="text-white/50">Step - 1</span>
              <img
                className="w-20 absolute right-0 -translate-y-10"
                src="https://rainbowit.net/html/nuron/assets/images/icons/shape-7.png"
                alt=""
              />
            </div>
            <h2 className="dark:text-white/90 text-lg">Set up your wallet</h2>
            <p className="dark:text-white/50 text-lg">
              Powerful features and inclusions, which makes Neuron standout,
              easily customizable and scalable.
            </p>
          </div>
          <div
            id="nft-steps"
            className="hover:outline-darkBlue-100 transition-all active:scale-95 hover:rotate-2 cursor-pointer outline-2 hover:outline-double  bg-darkBlue-600 rounded-lg w-[20pc] p-5 flex flex-col gap-4"
          >
            <div className="flex justify-between relative">
              <span className="text-white/50">Step - 2</span>
              <img
                className="w-20 absolute right-0 -translate-y-10"
                src="https://rainbowit.net/html/nuron/assets/images/icons/shape-1.png"
                alt=""
              />
            </div>
            <h2 className="dark:text-white/90 text-lg">
              Create your collection
            </h2>
            <p className="dark:text-white/50 text-lg">
              A great collection of beautiful website templates for your need.
              Choose the best suitable template.
            </p>
          </div>
          <div
            id="nft-steps"
            className="hover:outline-darkBlue-100 transition-all active:scale-95 hover:rotate-2 cursor-pointer outline-2 hover:outline-double  bg-darkBlue-600 rounded-lg w-[20pc] p-5 flex flex-col gap-4"
          >
            <div className="flex justify-between relative">
              <span className="text-white/50">Step - 3</span>
              <img
                className="w-20 absolute right-0 -translate-y-10"
                src="https://rainbowit.net/html/nuron/assets/images/icons/shape-5.png"
                alt=""
              />
            </div>
            <h2 className="dark:text-white/90 text-lg">Add your NFT's</h2>
            <p className="dark:text-white/50 text-lg">
              We've made the template fully responsive, so it looks great on all
              devices: desktop, tablets and.
            </p>
          </div>
          <div
            id="nft-steps"
            className="hover:outline-darkBlue-100 transition-all active:scale-95 hover:rotate-2 cursor-pointer outline-2 hover:outline-double  bg-darkBlue-600 rounded-lg w-[20pc] p-5 flex flex-col gap-4"
          >
            <div className="flex justify-between relative">
              <span className="text-white/50">Step - 4</span>
              <img
                className="w-20 absolute right-0 -translate-y-10"
                src="https://rainbowit.net/html/nuron/assets/images/icons/shape-6.png"
                alt=""
              />
            </div>
            <h2 className="dark:text-white/90 text-lg">Sell Your NFT's</h2>
            <p className="dark:text-white/50 text-lg">
              I throw myself down among the tall grass by the stream as I lie
              close to the earth NFT's.
            </p>
          </div>
        </div>
      </div>
      <div id="section-5" className="flex gap-20 flex-col h-[20pc] w-full">
        <h1 className="dark:text-white/90 text-4xl ">
          Top Seller in{" "}
          <b className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
            All Time
          </b>
        </h1>
        <div className="flex flex-col gap-10">
          <div className="flex w-full justify-between">
            <div
              id="user-box"
              className="flex justify-between items-center w-[13pc] "
            >
              <img
                className="w-14 rounded-full outline-darkBlue-200 outline-double "
                src="https://rainbowit.net/html/nuron/assets/images/client/client-12.png"
                alt=""
              />
              <div>
                <h2 className=" cursor-pointer transition-all text-white/90 font-semibold text-lg hover:text-purple-600">
                  Baby doge{" "}
                </h2>
                <span className="text-white/50 text-sm">$2500,000</span>
              </div>
              <h3 className="text-white/10 font-semibold text-5xl">1</h3>
            </div>
            <div
              id="user-box"
              className="flex justify-between items-center w-[13pc] "
            >
              <img
                className="w-14 rounded-full outline-darkBlue-200 outline-double "
                src="https://rainbowit.net/html/nuron/assets/images/client/client-2.png"
                alt=""
              />
              <div>
                <h2 className=" cursor-pointer transition-all text-white/90 font-semibold text-lg hover:text-purple-600">
                  Ms. Parkline{" "}
                </h2>
                <span className="text-white/50 text-sm">$3500,000</span>
              </div>
              <h3 className="text-white/10 font-semibold text-5xl">2</h3>
            </div>{" "}
            <div
              id="user-box"
              className="flex justify-between items-center w-[13pc] "
            >
              <img
                className="w-14 rounded-full outline-darkBlue-200 outline-double "
                src="https://rainbowit.net/html/nuron/assets/images/client/client-3.png"
                alt=""
              />
              <div>
                <h2 className=" cursor-pointer transition-all text-white/90 font-semibold text-lg hover:text-purple-600">
                  Methods{" "}
                </h2>
                <span className="text-white/50 text-sm">$1500,000</span>
              </div>
              <h3 className="text-white/10 font-semibold text-5xl">3</h3>
            </div>{" "}
            <div
              id="user-box"
              className="flex justify-between items-center w-[13pc] "
            >
              <img
                className="w-14 rounded-full outline-darkBlue-200 outline-double "
                src="https://rainbowit.net/html/nuron/assets/images/client/client-4.png"
                alt=""
              />
              <div>
                <h2 className=" cursor-pointer transition-all text-white/90 font-semibold text-lg hover:text-purple-600">
                  Jone sone{" "}
                </h2>
                <span className="text-white/50 text-sm">$2500,000</span>
              </div>
              <h3 className="text-white/10 font-semibold text-5xl">4</h3>
            </div>{" "}
            <div
              id="user-box"
              className="flex justify-between items-center w-[13pc] "
            >
              <img
                className="w-14 rounded-full outline-darkBlue-200 outline-double "
                src="https://rainbowit.net/html/nuron/assets/images/client/client-5.png"
                alt=""
              />
              <div>
                <h2 className=" cursor-pointer transition-all text-white/90 font-semibold text-lg hover:text-purple-600">
                  Siddhart{" "}
                </h2>
                <span className="text-white/50 text-sm">$2500,000</span>
              </div>
              <h3 className="text-white/10 font-semibold text-5xl">5</h3>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div
              id="user-box"
              className="flex justify-between items-center w-[13pc] "
            >
              <img
                className="w-14 rounded-full outline-darkBlue-200 outline-double "
                src="https://rainbowit.net/html/nuron/assets/images/client/client-6.png"
                alt=""
              />
              <div>
                <h2 className=" cursor-pointer transition-all text-white/90 font-semibold text-lg hover:text-purple-600">
                  Sobuj Mk{" "}
                </h2>
                <span className="text-white/50 text-sm">$2500,000</span>
              </div>
              <h3 className="text-white/10 font-semibold text-5xl">6</h3>
            </div>{" "}
            <div
              id="user-box"
              className="flex justify-between items-center w-[13pc] "
            >
              <img
                className="w-14 rounded-full outline-darkBlue-200 outline-double "
                src="https://rainbowit.net/html/nuron/assets/images/client/client-7.png"
                alt=""
              />
              <div>
                <h2 className=" cursor-pointer transition-all text-white/90 font-semibold text-lg hover:text-purple-600">
                  Trodband{" "}
                </h2>
                <span className="text-white/50 text-sm">$2500,000</span>
              </div>
              <h3 className="text-white/10 font-semibold text-5xl">7</h3>
            </div>{" "}
            <div
              id="user-box"
              className="flex justify-between items-center w-[13pc] "
            >
              <img
                className="w-14 rounded-full outline-darkBlue-200 outline-double "
                src="https://rainbowit.net/html/nuron/assets/images/client/client-8.png"
                alt=""
              />
              <div>
                <h2 className=" cursor-pointer transition-all text-white/90 font-semibold text-lg hover:text-purple-600">
                  Yash{" "}
                </h2>
                <span className="text-white/50 text-sm">$500,000</span>
              </div>
              <h3 className="text-white/10 font-semibold text-5xl">8</h3>
            </div>{" "}
            <div
              id="user-box"
              className="flex justify-between items-center w-[13pc] "
            >
              <img
                className="w-14 rounded-full outline-darkBlue-200 outline-double "
                src="https://rainbowit.net/html/nuron/assets/images/client/client-9.png"
                alt=""
              />
              <div>
                <h2 className=" cursor-pointer transition-all text-white/90 font-semibold text-lg hover:text-purple-600">
                  YASHKIB{" "}
                </h2>
                <span className="text-white/50 text-sm">$20,000</span>
              </div>
              <h3 className="text-white/10 font-semibold text-5xl">9</h3>
            </div>{" "}
            <div
              id="user-box"
              className="flex justify-between items-center w-[13pc] "
            >
              <img
                className="w-14 rounded-full outline-darkBlue-200 outline-double "
                src="https://rainbowit.net/html/nuron/assets/images/client/client-10.png"
                alt=""
              />
              <div>
                <h2 className=" cursor-pointer transition-all text-white/90 font-semibold text-lg hover:text-purple-600">
                  Brodband{" "}
                </h2>
                <span className="text-white/50 text-sm">$1,000</span>
              </div>
              <h3 className="text-white/10 font-semibold text-5xl">10</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
