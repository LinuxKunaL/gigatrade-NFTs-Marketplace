import React from "react";

function RecentlyAddedCollections() {
  return (
    <div className="dark:bg-darkBlue-600 sm:p-5 p-3 flex flex-col gap-2 rounded-lg">
      {/* sm:text-sm text-[0.8rem] */}
      <h3 className=" sm:py-5 sm:px-3 px-2 py-1 font-semibold dark:text-white/90 text-lg sm:text-2xl">
        Recently added Collections
      </h3>
      <div className="flex xl:flex-col md:flex-row flex-col gap-6">
        <div className="flex flex-col gap-1 dark:bg-darkBlue-400 rounded-lg">
          <img
            className="rounded-t-lg"
            src="https://opne9reactnext.vercel.app/assets/images/blog/sidebar-05.jpg"
            alt=""
          />
          <div className="p-2 sm:py-4 py-2 flex justify-between items-center">
            <b className=" text-white/70 sm:text-lg text-sm font-semibold">
              Photography
            </b>
            <span className="text-white/40 sm:text-lg text-sm">17hr ago</span>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 sm:text-sm text-[0.8rem]">
          <div className="flex flex-row justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                className="rounded-2xl"
                src="https://opne9reactnext.vercel.app/assets/images/blog/sidebar-06.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <b className="dark:text-white/70">Propw....</b>
                <span className="dark:text-white/50">0x334..</span>
              </div>
            </div>
            <span className="dark:text-white/40 font-semibold">Mon,08 May</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                className="rounded-2xl"
                src="https://opne9reactnext.vercel.app/assets/images/blog/sidebar-07.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <b className="dark:text-white/70">Propw....</b>
                <span className="dark:text-white/50">0x334..</span>
              </div>
            </div>
            <span className="dark:text-white/40 font-semibold">Mon,08 May</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex gap-2 items-center">
              <img
                className="rounded-2xl"
                src="https://opne9reactnext.vercel.app/assets/images/blog/sidebar-08.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <b className="dark:text-white/70">Propw....</b>
                <span className="dark:text-white/50">0x334..</span>
              </div>
            </div>
            <span className="dark:text-white/40 font-semibold">Mon,08 May</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentlyAddedCollections;
