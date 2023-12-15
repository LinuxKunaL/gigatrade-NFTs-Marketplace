import React from "react";

function Button({ text, icon = "" }) {
  return (
    <button
      type="button"
      className="py-2.5 px-5  text-sm font-medium flex items-center gap-4 text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-purple-600 dark:text-gray-100 border-none dark:hover:text-white dark:hover:bg-purple-700 bg-gradient-to-r from-purple-800 to-pink-600"
    >
      {icon + text}
    </button>
  );
}

export default Button;
