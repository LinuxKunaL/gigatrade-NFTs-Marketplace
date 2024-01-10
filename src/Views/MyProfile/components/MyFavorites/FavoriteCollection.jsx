import React from "react";
import { ProductCollection } from "../../../../components/UiComponents/ProductCollection";

function FavoriteCollection({ Collections }) {
  return (
    <div className="text-white/90 mt-10 text-2xl gap-5 flex flex-col font-semibold">
      <h2 className="text-2xl">Favorite Collections</h2>
      <div className="flex mt-5 flex-row flex-wrap gap-5">
        {Collections
          ? Collections.map((item, index) => (
              <ProductCollection
                link={"/collectionDetail/"}
                kay={index}
                item={item}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default FavoriteCollection;
