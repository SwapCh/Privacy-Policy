import React from "react";

interface DataSecurityItemProps {
  title: string;
  description: string;
}

const DataSecurityItem: React.FC<DataSecurityItemProps> = ({
  title,
  description,
}) => {
  return (
    <div className="mt-4">
      <h3 className="text-xl font-semibold leading-tight text-sky-700">
        {title}
      </h3>
      <p className="text-base font-medium leading-loose text-neutral-600">
        {description}
      </p>
    </div>
  );
};

export default DataSecurityItem;
