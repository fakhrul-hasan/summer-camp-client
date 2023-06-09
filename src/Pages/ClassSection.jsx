import React from "react";

const ClassSection = () => {
  return (
    <div className="bg-[#fafbfc] p-16">
      <h5 className="text-gray-300 text-lg uppercase font-semibold text-center">
        our classes
      </h5>
      <h3 className="text-[#25efcb] text-4xl font-bold text-center">
        Join A Class Today!
      </h3>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassSection;
