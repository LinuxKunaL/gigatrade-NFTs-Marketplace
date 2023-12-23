import React from "react";
import Nft from "../../assets/images/NFT.png";
import iM from "../../assets/images/Group.png";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import eth from "../../assets/images/eth.svg";
import nft from "../../assets/images/nft.svg";
import metaHome from "../../assets/images/metamaskHome.svg";
import { ProductNFT } from "../../components/UiComponents/ProductNFT";

function Home() {
  document.addEventListener("mousemove", (e) => {
    var items = document.querySelectorAll("h1,#NFTimage div");
    for (let index = 0; index < items.length; index++) {
      items[index].style.transform = `translateY(${
        e.clientY / 100
      }px) translateX(${(items[index].dataset.move * e.clientX) / 100}px)`;
    }
  });

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
      img: "https://i.seadn.io/s/raw/files/db06245a1a357a3c20af708a3621c7ab.png?auto=format&dpr=1&w=256",
    },
    {
      img: "https://i.seadn.io/s/raw/files/db06245a1a357a3c20af708a3621c7ab.png?auto=format&dpr=1&w=256",
    },
  ];

  return (
    <div id="home" className="flex flex-col justify-around px-4">
      <div
        id="section-1"
        className="flex mt-20 items-center lg:h-[40pc] gap-5 lg:flex-row h-full flex-col"
      >
        <div
          id="side-left"
          className="flex flex-col sm:px-0 flex-1 relative z-10 h-full justify-around gap-6 lg:gap-0 lg:text-start text-center"
        >
          <img
            src={eth}
            className=" xs:hidden block absolute left-[70%] -z-10 w-14 top-[-2pc] rotate-12"
            alt=""
          />

          <img
            src={nft}
            className=" xs:hidden block absolute left-[70%] -z-10 w-[6pc] top-[4pc] rotate-12"
            alt=""
          />

          <img
            src={metaHome}
            className=" xs:hidden block absolute  w-[6pc] top-[-4pc] -z-10 -rotate-12"
            alt=""
          />
          <h1 className="dark:text-white text-4xl sm:text-7xl text-gray-900/90 font-semibold leading-tight lg:text-start text-center">
            Explore, Buy and <br /> sell World <br />
          </h1>
          <b
            className="dark:text-white text-2xl sm:text-7xl lg:border-0 lg:shadow-none lg:shadow-purple-800/80 border-2 shadow-lg shadow-purple-800/80
          rounded-lg text-white/90 self-center lg:self-start font-semibold leading-tight p-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500"
          >
            Best NFTs!
          </b>
          <p className="dark:text-gray-300 text-sm sm:text-base text-gray-900/90">
            Non-fungible tokens, or NFTs, are artworks created on the{" "}
            <br className="sm:flex hidden" />
            blockchain with unique encryption codes{" "}
            <br className="sm:flex hidden" /> that can be validated for
            ownership.
          </p>
          <div
            id="buttons"
            className="flex gap-3 lg:self-start self-center w-full sm:w-max "
          >
            <Link
              type="button"
              className="py-2.5 px-5 flex-1  text-sm font-medium flex items-center gap-4 justify-center text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white bg-gradient-to-tr from-purple-800 to-purple-500 dark:hover:bg-purple-700 text-white/90"
              to="/explore"
            >
              Shop
            </Link>
            <Link
              className="py-2.5 px-5 flex-1 justify-center text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none rounded-lg hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 bg-darkBlue-400/90 dark:text-gray-100 dark:hover:text-white hover:bg-gradient-to-tr from-pink-800 to-pink-500 dark:hover:bg-pink-700"
              to="/explore/collections"
            >
              Collections
            </Link>
          </div>
          <div
            id="stats"
            className="flex flex-row justify-evenly lg:justify-start lg:gap-14"
          >
            <div className="flex flex-col gap-2 justify-between">
              <h2 className="dark:text-white text-gray-800/90 font-semibold text-xl sm:text-[2rem]">
                345+
              </h2>
              <span className="dark:text-white/70 text-gray-700/90 text-sm sm:text-[1rem]">
                Collections
              </span>
            </div>
            <div className="flex flex-col gap-2 justify-between">
              <h2 className="dark:text-white text-gray-800/90 font-semibold text-xl sm:text-[2rem]">
                3k+
              </h2>
              <span className="dark:text-white/70 text-gray-700/90 text-sm sm:text-[1rem]">
                Community
              </span>
            </div>
            <div className="flex flex-col gap-2 justify-between">
              <h2 className="dark:text-white text-gray-800/90 font-semibold text-xl sm:text-[2rem]">
                1k +
              </h2>
              <span className="dark:text-white/70 text-gray-700/90 text-sm sm:text-[1rem]">
                Assets
              </span>
            </div>
          </div>
          <div className="bg z-[-1] dark:bg-gradient-to-r lg:from-purple-800 to-pink-600 absolute h-96 w-96 blur-[10pc] bg-purple-600/20 opacity-[50%]" />
        </div>
        <div
          id="side-right "
          className="flex-1 h-[29pc] mb-10 flex lg:items-center items-start relative justify-center"
        >
          <div
            id="NFTimage"
            className="relative z-10 scale-[75%] sm:scale-[100%] -skew-sx-12"
          >
            <div
              data-move="1"
              id="float-4"
              style={{ top: "-2pc" }}
              className="absolute -left-10 border-[1px] border-darkBlue-100/20 rounded-2xl backdrop-blur-lg  w-[17pc] -z-2 h-[9pc] flex flex-col dark:bg-darkBlue-400/30 p-3 gap-1 items-center justify-start"
            />
            <div data-move="2">
              <img src={Nft} className=" relative w-[27pc]" alt="" />
            </div>
            <div
              data-move="3"
              id="float-3"
              className="absolute -top-10 sm:-right-6 -right-12 border-[1px] border-darkBlue-100/20 rounded-2xl backdrop-blur-lg w-44 flex flex-col dark:bg-darkBlue-400/30 p-3 gap-1 items-center justify-start"
            >
              <h2 className="font-semibold text-white">BID NOW !</h2>
              <span className="text-white/60">latest Collections</span>
            </div>
            <div
              data-move="-1"
              id="float-2"
              className="absolute sm:bottom-20 bottom-16 sm:-right-20 -right-24 border-[1px] border-darkBlue-100/20 rounded-2xl backdrop-blur-lg dark:bg-darkBlue-400/30 p-2 w-48 gap-3  flex justify-start"
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
              data-move="-1"
              id="float-1"
              className="absolute sm:-bottom-10 -bottom-8 -left-14 border-[1px] border-darkBlue-100/50 rounded-2xl backdrop-blur-lg dark:bg-darkBlue-400/30  p-3 w-56 flex justify-between"
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
              data-move="4"
              id="float-5"
              className="absolute sm:-bottom-20 -bottom-16 left-5 border-[1px] border-darkBlue-100/20 rounded-2xl backdrop-blur-lg w-[24pc] -z-10 h-[14pc] flex flex-col dark:bg-darkBlue-400/30 p-3 gap-1 items-center justify-start"
            />
            <div
              data-move="1"
              id="float-6"
              className="absolute -right-10 sm:right-0 -bottom-28  border-[1px] border-darkBlue-100/20 rounded-2xl backdrop-blur-lg flex flex-row dark:bg-darkBlue-400/30 p-3 gap-3 items-center justify-start"
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
      <div id="section-2" className="hidden items-center h-[20pc] sm:flex">
        <div className="rounded-2xl bg-gradient-to-r from-purple-500 from-10% via-pink-500 via-30% to-darkBlue-600 to-90% w-full p-2 sm:p-5 flex h-max sm:h-28 justify-between items-center border-darkBlue-400/90 border-[1px] sm:border-[2px]">
          <h2 className="text-gray-100 font-semibold sm:text-2xl">
            Sell your latest NFT with GigaTrade
          </h2>
          <button
            type="button"
            className=" py-3 px-7 text-sm sm:text-lg font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
          >
            Explore
          </button>
        </div>
      </div>
      <div
        id="section-3"
        className="flex flex-col gap-5 mt-14 lg:mt-0 justify-center"
      >
        <div className="flex sm:flex-row flex-col gap-4 justify-between items-center">
          <h1 className="dark:text-white/90 text-2xl sm:text-4xl">
            Trending{" "}
            <b className="border-2 sm:text-2xl text-lg lg:shadow-none lg:shadow-purple-800/80 sm:border-0 rounded-md shadow-lg shadow-purple-800/80 p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
              NFTs
            </b>
          </h1>
          <div className="relative">
            <h1
              id="LiveBidding"
              className="dark:text-white/90 text-2xl sm:text-4xl"
            >
              Live Bidding
            </h1>
          </div>
        </div>
        <div className="w-full  mt-1 sm:mt-20 flex justify-center gap-10 sm:justify-between flex-wrap">
          {k.map((data, index) => (
            <ProductNFT
              key={index}
              className="xl:!flex-initial"
              data={data}
            />
            // <Link
            //   to="/nft?info=details"
            //   key={index}
            //   className="transition-all w-[17pc] bg-gradient-to-r from-darkBlue-500 to-darkBlue-100 rounded-lg hover:shadow-lg hover:-translate-y-3 0 p-[1px] cursor-pointer"
            // >
            //   <div className="p-3 bg-gradient-to-r from-darkBlue-600 via-darkBlue-500 to-darkBlue-500 rounded-lg flex flex-col gap-5">
            //     <div
            //       style={{ backgroundImage: `url(${data.img})` }}
            //       className="bg-cover rounded-lg bg-center  bg-[url('https://nftix-html.vercel.app/assets/img/images/sebastian-svenson.jpg')] h-[12pc] w-full flex items-center justify-center"
            //     />
            //     <div className="flex gap-2 items-center justify-between">
            //       <img
            //         className="w-11 rounded-md bg-darkBlue-300 h-11"
            //         src="https://nftix-html.vercel.app/assets/img/avatar/avatar2.jpg"
            //         alt="error in image"
            //         onError={(e) =>
            //           (e.target.src =
            //             "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=")
            //         }
            //       />
            //       <div className="flex flex-col gap-1">
            //         <h2 className="text-white/90 rounded-md w-[9pc] h-[1.5pc]  line-clamp-1 text-sm font-semibold">
            //           Baby doge #2123ssssssssssss
            //         </h2>
            //         <span className="text-white/50 text-sm line-clamp-1 rounded-md  w-[6pc] h-[1.5pc]">
            //           lldlds sdsd
            //         </span>
            //       </div>
            //       <img
            //         className="rounded-full w-7 h-7 0"
            //         src="https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png"
            //         alt="error in image"
            //       />
            //     </div>
            //     <div className="flex justify-between text-sm">
            //       <div className="flex gap-[0.4pc] flex-col">
            //         <b className="dark:text-white/90 w-[4pc] h-[1.4pc] rounded-sm">
            //           25.5 ETH
            //         </b>
            //         <span className="dark:text-white/50 w-[3.7pc] h-[1.4pc] rounded-sm">
            //           Bid Price
            //         </span>
            //       </div>
            //       <div className="flex gap-[0.4pc] flex-col">
            //         <b className="dark:text-white/90 w-[4pc] h-[1.4pc] rounded-sm">
            //           21.5 ETH
            //         </b>
            //         <span className="dark:text-white/50 w-[3.7pc] h-[1.4pc]rounded-sm">
            //           Offer for
            //         </span>
            //       </div>{" "}
            //       <div className="flex gap-[0.4pc] flex-col">
            //         <b className="dark:text-white/90 w-[4pc] h-[1.4pc] rounded-sm">
            //           1334 $
            //         </b>
            //         <span className="dark:text-white/50 w-[3.7pc] h-[1.4pc]rounded-sm">
            //           in Doller
            //         </span>
            //       </div>
            //     </div>
            //     <button className=" transition-all items-center justify-center py-3 px-7 text-sm font-medium flex  gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white bg-gradient-to-r from-purple-800 to-purple-400 hover:from-purple-800 hover:to-purple-600 active:from-purple-600 active:to-purple-700">
            //       Collect Now
            //     </button>
            //   </div>
            // </Link>
          ))}
        </div>
      </div>
      <div
        id="section-4"
        className="flex mt-10 justify-center gap-7 lg:gap-20 flex-col h-full lg:h-[34pc] w-full"
      >
        <h1 className="dark:text-white/90 text-2xl sm:text-4xl">
          Create and Sell Your{" "}
          <b className="border-2 sm:text-2xl text-lg lg:shadow-none lg:shadow-purple-800/80 sm:border-0 rounded-md shadow-lg shadow-purple-800/80 p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
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
            <h2 className="dark:text-white/90  sm:text-lg">
              Set up your wallet
            </h2>
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
      <div
        id="section-5"
        className="flex mt-5 gap-6 lg:gap-20 flex-col  lg:h-[20pc] w-full"
      >
        <h1 className="dark:text-white/90 text-2xl sm:text-4xl">
          Top Seller in{" "}
          <b className="border-2 sm:text-2xl text-lg lg:shadow-none lg:shadow-purple-800/80 sm:border-0 rounded-md shadow-lg shadow-purple-800/80 p-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-500">
            All Time
          </b>
        </h1>
        <div className="flex flex-col gap-10 flex-wrap">
          <div className="flex w-full justify-between gap-4 flex-wrap">
            <div
              id="user-box"
              className="flex justify-between items-center w-full sm:w-[13pc]"
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
              className="flex justify-between items-center w-full sm:w-[13pc] "
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
              className="flex justify-between items-center w-full sm:w-[13pc] "
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
              className="flex justify-between items-center w-full sm:w-[13pc] "
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
              className="flex justify-between items-center w-full sm:w-[13pc] "
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
          <div className="flex w-full justify-between gap-4 flex-wrap">
            <div
              id="user-box"
              className="flex justify-between items-center w-full sm:w-[13pc] "
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
              className="flex justify-between items-center w-full sm:w-[13pc] "
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
              className="flex justify-between items-center w-full sm:w-[13pc] "
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
              className="flex justify-between items-center w-full sm:w-[13pc] "
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
              className="flex justify-between items-center w-full sm:w-[13pc] "
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
