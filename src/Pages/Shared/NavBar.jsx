import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);
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
    <Link to='/'><h3>Spiritual Bliss</h3></Link>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <Link className="me-4" to='/'>Home</Link>
      <Link className="me-4" to='/instructors'>Instructors</Link>
      <Link className="me-4" to='/classes'>Classes</Link>
      <Link className="me-4" to='dashboard'>Dashboard</Link>
    </div>
    {
      user ? <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
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