import React from "react";
import { ProductCollection } from "../../../components/UiComponents/ProductCollection";
import Product404 from "../../../components/UiComponents/Product404";

function AuthorCollections() {
  const DummySkeletonData = [1, 2, 3, 4, 5, 6, 1, 2, 3];

  return (
    <div className="flex flex-wrap gap-4 justify-evenly">
      {/* {DummySkeletonData.map((item, index) => (
        <ProductCollection kay={index} data={item} />
      ))} */}
      <Product404
        message="User doesn't have Collections"
        subMessage="collection not found 404"
      />
    </div>
  );
}

export default AuthorCollections;
