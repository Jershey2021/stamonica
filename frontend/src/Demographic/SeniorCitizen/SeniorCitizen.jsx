import React from "react";
import "./SeniorCitizen.css";
import { Link } from "react-router-dom";

const SeniorCitizen = () => {
  return (
    <>
      <div>
        <div className="snr">
          <h1 className="ctzn p-16-semibold flex size-full gap-4 p-4 group font-semibold focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear">
            Senior Citizen
          </h1>
          <div className="back">
            <Link to="/homepage">
              <button
                type="button"
                className="bg-teal-400 text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
              >
                <div className="bg-teal-500 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000000"
                      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    ></path>
                    <path
                      fill="#000000"
                      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    ></path>
                  </svg>
                </div>
                <p className="translate-x-2">Go Back</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeniorCitizen;
