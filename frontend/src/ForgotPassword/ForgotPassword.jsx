import React from "react";
import Hagonoy from "../assets/Hagonoy.png";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <>
      <div className="half-password">
        <img src={Hagonoy} alt="" className="forgot-logo" />
        <h1 className="forgot-sta">
          Barangay <span>Sta.Monica</span>
        </h1>
        <h1 className="forgot-monica">Hagonoy, Bulacan</h1>
      </div>
      <div className="forgot-box">
        <h2 className="forgot">Forgot Password</h2>
        <form className="forgot-form">
          <div className="forgot-input-group">
            <input
              type="text"
              name="username"
              placeholder="Enter Your Username"
            />

            <p className="forgot-alert-message"></p>
          </div>
        </form>
        <Link to="/reset-password" className="forgot-btn">
          Enter
        </Link>
      </div>
    </>
  );
};

export default ForgotPassword;
