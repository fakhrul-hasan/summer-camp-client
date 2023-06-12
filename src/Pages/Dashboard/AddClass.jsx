import { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle";
import { Helmet } from "react-helmet";

const img_hosting_token = import.meta.env.VITE_Img_Upload_Token;

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const {user} = useContext(AuthContext);
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const file = data.classImage;
    const formData = new FormData();
    formData.append('image', data.classImage);
    fetch(img_hosting_url,{
      method: 'POST',
      body: formData
    })
    .then(res=>res.json())
    .then(imgResponse=>{
      if(imgResponse.success){
        const imgURL = imgResponse.data.display_url;
        const {className, availableSeats, instructorEmail, instructorName, price} = data;
        const newItem = {className, image: imgURL, availableSeats: parseInt(availableSeats), instructorEmail, instructorName, price: parseFloat(price), enrolledStudents: parseInt(0)};
        axiosSecure.post('/classes', newItem)
        .then(data=>{
          if(data.data.insertedId){
            reset();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Class added successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
    })
  };
  return (
    <div>
      <Helmet>
        <title>Dashboard | Add Class</title>
      </Helmet>
      <SectionTitle heading='Add a Class'></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="text-center mt-4">
        <div className="flex gap-2 w-full">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-accent w-full"
              {...register("className", { required: true })}
            />
            {errors.className && <span>Class Name is required</span>}
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <Controller
        name="classImage"
        control={control}
        defaultValue={null}
        render={({ field }) => (
          <input className="file-input file-input-bordered file-input-accent w-full" type="file" onChange={(e) => field.onChange(e.target.files[0])} />
        )}
      />
          </div>
        </div>
        <div className="flex gap-2 w-full">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              className="input input-bordered input-accent w-full"
              readOnly={true}
              {...register("instructorName")}
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              className="input input-bordered input-accent w-full"
              readOnly={true}
              {...register("instructorEmail")}
            />
          </div>
        </div>
        <div className="flex gap-2 w-full">
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              type="number"
              placeholder="available seats"
              className="input input-bordered input-accent w-full"
              {...register("availableSeats", { required: true })}
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Price in (USD)</span>
            </label>
            <input
              type="text"
              placeholder="price here"
              className="input input-bordered input-accent w-full"
              {...register("price", { required: true })}
            />
          </div>
        </div>
        <input
          type="submit"
          value="Add class"
          className="bg-gradient-to-r from-[#25efcb] to-[#1bb3eb] text-white mt-4 px-8 py-4 rounded-3xl w-1/2 cursor-pointer hover:bg-gradient-to-l font-semibold text-lg hover:ease-in-out"
        />
      </form>
    </div>
  );
};

export default AddClass;
