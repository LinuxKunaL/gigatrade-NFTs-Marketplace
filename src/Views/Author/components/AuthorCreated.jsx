import React from "react";
import { ProductNFT } from "../../../components/UiComponents/ProductNFT";

function AuthorCreated({ NFTs }) {
  console.log(NFTs);
  return (
    <div id="created" className="flex flex-wrap flex-row gap-4">
      {NFTs
        ? NFTs.map((item, index) => <ProductNFT kay={index} data={item} />)
        : null}
    </div>
  );
}

export default AuthorCreated;
