
import { useContext, useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';

const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const {user} = useContext(AuthContext);
    axiosSecure.get(`/enrolledClasses?email=${user?.email}`)
    .then(res=>{
        setData(res.data);
        setLoading(false);
    })
    if (loading) {
        return <span className="loading loading-bars loading-md"></span>;
      }
    return (
        <div>
            <SectionTitle heading='Payment History'/>
            <div className="overflow-x-auto mt-4">
  <table className="table">
    {/* head */}
    <thead className="bg-base-300">
      <tr>
        <th>#</th>
        <th>Class Name</th>
        <th>Transaction ID</th>
        <th>Transaction Date</th>
        <th>Cost</th>
      </tr>
    </thead>
    <tbody>
      {
        data.map((pay, index)=><tr key={pay._id}>
            <th>
              {index+1}
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold">{pay.className}</div>
                </div>
              </div>
            </td>
            <td>
              {pay.transactionId}
            </td>
            <td>
              {pay.date}
            </td>
            <td className="text-right">${pay.price}</td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;