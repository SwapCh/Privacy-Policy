import React from "react";

interface UseInfoItemProps {
  imageUrl: string;
  text: string;
  bubbleImageUrl: string;
  isLarge?: boolean;
}

const UseInfoItem: React.FC<UseInfoItemProps> = ({
  imageUrl,
  text,
  bubbleImageUrl,
  isLarge = false,
}) => {
  return (
    <div className="flex flex-wrap gap-4 mt-3 w-full text-lg font-medium leading-normal text-zinc-800 max-md:flex-col max-md:items-center">
      <img
        src={imageUrl}
        alt="Icon"
        className="object-contain w-[78px] h-[78px] flex-shrink-0 max-md:w-[60px] max-md:h-[60px]"
      />
      <div
        className={`flex relative flex-col grow px-5 py-5 my-auto rounded-[47px] w-fit max-w-full ${
          isLarge ? "min-h-[103px]" : "min-h-[61px]"
        } max-md:px-4 max-md:py-4 max-md:text-base max-md:text-center`}
      >
        <img
          src={bubbleImageUrl}
          alt="Bubble background"
          className="object-cover absolute inset-0 size-full"
        />
        <span className="relative z-10">{text}</span>
      </div>
    </div>
  );
};

export default UseInfoItem;
