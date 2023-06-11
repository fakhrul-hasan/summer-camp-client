import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "./Shared/SocialLogin";
import { FaEye } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
    const {login} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) =>{
        login(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successfully',
                showConfirmButton: false,
                timer: 1500
              })
              navigate(from, {replace: true});
        })
      }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <FaEye onClick={()=>setShowPassword(!showPassword)} className="absolute right-4 bottom-12 h-4 w-4 cursor-pointer"/>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="password"
                {...register("password", { required: true })}
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              <label className="label">
                {/* <Link>
                  <p className="label-text-alt link link-hover">
                    Forgot password?
                  </p>
                </Link> */}
                <Link to="/signUp" state={location}>
                  <p className="label-text-alt link link-hover">
                    New Here? Register First
                  </p>
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="uppercase bg-[#25efcb] text-white px-4 py-2 text-lg font-semibold rounded-3xl">
                Login
              </button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
