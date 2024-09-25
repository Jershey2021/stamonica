import React, { useState } from "react";
import Hagonoy from "../assets/Hagonoy.png";
import "./Announcements.css";
import { Link } from "react-router-dom";
import {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isToday,
  isWeekend,
} from "date-fns";

const Announcements = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [newEvent, setNewEvent] = useState({ date: "", description: "" });

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const startWeek = startOfWeek(startDate);
  const endWeek = endOfWeek(endDate);

  const days = eachDayOfInterval({ start: startWeek, end: endWeek });

  const handleDateChange = (newDate) => {
    setCurrentDate(newDate);
  };

  const handleEventChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAddEvent = () => {
    if (newEvent.date && newEvent.description) {
      setEvents({
        ...events,
        [newEvent.date]: [
          ...(events[newEvent.date] || []),
          newEvent.description,
        ],
      });
      setNewEvent({ date: "", description: "" });
    }
  };

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
          <h1 className="ttl p-16-semibold flex size-full gap-4 p-4 group font-semibold focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-black text-black-700 transition-all ease-linear">
            Announcements
          </h1>

          <div className="latest-news bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
            <div className="newspaper">
              <h1>Latest News</h1>
              <h2 className="title-of-announcement">
                Announces September Events
              </h2>
              <p className="announce">
                Barangay Sta. Monica in Hagonoy, Bulacan is excited to announce
                a series of community events this September. On September 10,
                join us at the Barangay Hall for a Health and Wellness Fair
                featuring free medical check-ups and health consultations. Our
                Environmental Cleanup Drive is set for September 18, where
                volunteers are encouraged to help beautify our surroundings.
                From September 22-24, take part in Skills Training Workshops
                aimed at enhancing vocational skills. The month will conclude
                with a festive Barangay Fiesta on September 30, showcasing local
                talents and cultural performances. For more details or to
                register for events, visit the barangay office or call 555-6789.
                Stay updated by following us on our social media pages. We look
                forward to your active participation in these enriching
                activities!
              </p>
            </div>
          </div>

          <div className="upcoming-events">
            <div className="event">
              <h1>Upcoming Events</h1>
            </div>
            <div className="dates">
              {days.map((day) => {
                const formattedDay = format(day, "yyyy-MM-dd");
                const dayEvents = events[formattedDay] || []; // Get events for the day

                return (
                  <div
                    key={day}
                    className={`date-one overflow-hidden bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md`}
                  >
                    <div
                      style={{
                        backgroundColor: "#66CDAA",
                      }}
                      className="w-24 h-24 rounded-full absolute -right-9 -top-10"
                    >
                      <p className="day absolute bottom-6 left-7 text-2xl">
                        {format(day, "d")}
                      </p>
                      <h1 className="month font-bold text-xl">
                        {format(day, "MMM")}
                      </h1>
                    </div>
                    <div className="events">
                      {dayEvents.length > 0 ? (
                        dayEvents.map((event, index) => (
                          <p key={index} className="text-sm">
                            {event}
                          </p>
                        ))
                      ) : (
                        <p className="text-sm text-gray-500">No events</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="make-schedule overflow-y-scroll bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
            <div className="calendar">
              <header className="flex items-center justify-between mb-4">
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => handleDateChange(startOfMonth(currentDate))}
                >
                  First
                </button>
                <h2 className="text-xl font-semibold">
                  {format(currentDate, "MMMM yyyy")}
                </h2>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => handleDateChange(endOfMonth(currentDate))}
                >
                  Last
                </button>
              </header>
              <div className="grid grid-cols-7 gap-1">
                {days.map((day) => {
                  const formattedDay = format(day, "yyyy-MM-dd");
                  const dayEvents = events[formattedDay] || []; // Get events for the day

                  return (
                    <div
                      key={day}
                      className={`p-2 text-center ${
                        isToday(day) ? "bg-blue-200" : "bg-white"
                      } ${isWeekend(day) ? "text-red-500" : "text-gray-700"}`}
                    >
                      {format(day, "d")}
                      <div className="events">
                        {dayEvents.map((event, index) => (
                          <p key={index} className="text-sm">
                            {event}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="add-event p-4 max-w-md mx-auto">
              <h2 className="text-lg font-semibold mb-2">Add Event</h2>
              <input
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleEventChange}
                className="border border-gray-300 p-2 mb-2 w-full"
              />
              <textarea
                name="description"
                value={newEvent.description}
                onChange={handleEventChange}
                placeholder="Event description"
                className="border border-gray-300 p-2 mb-2 w-full"
              />
              <button
                onClick={handleAddEvent}
                className="bg-teal-500 text-white p-2 border border-solid border-black rounded hover:bg-teal-800 transition-colors"
              >
                Add Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcements;
