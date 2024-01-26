import React from "react";
import { ProductNFT } from "../../../components/UiComponents/ProductNFT";
import Product404 from "../../../components/UiComponents/Product404";

function AuthorCreated({ NFTs }) {
  return (
    <div id="created" className="flex w-full flex-wrap flex-row gap-4">
      {NFTs ? (
        NFTs.length > 0 ? (
          NFTs.map((item, index) => <ProductNFT link="/nft/" button="Buy" kay={index} data={item} />)
        ) : (
          <Product404
            message="User doesn't have Created NFTs"
            subMessage="NFTs not found 404"
          />
        )
      ) : null}
    </div>
  );
}

export default AuthorCreated;
