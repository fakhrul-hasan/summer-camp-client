import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Swal from "sweetalert2";
import useSelectedClass from "../../hooks/useSelectedClass";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const SelectedClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const [classes, refetch] = useSelectedClass();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/selectedClasses/${id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Class has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Dashboard | Selected Classes</title>
      </Helmet>
      <SectionTitle
        subHeading="your flexibility"
        heading="Selected Classes"
      ></SectionTitle>
      <div className="overflow-x-auto mt-8">
        <table className="table">
          <thead className="bg-base-300">
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, index) => (
              <tr key={cls._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cls.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{cls.className}</div>
                    </div>
                  </div>
                </td>
                <td className="text-right">${cls.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(cls._id)}
                    className="btn btn-error btn-xs"
                  >
                    delete
                  </button>
                </td>
                <td>
                  <Link to={`/dashboard/payment?price=${cls.price}&id=${cls.classId}&name=${cls.className}`}>
                    <button
                      className="btn btn-warning btn-sm"
                      disabled={classes.length > 0 ? false : true}
                    >
                      pay
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
