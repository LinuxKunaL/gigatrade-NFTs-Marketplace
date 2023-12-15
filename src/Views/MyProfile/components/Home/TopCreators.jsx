import React from "react";

function TopCreators() {
  return (
    <div className="dark:bg-darkBlue-600 p-5 flex flex-col gap-2 rounded-lg">
      <h3 className=" py-5 px-3 font-semibold dark:text-white/90 text-2xl">
        Top Creators
      </h3>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-2 items-center">
            <span className="dark:text-white/80 font-semibold">1.</span>
            <img
              className="rounded-2xl"
              src="https://opne9reactnext.vercel.app/assets/images/avatar/avatar-small-01.png"
              alt=""
            />
            <div className="flex flex-col">
              <b className="dark:text-white/70">Propw....</b>
              <span className="dark:text-white/50">0x334..</span>
            </div>
          </div>
          <span className="text-white/90 px-2 py-1 rounded-lg cursor-pointer dark:bg-darkBlue-500 dark:active:bg-pink-400 transition-all hover:dark:bg-pink-500">
            View
          </span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-2 items-center">
            <span className="dark:text-white/80 font-semibold">1.</span>
            <img
              className="rounded-2xl"
              src="https://opne9reactnext.vercel.app/assets/images/avatar/avatar-small-01.png"
              alt=""
            />
            <div className="flex flex-col">
              <b className="dark:text-white/70">Propw....</b>
              <span className="dark:text-white/50">0x334..</span>
            </div>
          </div>
          <span className="text-white/90 px-2 py-1 rounded-lg cursor-pointer dark:bg-darkBlue-500 dark:active:bg-pink-400 transition-all hover:dark:bg-pink-500">
            View
          </span>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-2 items-center">
            <span className="dark:text-white/80 font-semibold">1.</span>
            <img
              className="rounded-2xl"
              src="https://opne9reactnext.vercel.app/assets/images/avatar/avatar-small-01.png"
              alt=""
            />
            <div className="flex flex-col">
              <b className="dark:text-white/70">Propw....</b>
              <span className="dark:text-white/50">0x334..</span>
            </div>
          </div>
          <span className="text-white/90 px-2 py-1 rounded-lg cursor-pointer dark:bg-darkBlue-500 dark:active:bg-pink-400 transition-all hover:dark:bg-pink-500">
            View
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopCreators;
