import React, { useState, useEffect } from "react";
import { setProfilePhoto } from "../../../../apis/profile.apis";
import { useSelector } from "react-redux";
import { SuccessToast } from "../../../../app/Toast/Success";
import { ErrorToast } from "../../../../app/Toast/Error";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import demoUserAvatar from "../../../../assets/images/user-demo-avatar.svg";

function EditAvatar() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState();
  const EthUser = useSelector((state) => state.EthAccountStates);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await setProfilePhoto(profileImage, EthUser.account);
      if (result.success) {
        SuccessToast(result.message);
        window.location = "/myProfile/setting";
      }
    } catch (error) {}
  };

  const handleImageChange = (e) => {
    const file = e.target.files ? e.target.files[0] : e.dataTransfer.files[0];
    if (file) {
      readImageAsDataURL(file, (imageDataUrl) => {
        const blobImage = dataURLtoBlob(imageDataUrl);

        if (!blobImage.type.includes("image/")) {
          ErrorToast("please upload correct format !");
          return null;
        }

        if (5242880 < blobImage.size) {
          ErrorToast("5MB size required !");
          return null;
        }

        const PhotoPreview = document.getElementById(`PhotoPreview`);

        setProfileImage(blobImage);

        PhotoPreview.src = imageDataUrl;
      });
    }
  };

  const readImageAsDataURL = (file, callback) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageDataUrl = reader.result;
      callback(imageDataUrl);
    };

    reader.readAsDataURL(file);
  };

  const dataURLtoBlob = (dataURL) => {
    const splitDataUrl = dataURL.split(",");
    const byteString = atob(splitDataUrl[1]);
    const mimeString = splitDataUrl[0].split(":")[1].split(";")[0];

    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: mimeString });
  };

  return (
    <div className="text-white/90 mt-5 gap-5 flex flex-col">
      <Toaster position="bottomleft" />
      <h2 className="text-2xl sm:text-3xl">Setting</h2>
      <div className="dark:bg-darkBlue-700 rounded-xl p-1 sm:p-5 flex gap-6 flex-col">
        <span className="text-lg sm:text-2xl text-white/70">
          Edit your avatar
        </span>
        <div className="h-[1px] w-[15pc] bg-darkBlue-300" />
        <form
          onSubmit={HandleSubmit}
          className="flex justify-between items-center sm:flex-row flex-col gap-4"
        >
          <div className="flex gap-4 items-center">
            <img
              className="rounded-full  w-[9pc] h-[9pc]"
              id="PhotoPreview"
              src={
                EthUser.userAvatar != "" ? EthUser.userAvatar : demoUserAvatar
              }
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
                type="file"  accept=".svg, .png, .jpg, .jpeg, .gif"
                onChange={handleImageChange}
                multiple
                required
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
        </form>
      </div>
    </div>
  );
}

export default EditAvatar;
