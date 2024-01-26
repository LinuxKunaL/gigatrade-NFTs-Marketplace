import React, { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { Tooltip } from "flowbite-react";
import { IoClose } from "react-icons/io5";
import {
  getCollectionById,
  updateCollectionById,
} from "../../../../apis/Collections.apis";
import { useParams } from "react-router-dom";
import { fetchNFT } from "../../../../hooks/ContractControllers/useFetchNFTByUser";
import { useSelector } from "react-redux";
import Product404 from "../../../../components/UiComponents/Product404";
import { web3 } from "../../../../hooks/useContract";
import { SuccessToast } from "../../../../app/Toast/Success";
import { ErrorToast } from "../../../../app/Toast/Error";
import { Toaster } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function EditCollection() {
  const { id } = useParams();
  const [updatedCollection, setUpdatedCollection] = useState({});
  const [userNfts, setUserNfts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const EthAddress = useSelector((state) => state.EthAccountStates.account);
  const navigate = useNavigate();

  useEffect(() => {
    const fetching = async () => {
      try {
        const UserNfts = await fetchNFT(EthAddress);
        const response = await getCollectionById(id);
        setUpdatedCollection(response);
        if (UserNfts) {
          const CreatedData = await Promise.all(
            UserNfts.Created.map(async (item) => {
              return mapArray(item);
            })
          );
          if (CreatedData) {
            setUserNfts(CreatedData);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, [EthAddress, id]);

  const getMetadata = async (uri) => {
    try {
      if (uri) {
        const response = await axios.get(
          `https://cloudflare-ipfs.com/ipfs/${uri}`
        );
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const mapArray = async (item) => {
    const metaDataObject = await getMetadata(item.uri.slice(7));
    if (metaDataObject) {
      return {
        price: item.price.toString(),
        NftId: parseInt(item.tokenId),
        name: `${metaDataObject.name} #${item.tokenId}`,
        description: metaDataObject.description,
        properties: metaDataObject.properties,
        creator: item.creator,
        image: `https://cloudflare-ipfs.com/ipfs/${metaDataObject.image.slice(
          7
        )}`,
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await updateCollectionById(updatedCollection);
      if (result.success) {
        SuccessToast(result.message);
        setTimeout(() => {
          navigate("/myProfile/myCollection");
        }, 2500);
      }
    } catch (error) {
      console.error("Submit Error:", error);
    }
  };

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
        setUpdatedCollection((prevForm) => ({
          ...prevForm,
          CollectionImages: {
            ...prevForm.CollectionImages,
            [imageKey]: blobImage,
          },
        }));
        setTimeout(() => {
          NFTPreview.src = imageDataUrl;
        }, 1000);
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

  const AddNFTsInCollection = (item) => {
    const isNewNFT = !updatedCollection.NFTs.some(
      (i) => i.NFTid === item.NftId
    );
    if (isNewNFT) {
      setUpdatedCollection((prevCollection) => ({
        ...prevCollection,
        NFTs: [
          ...prevCollection.NFTs,
          {
            NFTid: item.NftId,
            name: item.name,
            image: item.image,
            price: web3.utils.fromWei(item.price, "ether"),
            createdBy: item.creator,
          },
        ],
      }));
    }
  };
  return (
    <div className="flex flex-col p-2 sm:p-5 gap-5 overflow-y-auto h-[89%] w-full">
      <Toaster position="bottomleft" />
      <div className="flex mt-5 mx-5 flex-col gap-2">
        <h1 className="text-white/90 font-semibold text-2xl mt-4">
          Edit Collection
        </h1>
        <span className="text-white/60">
          {updatedCollection
            ? `${updatedCollection.CollectionName} : #${updatedCollection.CollectionTag}`
            : ""}
        </span>
        <Link
          to={`/Collection/${id}`}
          className="p-1 w-min py-3 cursor-pointer hover:bg-pink-600 font-semibold text-darkBlue-400 text-xs hover:text-white text-white/80 bg-white/840 bg-darkBlue-300 backdrop-blur-lg flex items-center justify-center  rounded-lg hover:scale-90 transition-all px-6 h-full "
        >
          View
        </Link>
      </div>
      <div className="mt-5">
        <form onSubmit={handleSubmit} className="flex xl:ml-10 flex-col gap-6">
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex flex-1 flex-col gap-4">
              <label htmlFor="" className="text-white/70 font-semibold">
                Collection Name *
              </label>
              <input
                className=" bg-gray-50 text-gray-900 text-md rounded-lg focus:ring-0 focus:dark:border-pink-500 block w-full p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/70"
                type="text"
                defaultValue={
                  updatedCollection ? updatedCollection.CollectionName : ""
                }
                placeholder="Collection Name"
                onChange={(e) =>
                  setUpdatedCollection({
                    ...updatedCollection,
                    CollectionName: e.target.value,
                  })
                }
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
                value={updatedCollection.CollectionTag}
                onChange={(e) =>
                  setUpdatedCollection({
                    ...updatedCollection,
                    CollectionTag: e.target.value,
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
          <div className="flex flex-col w-full gap-7">
            <div className="flex w-full gap-7 flex-col">
              <div className="flex gap-3 flex-row items-center">
                <h2 className="text-white/90 font-semibold text-lg sm:text-xl">
                  Add NFTs in{" "}
                  <span className="text-white/50 underline font-normal">
                    {updatedCollection ? updatedCollection.CollectionName : ""}
                  </span>{" "}
                  collection
                </h2>
                <div className="h-9 self-center m-4 w-[1px] bg-darkBlue-300" />
                <Tooltip
                  theme={{
                    arrow: {
                      style: {
                        dark: "bg-gray-900 dark:bg-darkBlue-400 rounded-xl",
                        light: "bg-white",
                      },
                    },
                  }}
                  className="dark:bg-darkBlue-400/90 w-max"
                  content={
                    <div className="flex gap-2 flex-col items-center">
                      <span className="text-white/60 text-center">
                        Add NFTs from <br /> your Profile
                      </span>
                    </div>
                  }
                  placement="right"
                >
                  <div
                    onClick={() => setOpenModal(true)}
                    className="p-4 self-center h-max active:bg-darkBlue-400 hover:bg-darkBlue-300/70 cursor-pointer w-max rounded-lg text-white/90 bg-darkBlue-400"
                  >
                    <MdAdd />
                  </div>
                </Tooltip>
              </div>
              <div className="border-2 xh-[22pc] items-center overflow-y-auto flex p-4 flex-wrap rounded-lg border-gray-500/20">
                {updatedCollection.NFTs
                  ? updatedCollection.NFTs[0] === 0
                    ? null
                    : updatedCollection.NFTs.map((item) => (
                        <div className="p-3 m-4 justify-between flex-auto dark:bg-darkBlue-600 rounded-lg flex flex-row items-center gap-5">
                          <div className="flex gap-1 items-center justify-between">
                            <img
                              src={item.image}
                              className="w-10 rounded-lg h-10"
                              alt=""
                            />{" "}
                            <h2 className="text-white/90 text-sm font-semibold">
                              {item.name}
                            </h2>
                          </div>
                          <div
                            onClick={() => {
                              const filteredNFTs =
                                updatedCollection.NFTs.filter(
                                  (nft) => nft.NFTid !== item.NFTid
                                );
                              setUpdatedCollection((prevCollection) => ({
                                ...prevCollection,
                                NFTs:
                                  filteredNFTs.length > 0 ? filteredNFTs : [0],
                              }));
                            }}
                            className="p-4 w-max rounded-lg text-white/90 bg-darkBlue-300"
                          >
                            <IoClose />
                          </div>
                        </div>
                      ))
                  : null}
                <div
                  style={openModal ? { display: "flex" } : { display: "none" }}
                  id="Modal-popup"
                  className="dark:border-gray-600/30 fixed bottom-0 right-0 m-5 dark:bg-darkBlue-500 border-[1px] rounded-2xl p-4 flex gap-2 flex-col"
                >
                  <div className="flex justify-between items-center">
                    <h1 className="text-white/80 font-semibold text-xl">
                      Your NFTs
                    </h1>
                    <IoClose
                      onClick={() => setOpenModal(false)}
                      className="h-8 w-8 p-1.5 active:bg-darkBlue-400 hover:bg-darkBlue-300/70 cursor-pointer rounded-lg text-white/60 bg-darkBlue-300"
                    />
                  </div>
                  <div className="flex mt-5 flex-col flex-wrap justify-evenly gap-5">
                    <div className="flex gap-2 flex-col h-[20pc] overflow-y-auto">
                      {userNfts.length != 0 ? (
                        userNfts.map((item) => (
                          <div className="p-3 dark:bg-darkBlue-600 justify-between rounded-lg flex flex-row items-center gap-5">
                            <div className="flex gap-2 items-center">
                              <img
                                src={item.image}
                                className="w-10 rounded-lg h-10"
                                alt=""
                              />
                              <div className="flex gap-3 items-center justify-between">
                                <h2 className="text-white/90 text-sm font-semibold">
                                  {item.name}
                                </h2>
                              </div>
                            </div>
                            <div
                              onClick={() => AddNFTsInCollection(item)}
                              className="p-4 cursor-pointer hover:bg-darkBlue-400 w-max rounded-lg text-white/90 bg-darkBlue-300"
                            >
                              <MdAdd />
                            </div>
                          </div>
                        ))
                      ) : (
                        <Product404
                          message="NFTs are not created"
                          subMessage="Create a nft"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-7">
              <h2 className="text-white/90 font-semibold text-xl mt-4">
                Edit Collection cover
              </h2>
              <div className="flex gap-7">
                <div className="flex w-full flex-wrap gap-5 sm:gap-0">
                  {["one", "two", "Three", "four"].map((key) => (
                    <label
                      key={key}
                      htmlFor={`imageUpload-${key}`}
                      className="flex-auto sm:mx-5 sm:my-10 rounded-xl outline-dashed outline-pink-500/30 sm:pb-14 sm:pt-14 h-[20pc] text-center overflow-hidden sm:w-min flex flex-col dark:bg-darkBlue-500 p-5 gap-4 items-center justify-center"
                    >
                      <img
                        src={
                          updatedCollection.CollectionImages
                            ? updatedCollection.CollectionImages[key]
                            : ""
                        }
                        id={`NFTPreview-${key}`}
                        className="rounded-xl w-min h-[20pc]"
                        alt=""
                      />
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
                {/* <div
                  id="image-box"
                  className="flex-auto rounded-xl outline-dashed outline-pink-500/30 w-[10pc] h-[10pc] flex flex-col dark:bg-darkBlue-500 p-3 gap-4 items-center justify-center"
                >
                  <img className="w-full h-full rounded-lg" alt="" />
                </div> */}
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
            <button
              type="reset"
              onClick={() => navigate("/myProfile/myCollection")}
              className="text-white bg-darkBlue-700 hover:bg-darkBlue-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-darkBlue-500 dark:hover:bg-darkBlue-600 dark:focus:ring-darkBlue-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCollection;
