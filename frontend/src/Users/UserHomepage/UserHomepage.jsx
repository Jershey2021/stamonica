import React from "react";
import "./UserHomepage.css";
import { Link } from "react-router-dom";

const UserHomepage = () => {
  return (
    <div id="userHomepage">
      <header className="fixed top-0 left-0 w-full py-4 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/user">
            <button
              className="userHomepageHeaderTitleButton"
              data-text="Awesome"
            >
              <span className="userHomepageHeaderActualText">
                &nbsp;sta.monica&nbsp;
              </span>
              <span aria-hidden="true" className="userHomepageHeaderHoverText">
                &nbsp;sta.monica&nbsp;
              </span>
            </button>
          </Link>
          <div className="userHomepageHeaderNavBar">
            <Link
              to="/user-homepage"
              className="text-black hover:text-teal-800"
            >
              Home
            </Link>
            <Link
              to="/user-announcement"
              className="text-black hover:text-teal-800"
            >
              Announcements
            </Link>
            <Link to="/" className="text-black hover:text-teal-800">
              Logout
            </Link>
          </div>
        </nav>
      </header>
      <h1 className="userHomepageHelloUser p-16-semibold flex size-full gap-4 p-4 group font-semibold focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear">
        Hello User!
      </h1>
      <div className="userHomepageSummary">
        {[
          { title: "Total Population", number: 100 },
          { title: "PWD's", number: 100 },
          { title: "Registered Individual", number: 100 },
          { title: "Pregnants", number: 100 },
          { title: "Blotter Reports", number: 100 },
          { title: "Female", number: 100 },
          { title: "Male", number: 100 },
          { title: "Children", number: 100 },
          { title: "Adult", number: 100 },
          { title: "Senior Citizen", number: 100 },
          { title: "Non-Voters", number: 100 },
          { title: "Voters", number: 100 },
        ].map((item, index) => (
          <div key={index} className="userHomepageSummaryItem">
            <div className="userHomepageTextContent">
              <p className="userHomepageTitle">{item.title}</p>
              <p className="userHomepageNumber">{item.number}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserHomepage;
