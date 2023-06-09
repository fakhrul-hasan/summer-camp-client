import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "react-query";
import DashboardClassCard from "../../components/DashboardClassCard";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await axiosSecure.get("classes");
      return res.data;
    },
  });
  const handleStatus = (cls, status) => {
    Swal.fire({
      title: `Are you sure, You want to ${(status.toLowerCase())} this?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, ${(status.toLowerCase())} it!`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/classes/${cls._id}?status=${status}`)
          .then((data) => {
            if (data.data.modifiedCount > 0) {
              refetch();
              Swal.fire("Status Changed!", "Class has been published.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-[#44d89e] text-center mb-4">
        All Classes: {classes.length}
      </h2>
      <div className="grid grid-cols-2 gap-4 px-4">
        {classes.map((cls) => (
          <DashboardClassCard
            key={cls._id}
            cls={cls}
            handleStatus={handleStatus}
          ></DashboardClassCard>
        ))}
      </div>
    </div>
  );
};

export default ManageClasses;
