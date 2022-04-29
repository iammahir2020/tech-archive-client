import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import "./Login.css";
import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ height: "85vh" }} className="container">
      <PageTitle title="Login"></PageTitle>
      <div className="login-container">
        <h2 className="my-3 ">Please Login</h2>
        <div>
          <form onSubmit={handleLogin}>
            <input
              className="input-field"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
              readOnly
            />
            <input
              className="input-field"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              required
            />

            <input className="input-submit" type="submit" value="Login" />
          </form>
        </div>
        <p className="toggle">
          Dont't have an account? <Link to="/register">Please Register</Link>{" "}
        </p>
        {/* <small className="text-danger">{googleError?.message}</small> */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
