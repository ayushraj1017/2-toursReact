import React, { useState } from "react";
import Description from "./Description";
import Image from "./Image";

const Tour = ({
  id,
  name,
  info,
  image,
  price,
  handleDelete,
  readMore,
  setReadMore,
}) => {
  return (
    <div key={id}>
      <Image image={image} />

      <Description
        name={name}
        info={info}
        readMore={readMore}
        price={price}
        setReadMore={setReadMore}
      />

      <div className="flex justify-center">
        <button
          onClick={() => {
            handleDelete(id);
          }}
          className="p-4 m-4 bg-yellow-500 text-yellow-100 "
        >
          Not Interest
        </button>
      </div>
      <hr className="mb-2 bg-black text-black  text-xl border-b-4 border-black" />
    </div>
  );
};

export default Tour;
