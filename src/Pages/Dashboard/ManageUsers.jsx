import React from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/users')
            return res.json();
        }
    })
    const handleMakeRole=(user, role)=>{
      fetch(`http://localhost:5000/users/admin/${user._id}?role=${role}`,{
        method: 'PATCH'
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.modifiedCount){
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
            <h2 className='text-4xl font-bold text-[#44d89e]'>All Users</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
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
        users.map((user, index)=><tr key={user._id}>
            <th>
              {index +1}
            </th>
            <td>
                <div>
                  <div className="font-bold">{user?.name}</div>
                </div>
            </td>
            <td>
              {user?.email}
            </td>
            <td>{user?.role ? user?.role : 'Student'}</td>
            <td>
              <div className='flex flex-col gap-1'>
              <button onClick={()=>handleMakeRole(user, 'Instructor')} className="btn btn-accent btn-xs" disabled={user?.role === 'Instructor' ? true:false}>Make Instructor</button>
              <button onClick={()=>handleMakeRole(user, 'Admin')} className="btn btn-success hover:btn-accent btn-xs" disabled={user?.role === 'Admin' ? true:false}>Make Admin</button>
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