import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";
import Homepage from "./Homepage/Homepage.jsx";
import SkOfficials from "./SkOfficials/SkOfficials.jsx";
import BarangayOfficials from "./BarangayOfficials/BarangayOfficials.jsx";
import Blotter from "./Blotter/Blotter.jsx";
import ResidentRecords from "./ResidentRecords/ResidentRecords.jsx";
import Announcements from "./Announcements/Announcements.jsx";
import ForgotPassword from "./ForgotPassword/ForgotPassword.jsx";
import ResetPassword from "./ResetPassword/ResetPassword.jsx";
import TotalPopulation from "./Demographic/TotalPopulation/TotalPopulation.jsx";
import Pwd from "./Demographic/PWD/Pwd.jsx";
import RegisteredIndividual from "./Demographic/RegisteredIndividual/RegisteredIndividual.jsx";
import Pregnant from "./Demographic/Pregnant/Pregnant.jsx";
import BlotterReports from "./Demographic/BlotterReports/BlotterReports.jsx";
import Female from "./Demographic/Female/Female.jsx";
import Male from "./Demographic/Male/Male.jsx";
import Children from "./Demographic/Children/Children.jsx";
import Adult from "./Demographic/Adult/Adult.jsx";
import SeniorCitizen from "./Demographic/SeniorCitizen/SeniorCitizen.jsx";
import Voters from "./Demographic/Voters/Voters.jsx";
import NonVoters from "./Demographic/NonVoters/NonVoters.jsx";
import StaMonica from "./StaMonica/StaMonica.jsx";
import Users from "./Users/Users.jsx";
import UserHomepage from "./Users/UserHomepage/UserHomepage.jsx";
import UserAnnouncements from "./Users/UserAnnouncements/UserAnnouncements.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StaMonica />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/sk-officials" element={<SkOfficials />} />
        <Route path="/barangay-officials" element={<BarangayOfficials />} />
        <Route path="/blotter" element={<Blotter />} />
        <Route path="/resident-records" element={<ResidentRecords />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/total-population" element={<TotalPopulation />} />
        <Route path="/pwd" element={<Pwd />} />
        <Route
          path="/registered-individual"
          element={<RegisteredIndividual />}
        />
        <Route path="/pregnant" element={<Pregnant />} />
        <Route path="/blotter-reports" element={<BlotterReports />} />
        <Route path="/female" element={<Female />} />
        <Route path="/male" element={<Male />} />
        <Route path="/children" element={<Children />} />
        <Route path="/adult" element={<Adult />} />
        <Route path="/senior-citizen" element={<SeniorCitizen />} />
        <Route path="/voters" element={<Voters />} />
        <Route path="/non-voters" element={<NonVoters />} />

        {/* For User */}
        <Route path="/user" element={<Users />} />
        <Route path="/user-homepage" element={<UserHomepage />} />
        <Route path="/user-announcement" element={<UserAnnouncements />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
