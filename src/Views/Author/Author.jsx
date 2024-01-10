import React, { useState, useEffect } from "react";

import { FaEthereum, FaFacebook, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Tooltip } from "flowbite-react";
import {
  MdContentCopy,
  MdOutlineOpenInNew,
  MdShoppingCart,
} from "react-icons/md";

import { web3 } from "../../hooks/useContract";
import AuthorCreated from "./components/AuthorCreated";
import AuthorOwned from "./components/AuthorOwned";
import AuthorCollections from "./components/AuthorCollections";
import AuthorDetails from "./components/AuthorDetails";
import { getUserDetailsByEthAddress } from "../../apis/profile.apis";
import { useSearchParams } from "react-router-dom";
import { fetchNFT } from "../../hooks/ContractControllers/useFetchNFTByUser";
import { getCollectionsByUser } from "../../apis/Collections.apis";

function Author() {
  const { id } = useParams();
  const [AuthorDetailsData, setAuthorDetailsData] = useState({});
  const [AuthorCollectionsData, setAuthorCollectionsData] = useState([]);
  const [AuthorNFTs, setAuthorNFTs] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      const response = await fetchNFT(id);
      const CreatedData = await Promise.all(
        response.Created.map(async (item) => {
          return mapArray(item);
        })
      );
      const OwnedData = await Promise.all(
        response.Owned.map(async (item) => {
          return mapArray(item);
        })
      );
      setAuthorNFTs({
        Created: CreatedData,
        Owned: OwnedData,
      });
      try {
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, [id]);

  useEffect(() => {
    const fetching = async () => {
      const response = await getUserDetailsByEthAddress(id);
      const result = await getCollectionsByUser(id);
      setAuthorCollectionsData(result);
      setAuthorDetailsData(response);
      try {
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, [id]);

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
        price: web3.utils.fromWei(item.price.toString(), "ether"),
        NFTid: parseInt(item.tokenId),
        name: `${metaDataObject.name} #${item.tokenId}`,
        description: metaDataObject.description,
        properties: metaDataObject.properties,
        createdBy: item.creator,
        image: `https://cloudflare-ipfs.com/ipfs/${metaDataObject.image.slice(
          7
        )}`,
      };
    }
  };

  const [paramState, setParamState] = useSearchParams({
    info: "owned",
  });

  const AuthorComponents = {
    details: <AuthorDetails AuthorId={id} />,
    owned: <AuthorOwned NFTs={AuthorNFTs ? AuthorNFTs.Owned : []} />,
    collections: <AuthorCollections CollectionsData={AuthorCollectionsData} />,
    created: <AuthorCreated NFTs={AuthorNFTs ? AuthorNFTs.Created : []} />,
  };

  return (
    <div className="mt-14 sm:p-0 p-5 flex flex-col gap-5">
      <div
        id="profile"
        className="relative h-[25pc] flex justify-center items-center"
      >
        <div className="absolute overflow-hidden lg:h-full lg-w-auto h-[50%] w-[60pc] xl:w-full top-0 rounded-lg opacity-40">
          <img
            id="bg-image"
            className="w-full"
            src="https://image.lexica.art/full_webp/152901c2-5a39-4b61-b178-16d5f0a8365d"
            alt=""
          />
        </div>
        <div className="z-10 relative flex flex-col  gap-3 sm:gap-2 items-center w-max p-3 rounded-lg">
          <img
            className="w-28 h-28 border-4 dark:border-darkBlue-200 rounded-lg bg-darkBlue-400"
            src={AuthorDetailsData.userProfile}
            alt=""
          />
          {/* <div className="z-[-1] bg-gradient-to-r from-purple-800 to-pink-600 absolute bottom-0 h-96 w-96 blur-[10pc] opacity-[30%]" /> */}
          <h2 className="dark:text-white/90 text-xl sm:text-2xl font-semibold p-1 px-5 rounded-lg backdrop-blur-md">
            {AuthorDetailsData.userName}
          </h2>
          <span className="dark:text-white/70 text-md flex sm:text-base text-sm items-center gap-1 p-1 px-5 rounded-lg backdrop-blur-md">
            <FaEthereum /> {id ? `${id.slice(0, 5)}...${id.slice(38)}` : ""}
          </span>
          <p className="dark:text-white/50 text-md sm:w-[30pc] text-center sm:text-base text-sm">
            {AuthorDetailsData.userBio}
          </p>
          <div className="text-white/90 flex sm:gap-2 gap-5">
            <Link
              to={
                AuthorDetailsData.socialLink
                  ? AuthorDetailsData.socialLink.x
                  : ""
              }
              target="_BLANK"
            >
              <FaXTwitter className="sm:h-7 sm:p-1 sm:w-8 active:bg-pink-700 transition-all rounded-md cursor-pointer hover:bg-pink-700/80 " />
            </Link>
            <Link
              to={
                AuthorDetailsData.socialLink
                  ? AuthorDetailsData.socialLink.facebook
                  : ""
              }
              target="_BLANK"
            >
              <FaFacebook className="sm:h-7 sm:p-1 sm:w-8 active:bg-pink-700 transition-all rounded-md cursor-pointer hover:bg-pink-700/80" />
            </Link>
            <Link
              to={
                AuthorDetailsData.socialLink
                  ? AuthorDetailsData.socialLink.telegram
                  : ""
              }
              target="_BLANK"
            >
              <FaTelegramPlane className="sm:h-7 sm:p-1 sm:w-8 active:bg-pink-700 transition-all rounded-md cursor-pointer hover:bg-pink-700/80" />
            </Link>
          </div>
        </div>
      </div>
      <UiOne AuthorComponents={AuthorComponents} />
      {/* <UiTwo
        AuthorComponents={AuthorComponents}
        setParamState={setParamState}
        paramState={paramState}
      /> */}
    </div>
  );
}

export default Author;

const UiOne = ({ AuthorComponents }) => {
  return (
    <div className="flex flex-col gap-5 flex-wrap">
      <div
        id="collection"
        className="flex flex-auto flex-col p-4 gap-3 dark:border-darkBlue-500 rounded-lg border-[1px]"
      >
        <h2 className="text-white/90 font-semibold text-xl sm:text-2xl">
          Details
        </h2>
        <div id="collection" className="flex flex-wrap">
          {AuthorComponents["details"]}
        </div>
      </div>
      <div
        id="collection"
        className="flex flex-auto flex-col p-4 gap-3 dark:border-darkBlue-500 rounded-lg border-[1px]"
      >
        <h2 className="text-white/90 font-semibold text-xl sm:text-2xl">
          All Created NFTS
        </h2>
        <div id="collection" className="flex flex-wrap">
          {AuthorComponents["created"]}
        </div>
      </div>
      <div
        id="collection"
        className="flex flex-1 flex-col p-4 gap-3 rounded-lg dark:border-darkBlue-500 border-[1px]"
      >
        <h2 className="text-white/90 font-semibold text-xl sm:text-2xl">
          All Owned NFTs
        </h2>
        <div id="collection" className="flex flex-wrap">
          {AuthorComponents["owned"]}
        </div>
      </div>
      <div
        id="collection"
        className="flex flex-auto flex-col p-4 gap-5 rounded-lg dark:border-darkBlue-500 border-[1px]"
      >
        <h2 className="text-white/90 font-semibold text-xl sm:text-2xl">
          All Collections
        </h2>
        <div id="collection" className="flex flex-wrap">
          {AuthorComponents["collections"]}
        </div>
      </div>
    </div>
  );
};

const UiTwo = ({ AuthorComponents, setParamState, paramState }) => {
  return (
    <div id="profile-body" className="">
      <ul className="flex gap-2 flex-wrap text-sm font-medium text-center text-gray-500 border-darkBlue-600 dark:border-darkBlue-500 dark:text-gray-400">
        <li
          onClick={() => setParamState({ info: "details" })}
          className="cursor-pointer"
        >
          <div
            className={
              paramState.get("info") == "details"
                ? "inline-block p-4 text-pink-600 dark:bg-darkBlue-500/70 dark:text-pink-500 bg-gray-100 rounded-t-lg active sm:text-base text-xs"
                : "inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 sm:text-base text-xs"
            }
          >
            Details
          </div>
        </li>
        <li
          onClick={() => {
            setParamState({ info: "collections" });
          }}
          className="cursor-pointer"
        >
          <div
            className={
              paramState.get("info") == "collections"
                ? "inline-block p-4 text-pink-600 dark:bg-darkBlue-500/70 dark:text-pink-500 bg-gray-100 rounded-t-lg active sm:text-base text-xs"
                : "inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 sm:text-base text-xs"
            }
          >
            Collections
          </div>
        </li>
        <li
          onClick={() => {
            setParamState({ info: "owned" });
          }}
          className="cursor-pointer"
        >
          <div
            className={
              paramState.get("info") == "owned"
                ? "inline-block p-4 text-pink-600 dark:bg-darkBlue-500/70 dark:text-pink-500 bg-gray-100 rounded-t-lg active sm:text-base text-xs"
                : "inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 sm:text-base text-xs"
            }
          >
            Owned
          </div>
        </li>
        <li
          onClick={() => {
            setParamState({ info: "created" });
          }}
          className="cursor-pointer"
        >
          <div
            className={
              paramState.get("info") == "created"
                ? "inline-block p-4 text-pink-600 dark:bg-darkBlue-500/70 dark:text-pink-500 bg-gray-100 rounded-t-lg active sm:text-base text-xs"
                : "inline-block p-4 rounded-t-lg hover:text-pink-600 hover:bg-gray-50 dark:hover:bg-darkBlue-500/70 dark:hover:text-pink-500 sm:text-base text-xs"
            }
          >
            created
          </div>
        </li>
      </ul>
      <div
        id="tab-body"
        className="p-3 dark:bg-darkBlue-700 border-darkBlue-600 rounded-b-lg dark:border-darkBlue-500 border-[1px]"
      >
        {AuthorComponents[paramState.get("info")]
          ? AuthorComponents[paramState.get("info")]
          : () => setParamState({ info: "details" })}
      </div>
    </div>
  );
};
