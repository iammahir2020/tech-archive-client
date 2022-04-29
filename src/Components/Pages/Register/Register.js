import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Registration = () => {
  const handleRegister = (event) => {
    event.preventDefault();
  };
  return (
    <div style={{ height: "85vh" }} className="container">
      <PageTitle title="Register"></PageTitle>
      <div className="login-container">
        <h2 className="my-3">Please Register</h2>
        <div>
          <form onSubmit={handleRegister}>
            <input
              className="input-field"
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              required
              readOnly
            />
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
            <input
              className="input-field"
              type="password"
              name="confirm"
              id="confirm"
              placeholder="Confirm Password"
              required
            />
            <input className="input-submit" type="submit" value="Register" />
          </form>
        </div>
        <p className="toggle">
          Already have an account? <Link to="/login">Please Login</Link>{" "}
        </p>
        {/* <small className="text-danger">{googleError?.message}</small> */}
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Registration;
