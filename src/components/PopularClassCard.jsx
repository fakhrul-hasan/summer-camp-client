import React from 'react';

const PopularClassCard = ({cls}) => {
    const {className, image, instructorName, instructorEmail, availableSeats, price} = cls;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{className}</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, vero!</p>
          <div className="card-actions">
          </div>
        </div>
      </div>
    );
};

export default PopularClassCard;