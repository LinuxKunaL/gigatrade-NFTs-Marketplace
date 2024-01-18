import React from "react";

function PrivacyPolicy() {
  // window.scrollTo(0, 0);
  return (
    <div className="">
      <div className="h-[9pc] flex flex-col gap-3 w-full sm:h-[15pc] items-center justify-center ">
        <h2 className="text-2xl sm:text-3xl dark:text-white/90 font-semibold">
          Privacy Policy
        </h2>
        <div className="flex gap-3 text-sm sm:text-base dark:text-white">
          <span className="dark:text-white/80">Home</span>/
          <span className="dark:text-white/50">privacy Policy</span>
        </div>
      </div>
      <div className="flex p-2 relative gap-10 justify-center flex-col sm:flex-row">
        <div className="w-full sm:w-[20pc] h-min p-6 bg-darkBlue-500 rounded-xl flex flex-col gap-1">
          <li className="text-white/90 hover:text-pink-500 cursor-pointer">
            Introduction
          </li>
          <li className="text-white/90 hover:text-pink-500 cursor-pointer">
            Information We Collect
          </li>
          <li className="text-white/90 hover:text-pink-500 cursor-pointer">
            How We Use Your Information
          </li>
          <li className="text-white/90 hover:text-pink-500 cursor-pointer">
            Information Sharing
          </li>
          <li className="text-white/90 hover:text-pink-500 cursor-pointer">
            Security Measures
          </li>
        </div>
        <div className="bg-gradient-to-r from-purple-800 to-pink-600 absolute bottom-[50%] h-96 w-96 blur-[10pc] opacity-[30%]" />
        <div className="w-full sm:w-[40pc] relative z-10 p-6 bg-darkBlue-500 rounded-xl">
          <p className="flex flex-col gap-2">
            <p className="text-white/90">
              Effective Date Last Updated: 20 jan 24,
            </p>
            <br />
            <b className="text-pink-500 font-semibold text-xl">Introduction</b>
            <p className="text-white/60">
              Welcome to GigaTrade, your premier Ethereum NFT Marketplace. This
              Privacy Policy is designed to inform you about the types of
              information we collect, how we use and protect that information,
              and your choices regarding the collection and use of your data.
              <br />
              <br />
              By using GigaTrade, you agree to the terms outlined in this
              Privacy Policy. Please read this document carefully to understand
              our practices regarding your personal data.
            </p>
            <b className="text-pink-500 font-semibold text-xl">
              Information We Collect
            </b>
            <p className="text-white/60 flex flex-col gap-1 ml-5">
              <li className="font-semibold list-none">
                1 .User Account Information
              </li>
              <ol className="list-disc ml-4">
                <li>
                  When you create an account on GigaTrade, we collect your
                  username, email address, and password
                </li>
                <li>
                  Optionally, you may provide additional profile information
                  such as a profile picture or bio.
                </li>
              </ol>
            </p>
            <p className="text-white/60 flex flex-col gap-1 ml-5">
              <li className="font-semibold list-none">2. Transaction Data</li>
              <ol className="list-disc ml-4">
                <li>
                  GigaTrade operates on the Ethereum blockchain using ERC721
                  tokens. We collect transaction data related to your NFT
                  purchases and sales, including Ethereum wallet addresses
                  involved in the transactions.
                </li>
              </ol>
            </p>
            <b className="text-pink-500 font-semibold text-xl">
              How We Use Your Information
            </b>
            <p className="text-white/60 flex flex-col gap-1 ml-5">
              <li className="font-semibold list-none">1. NFT Transactions</li>
              <ol className="list-disc ml-4">
                <li>
                  We use your transaction data to facilitate NFT purchases and
                  sales on the GigaTrade platform.
                </li>
              </ol>
            </p>
            <p className="text-white/60 flex flex-col gap-1 ml-5">
              <li className="font-semibold list-none">
                2. User Authentication and Security
              </li>
              <ol className="list-disc ml-4">
                <li>
                  Your account information is used for user authentication and
                  to ensure the security of your account.
                </li>
              </ol>
            </p>
            <b className="text-pink-500 font-semibold text-xl">
              Information Sharing
            </b>
            <p className="text-white/60 flex flex-col gap-1 ml-5">
              <li className="font-semibold list-none">1. Public Blockchain</li>
              <ol className="list-disc ml-4">
                <li>
                  Transaction data on the Ethereum blockchain, including ERC721
                  token transfers, is inherently public and can be viewed by
                  anyone.
                </li>
              </ol>
            </p>
            <p className="text-white/60 flex flex-col gap-1 ml-5">
              <li className="font-semibold list-none">2.Legal Requirements:</li>
              <ol className="list-disc ml-4">
                <li>
                  We may disclose your information to comply with legal
                  obligations or respond to law enforcement requests.
                </li>
              </ol>
            </p>
            <b className="text-pink-500 font-semibold text-xl">
              Security Measures
            </b>
            <p className="text-white/60 flex flex-col gap-1 ml-5">
              <ol className="list-disc ml-4">
                <li>
                  GigaTrade implements security measures to protect your
                  personal information from unauthorized access, disclosure,
                  alteration, and destruction. These measures include
                  encryption, access controls, and regular security assessments.
                </li>
              </ol>
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
