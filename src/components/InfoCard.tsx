import React from "react";

interface InfoCardProps {
  imageUrl?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ imageUrl }) => {
  return (
    <div className="w-3/12 max-md:w-full max-md:px-2">
      <img
        src={imageUrl}
        alt="Information card"
        className="object-contain w-full h-auto rounded-md shadow-[0px_4px_34px_rgba(0,0,0,0.19)] max-md:max-w-[80%] max-md:mx-auto"
      />
    </div>
  );
};

export default InfoCard;
