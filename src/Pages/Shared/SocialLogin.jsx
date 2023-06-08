import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSocialLogin = () => {
    googleSignIn().then((result) => {
      const user = result.user;
      console.log(user);
      const saveUser = { name: user.displayName, email: user.email };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          navigate("/");
        });
    });
  };
  return (
    <div className="flex flex-col items-center mb-4">
      <div className="divider">OR</div>
      <button onClick={handleSocialLogin} className="border p-2 rounded-full">
        <FcGoogle className="h-8 w-8 " />
      </button>
    </div>
  );
};

export default SocialLogin;
