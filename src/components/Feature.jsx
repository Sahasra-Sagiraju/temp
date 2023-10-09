import React from "react";

const Feature = ({ icon, title, description, extra }) => {
  return (
    <div className="max-w-[255px] mx-auto flex flex-col justify-center items-center gap-3">
      <img src={icon} alt={title} className="inline-block w-12 mx-auto" />
      <h3 className="text-2xl text-gray-900">{title}</h3>
      <p className="text-gray-500 mt-auto">{description}</p>
    </div>
  );
};

export default Feature;
