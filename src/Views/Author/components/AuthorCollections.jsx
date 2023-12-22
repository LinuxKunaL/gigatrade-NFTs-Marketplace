import React from "react";
import { ProductCollection } from "../../../components/UiComponents/ProductCollection";

function AuthorCollections() {
  const DummySkeletonData = [1, 2, 3, 4, 5, 6, 1, 2, 3];

  return (
    <div className="flex flex-wrap gap-4 justify-evenly">
      {DummySkeletonData.map((item, index) => (
        <ProductCollection kay={index} data={item} />
      ))}
    </div>
  );
}

export default AuthorCollections;
