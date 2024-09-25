import React from "react";
import Hagonoy from "../assets/Hagonoy.png";
import { Link } from "react-router-dom";
import "./StaMonica.css";

const StaMonica = () => {
  return (
    <>
      <div id="stamonica">
        <div className="container-md">
          <h1 className="welcome">Welcome to</h1>
          <h2 className="sta-monica">Barangay Sta.Monica, Hagonoy, Bulacan</h2>
          <h3 className="location">
            Hangonoy Provincial Road, Barangay Santa Monica, Hagonoy, 3002
            Bulacan
          </h3>
          <h4 className="barangay-hall">
            Open Monday to Friday. 8:00AM - 5:00PM
          </h4>
          <h5 className="email">barangaysta.monica@gmail.com||+636363636363</h5>
          <img src={Hagonoy} alt="" className="hagonoy" />

          <div className="lgn">
            <Link to="/login">
              <button className="button">
                <div className="bgContainer">
                  <span>LOGIN </span>
                  <span>LOGIN</span>
                </div>
                <div className="arrowContainer">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 45 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
                      fill="black"
                    ></path>
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaMonica;
