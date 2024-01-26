import React, { useState, useEffect } from "react";
import { BsStars } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TiUpload } from "react-icons/ti";
import { createCollection } from "../../../../apis/Collections.apis";
import { useSelector } from "react-redux";
import { SuccessToast } from "../../../../app/Toast/Success";
import { ErrorToast } from "../../../../app/Toast/Error";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddNewCollection() {
  const EthAddress = useSelector((state) => state.EthAccountStates.account);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const [CollectionForm, setCollectionForm] = useState({
    name: "",
    tag: "",
    images: {
      one: "",
      two: "",
      three: "",
      four: "",
    },
    EthUser: "",
  });

  useEffect(() => {
    setCollectionForm({ ...CollectionForm, EthUser: EthAddress });
  }, [EthAddress]);

  const handleImageChange = (e, imageKey) => {
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
        
        const NFTPreview = document.getElementById(`NFTPreview-${imageKey}`);
        const imageBox = document.getElementById(`Upload-ui-${imageKey}`);
        imageBox.style.display = "none";
        NFTPreview.style.display = "block";
        NFTPreview.src = imageDataUrl;
        setImages([...images, file]);
        setCollectionForm((prevForm) => ({
          ...prevForm,
          images: {
            ...prevForm.images,
            [imageKey]: blobImage,
          },
        }));
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

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (
      CollectionForm.images.one === "" ||
      CollectionForm.images.two === "" ||
      CollectionForm.images.three === "" ||
      CollectionForm.images.four === ""
    ) {
      ErrorToast("Please upload an image! 💔");
      return null;
    }
    try {
      if (EthAddress) {
        const result = await createCollection(CollectionForm);
        if (result.success) {
          SuccessToast(result.message);
          setTimeout(() => {
            navigate("/myProfile/myCollection");
          }, 2500);
        }
      } else {
        console.log("EthAddress are not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDrop = (e, imageKey) => {
    e.preventDefault();
    handleImageChange(e, imageKey);
  };

  return (
    <div className="flex flex-col p-2 sm:p-5 gap-5 overflow-y-auto h-[89%] w-full">
      <Toaster position="bottomleft" />
      <h1 className="text-white/90 font-semibold text-xl sm:text-2xl mt-4">
        Create New Collection
      </h1>
      <div className="flex flex-row gap-2 items-center text-sm sm:text-base sm:mt-4 text-white/70">
        <BsStars />
        <p>Creating a collection doesn't need gas</p>
      </div>
      <div className="h-full flex gap-8">
        <div className="flex-auto mt-5 sm:mt-10">
          <form
            onSubmit={HandleSubmit}
            className="flex xl:ml-10  flex-col gap-6 p-2"
            method="post"
          >
            <div className="flex gap-3 sm:items-center sm:flex-row flex-col">
              <div className="flex flex-1 flex-col gap-4">
                <label
                  htmlFor=""
                  className="text-white/70 font-semibold text-sm sm:text-base"
                >
                  Collection Name *
                </label>
                <input
                  className=" bg-gray-50 text-gray-900 rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70 text-sm sm:text-base"
                  type="text"
                  placeholder="Collection Name"
                  pattern="[A-Z a-z]{1,15}"
                  title="Please enter only alphabetical characters and a maximum of 15 characters"
                  name="collectionName"
                  onChange={(e) =>
                    setCollectionForm({
                      ...CollectionForm,
                      name: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <label
                  htmlFor=""
                  className="text-white/70 font-semibold text-sm sm:text-base"
                >
                  Collection tag *
                </label>
                <select
                  className=" bg-gray-50 text-gray-900 rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70 text-sm sm:text-base"
                  name="collectionTag"
                  onChange={(e) =>
                    setCollectionForm({
                      ...CollectionForm,
                      tag: e.target.value,
                    })
                  }
                  required
                >
                  <option value="gaming">Gaming</option>
                  <option value="sports">Sports</option>
                  <option value="music">Music</option>
                  <option value="art">Art</option>
                  <option value="photography">Photography</option>
                  <option value="utility">Utility</option>
                </select>
              </div>
            </div>
            <div className="flex w-full flex-wrap gap-5 sm:gap-0">
              {["one", "two", "three", "four"].map((key) => (
                <label
                  onDragOver={(e) => e.preventDefault()}
                  onDragLeave={(e) => e.preventDefault()}
                  onDrop={(e) => handleDrop(e, key)}
                  key={key}
                  htmlFor={`imageUpload-${key}`}
                  className="flex-auto w-[20pc] sm:mx-5 sm:my-10 rounded-xl outline-dashed outline-pink-500/30 sm:pb-14 sm:pt-14 h-[20pc] text-center overflow-hidden sm:w-s flex flex-col dark:bg-darkBlue-500 p-5 gap-4 items-center justify-center"
                >
                  <img
                    src=""
                    id={`NFTPreview-${key}`}
                    className="rounded-xl hidden h-[20pc]"
                    alt=""
                  />
                  <div
                    id={`Upload-ui-${key}`}
                    className="gap-3 items-center justify-center flex flex-col"
                  >
                    <TiUpload className="text-purple-500 text-2xl" />
                    <b className="text-white/80 text-sm sm:text-base">
                      Upload File
                    </b>
                    <span className="text-white/70 text-sm sm:text-base">
                      Drag or choose your file to upload
                    </span>
                    <p className="text-white/50 text-sm sm:text-base">
                      PNG, GIF, JPEG or SVG. Max 5MB.
                    </p>
                    <div className="py-3 px-10 flex flex-row items-center gap-2 text-white/90 font-semibold justify-center xs:justify-start text-sm sm:text-base w-full xs:w-auto bg-gradient-to-tr from-pink-500 to-purple-500 rounded-xl ">
                      Create <FaArrowLeftLong className="-rotate-[-140deg]" />
                    </div>
                  </div>
                  <input
                    id={`imageUpload-${key}`}
                    type="file"
                    accept=".svg, .png, .jpg, .jpeg, .gif"
                    name={`image-${key}`}
                    onChange={(e) => handleImageChange(e, key)}
                    hidden
                  />
                </label>
              ))}
            </div>
            <button
              type="submit"
              className=" self-end text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm sm:self-start sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 mb-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewCollection;
