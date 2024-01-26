import React from "react";
import { ProductCollection } from "../../../components/UiComponents/ProductCollection";
import Product404 from "../../../components/UiComponents/Product404";

function AuthorCollections({ CollectionsData }) {
  return (
    <div className="flex w-full flex-wrap flex-row gap-4">
      {CollectionsData.length > 0 ? (
        CollectionsData.map((item, index) => (
          <ProductCollection width="20pc" link="/collection/" kay={index} item={item} />
        ))
      ) : (
        <Product404
          message="User doesn't have Collections"
          subMessage="collection not found 404"
        />
      )}
    </div>
  );
}

export default AuthorCollections;
