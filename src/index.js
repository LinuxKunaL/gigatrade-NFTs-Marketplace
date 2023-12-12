import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ExploreNFTs from "./pages/ExploreNFTs";
import NftDetail from "./components/NftDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <div class="container h-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreNFTs />} />
          <Route path="/nftDetail" element={<NftDetail />} />
        </Routes>
        <Footer />
      </div>
    </React.StrictMode>
  </BrowserRouter>
);
