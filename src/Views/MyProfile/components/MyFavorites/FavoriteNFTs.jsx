import React from "react";
import { ProductNFT } from "../../../../components/UiComponents/ProductNFT";

function FavoriteNFTs({ NFTs }) {
  console.log(NFTs);
  return (
    <div className="text-white/90 text-2xl gap-10 flex flex-col font-semibold overflow-hidden w-full">
      <h2>Favorite NFTs</h2>
      <div className="flex flex-row flex-wrap gap-5">
        {NFTs
          ? NFTs.map((item, index) => <ProductNFT kay={index} data={item} />)
          : null}
      </div>
    </div>
  );
}

export default FavoriteNFTs;
