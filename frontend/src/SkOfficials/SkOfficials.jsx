import React from "react";
import { Link } from "react-router-dom";
import Hagonoy from "../assets/Hagonoy.png";
import "./SkOfficials.css";

const SkOfficials = () => {
  return (
    <>
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
        className="card w-72 p-5 shadow-md rounded-md"
      >
        <img
          src={Hagonoy}
          alt="Hagonoy"
          style={{ position: "relative", top: "-10px", left: "-10px" }}
        />
        <ul className="w-full flex flex-col gap-2">
          <li className="flex items-center justify-center cursor-pointer w-full whitespace-nowrap">
            <Link
              to="/homepage"
              className="flex w-full gap-4 p-4 font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
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

          <li className="flex items-center justify-center cursor-pointer w-full whitespace-nowrap">
            <Link
              to="/sk-officials"
              className="flex w-full gap-4 p-4 font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
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

          <li className="flex items-center justify-center cursor-pointer w-full whitespace-nowrap">
            <Link
              to="/barangay-officials"
              className="flex w-full gap-4 p-4 font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
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

          <li className="flex items-center justify-center cursor-pointer w-full whitespace-nowrap">
            <Link
              to="/blotter"
              className="flex w-full gap-4 p-4 font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
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

          <li className="flex items-center justify-center cursor-pointer w-full whitespace-nowrap">
            <Link
              to="/resident-records"
              className="flex w-full gap-4 p-4 font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
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

          <li className="flex items-center justify-center cursor-pointer w-full whitespace-nowrap">
            <Link
              to="/announcements"
              className="flex w-full gap-4 p-4 font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
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

          <li className="flex items-center justify-center cursor-pointer w-full whitespace-nowrap">
            <Link
              to="/"
              className="flex w-full gap-4 p-4 font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
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
      <div className="sk-page">
        <h1 className="skOfficials p-16-semibold flex size-full gap-4 p-4 group font-semibold focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear">
          SK Officials Member
        </h1>
        <div className="sk-data">
          <section
            className="p-3 sm:p-5 rounded-lg"
            style={{ backgroundColor: "aliceblue" }}
          >
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
              <div
                style={{
                  backgroundColor: "#66dcaa",
                  border: "1px solid black",
                }}
                className="relative shadow-lg rounded-lg overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                  <div className="w-full md:w-1/2">
                    <form className="flex items-center">
                      <label htmlFor="simple-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="simple-search"
                          className="text-sm rounded-lg bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2"
                          placeholder="Search"
                          required=""
                        />
                      </div>
                    </form>
                  </div>
                  <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <button
                      type="button"
                      id="createProductModalButton"
                      data-modal-target="createProductModal"
                      data-modal-toggle="createProductModal"
                      className="flex items-center justify-center text-gray-700 border-2 border-solid border-teal-500 bg-teal-400 focus:ring-4 focus:ring-primary-30 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-teal-600 focus:outline-none dark:focus:ring-green-800"
                    >
                      <svg
                        className="h-3.5 w-3.5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        />
                      </svg>
                      Add SK Member
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="skMember relative overflow-x-scroll overflow-y-scroll shadow-md"
              style={{ border: "1px solid black", borderRadius: "8px" }}
            >
              <table
                className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                style={{
                  width: "300px",
                }}
              >
                <thead
                  className="text-xs text-teal-800 uppercase dark:text-teal-800"
                  style={{
                    backgroundColor: "#b3d0eb",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  <tr>
                    <th scope="col" className="px-6 py-5">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-5">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Contact
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Address
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Position
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Term Start
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Term End
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Edit
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    className="odd:bg-white odd:dark:bg-teal-900 even:bg-teal-50 even:dark:bg-teal-800 border-b dark:border-teal-700"
                    style={{ border: "1px solid black" }}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      style={{ fontSize: "16px" }}
                    >
                      1
                    </th>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      Flores
                    </td>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      0975325243
                    </td>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      Zone 7 Sta.Monica
                    </td>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      SK Member
                    </td>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      10/16/2023
                    </td>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      10/16/2025
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="text-orange-600 dark:text-orange-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="text-red-600 dark:text-red-400 hover:underline"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr
                    className="odd:bg-white odd:dark:bg-teal-700 even:bg-teal-50 even:dark:bg-teal-800 border-b dark:border-teal-800"
                    style={{ border: "1px solid black" }}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      1
                    </th>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      Flores
                    </td>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      0975325243
                    </td>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      Zone 7 Sta.Monica
                    </td>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      SK Member
                    </td>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      10/16/2023
                    </td>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      10/16/2025
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="text-orange-600 dark:text-orange-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="text-red-600 dark:text-red-400 hover:underline"
                        style={{ fontSize: "16px" }}
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr
                    className="odd:bg-white odd:dark:bg-teal-900 even:bg-teal-50 even:dark:bg-teal-800 border-b dark:border-teal-700"
                    style={{ border: "1px solid black" }}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      style={{ fontSize: "16px" }}
                    >
                      1
                    </th>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      Flores
                    </td>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      0975325243
                    </td>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      Zone 7 Sta.Monica
                    </td>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      SK Member
                    </td>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      10/16/2023
                    </td>
                    <td
                      className="px-6 py-4 text-black"
                      style={{ fontSize: "14.5px", fontWeight: "bold" }}
                    >
                      10/16/2025
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="text-orange-600 dark:text-orange-500 hover:underline"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="text-red-600 dark:text-red-400 hover:underline"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
export default SkOfficials;
