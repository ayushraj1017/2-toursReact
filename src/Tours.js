import React from "react";
import Description from "./Description";
import Image from "./Image";
import Tour from "./Tour";

const Tours = ({ tours, setTours, setReadMore, readMore, handleDelete }) => {
  return (
    <div>
      <h1 className="text-center border border-blue-600 ">Our Tours</h1>

      <div className="section ">
        {tours.map((tour) => {
          const { id, name, info, image, price } = tour;
          return (
            <Tour
              id={id}
              name={name}
              info={info}
              image={image}
              price={price}
              handleDelete={handleDelete}
              readMore={readMore}
              setReadMore={setReadMore}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Tours;
