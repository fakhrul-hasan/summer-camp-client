import { useContext } from "react";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const MyClasses = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: classes=[], refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/classes?email=${user?.email}`)
            return res.data;
        }
    })
  return (
    <div>
        <SectionTitle heading='My Classes'></SectionTitle>
      <div className="overflow-x-auto mt-4">
        <table className="table">
          {/* head */}
          <thead className="bg-base-300">
            <tr>
              <th>
                #
              </th>
              <th>Name</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Total Enrolled Students</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                classes.map((cls, index)=><tr key={cls._id}>
                    <th>
                      {index}
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{cls.className}</div>
                        </div>
                      </div>
                    </td>
                    <td>{cls.status}</td>
                    <td>{cls.feedback}</td>
                    <td className="text-right">0</td>
                    <th className="flex flex-col gap-1 items-center">
                        <Link to={`/dashboard/updateClass?className=${cls?.className}&seats=${cls?.availableSeats}&price=${cls?.price}&id=${cls._id}`}><button className="btn btn-accent btn-xs">Update</button></Link>
                      <button className="btn btn-info btn-xs">Feedback</button>
                    </th>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
