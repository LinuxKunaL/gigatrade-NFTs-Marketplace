import React from "react";
import Product404 from "../../../../components/UiComponents/Product404";
import { ProductNFT } from "../../../../components/UiComponents/ProductNFT";

function FavoriteNFTs({ NFTs }) {
  return (
    <div className="text-white/90 text-2xl gap-10 flex flex-col font-semibold overflow-hidden w-full">
      <h2>Favorite NFTs</h2>
      <div className="flex flex-row flex-wrap gap-5">
        {NFTs ? (
          NFTs.length > 0 ? (
            NFTs.map((item, index) => (
              <ProductNFT kay={index} link="/nft/" button="Buy" data={item} />
            ))
          ) : (
            <Product404
              message="There is not Favorite NFTs"
              subMessage="Explore the NFTs"
            />
          )
        ) : (
          <Product404
            message="There is not Favorite NFTs"
            subMessage="Explore the NFTs"
          />
        )}
      </div>
    </div>
  );
}

export default FavoriteNFTs;
