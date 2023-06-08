import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProvider";

const AddClass = () => {
  const {user} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const file = data.classImage;
    console.log(file);
  };
  return (
    <div>
      <h3 className="text-3xl">Add a Class</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="text-center">
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
            />
          </div>
          <div className="w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="price here"
              className="input input-bordered input-accent w-full"
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
