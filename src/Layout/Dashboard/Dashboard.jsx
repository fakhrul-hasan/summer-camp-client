import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { SiGoogleclassroom } from "react-icons/si";
import { FaUsersCog } from "react-icons/fa";

const Dashboard = () => {
  const admin = true;
  const instructor = false;
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-gradient-to-t from-[#25efcb] to-[#1bb3eb] text-white">
      {/* Sidebar content here */}
      {
        admin && <>
        <li className='text-lg font-semibold'><NavLink to='/dashboard/manageClasses'><SiGoogleclassroom/>Manage Classes</NavLink></li>
        <li className='text-lg font-semibold'><NavLink to='/dashboard/manageUsers'><FaUsersCog/>Manage Users</NavLink></li>
        </>
      }
      {
        instructor && <>
        <Link to='/dashboard/addClass'><li className='text-lg font-semibold'>Add a Class</li></Link>
      <Link to='/dashboard/myClasses'><li className='text-lg font-semibold'>My Classes</li></Link>
        </>
      }
      <div className="divider"></div>
      <Link to='/'><li className='text-lg font-semibold'>Home</li></Link>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;