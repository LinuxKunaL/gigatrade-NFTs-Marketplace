import React, { useEffect, useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ProductNFT } from "../../../../components/UiComponents/ProductNFT";
import { fetchNFT } from "../../../../hooks/ContractControllers/useFetchNFTByUser";
import { useSelector } from "react-redux";
import { FaEthereum } from "react-icons/fa6";
import axios from "axios";
import { web3 } from "../../../../hooks/useContract";
import { TbMoodEmpty } from "react-icons/tb";
function MyNFTs() {
  const [rowNFTsData, setRowNFTsData] = useState([]);
  const [clearNFTData, setClearNFTData] = useState([]);
  const ethAccount = useSelector((state) => state.EthAccountStates.account);

  useEffect(() => {
    const fetchingNfts = async () => {
      try {
        if (ethAccount) {
          const result = await fetchNFT(ethAccount);
          setRowNFTsData(result);
        }
      } catch (error) {
        console.error("Error fetching NFTs:", error);
      }
    };

    fetchingNfts();
  }, [ethAccount]);

  useEffect(() => {
    const loading = async () => {
      try {
        const updatedNFTData = await Promise.all(
          rowNFTsData.map(async (item) => {
            const metaDataObject = await getMetadata(item.uri.slice(7));
            if (metaDataObject) {
              return {
                price: item.price.toString(),
                NftId: parseInt(item.tokenId),
                name: `${metaDataObject.name} #${item.tokenId}`,
                description: metaDataObject.description,
                properties: metaDataObject.properties,
                image: `https://cloudflare-ipfs.com/ipfs/${metaDataObject.image.slice(
                  7
                )}`,
              };
            }
            return null;
          })
        );
        const filteredNFTData = updatedNFTData.filter(Boolean);
        setClearNFTData(filteredNFTData);
      } catch (error) {
        console.error("Error loading NFTs:", error);
      }
    };

    loading();
  }, [rowNFTsData]);

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

  console.log(clearNFTData);

  return (
    <div className="flex flex-col">
      <div className="h-full gap-4 xs:gap-0 xs:h-[10pc] flex-col mt-5 rounded-3xl flex xs:flex-row justify-between items-center w-full dark:bg-darkBlue-500/80  outline-dashed outline-offset-2 outline-pink-500/40 p-3 xs:p-5">
        <div className="flex flex-col gap-2 sm:items-start items-center">
          <h2 className="flex gap-2 sm:text-start text-center items-center text-pink-500 text-sm sm:text-xl">
            <FiPlusCircle /> Add new NFT
          </h2>
          <p className="dark:text-white/50 text-sm sm:text-xl sm:text-start text-center">
            create NFTs and store into collections
          </p>
        </div>
        <Link className="w-full xs:w-auto" to="/myProfile/addNFT">
          <button className="py-3 px-10 justify-center xs:justify-start text-sm sm:text-base flex flex-row items-center gap-2 text-white/90 font-semibold text-md bg-gradient-to-tr w-full from-pink-500 to-purple-500 rounded-xl ">
            Create <FaArrowLeftLong className="-rotate-[-140deg]" />
          </button>
        </Link>
      </div>
      <div className="text-white/90 mt-10 text-2xl gap-5 flex flex-col font-semibold">
        <div className="flex gap-4 w-full sm:w-auto">
          <input
            className="bg-gray-50 text-gray-900 sm:text-base text-sm rounded-lg focus:ring-0 focus:dark:border-pink-500 block p-2.5 dark:bg-darkBlue-600 dark:border-gray-600/30 dark:placeholder-gray-500 dark:text-white/50 w-full sm:w-auto"
            type="text"
            placeholder="Search NFT by title"
          />
          <button
            type="submit"
            className="text-white end-2.5 bottom-2.5 bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
          >
            Search
          </button>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl">My Created NFTs</h2>
          <div className="flex mt-2 sm:mt-5 flex-row flex-wrap justify-start gap-5">
            {clearNFTData.length != 0 ? (
              clearNFTData.map((item, index) => (
                <Link
                  to={"/myProfile/EditNFT/" + item.NftId}
                  key={index}
                  className={`group transition-all hover:-translate-y-3 rounded-xl flex flex-col gap-2 w-[15pc] bg-darkBlue-500 p-3`}
                >
                  <div className={`flex gap-3 items-center`}>
                    <img
                      className="w-11 rounded-full bg-darkBlue-300 h-11"
                      src="https://nftix-html.vercel.app/assets/img/avatar/avatar2.jpg"
                      alt="error in image"
                    />
                    <div className="flex flex-col">
                      <span className="text-white/50 text-xs line-clamp-1 rounded-md  w-[6pc] h-[1pc]">
                        Created by :
                      </span>{" "}
                      <h2 className="text-white/90 rounded-md w-[9pc] h-[1.5pc]  line-clamp-1 text-sm font-normal">
                        Baby doge #2123ssssssssssss
                      </h2>
                    </div>
                  </div>
                  <div
                    className={`h-[12pc] transition-all relative w-full overflow-hidden rounded-xl flex items-center justify-center`}
                  >
                    <img
                      className="h-full w-full group-hover:scale-125 transition-all"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <h2 className="text-white/90 text-base transition-all font-semibold hover:text-pink-500">
                    {item.name}
                  </h2>
                  <div className="flex w-full xs:h-[2.4pc] justify-between items-center">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-white/50 text-xs">
                        Current Price
                      </span>
                      <b className="flex text-sm text-white/90 items-center gap-1">
                        <FaEthereum />
                        {web3.utils.fromWei(item.price, "ether")}
                      </b>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-xl sm:text-2xl flex gap-3 items-center flex-col justify-center w-full p-4">
                <TbMoodEmpty className="text-pink-500" />
                <h3>NFTs Are not Created</h3>
                <p className="text-base text-white/50 font-normal">
                  Create a nft{" "}
                </p>
              </div>
            )}
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl">My Owned NFTs</h2>
          <div className="flex mt-2 sm:mt-5 flex-row flex-wrap justify-start gap-5">
            {clearNFTData.length != 0 ? (
              clearNFTData.map((item, index) => (
                <Link
                  to={"/myProfile/EditNFT/" + item.NftId}
                  key={index}
                  className={`group transition-all hover:-translate-y-3 rounded-xl flex flex-col gap-2 w-[15pc] bg-darkBlue-500 p-3`}
                >
                  <div className={`flex gap-3 items-center`}>
                    <img
                      className="w-11 rounded-full bg-darkBlue-300 h-11"
                      src="https://nftix-html.vercel.app/assets/img/avatar/avatar2.jpg"
                      alt="error in image"
                    />
                    <div className="flex flex-col">
                      <span className="text-white/50 text-xs line-clamp-1 rounded-md  w-[6pc] h-[1pc]">
                        Created by :
                      </span>{" "}
                      <h2 className="text-white/90 rounded-md w-[9pc] h-[1.5pc]  line-clamp-1 text-sm font-normal">
                        Baby doge #2123ssssssssssss
                      </h2>
                    </div>
                  </div>
                  <div
                    className={`h-[12pc] transition-all relative w-full overflow-hidden rounded-xl flex items-center justify-center`}
                  >
                    <img
                      className="h-full w-full group-hover:scale-125 transition-all"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <h2 className="text-white/90 text-base transition-all font-semibold hover:text-pink-500">
                    {item.name}
                  </h2>
                  <div className="flex w-full xs:h-[2.4pc] justify-between items-center">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-white/50 text-xs">
                        Current Price
                      </span>
                      <b className="flex text-sm text-white/90 items-center gap-1">
                        <FaEthereum />
                        {web3.utils.fromWei(item.price, "ether")}
                      </b>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-xl sm:text-2xl flex gap-3 items-center flex-col justify-center w-full p-4">
                <TbMoodEmpty className="text-pink-500" />
                <h3>NFTs Are not Created</h3>
                <p className="text-base text-white/50 font-normal">
                  Create a nft{" "}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyNFTs;
