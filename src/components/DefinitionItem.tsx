import React from "react";

interface DefinitionItemProps {
  number: string;
  title: string;
  description: string;
}

const DefinitionItem: React.FC<DefinitionItemProps> = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col pt-2.5 pl-8 mt-4 w-full rounded-none max-w-[893px] max-md:pl-4 max-md:pr-4">
      <div className="flex gap-5 self-start py-1 px-3 rounded-2xl bg-blue-300 bg-opacity-20 max-md:flex-wrap">
        <div className="text-2xl text-white max-md:text-xl">{number}</div>
        <div className="my-auto text-lg font-semibold text-neutral-700 max-md:text-base max-md:flex-1">
          {title}
        </div>
      </div>
      <div className="mt-3 ml-9 text-lg leading-7 text-zinc-800 max-md:ml-4 max-md:text-base max-md:leading-6">
        {description}
      </div>
    </div>
  );
};

export default DefinitionItem;
