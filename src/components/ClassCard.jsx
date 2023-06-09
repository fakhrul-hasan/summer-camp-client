import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useGetRole from "../hooks/useGetRole";
import useSelectedClass from "../hooks/useSelectedClass";

const ClassCard = ({ cls }) => {
    const location = useLocation();
    const navigate = useNavigate();
  const {
    className,
    image,
    instructorName,
    availableSeats,
    price,
    _id
  } = cls;
  const {user} = useContext(AuthContext);
  const [role] = useGetRole();
  const [axiosSecure] = useAxiosSecure();
  const [fav, setFav] = useState(false)
  const [classes] = useSelectedClass();
  
  const handleClass=cls=>{
    if(!user){
      Swal.fire({
        title: 'Do you want to login?',
        text: "You've to login first!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {
           return navigate('/login');
        }
      })
    }
    const selectedClass = {classId: _id, className, image, price, email: user?.email}
    axiosSecure.post('/selectedClasses', selectedClass)
    .then(data=>{
      if(data.data.insertedId){
        setFav(true);
      }
    })
  }
  const isClassSelected=id=>{
    const existingClass = classes.find(c=> c.classId == id);
    return existingClass;
  }
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
        <button onClick={()=>handleClass(cls)} className="btn btn-primary" disabled={isClassSelected(cls._id) || fav || role === 'Instructor' || role === 'Admin' ? true:false}>Select</button>
      </div>
    </div>
  );
};

export default ClassCard;
