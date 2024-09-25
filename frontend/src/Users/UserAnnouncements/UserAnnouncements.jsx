import React from "react";
import "./userAnnouncements.css";
import { Link } from "react-router-dom";
import { useState } from "react";
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

const UserAnnouncements = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});

  const startDate = startOfMonth(currentDate);
  const endDate = endOfMonth(currentDate);
  const startWeek = startOfWeek(startDate);
  const endWeek = endOfWeek(endDate);

  const days = eachDayOfInterval({ start: startWeek, end: endWeek });
  const handleDateChange = (newDate) => {
    setCurrentDate(newDate);
  };

  return (
    <div id="userAnnouncements">
      <header className="fixed top-0 left-0 w-full py-4 shadow-lg">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/user">
            <button
              className="userAnnouncementsHeaderTitleButton"
              data-text="Awesome"
            >
              <span className="userAnnouncementsHeaderActualText">
                &nbsp;sta.monica&nbsp;
              </span>
              <span
                aria-hidden="true"
                className="userAnnouncementsHeaderHoverText"
              >
                &nbsp;sta.monica&nbsp;
              </span>
            </button>
          </Link>
          <div className="userAnnouncementsHeaderNavBar">
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
      <h1 className="userAnnouncementsHelloUser p-16-semibold flex size-full gap-4 p-4 group font-semibold focus:bg-gradient-to-r from-gray-400 to-gray-600 focus:text-white text-gray-700 transition-all ease-linear">
        Announcement & Events
      </h1>

      <div className="userAnnouncementLatestNews bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md">
        <div className="userNews">
          <h1>Latest News</h1>
          <h2 className="userAnnouncementTitle">Announces September Events</h2>
          <p className="userAnnouncement">
            Barangay Sta. Monica in Hagonoy, Bulacan is excited to announce a
            series of community events this September. On September 10, join us
            at the Barangay Hall for a Health and Wellness Fair featuring free
            medical check-ups and health consultations. Our Environmental
            Cleanup Drive is set for September 18, where volunteers are
            encouraged to help beautify our surroundings. From September 22-24,
            take part in Skills Training Workshops aimed at enhancing vocational
            skills. The month will conclude with a festive Barangay Fiesta on
            September 30, showcasing local talents and cultural performances.
            For more details or to register for events, visit the barangay
            office or call 555-6789. Stay updated by following us on our social
            media pages. We look forward to your active participation in these
            enriching activities!
          </p>
        </div>

        <div className="userAnnouncementCalendar">
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

        <div className="userAnnouncementUpcomingEvents">
          <div className="userAnnouncementEvent">
            <h1>Upcoming Events</h1>
          </div>
          <div className="userAnnouncementDates">
            {days.map((day) => {
              const formattedDay = format(day, "yyyy-MM-dd");
              const dayEvents = events[formattedDay] || [];

              return (
                <div
                  key={day}
                  className={`userAnnouncementDateOne overflow-hidden bg-gradient-to-l from-slate-300 to-slate-100 text-slate-600 border border-slate-300 grid grid-col-2 justify-center p-4 gap-4 rounded-lg shadow-md`}
                >
                  <div
                    style={{
                      backgroundColor: "#66CDAA",
                    }}
                    className="w-24 h-24 rounded-full absolute -right-9 -top-10"
                  >
                    <p className="userAnnouncementDay absolute bottom-6 left-7 text-2xl">
                      {format(day, "d")}
                    </p>
                    <h1 className="userAnnouncementMonth font-bold text-xl">
                      {format(day, "MMM")}
                    </h1>
                  </div>
                  <div className="userAnnouncementEvents">
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
      </div>
    </div>
  );
};

export default UserAnnouncements;
