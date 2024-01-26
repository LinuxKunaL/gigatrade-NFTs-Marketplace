import React, { useEffect, useState } from "react";
import "./assets/styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./Views/Home/Home";
import Explore from "./Views/ExploreShop/Explore";
import Collection from "./Views/ProductOverview/Collection";
import Author from "./Views/Author/Author";
import MyProfile from "./Views/MyProfile/MyProfile";
import ShopNFTs from "./Views/ExploreShop/Components/ShopNFTs";
import Nft from "./Views/ProductOverview/Nft";
import ProtectRoute from "./components/ProtectRoute";

import { Connect, WalletInstance } from "./hooks/useConnectWallet";
import About from "./Views/Other/About";
import PrivacyPolicy from "./Views/Other/PrivacyPolicy";

function App() {
  const [Reload, setReload] = useState(0);

  try{
    WalletInstance.on("accountsChanged", () => setReload(Reload + 1));
  } catch(error){
    console.log("Metamask is not found");
  }

  useEffect(() => {
    if (localStorage.getItem("IsMetamaskConnect")) {
      Connect();
    }
  }, [Reload]);
  
  return (
    // <React.StrictMode>
    <BrowserRouter>
      <div className="flex justify-center items-center min-h-full max-w-full dark:bg-darkBlue-700">
        <div className="container w-full h-full">
          <Navbar /> <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />}>
              <Route index element={<ShopNFTs />} />
              <Route path="collections" />
            </Route>
            <Route path="/nft/:id" element={<Nft />} />
            <Route path="/collection/:id" element={<Collection />} />
            <Route path="/author/:id" element={<Author />} />
            <Route
              path="/myProfile"
              element={<ProtectRoute Component={MyProfile} />}
            >
              <Route path="addNFT" />
              <Route path="editNFT/:id" />
              <Route path="myNFTs" />
              <Route path="setting" />
              <Route path="myFavorites" />
              <Route path="myCollection" />
              <Route path="addCollection" />
              <Route path="editCollection/:id" />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
    // </React.StrictMode>
  );
}

export default App;
