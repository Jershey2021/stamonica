import React from "react";
import Hagonoy from "../assets/Hagonoy.png";
import { Link } from "react-router-dom";
import "./Users.css";
import Header from "../Components/Header/Header";

const Users = () => {
  return (
    <>
      <div id="Users">
        <Header />
        <div className="userContainer">
          <h1 className="userWelcome">Welcome to</h1>
          <h2 className="userStaMonica">
            Barangay Sta.Monica, Hagonoy, Bulacan
          </h2>
          <h3 className="userLocation">
            Hangonoy Provincial Road, Barangay Santa Monica, Hagonoy, 3002
            Bulacan
          </h3>
          <h4 className="userBarangayHall">
            Open Monday to Friday. 8:00AM - 5:00PM
          </h4>
          <h5 className="userEmail">
            barangaysta.monica@gmail.com||+636363636363
          </h5>
          <img src={Hagonoy} alt="" className="userHagonoy" />
        </div>
      </div>
    </>
  );
};

export default Users;
