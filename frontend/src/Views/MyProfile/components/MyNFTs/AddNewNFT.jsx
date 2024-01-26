import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsStars } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { TiUpload } from "react-icons/ti";
import { MintNFT } from "../../../../hooks/ContractControllers/useMintNFT";
import { Toaster } from "react-hot-toast";
import { SuccessToast } from "../../../../app/Toast/Success";
import { UploadMetadata } from "../../../../hooks/useNFTstorage";
import { promiseToast } from "../../../../app/Toast/Promise.jsx";
import { ErrorToast } from "../../../../app/Toast/Error.jsx";
import { Link, useNavigate } from "react-router-dom";

// https://gateway.pinata.cloud/ipfs/ ==> preview the IPFS data / metadata

function AddNewNFT() {
  const Navigate = useNavigate();
  const [formNftData, setFormNftData] = useState({
    price: "",
    name: "",
    image: "",
    description: "",
    properties: "",
    royalties: "",
    approve: false,
    category: "",
  });

  const UserEthAccount = useSelector((state) => state.EthAccountStates);

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

        const NFTPreview = document.getElementById("NFTPreview");
        const imageBox = document.getElementById("Upload-ui");
        imageBox.style.display = "none";
        NFTPreview.style.display = "block";
        NFTPreview.src = imageDataUrl;
        setFormNftData({ ...formNftData, image: blobImage });
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

  const HandleMintNFT = async (event) => {
    event.preventDefault();
    if (!formNftData.image) {
      return ErrorToast("Upload a NFT image !");
    }
    try {
      const Uri = await promiseToast(
        "NFT Minting please wait... ⛓",
        "NFT uploaded Sign the transaction ! 🎉",
        "Something Error happened ! 💔",
        UploadMetadata,
        formNftData
      );
      await MintNFT(
        UserEthAccount.account,
        formNftData.price,
        Uri.url,
        // "ipfs://bafyreidtn5dzuyl5dzzegco5qqauhvxnq4dagzixfwefuzrfu2iiy47qia/metadata.json",
        formNftData.royalties,
        formNftData.approve
      )
        .then((response) => {
          SuccessToast(
            <div>
              NFT Mint successfully 🎉 ! <br />
              <div className=" line-clamp-1">
                Gas used :
                <b className=" font-normal text-darkBlue-50">
                  {" "}
                  {response.gasUsed.toString()}
                </b>{" "}
                in wei
              </div>
            </div>
          );
          setTimeout(() => {
            Navigate("/myProfile/myNFTs");
          }, 3000);
        })
        .catch((error) => {
          console.error(error);
          ErrorToast(<div>Something error happen try agin 💔 !</div>);
        });
    } catch (error) {
      console.error(error);
    }
  };

  const HandleOnChange = (e) => {
    setFormNftData({
      ...formNftData,
      [e.target.name]: e.target.value,
    });
  };

  const HandleProperties = (e) => {
    const arrayOfProperties = e.target.value.split(" ");
    const FilterArray = arrayOfProperties.filter((item) => item !== "");
    setFormNftData({ ...formNftData, properties: FilterArray });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleImageChange(e);
  };

  return (
    <div className="flex flex-col p-2 sm:p-5 gap-5 overflow-y-auto h-[89%] w-full">
      <Toaster position="left" />
      <h1 className="text-white/90 font-semibold text-xl sm:text-2xl mt-4">
        Create New NFT
      </h1>
      <div className="flex flex-row gap-2 items-center text-sm sm:text-base sm:mt-4  text-white/70">
        <BsStars />
        <p>You have to pay a gas for update the NFT</p>
      </div>
      <div className="flex lg:flex-row flex-col gap-8">
        <label
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={(e) => e.preventDefault()}
          onDrop={handleDrop}
          htmlFor="imageUpload"
          id="image-box"
          className="flex-1 xl:mx-10 xl:my-10 xl:w-[35%] w-full h-[40pc] rounded-xl outline-dashed outline-pink-500/30 flex overflow-hidden flex-col dark:bg-darkBlue-500 p-3 gap-3 items-center justify-center"
        >
          <img
            src=""
            id="NFTPreview"
            className="rounded-xl hidden w-full h-max"
            alt=""
          />
          <div
            id="Upload-ui"
            className="gap-3 items-center justify-center flex flex-col"
          >
            <TiUpload className="text-purple-500 text-2xl" />
            <b className="text-white/80 text-sm sm:text-base">Upload File</b>
            <span className="text-white/70 text-sm sm:text-base">
              Drag or choose your file to upload
            </span>
            <p className="text-white/50 text-sm sm:text-base">
              PNG, GIF, JPEG or SVG. Max 5MB.
            </p>
            <button className="py-3 px-10 flex flex-row items-center gap-2 text-white/90 font-semibold justify-center xs:justify-start text-sm sm:text-base w-full xs:w-auto bg-gradient-to-tr from-pink-500 to-purple-500 rounded-xl ">
              Create <FaArrowLeftLong className="-rotate-[-140deg]" />
            </button>
          </div>
        </label>
        <input
          id="imageUpload"
          type="file"
          accept=".svg, .png, .jpg, .jpeg, .gif"
          name="image"
          onChange={handleImageChange}
          hidden
        />
        <div className="flex-1">
          <form onSubmit={HandleMintNFT} className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <label
                htmlFor=""
                className="text-white/70 font-semibold text-sm sm:text-base"
              >
                NFT title *
              </label>
              <input
                className=" bg-gray-50 text-gray-900 rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70 text-sm sm:text-base"
                type="text"
                placeholder="Nft title"
                name="name"
                onChange={HandleOnChange}
                required
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor=""
                className="text-white/70 font-semibold text-sm sm:text-base"
              >
                NFT description *
              </label>
              <textarea
                rows={5}
                className="bg-gray-50 text-gray-900 rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70 text-sm sm:text-base"
                required
                type="text"
                name="description"
                onChange={HandleOnChange}
                placeholder="Please describe your NFT"
              />
            </div>
            <div className="flex justify-between gap-6 flex-col sm:flex-row">
              <div className="flex flex-1 flex-col gap-4">
                <label
                  htmlFor=""
                  className="text-white/70 font-semibold text-sm sm:text-base"
                >
                  Price ( in USD ) *
                </label>
                <input
                  className="bg-gray-50 text-gray-900 rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70 text-sm sm:text-base"
                  type="number"
                  placeholder="Price"
                  name="price"
                  pattern="[0-9]*"
                  onChange={HandleOnChange}
                  required
                />
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <label
                  htmlFor=""
                  className="text-white/70 font-semibold text-sm sm:text-base"
                >
                  Royalties ( in % ) *
                </label>
                <input
                  className="bg-gray-50 text-gray-900 rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70 text-sm sm:text-base"
                  type="number"
                  placeholder="Royalties ex. 4%"
                  name="royalties"
                  pattern="[0-9]*"
                  onChange={HandleOnChange}
                  required
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 justify-between items-center">
                <label
                  htmlFor=""
                  className="text-white/70 font-semibold text-sm sm:text-base"
                >
                  Enable to trade *
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    name="approve"
                    onChange={(e) =>
                      setFormNftData({
                        ...formNftData,
                        [e.target.name]: e.target.checked,
                      })
                    }
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 rounded-full peer dark:bg-darkBlue-600 dark:border-gray-600/30 border-[1px] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white/70 after:border-gray-300/70 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-pink-600"></div>
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label
                htmlFor=""
                className="text-white/70 font-semibold text-sm sm:text-base"
              >
                Select a category
              </label>
              <select
                id="countries"
                className="bg-gray-50 text-gray-900 rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70 text-sm sm:text-base"
                name="category"
                onChange={HandleOnChange}
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

            <div className="flex flex-col gap-4">
              <label
                htmlFor=""
                className="text-white/70 font-semibold text-sm sm:text-base"
              >
                Properties
              </label>
              <input
                className="bg-gray-50 text-gray-900 rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70 text-sm sm:text-base"
                type="text"
                placeholder="Properties ex. red,blue,sky"
                onChange={HandleProperties}
                required
              />
            </div>
            <div className="flex gap-5 mb-5">
              <button
                type="submit"
                className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
              >
                Submit
              </button>
              <Link
                type="submit"
                to="/myProfile"
                className="text-white bg-darkBlue-700 hover:bg-darkBlue-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 cursor-pointer text-center dark:bg-darkBlue-500 dark:hover:bg-darkBlue-600 dark:focus:ring-darkBlue-400"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewNFT;
