import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./Views/Home";
import ExploreNFTs from "./Views/ExploreNFTs";
import NftDetail from "./components/NftDetail";
import CollectionDetail from "./components/CollectionDetail";
import Author from "./Views/Author";
import MyProfile from "./Views/MyProfile/MyProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <div className="container h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreNFTs />} />
          <Route path="/nftDetail" element={<NftDetail />} />
          <Route path="/collectionDetail" element={<CollectionDetail />} />
          <Route path="/author" element={<Author />} />
          <Route path="/myProfile" element={<MyProfile />}>
            <Route path="addNFT" />
            <Route path="myNFTs" />
            <Route path="setting" />
            <Route path="myFavorites" />
            <Route path="myCollection" />
            <Route path="addCollection" />
            <Route path="editCollection"/>
          </Route>
        </Routes>
        <Footer />
      </div>
    </React.StrictMode>
  </BrowserRouter>
);
