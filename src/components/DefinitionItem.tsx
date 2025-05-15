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
    <div className="flex flex-col pt-2.5 pl-8 mt-4 w-full rounded-none max-w-[893px] max-md:pl-5 max-md:max-w-full">
      <div className="flex gap-5 self-start py-1 rounded-2xl bg-blue-300 bg-opacity-20">
        <div className="text-2xl text-white">{number}</div>
        <div className="my-auto text-lg font-semibold basis-auto text-neutral-700">
          {title}
        </div>
      </div>
      <div className="mt-3 ml-9 text-lg leading-7 text-zinc-800 max-md:max-w-full">
        {description}
      </div>
    </div>
  );
};

export default DefinitionItem;
