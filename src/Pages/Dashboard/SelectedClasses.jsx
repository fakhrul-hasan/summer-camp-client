import React, { useContext } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useQuery } from "react-query";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SelectedClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading && Boolean(user?.email),
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/selectedClasses?email=${user?.email}`
      );
      return res.data;
    },
  });
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
              <th>
                <button className="btn btn-warning btn-sm" disabled={classes.length > 0 ? false:true}>pay</button>
              </th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
