import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useGetRole from "../hooks/useGetRole";

const ClassCard = ({ cls }) => {
  const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();
    const enrolledStudents = cls?.enrolledStudents?.length || 0;
  const {
    className,
    image,
    instructorName,
    availableSeats,
    price,
    _id,
  } = cls;
  const {user} = useContext(AuthContext);
  const [role] = useGetRole();
  const [fav, setFav] = useState(false)
  
  // axiosSecure.get(`/enrolledClasses?id=${_id}`)
  // .then((res) => {
  //   const payData = res.data;
  //   setEnrolledStudents(payData.length);
  //   setLoading(false);
  // });
  
  const handleClass=()=>{
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

  // const isClassEnrolled ={
  //   if(enrolledStudents){
  //     const isClassEnrolled=()=>{
  //       const existingClass = enrolledStudents?.find(user?.email);
  //       return existingClass;
  //     }
  //     return isClassEnrolled;
  //   }
  // }
  return (
    <div className={(enrolledStudents > 0) && (availableSeats - enrolledStudents == 0) ? `bg-red-300 card lg:card-side shadow-xl` : `bg-base-100 card lg:card-side shadow-xl`}>
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
        <button onClick={()=>handleClass()} className="btn btn-primary" disabled={(availableSeats == 0) || fav || role === 'Instructor' || role === 'Admin' ? true:false}>Select</button>
      </div>
    </div>
  );
};

export default ClassCard;
