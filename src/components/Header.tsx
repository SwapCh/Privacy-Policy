import React from "react";

const Header = () => {
  return (
    <header className="flex overflow-hidden flex-wrap gap-5 justify-between py-2.5 pr-16 pl-3.5 w-full bg-white shadow-[0px_-8px_62px_rgba(0,0,0,0.12)] max-md:pr-5 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9dda10e3c47d42fed5e2667db6af41806ef1e7b5?placeholderIfAbsent=true"
        alt="Agrim Fincap Logo"
        className="object-contain shrink-0 max-w-full aspect-[3.44] w-[117px]"
      />
      <div className="flex gap-8 self-start mt-3 max-md:max-w-full">
        <div className="flex flex-auto gap-2.5 items-center text-sm font-medium text-sky-800">
          <div className="flex gap-1.5 items-center self-stretch my-auto whitespace-nowrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe7d39449502053fba1b7f1a628e6b2d88af10e3?placeholderIfAbsent=true"
              alt="Email icon"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
            />
            <span className="self-stretch my-auto w-[156px]">
              care@agrimfincap.com
            </span>
          </div>
          <div className="shrink-0 self-stretch my-auto w-0 h-3 border border-sky-800 border-solid" />
          <div className="flex justify-between items-center self-stretch my-auto w-[121px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac3f5bea8b03cef4cf16523613c073bad1b505d9?placeholderIfAbsent=true"
              alt="Phone icon"
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[17px]"
            />
            <span className="self-stretch my-auto w-[110px]">1800 3092760</span>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center self-start">
          <a href="#" aria-label="Social media link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e30a5d5f1834a93c464e694884aaa11d62e971c4?placeholderIfAbsent=true"
              alt="Social media icon"
              className="object-contain shrink-0 self-stretch my-auto w-3 aspect-[0.86]"
            />
          </a>
          <a href="#" aria-label="Social media link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8394d40a81fe5b47d8ea04af65b14b8c3ceaf639?placeholderIfAbsent=true"
              alt="Social media icon"
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.07] w-[15px]"
            />
          </a>
          <a href="#" aria-label="Social media link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8442390ea8689754158ba46ad54c33d9e0a92eaf?placeholderIfAbsent=true"
              alt="Social media icon"
              className="object-contain shrink-0 self-stretch my-auto w-3.5 aspect-square"
            />
          </a>
          <a href="#" aria-label="Social media link">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6bd1bccceec0fff0c036d43a47da3efcc5742a1?placeholderIfAbsent=true"
              alt="Social media icon"
              className="object-contain shrink-0 self-stretch my-auto aspect-[1.07] w-[15px]"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
