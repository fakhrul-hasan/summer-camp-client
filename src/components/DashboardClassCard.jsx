import React from "react";

const DashboardClassCard = ({cls, handleStatus}) => {
    const {className, image, instructorName, instructorEmail, availableSeats, price, status} = cls;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{className}</h2>
        <p><span className="font-semibold">Instructor Name: </span>{instructorName}</p>
        <p><span className="font-semibold">Instructor Email: </span>{instructorEmail}</p>
        <p><span className="font-semibold">Seats: </span>{availableSeats}</p>
        <p><span className="font-semibold">Price: </span>${price}</p>
        <p><span className="font-semibold">Status: </span>{status ? status : 'Pending'}</p>
        <div className="card-actions justify-between">
          <button onClick={()=>handleStatus(cls, 'Approve')} className="btn btn-success" disabled={cls?.status === 'Approve' ? true:false}>Approve</button>
          <button onClick={()=>handleStatus(cls, 'Deny')} className="btn btn-error" disabled={cls?.status === 'Deny' ? true:false}>Deny</button>
          <button className="btn btn-info">Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardClassCard;
