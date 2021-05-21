import React from "react";

const Image = ({ image }) => {
  return (
    <div className="flex justify-center">
      <img
        className="rounded-2xl shadow-lg object-fit"
        src={image}
        width="25%"
      />
    </div>
  );
};

export default Image;
