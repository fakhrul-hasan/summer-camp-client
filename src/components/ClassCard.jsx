import React from "react";

const ClassCard = ({ cls }) => {
  const {
    className,
    image,
    instructorName,
    instructorEmail,
    availableSeats,
    price,
  } = cls;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="p-8">
        <img src={image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p>
          <span className="font-semibold">Instructor Name: </span>
          {instructorName}
        </p>
        <div className="flex">
          <p>
            <span className="font-semibold">Available Seats: </span>
            {availableSeats}
          </p>
          <p>
            <span className="font-semibold">Price: </span>
            ${price}
          </p>
        </div>
      </div>
      <div className="flex items-center p-8">
        <button className="btn btn-primary">Select</button>
      </div>
    </div>
  );
};

export default ClassCard;
