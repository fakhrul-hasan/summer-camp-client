import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle";
import { useLocation } from "react-router-dom";

const img_hosting_token = import.meta.env.VITE_Img_Upload_Token;

const UpdateAClass = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const className = searchParams.get("className");
  const seats = searchParams.get("seats");
  const price = searchParams.get("price");
  const id = searchParams.get("id");
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
          const {
            className,
            availableSeats,
            price,
          } = data;
          const newItem = {
            className,
            availableSeats: parseInt(availableSeats),
            price: parseFloat(price),
          };
          axiosSecure.patch(`/classes/${id}`, newItem).then((data) => {
            if (data.data.modifiedCount > 0){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class Updated successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              
            }
          });
      };
  return (
    <div>
      <SectionTitle subHeading='' heading="Update Class"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="text-center mt-4">
        <div className="w-full">
          <label className="label">
            <span className="label-text">Class Name</span>
          </label>
          <input
            type="text"
            defaultValue={className}
            placeholder="Type here"
            className="input input-bordered input-accent w-full"
            {...register("className", { required: true })}
          />
          {errors.className && <span>Class Name is required</span>}
        </div>
        <div className="w-full">
          <label className="label">
            <span className="label-text">Available Seats</span>
          </label>
          <input
            type="number"
            defaultValue={seats}
            placeholder="available seats"
            className="input input-bordered input-accent w-full"
            {...register("availableSeats", { required: true })}
          />
        </div>
        <div className="w-full">
          <label className="label">
            <span className="label-text">Price in (USD)</span>
          </label>
          <input
            type="text"
            defaultValue={price}
            placeholder="price here"
            className="input input-bordered input-accent w-full"
            {...register("price", { required: true })}
          />
          <input
            type="submit"
            value="Update class"
            className="bg-gradient-to-r from-[#25efcb] to-[#1bb3eb] text-white mt-4 px-8 py-4 rounded-3xl w-1/2 cursor-pointer hover:bg-gradient-to-l font-semibold text-lg hover:ease-in-out"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateAClass;
