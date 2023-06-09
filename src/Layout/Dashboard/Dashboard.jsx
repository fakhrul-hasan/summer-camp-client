import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { SiGoogleclassroom } from "react-icons/si";
import { FaUsersCog, FaHome } from "react-icons/fa";
import useGetRole from "../../hooks/useGetRole";

const Dashboard = () => {
  const [role] = useGetRole();
  const instructor = false;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-gradient-to-t from-[#25efcb] to-[#1bb3eb] text-white">
          {/* Sidebar content here */}
          {role === "Admin" && (
            <>
              <li className="text-lg font-semibold">
                <NavLink to="/dashboard/manageClasses">
                  <SiGoogleclassroom />
                  Manage Classes
                </NavLink>
              </li>
              <li className="text-lg font-semibold">
                <NavLink to="/dashboard/manageUsers">
                  <FaUsersCog />
                  Manage Users
                </NavLink>
              </li>
            </>
          )}
          {role === "Instructor" && (
            <>
                <li className="text-lg font-semibold"><NavLink to="/dashboard/addClass">Add a Class</NavLink></li>
                <li className="text-lg font-semibold"><NavLink to="/dashboard/myClasses">My Classes</NavLink></li>
            </>
          )}
          {role !== "Instructor" && role !== "Admin" && (
            <>
                <li className="text-lg font-semibold"><NavLink to="/dashboard/selectedClass">My Selected Classes</NavLink></li>
                <li className="text-lg font-semibold"><NavLink to="/dashboard/enrolledClass">My Enrolled Classes</NavLink></li>
            </>
          )}
          <div className="divider"></div>
            <li className="text-lg font-semibold"><NavLink to="/"><FaHome/>Home</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
