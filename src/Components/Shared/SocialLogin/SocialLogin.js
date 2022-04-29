import React from "react";
import "./SocialLogin.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };

  const from = location.state?.from?.pathname || "/";
  if (googleUser) {
    navigate(from, { replace: true });
  }

  if (googleLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="or-container">
        <div className="side-bar"></div>
        <p className="mt-3 px-3">OR</p>
        <div className="side-bar"></div>
      </div>
      <button onClick={handleSignInWithGoogle} className="btn-google">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
          alt=""
        />
        <span>Continue With Google</span>
      </button>
      <small className="text-danger">{googleError?.message}</small>
    </div>
  );
};

export default SocialLogin;
