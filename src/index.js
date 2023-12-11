import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div class="container h-full">
      <Navbar />
      {/* <div className=" flex flex-col justify-center"> */}
      <Home />
      {/* </div> */}
    </div>
  </React.StrictMode>
);
