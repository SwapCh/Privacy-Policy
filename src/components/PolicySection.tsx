import React from "react";

interface PolicySectionProps {
  title: string;
  imageUrl: string;
  customClasses?: string;
}

const PolicySection: React.FC<PolicySectionProps> = ({
  title,
  imageUrl,
  customClasses = "",
}) => {
  return (
    <div
      className={`flex relative flex-col px-8 py-2 mt-8 text-xl font-semibold leading-tight text-white whitespace-nowrap ${customClasses}`}
    >
      <img
        src={imageUrl}
        alt="Section background"
        className="object-cover absolute inset-0 size-full"
      />
      {title || "Hello"}
    </div>
  );
};

export default PolicySection;
