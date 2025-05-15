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
    <div className="flex flex-wrap gap-1.5 mt-3 w-full text-lg font-medium leading-none rounded-none text-zinc-800">
      <img
        src={imageUrl}
        alt="Icon"
        className="object-contain shrink-0 aspect-square w-[78px]"
      />
      <div
        className={`flex relative flex-col grow shrink-0 px-5 py-5 my-auto basis-0 min-h-[61px] rounded-[47px] w-fit max-md:max-w-full ${isLarge ? "py-3.5 min-h-[103px]" : ""}`}
      >
        <img
          src={bubbleImageUrl}
          alt="Bubble background"
          className="object-cover absolute inset-0 size-full"
        />
        {text}
      </div>
    </div>
  );
};

export default UseInfoItem;
