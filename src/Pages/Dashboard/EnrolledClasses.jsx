import { useContext, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";
const EnrolledClasses = () => {
  const [data, setData] = useState();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  axiosSecure.get(`/enrolledClasses?email=${user?.email}`)
  .then((res) => {
    setData(res.data);
    setLoading(false);
    // console.log(data);
  });
  if (loading) {
      return <span className="loading loading-bars loading-md"></span>;
    }
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
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
  );
};

export default EnrolledClasses;
