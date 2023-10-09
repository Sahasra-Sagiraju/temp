import React from "react";

const TestimonialCard = ({ imgURL, name, designation, testimonialText }) => {
  return (
    <div className="p-6 max-w-[450px] bg-[#252b42] text-white flex flex-col gap-5 rounded-lg justify-self-center self-center">
      <div className="flex gap-3">
        <img src={imgURL} alt={`photo of ${name}`} />
        <div className="flex flex-col gap-1">
          <span className="text-lg">{name}</span>
          <span className="text-sm">{designation}</span>
        </div>
      </div>
      <p>{testimonialText}</p>
    </div>
  );
};

export default TestimonialCard;
