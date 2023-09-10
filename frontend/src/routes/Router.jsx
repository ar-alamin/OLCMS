import React from "react";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Lawyers from "../pages/Lawyers/Lawyers";
import LawyerDetails from "../pages/Lawyers/LawyerDetails";

import { Route, Routes } from "react-router-dom";

import Dashboard from "../Dashboard/Lawyer-Account/Dashboard";
import MyAccount from "../Dashboard/User-Account/MyAccount";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lawyers" element={<Lawyers />} />
        <Route path="/lawyers/:id" element={<LawyerDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/lawyers/profile/me" element={<Dashboard />} />
        <Route path="/users/profile/me" element={<MyAccount />} />
      </Routes>
    </>
  );
};

export default Router;
