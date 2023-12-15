import React from "react";
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
function FavoriteNFTs() {
  return (
    <div className="text-white/90 text-2xl gap-10 flex flex-col font-semibold overflow-hidden w-full">
      <h2>Favorite NFTs</h2>
      <div className="flex flex-row justify-evenly flex-wrap gap-5">
        {k.map((i) => (
          <div className="transition-all w-[16pc] bg-gradient-to-r from-darkBlue-400 to-darkBlue-300 rounded-lg hover:shadow-lg hover:-translate-y-3 0 p-[1px] cursor-pointer">
            <div className="p-3 bg-gradient-to-r from-darkBlue-600 via-darkBlue-400 to-darkBlue-500 rounded-lg flex flex-col gap-5">
              <div
                style={{ backgroundImage: `url(${i.img})` }}
                className="bg-cover rounded-lg bg-center bg-[url('https://nftix-html.vercel.app/assets/img/images/sebastian-svenson.jpg')] h-[12pc] flex items-center justify-center"
              />
              <div className="flex gap-2 items-center justify-between">
                <img
                  className="w-11 h-11"
                  src="https://nftix-html.vercel.app/assets/img/avatar/avatar2.jpg"
                  alt=""
                />
                <div>
                  <h2 className="text-white/90 text-sm font-semibold">
                    Baby doge #2123
                  </h2>
                  <span className="text-white/50 text-sm">lldlds sdsd</span>
                </div>
                <img
                  className="rounded-full w-7 h-7"
                  src="https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png"
                  alt=""
                />
              </div>
              <div className="flex justify-between text-sm">
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
              <button className=" items-center justify-center py-3 px-7 text-sm font-medium flex  gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white bg-gradient-to-r from-purple-800 to-purple-400 hover:from-purple-800 hover:to-purple-600 active:from-purple-600 active:to-purple-700">
                Collect Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteNFTs;
