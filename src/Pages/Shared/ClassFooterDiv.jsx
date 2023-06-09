import React from 'react';
import classFooterImg from '../../assets/classFooterImg.png';

const ClassFooterDiv = () => {
    return (
        <div className="p-16 bg-gradient-to-r from-[#f7ce68] to-[#fbab7e] text-white gap-8 h-screen flex justify-center items-center">
        <div className="w-1/2 space-y-8">
          <h2 className="text-3xl font-bold">Become a Member and Get Discounts & Priority Registration for Any Class</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio accusamus deleniti modi fugit, vero officiis voluptatibus aut harum odit consequatur culpa laborum deserunt hic, atque delectus tempora officia dolore natus a sequi tenetur quo eligendi! Dicta quisquam voluptates assumenda quod excepturi facere. Iste, veniam rem?</p>
          <button className="uppercase bg-white text-[#25efcb] px-8 py-4 text-lg font-semibold rounded-3xl">become a member</button>
        </div>
        <div className="w-1/2">
        <img src={classFooterImg} alt="" />
        </div>
      </div>
    );
};

export default ClassFooterDiv;