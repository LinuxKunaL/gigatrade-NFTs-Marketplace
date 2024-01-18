import React, { useState, useEffect, memo, useCallback } from "react";
import { FaTelegramPlane, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import {
  setProfileDetails,
  getUserDetailsByEthAddress,
} from "../../../../apis/profile.apis.js";
import { SuccessToast } from "../../../../app/Toast/Success";
import { Toaster } from "react-hot-toast";
function EditProfile() {
  const EthUser = useSelector((state) => state.EthAccountStates);

  const [formData, setFormData] = useState({
    userBio: "",
    userName: "",
    phoneNumber: "",
    storeName: "",
    emailAddress: "",
    socialLink: {
      x: "",
      telegram: "",
      whatsapp: "",
      facebook: "",
    },
  });

  const fetching = useCallback(async () => {
    try {
      const response = await getUserDetailsByEthAddress(EthUser.account);
      setFormData(response);
    } catch (error) {
      console.log(error);
    }
  }, [EthUser.account]);

  useEffect(() => {
    fetching();
  }, [EthUser, fetching]);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await setProfileDetails(formData,EthUser.account);
      if (result.success) {
        SuccessToast(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const HandleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="text-white/90 mt-5 gap-5 flex flex-col">
      <Toaster position="bottomleft" />
      <div className="dark:bg-darkBlue-700 rounded-xl p-1 sm:p-5 flex gap-6 flex-col">
        <span className="text-lg sm:text-2xl">Edit your profile</span>
        <div className="h-[1px] w-[15pc] bg-darkBlue-300" />
        <form
          method="post"
          onSubmit={HandleSubmit}
          className="flex flex-col gap-6"
        >
          <div className="flex justify-between gap-5 flex-col sm:flex-row">
            <div className="flex w-full flex-col gap-4">
              <label
                htmlFor=""
                className="text-white/70 font-semibold text-sm sm:text-base "
              >
                Your name *
              </label>
              <input
                className="bg-gray-50 text-gray-900 rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70 text-sm sm:text-base"
                name="userName"
                defaultValue={formData.userName}
                type="text"
                placeholder="Enter your name"
                onChange={HandleOnChange}
                required
              />
            </div>
            <div className="flex w-full flex-col gap-4">
              <label
                htmlFor=""
                className="text-white/70  font-semibold text-sm sm:text-base"
              >
                Phone number *
              </label>
              <input
                className="bg-gray-50 text-gray-900 rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70 text-sm sm:text-base"
                type="text"
                name="phoneNumber"
                defaultValue={formData.phoneNumber}
                onChange={HandleOnChange}
                placeholder="Your phone"
                required
              />
            </div>
            <div className="flex w-full flex-col gap-4">
              <label
                htmlFor=""
                className="text-white/70  font-semibold text-sm sm:text-base"
              >
                Store name
              </label>
              <input
                className="bg-gray-50 text-gray-900 rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70 text-sm sm:text-base"
                type="text"
                name="storeName"
                defaultValue={formData.storeName}
                onChange={HandleOnChange}
                placeholder="Store name"
              />
            </div>
            <div className="flex w-full flex-col gap-4">
              <label
                htmlFor=""
                className="text-white/70  font-semibold text-sm sm:text-base"
              >
                Email address *
              </label>
              <input
                className="bg-gray-50 text-gray-900 rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70 text-sm sm:text-base"
                type="text"
                placeholder="Your email"
                defaultValue={formData.emailAddress}
                name="emailAddress"
                onChange={HandleOnChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label
              htmlFor=""
              className="text-white/70  font-semibold text-sm sm:text-base"
            >
              Your Bio *
            </label>
            <textarea
              rows={5}
              className="bg-gray-50 text-gray-900 rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70 text-sm sm:text-base"
              type="text"
              defaultValue={formData.userBio}
              placeholder="Say something about yourself"
              name="userBio"
              onChange={HandleOnChange}
              required
            />
          </div>
          {/* <div className="flex flex-col gap-4">
            <label
              htmlFor=""
              className="text-white/70  font-semibold text-sm sm:text-base"
            >
              Properties
            </label>
            <input
              className="bg-gray-50 text-gray-900 rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70 text-sm sm:text-base"
              type="text"
              placeholder="Properties"
            />
          </div> */}
          <div className="flex justify-between gap-5 flex-col sm:flex-row">
            <div className="flex flex-1 flex-col gap-4">
              <label
                htmlFor=""
                className="text-white/70 font-semibold text-sm sm:text-base"
              >
                Telegram Link
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <FaTelegramPlane className="text-white/70" />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 ps-10 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
                  placeholder="telegram url"
                  defaultValue={
                    formData.socialLink ? formData.socialLink.telegram : ""
                  }
                  name="telegram"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socialLink: {
                        ...formData.socialLink,
                        [e.target.name]: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <label
                htmlFor=""
                className="text-white/70  font-semibold text-sm sm:text-base"
              >
                Whatsapp Link
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <RiWhatsappFill className="text-white/70" />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 ps-10 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
                  placeholder="whatsapp url"
                  name="whatsapp"
                  defaultValue={
                    formData.socialLink ? formData.socialLink.whatsapp : ""
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socialLink: {
                        ...formData.socialLink,
                        [e.target.name]: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <label
                htmlFor=""
                className="text-white/70  font-semibold text-sm sm:text-base"
              >
                X Link
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <FaXTwitter className="text-white/70" />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 ps-10 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
                  defaultValue={
                    formData.socialLink ? formData.socialLink.x : ""
                  }
                  name="x"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socialLink: {
                        ...formData.socialLink,
                        [e.target.name]: e.target.value,
                      },
                    })
                  }
                  placeholder="X url"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <label
                htmlFor=""
                className="text-white/70  font-semibold text-sm sm:text-base"
              >
                Facebook Link
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <FaFacebook className="text-white/70" />
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-gray-50 text-gray-900 text-sm sm:text-base rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 ps-10 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
                  placeholder="Facebook url"
                  defaultValue={
                    formData.socialLink ? formData.socialLink.facebook : ""
                  }
                  name="facebook"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      socialLink: {
                        ...formData.socialLink,
                        [e.target.name]: e.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5">
            <button
              type="submit"
              className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
            >
              Submit
            </button>
            <div
              type="submit"
              className="text-white bg-darkBlue-700 hover:bg-darkBlue-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-darkBlue-500 dark:hover:bg-darkBlue-600 dark:focus:ring-darkBlue-400"
            >
              Cancel
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default memo(EditProfile);
