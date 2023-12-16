import React from "react";
import { FaTelegramPlane, FaFacebook } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
function EditProfile() {
  return (
    <div className="text-white/90 mt-5 gap-5 flex flex-col">
      <div className="dark:bg-darkBlue-700 rounded-xl p-5 flex gap-6 flex-col">
        <span className="text-2xl text-white/70">Edit your profile</span>
        <div className="h-[1px] w-[15pc] bg-darkBlue-300" />
        <form className="flex flex-col gap-6">
          <div className="flex justify-between flex-row">
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-white/70 font-semibold">
                Your name *
              </label>
              <input
                className="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-white/70 font-semibold">
                Phone number
              </label>
              <input
                className="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
                type="text"
                placeholder="Your phone"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-white/70 font-semibold">
                Store name
              </label>
              <input
                className="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
                type="text"
                placeholder="Store name"
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="" className="text-white/70 font-semibold">
                Email address *
              </label>
              <input
                className="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
                type="text"
                placeholder="Your email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="text-white/70 font-semibold">
              Your Bio
            </label>
            <textarea
              rows={5}
              className="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
              type="text"
              placeholder="Say something about yourself"
            />
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="" className="text-white/70 font-semibold">
              Properties
            </label>
            <input
              className="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
              type="text"
              placeholder="Properties"
            />
          </div>
          <div className="flex justify-between flex-row">
            <div class="flex flex-col gap-4">
              <label htmlFor="" className="text-white/70 font-semibold">
                Telegram Link
              </label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <FaTelegramPlane className="text-white/70" />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 ps-10 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
                  placeholder="telegram url"
                  required
                />
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <label htmlFor="" className="text-white/70 font-semibold">
                Whatsapp Link
              </label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <RiWhatsappFill className="text-white/70"/>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 ps-10 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
                  placeholder="whatsapp url"
                  required
                />
              </div>
            </div>
            <div class="flex flex-col gap-4">
              <label htmlFor="" className="text-white/70 font-semibold">
                Facebook Link
              </label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <FaFacebook className="text-white/70"/>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 ps-10 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
                  placeholder="Facebook url"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <button
              type="submit"
              class="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
            >
              Submit
            </button>
            <button
              type="submit"
              class="text-white bg-darkBlue-700 hover:bg-darkBlue-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-darkBlue-500 dark:hover:bg-darkBlue-600 dark:focus:ring-darkBlue-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
