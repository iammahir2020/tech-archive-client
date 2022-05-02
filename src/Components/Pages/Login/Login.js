import React, { useState } from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { toast } from "react-toastify";
import useJwtToken from "../../../Hooks/useJwtToken";

const Login = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const [token] = useJwtToken(user);

  const handleLogin = async (event) => {
    event.preventDefault();
    const password = event.target.password.value;

    await signInWithEmailAndPassword(email.value, password);
  };

  const handleResetPassword = async () => {
    if (email.value) {
      await sendPasswordResetEmail(email.value);
      toast("Password Reset Email Sent");
    } else {
      toast("Please Enter Email Address");
    }
    // if (resetError.message) {
    //   toast("error");
    // } else {
    //   toast("sssss");
    // }
  };

  const handleEmailBlur = (event) => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
    ) {
      setEmail({ value: event.target.value, error: "" });
    } else {
      setEmail({ value: "", error: "Invalid Email" });
    }
  };

  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div className="container">
      <PageTitle title="Login"></PageTitle>
      <div className="login-container">
        <h2 className="my-3 ">Please Login</h2>
        <div>
          <form onSubmit={handleLogin}>
            <input
              onBlur={handleEmailBlur}
              className="input-field"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
            />
            <small className="text-danger my-0">{email.error}</small>
            <input
              className="input-field"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              required
            />

            <input className="input-submit" type="submit" value="Login" />
            <small className="text-danger my-0">
              {error?.message}
              {resetError?.message}
            </small>
          </form>
        </div>
        <p className="reset-password">
          Forgot password?{" "}
          <span onClick={handleResetPassword}>Reset Password</span>{" "}
        </p>
        <p className="toggle">
          Dont't have an account? <Link to="/register">Please Register</Link>{" "}
        </p>

        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
