import { toast } from "react-hot-toast";

const WarringToast = (message) =>
  toast.custom((t) => (
    <div
      id="toast-default"
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } flex items-center w-full max-w-xs p-4 text-gray-500 bg-white  rounded-lg shadow dark:bg-darkBlue-500 backdrop-blur-lg dark:border-darkBlue-500 border-gray-100 border-[1px]`}
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-white-500 bg-blue-100 rounded-lg dark:bg-yellow-400 dark:text-blue-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.0007 0.5C8.12182 0.5 6.28509 1.05717 4.72282 2.10104C3.16056 3.14491 1.94291 4.62861 1.22388 6.36451C0.504848 8.10041 0.316717 10.0105 0.683277 11.8534C1.04984 13.6962 1.95463 15.3889 3.28322 16.7175C4.61182 18.0461 6.30456 18.9509 8.14738 19.3175C9.9902 19.684 11.9003 19.4959 13.6362 18.7769C15.3721 18.0578 16.8558 16.8402 17.8997 15.2779C18.9436 13.7156 19.5007 11.8789 19.5007 10C19.4981 7.48126 18.4963 5.06643 16.7153 3.28541C14.9343 1.50439 12.5195 0.502647 10.0007 0.5ZM10.7833 4.151L10.5963 12.651H9.30426L9.11726 4.151H10.7833ZM9.27026 15.796C9.47426 16 9.7236 16.102 10.0183 16.102C10.3016 16.102 10.5396 16 10.7323 15.796C10.9363 15.592 11.0383 15.3427 11.0383 15.048C11.0383 14.7533 10.9363 14.504 10.7323 14.3C10.5396 14.096 10.3016 13.994 10.0183 13.994C9.7236 13.994 9.47426 14.096 9.27026 14.3C9.06626 14.504 8.96426 14.7533 8.96426 15.048C8.96426 15.3427 9.06626 15.592 9.27026 15.796Z"
            fill="white"
          />
        </svg>
        <span className="sr-only">Fire icon</span>
      </div>
      <div className="ms-3 text-sm font-normal">{message}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-600 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-transparent p-1.5 hover:bg-gray-400 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 transition-all dark:hover:text-white/50 dark:bg-darkBlue-600 dark:hover:bg-darkBlue-600/60"
        onClick={() => toast.dismiss(t.id)}
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  ));

export { WarringToast };
