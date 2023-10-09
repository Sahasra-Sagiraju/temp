import React from "react";

const ZPatternCard = ({ title, tagline, imgURL, invert }) => {
  const gridColsClass = invert ? "grid-cols-[5fr_4fr]" : "grid-cols-[4fr_5fr]";
  return (
    <div className={`p-4 max-w-[800px] mx-auto grid ${gridColsClass} gap-20`}>
      <div
        className={`flex flex-col gap-3 row-start-1 col-start-${
          invert ? 2 : 1
        }`}
      >
        <h2 className="text-5xl font-light">{title}</h2>
        <p className="text-lg">{tagline}</p>
        <a
          href="#"
          className="mt-12 bg-primary text-white font-light px-16 py-2 rounded-full self-start"
        >
          Try now
        </a>
      </div>
      <div
        style={{
          background: `url(${imgURL})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className={`row-start-1 col-start-${
          invert ? 1 : 2
        } bg-contain bg-no-repeat`}
      ></div>
    </div>
  );
};

export default ZPatternCard;
