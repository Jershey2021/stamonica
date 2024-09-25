import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full py-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/user">
          <button className="headerTitleButton" data-text="Awesome">
            <span className="headerActualText">&nbsp;sta.monica&nbsp;</span>
            <span aria-hidden="true" className="headerHoverText">
              &nbsp;sta.monica&nbsp;
            </span>
          </button>
        </Link>
        <div className="headerNavBar">
          <Link to="/user-homepage" className="text-black hover:text-teal-800">
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
  );
};

export default Header;
