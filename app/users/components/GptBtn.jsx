function GptBtn() {
  return (
    <div className="md:hidden flex p-1 max-w-[375px] my-6 mx-auto  rounded-lg bg-slate-200">
      <button type="button" className="w-full cursor-pointer">
        <div className="group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100">
          <span className="relative max-[370px]:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transition-colors text-brand-green"
            >
              <path d="M9.586 1.526A.6.6 0 0 0 8.553 1l-6.8 7.6a.6.6 0 0 0 .447 1h5.258l-1.044 4.874A.6.6 0 0 0 7.447 15l6.8-7.6a.6.6 0 0 0-.447-1H8.542l1.044-4.874Z"></path>
            </svg>
          </span>
          <span className="truncate text-sm font-medium md:pr-1.5">
            GPT-3.5
          </span>
          <svg
            className="h-4 w-4 toggle-item-button-open ml-0.5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
          </svg>
          <svg
            className="hidden h-4 w-4 toggle-item-button-closed ml-0.5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </div>
      </button>

      <button type="button" className="w-full cursor-pointer">
        <div className="group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-transparent text-gray-500 hover:text-gray-800 hover:dark:text-gray-100">
          <span className="relative max-[370px]:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transition-colors group-hover/button:text-brand-purple"
            >
              <path
                d="M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506L5.56 4.546Zm5.6 6.4a.8.8 0 0 0-1.519 0l-.147.44a.8.8 0 0 1-.505.507l-.441.146a.8.8 0 0 0 0 1.519l.44.146a.8.8 0 0 1 .507.506l.146.441a.8.8 0 0 0 1.519 0l.147-.44a.8.8 0 0 1 .506-.507l.44-.146a.8.8 0 0 0 0-1.519l-.44-.147a.8.8 0 0 1-.507-.505l-.146-.441Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          <span className="truncate mr-2 text-sm font-medium md:pr-1.5">
            GPT-4
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 m-1  h-4  transition-colors sm:ml-0 group-hover/options:text-gray-500 !text-gray-500 -ml-2 group-hover/button:text-brand-purple"
          >
            <path d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"></path>
          </svg>
          <svg
            className="h-4 hidden w-4 toggle-item-button-closed ml-0.5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </div>
      </button>
    </div>
  );
}

export default GptBtn;
