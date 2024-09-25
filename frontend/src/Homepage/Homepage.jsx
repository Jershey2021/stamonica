import React from "react";
import Hagonoy from "../assets/Hagonoy.png";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div>
        <div
          style={{
            backgroundColor: "#66CDAA",
            border: "2px solid black",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="card w-72 p-5 shadow-md shadow-black-300/100 rounded-md"
        >
          <img
            src={Hagonoy}
            alt="Hagonoy"
            style={{ position: "relative", top: "-10px", left: "-10px" }}
          />
          <ul className="w-full flex flex-col gap-2">
            <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
              <Link
                to="/homepage"
                className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                  />
                </svg>
                Dashboard
              </Link>
            </li>

            <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
              <Link
                to="/sk-officials"
                className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                SK Officials
              </Link>
            </li>
            <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
              <Link
                to="/barangay-officials"
                className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Barangay Officials
              </Link>
            </li>
            <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
              <Link
                to="/blotter"
                className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                  />
                </svg>
                Blotter
              </Link>
            </li>
            <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
              <Link
                to="/resident-records"
                className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
                Resident Records
              </Link>
            </li>
            <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
              <Link
                to="/announcements"
                className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                Announcements
              </Link>
            </li>

            <li className="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
              <Link
                to="/"
                className="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                  />
                </svg>
                Logout
              </Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <h1 className="records p-16-semibold flex size-full gap-4 p-4 group font-semibold focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear">
            Resident Records Summary
          </h1>

          <div className="summary" style={{ fontSize: "16px" }}>
            <div className="population bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
              <Link to="/total-population">
                <div className="text-content">
                  <p className="title">Total Population</p>
                  <p className="number">100</p>
                </div>
              </Link>
            </div>
            <Link to="/pwd">
              <div className="pwd bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                <div className="text-content">
                  <p className="title">PWD's</p>
                  <p className="number">100</p>
                </div>
              </div>
            </Link>
            <Link to="/registered-individual">
              <div className="registered bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                <div className="text-content">
                  <p className="title">Registered Individual</p>
                  <p className="number">100</p>
                </div>
              </div>
            </Link>
            <Link to="/pregnant">
              <div className="pregnant bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                <div className="text-content">
                  <p className="title">Pregnants</p>
                  <p className="number">100</p>
                </div>
              </div>
            </Link>
            <Link to="/blotter-reports">
              <div className="blotter bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                <div className="text-content">
                  <p className="title">Blotter Reports</p>
                  <p className="number">100</p>
                </div>
              </div>
            </Link>
            <Link to="/female">
              <div className="female bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                <div className="text-content">
                  <p className="title">Female</p>
                  <p className="number">100</p>
                </div>
              </div>
            </Link>
            <Link to="/male">
              <div className="male bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                <div className="text-content">
                  <p className="title">Male</p>
                  <p className="number">100</p>
                </div>
              </div>
            </Link>
            <Link to="/children">
              <div className="children bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                <div className="text-content">
                  <p className="title">Children</p>
                  <p className="number">100</p>
                </div>
              </div>
            </Link>
            <Link to="/adult">
              <div className="adult bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                <div className="text-content">
                  <p className="title">Adult</p>
                  <p className="number">100</p>
                </div>
              </div>
            </Link>
            <Link to="/senior-citizen">
              <div className="senior-citizen bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                <div className="text-content">
                  <p className="title">Senior Citizen</p>
                  <p className="number">100</p>
                </div>
              </div>
            </Link>
            <Link to="/non-voters">
              <div className="non-voters bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                <div className="text-content">
                  <p className="title">Non-Voters</p>
                  <p className="number">100</p>
                </div>
              </div>
            </Link>
            <Link to="/voters">
              <div className="voters bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
                <div className="text-content">
                  <p className="title">Voters</p>
                  <p className="number">100</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="make">
            <p className="p-16-semibold flex size-full gap-4 p-4 group font-semibold focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear">
              Create Certificate for Resident
            </p>
          </div>
          <div className="certificate">
            <div className="certified">
              <p className="clearance">Barangay Clearance Certificate</p>
            </div>
            <div className="certified">
              <p className="residency">Barangay Residency Certificate</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
