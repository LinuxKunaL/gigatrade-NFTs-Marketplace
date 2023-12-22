import React from "react";
import { ProductNFT } from "../../../components/UiComponents/ProductNFT";

function AuthorLinked() {
  const DummySkeletonData = [1, 2, 3, 4, 5, 6, 1, 2, 3];

  return (
    <div id="Liked" className="flex flex-wrap gap-4 justify-evenly">
      {DummySkeletonData.map((item, index) => (
        <ProductNFT kay={index} data={item} />
      ))}
    </div>
  );
}

export default AuthorLinked;
