import React from "react";

const CompanyCard = ({ imgURL, companyName }) => {
  return (
    <div className="inline-block py-2 px-4 border-[1px] border-gray-300">
      <span className="inline-block mb-2">Client Name</span>
      <img src={imgURL} alt={`${companyName} logo`} className="" />
    </div>
  );
};

export default CompanyCard;
