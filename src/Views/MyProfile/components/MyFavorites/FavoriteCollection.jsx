import React from "react";
import { ProductCollection } from "../../../../components/UiComponents/ProductCollection";
import Product404 from "../../../../components/UiComponents/Product404";

function FavoriteCollection({ Collections }) {
  return (
    <div className="text-white/90 mt-10 text-2xl gap-5 flex flex-col font-semibold">
      <h2 className="text-2xl">Favorite Collections</h2>
      <div className="flex mt-5 flex-row flex-wrap gap-5">
        {Collections ? (
          Collections.length > 0 ? (
            Collections.map((item, index) => (
              <ProductCollection
                width="20pc"
                link="/collection/"
                kay={index}
                item={item}
              />
            ))
          ) : (
            <Product404
              message="There is not Favorite Collections"
              subMessage="Explore the collections"
            />
          )
        ) : (
          <Product404
            message="There is not Favorite Collections"
            subMessage="Explore the collections"
          />
        )}
      </div>
    </div>
  );
}

export default FavoriteCollection;
