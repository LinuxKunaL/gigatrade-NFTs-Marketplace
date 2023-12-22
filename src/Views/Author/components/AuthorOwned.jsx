import React from "react";
import { ProductNFT } from "../../../components/UiComponents/ProductNFT";

function AuthorOwned() {
  const DummySkeletonData = [1, 2, 3, 4, 5, 6, 1, 2, 3];

  return (
    <div id="Owned" className="flex flex-wrap gap-4 justify-evenly">
      {DummySkeletonData.map((item, index) => (
        <ProductNFT kay={index} data={item} />
      ))}
    </div>
  );
}

export default AuthorOwned;
