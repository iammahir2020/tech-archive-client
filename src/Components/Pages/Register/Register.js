import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import useJwtToken from "../../../Hooks/useJwtToken";

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [confirm, setConfirm] = useState({ value: "", error: "" });
  const [checked, setChecked] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, profileError] = useUpdateProfile(auth);
  const [token] = useJwtToken(user);

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    if (password.value !== confirm.value) {
      setConfirm({ value: "", error: "Passwords do not match" });
      return;
    }

    await createUserWithEmailAndPassword(email.value, password.value);
    await updateProfile({ displayName: name });
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
  const handlePasswordBlur = (event) => {
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(event.target.value)) {
      setPassword({ value: event.target.value, error: "" });
    } else {
      setPassword({
        value: "",
        error:
          "Password must contain atleast 8 character, 1 letter and 1 number",
      });
    }
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirm({ value: event.target.value, error: "" });
  };

  const from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }

  if (loading || updating) {
    return <Loading></Loading>;
  }

  return (
    <div className="container">
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
            />
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
              onBlur={handlePasswordBlur}
              className="input-field"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              required
            />
            <small className="text-danger my-0">{password.error}</small>
            <input
              onBlur={handleConfirmPasswordBlur}
              className="input-field"
              type="password"
              name="confirm"
              id="confirm"
              placeholder="Confirm Password"
              required
            />
            <small className="text-danger my-0">{confirm.error}</small> <br />
            <input
              onClick={() => setChecked(!checked)}
              type="checkbox"
              name="check"
              id="check"
            />
            <span
              className={`ms-2 ${!checked ? "text-danger" : "text-success"}`}
            >
              Agree to terms and conditions.
            </span>
            <input
              disabled={!checked}
              className={`input-submit ${!checked && "input-disable"}`}
              type="submit"
              value="Register"
            />
          </form>
        </div>
        <p className="toggle">
          Already have an account? <Link to="/login">Please Login</Link>{" "}
        </p>
        <small className="text-danger my-0">
          {error?.message}
          {profileError?.error}
        </small>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Registration;
