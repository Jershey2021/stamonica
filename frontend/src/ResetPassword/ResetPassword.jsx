import React from "react";
import Hagonoy from "../assets/Hagonoy.png";
import { Link } from "react-router-dom";
import "./ResetPassword.css";

const ResetPassword = () => {
  return (
    <>
      <div className="half-reset">
        <img src={Hagonoy} alt="" className="reset-logo" />
        <h1 className="reset-sta">
          Barangay <span>Sta.Monica</span>
        </h1>
        <h1 className="reset-monica">Hagonoy, Bulacan</h1>
      </div>
      <div className="reset-box">
        <h2 className="reset">Reset Password</h2>
        <form className="reset-form">
          <div className="reset-input-group">
            <input
              type="text"
              name="username"
              placeholder="Enter New Password"
            />
            <input type="text" name="username" placeholder="Confirm Password" />

            <p className="reset-alert-message"></p>
          </div>
        </form>
        <Link to="/" className="reset-btn">
          Confrim
        </Link>
      </div>
    </>
  );
};

export default ResetPassword;
