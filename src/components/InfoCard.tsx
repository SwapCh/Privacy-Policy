import React from "react";

interface InfoCardProps {
  imageUrl?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ imageUrl }) => {
  return (
    <div className="w-3/12 max-md:ml-0 max-md:w-full">
      <img
        src={imageUrl}
        alt="Information card"
        className="object-contain grow shrink-0 max-w-full rounded-md aspect-[0.62] shadow-[0px_4px_34px_rgba(0,0,0,0.19)] w-[223px] max-md:mt-3.5"
      />
    </div>
  );
};

export default InfoCard;
