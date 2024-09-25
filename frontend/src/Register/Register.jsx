import React, { useState } from "react";
import Hagonoy from "../assets/Hagonoy.png";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  const Submit = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <div>
        <div className="half-register">
          <img src={Hagonoy} alt="" className="logo-register" />
          <h1 className="sta-register">
            Barangay <span>Sta.Monica</span>
          </h1>
          <h1 className="monica-register">Hagonoy, Bulacan</h1>
        </div>

        <div className="create-account">
          <h2 className="create">Create Account</h2>
          <form className="create-account-form">
            <div className="create-input-group">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
              />
              <input
                type="text"
                name="username"
                placeholder="Enter Your Username"
              />
              <input
                name="password"
                placeholder="Enter Your Password"
                type={show ? "text" : "password"}
              />

              <button type="submit" className="create-btn">
                Create Account
              </button>
              <p className="message"></p>
            </div>
          </form>
          <div className="register-login">
            <p>Already have an account?</p>
            <Link to="/login" className="register-login-btn">
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
