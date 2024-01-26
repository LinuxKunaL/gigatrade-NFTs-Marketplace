import { toast } from "react-hot-toast";

var removeCss = `.go685806154 {display: none !important;}.go2072408551{padding: 0 !important;color: transparent !important;margin: 0 !important;max-width: 0 !important;box-shadow: none !important;}`;

const promiseToast = (
  loadingMessage,
  SuccessMessage,
  ErrorMessage,
  calledFunction,
  parameter
) => {
  const resolveData = toast.promise(calledFunction(parameter), {
    loading: HTMLelementForLoading(loadingMessage),
    success: HTMLelementForSuccess(SuccessMessage),
    error: HTMLelementForError(ErrorMessage),
  });
  return resolveData;
};

const HTMLelementForSuccess = (message) => (
  <div
    id="toast-default"
    className={`flex items-center w-full max-w-xs p-4 text-gray-500 bg-white  rounded-lg shadow dark:bg-darkBlue-500 backdrop-blur-lg dark:border-darkBlue-500 border-gray-100 border-[1px]`}
    role="alert"
  >
    <style>{removeCss}</style>
    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-blue-100 rounded-lg dark:bg-green-800 dark:text-blue-200">
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
      <span className="sr-only">Fire icon</span>
    </div>
    <div className="ms-3 text-sm font-normal w-max">{message}</div>
  </div>
);

const HTMLelementForLoading = (message) => (
  <div
    id="toast-default"
    className={`flex items-center w-full max-w-xs p-4 text-gray-500 bg-white  rounded-lg shadow dark:bg-darkBlue-500 backdrop-blur-lg dark:border-darkBlue-500 border-gray-100 border-[1px]`}
    role="alert"
  >
    <style>{removeCss}</style>

    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-blue-100 rounded-lg dark:bg-white/20 dark:text-white/80">
      <div
        style={{
          width: "12px",
          height: "12px",
          boxSizing: "border-box",
          border: "2px solid",
          borderRadius: "100%",
          borderColor: "#e0e0e0",
          borderRightColor: "#616161",
          animation: "go1268368563 1s linear infinite",
        }}
      ></div>
      <span className="sr-only">Fire icon</span>
    </div>
    <div className="ms-3 text-sm font-normal w-max">{message}</div>
  </div>
);

const HTMLelementForError = (message) => (
  <div
    id="toast-default"
    className={`flex items-center w-full max-w-xs p-4 text-gray-500 bg-white  rounded-lg shadow dark:bg-darkBlue-500 backdrop-blur-lg dark:border-darkBlue-500 border-gray-100 border-[1px]`}
    role="alert"
  >
    <style>{removeCss}</style>

    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
      </svg>
      <span className="sr-only">Error icon</span>
    </div>
    <div className="ms-3 text-sm font-normal w-max">
      {message}
    </div>
  </div>
);

export { promiseToast };
