import React from "react";
import logo from "../assets/images/logo.png";
import { FaEthereum, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="rounded-xl mt-10 dark:bg-darkBlue-600">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img src={logo} className="h-8 me-3" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Gigatrade
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Details
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href={`${process.env.REACT_APP_BLOCK_EXPLORE_URL}/token/${process.env.REACT_APP_CONTRACT_ADDRESS}`}
                    target="_blank"
                    className="hover:underline"
                  >
                    Contract
                  </a>
                </li>
                <li>
                  <a
                    href={`${process.env.REACT_APP_BLOCK_EXPLORE_URL}/address/${process.env.REACT_APP_CONTRACT_OWNER_ADDRESS}`}
                    target="_blank"
                    className="hover:underline"
                  >
                    Owner
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    target="_blank"
                    href="https://github.com/LinuxKunaL"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://kunallokhande.vercel.app/"
                    className="hover:underline"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="privacyPolicy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
        <div className=" bg-gradient-to-bl from-darkBlue-100 to-pink-500 h-[0.1pc] opacity-25 m-6" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="/" className="hover:underline">
              GigaTrade™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              target="_blank"
              href={`${process.env.REACT_APP_BLOCK_EXPLORE_URL}/address/${process.env.REACT_APP_CONTRACT_OWNER_ADDRESS}`}
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaEthereum />
              <span className="sr-only">etherscan page</span>
            </a>
            <a
              target="_blank"
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaXTwitter />
              <span className="sr-only">x page</span>
            </a>
            <a
              href="https://github.com/LinuxKunaL"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <FaGithub />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
