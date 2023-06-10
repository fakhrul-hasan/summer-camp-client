import { useContext, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";
import SectionTitle from "../../components/SectionTitle";
const EnrolledClasses = () => {
  const [data, setData] = useState();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  axiosSecure.get(`/enrolledClasses?email=${user?.email}`)
  .then((res) => {
    setData(res.data);
    setLoading(false);
  });
  if (loading) {
      return <span className="loading loading-bars loading-md"></span>;
    }
  return (
    <>
    <SectionTitle subHeading='be calm to see the change' heading='Enrolled Classes'></SectionTitle>
    <div className="overflow-x-auto mt-4">
  <table className="table">
    {/* head */}
    <thead className="bg-base-300">
      <tr>
        <th>#</th>
        <th>Class Name</th>
        <th>Purchased Date</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map((cls, index)=><tr key={cls._id}>
            <th>
              {index+1}
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">{cls.className}</div>
                </div>
              </div>
            </td>
            <td>
              {cls.date}
            </td>
            <td className="text-right">${cls.price}</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
    </>
  );
};

export default EnrolledClasses;
