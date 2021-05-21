import React from "react";

const Description = ({ name, info, readMore, price, setReadMore }) => {
  return (
    <div className="text-center">
      <h2>{name}</h2>
      <small>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <a
          onClick={() => setReadMore(!readMore)}
          className="text-blue-500 cursor-pointer"
        >
          {readMore ? "show less" : "read more"}
        </a>
      </small>
      <h4 className=" bg-red-100 text-red-900 ">${price}</h4>
    </div>
  );
};

export default Description;
