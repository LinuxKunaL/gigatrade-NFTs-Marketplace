import React, { useEffect, useState } from "react";
import { fetchNFT } from "../../../hooks/ContractControllers/useFetchNFTByUser";
import { ProductNFT } from "../../../components/UiComponents/ProductNFT";
import Product404 from "../../../components/UiComponents/Product404";

function AuthorOwned({ NFTs }) {
  return (
    <div id="Owned" className="flex w-full flex-wrap flex-row gap-4">
      {NFTs
        ? NFTs.map((item, index) => <ProductNFT kay={index} data={item} />)
        : null}
      <Product404
        message="User doesn't have Owned NFTs"
        subMessage="collection not found 404"
      />
    </div>
  );
}

export default AuthorOwned;
