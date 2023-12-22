import React from "react";

function EditAvatar() {
  return (
    <div className="text-white/90 mt-5 gap-5 flex flex-col">
      <h2 className="text-2xl sm:text-3xl">Setting</h2>
      <div className="dark:bg-darkBlue-700 rounded-xl p-1 sm:p-5 flex gap-6 flex-col">
        <span className="text-lg sm:text-2xl text-white/70">
          Edit your avatar
        </span>
        <div className="h-[1px] w-[15pc] bg-darkBlue-300" />
        <div className="flex justify-between items-center sm:flex-row flex-col gap-4">
          <div className="flex gap-4 items-center">
            <img
              className="rounded-full sm:w-auto sm:h-auto w-20 h-20"
              src="https://opne9reactnext.vercel.app/assets/images/avatar/avatar-07.png"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <label
                className="block sm:mb-2 sm:text-sm  font-medium text-gray-900 dark:text-white/80"
                for="multiple_files"
              >
                Upload a new avatar”
              </label>
              <input
                className="block w-full focus:outline-none focus:ring-pink-500 
                  text-xs sm:text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400  dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-darkBlue-400"
                id="multiple_files"
                type="file"
                multiple
              />
              <span className="text-white/60 sm:text-base text-sm">
                JPEG 100x100
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-max sm:self-auto self-end sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditAvatar;
