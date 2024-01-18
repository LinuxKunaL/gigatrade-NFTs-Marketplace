import React from "react";
import { TbMoodEmpty } from "react-icons/tb";

function Product404({ message, className, subMessage }) {
  return (
    <div
      className={`${className} text-xl sm:text-2xl flex gap-3 items-center flex-col justify-center w-full p-4`}
    >
      <TbMoodEmpty className="text-pink-500" />
      <h3 className="text-center font-semibold text-lg text-white/80">
        {message}
      </h3>
      <p className="text-center text-base text-white/50 font-normal">
        {subMessage}
      </p>
    </div>
  );
}

export default Product404;
