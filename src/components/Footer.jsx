import React from "react";
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="bg-white mt-10 rounded-lg shadow z-10 relative dark:bg-darkBlue-600 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-8" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                GigaTrade
              </span>
            </a>
            <p className="sm:w-[32pc] text-sm text-white/60">
              GigaTrade is a decentralized NFT marketplace that empowers
              creators and collectors to seamlessly trade unique digital assets
              on the Ethereum blockchain. This project combines the power of
              smart contracts, a robust backend, and an intuitive frontend to
              provide a secure and user-friendly experience.
            </p>
          </div>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white/80 sm:mb-0 dark:text-white/80">
            <li>
              <a href="#" className="hover:text-purple-600 me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600 me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="my-6 h-[1px] sm:mx-auto dark:border-gray-700 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 lg:my-8 opacity-40"></div>
        <span className="block text-sm text-white/80 sm:text-center dark:text-white/60">
          © 2023{" "}
          <a href="/" className="hover:underline">
            GigaTrade™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
