import "./assets/styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Views/Home/Home";
import Explore from "./Views/ExploreShop/Explore";
import CollectionDetail from "./components/CollectionDetail";
import Author from "./Views/Author/Author";
import MyProfile from "./Views/MyProfile/MyProfile";
import ShopNFTs from "./Views/ExploreShop/Components/ShopNFTs";
import Nft from "./Views/ProductOverview/Nft";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <div className="flex justify-center items-center min-h-full max-w-full dark:bg-darkBlue-700">
          <div className="container h-full">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />}>
                <Route index element={<ShopNFTs />} />
                <Route path="collections" />
              </Route>
              <Route path="/nft" element={<Nft />} />
              <Route path="/collectionDetail" element={<CollectionDetail />} />
              <Route path="/author" element={<Author />} />
              <Route path="/myProfile" element={<MyProfile />}>
                <Route path="addNFT" />
                <Route path="myNFTs" />
                <Route path="setting" />
                <Route path="myFavorites" />
                <Route path="myCollection" />
                <Route path="addCollection" />
                <Route path="editCollection" />
              </Route>
            </Routes>
            <Footer />
          </div>
        </div>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
