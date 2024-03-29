import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useGetRole from "../../hooks/useGetRole";

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);
  const [role] = useGetRole();
  const navigate = useNavigate();
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      navigate('/');
    })
    .catch()
  }
    return (
      <div className="navbar bg-base-300">
  <div className="flex-1">
    <Link to='/'>
      <img src="https://www.compassioninaction.info/wp-content/uploads/2015/10/yoga-logo.png" alt="" className="lg:h-16  w-28"/>
      <p className="font-semibold text-center">Spiritual Bliss</p>
      </Link>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <NavLink className="me-4 font-semibold" to='/'>Home</NavLink>
      <NavLink className="me-4 font-semibold" to='/instructors'>Instructors</NavLink>
      <NavLink className="me-4 font-semibold" to='/classes'>Classes</NavLink>
      {
        user && <Link className="me-4 font-semibold" to='dashboard'>Dashboard</Link>
      }
    </div>
    {
      user ? <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
          <p>
            Signed in as {role}<br />
            <span className="font-semibold">{user?.email}</span>
          </p>
        <li>
          <a>Profile</a>
          </li>
        <li><a>Settings</a></li>
        <li onClick={handleLogOut}><a>Logout</a></li>
      </ul>
    </div> : <Link to='/login'><button className="uppercase bg-[#25efcb] text-white px-4 py-2 text-lg font-semibold rounded-3xl">login</button></Link>
    }
  </div>
</div>
    );
};

export default NavBar;