import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { AuthContext } from '../../Providers/AuthProvider';
import SectionTitle from '../../components/SectionTitle';

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const {user} = useContext(AuthContext);
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })
    const handleMakeRole=(user, role)=>{
      axiosSecure.patch(`/users/${user._id}?role=${role}`)
      .then(data=>{
        console.log(data);
        if(data.data.modifiedCount > 0){
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is an ${role} Now!`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    }
    return (
        <div>
          <Helmet>
        <title>Dashboard | Manage Users</title>
      </Helmet>
            <SectionTitle heading='All Users'></SectionTitle>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='bg-base-300'>
      <tr>
        <th>
          #
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map((member, index)=><tr key={member._id}>
            <th>
              {index +1}
            </th>
            <td>
                <div>
                  <div className="font-bold">{member?.name}</div>
                </div>
            </td>
            <td>
              {member?.email}
            </td>
            <td>{member?.role ? member?.role : 'Student'}</td>
            <td>
              <div className='flex flex-col gap-1'>
              <button onClick={()=>handleMakeRole(member, 'Instructor')} className="btn btn-accent btn-xs" disabled={user?.email === member?.email || member?.role === 'Instructor' ? true:false}>Make Instructor</button>
              <button onClick={()=>handleMakeRole(member, 'Admin')} className="btn btn-success hover:btn-accent btn-xs" disabled={user?.email === member?.email || member?.role === 'Admin' ? true:false}>Make Admin</button>
              </div>
            </td>
          </tr>)
     }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default ManageUsers;