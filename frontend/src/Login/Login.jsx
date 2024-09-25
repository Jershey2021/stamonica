import React from "react";
import Hagonoy from "../assets/Hagonoy.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  const Submit = (ev) => {
    ev.preventDefault();
  };

  return (
    <>
      <div className="half">
        <img src={Hagonoy} alt="" className="logo" />
        <h1 className="sta">
          Barangay <span>Sta.Monica</span>
        </h1>
        <h1 className="monica">Hagonoy, Bulacan</h1>
      </div>
      <div className="login-box">
        <h2 className="signin">Sign In</h2>
        <form className="login-form" onSubmit={Submit}>
          <div className="input-group">
            <input type="text" name="username" placeholder="Username" />
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Password"
            />

            <Link to="/homepage">
              <button type="submit" className="btn">
                Login
              </button>
            </Link>
            <p className="aler-message"></p>
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>
        </form>
        <div className="dont-have-account">
          <p>Don't Have an Account?</p>
          <Link to="/register" className="register-btn">
            Create Account
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
