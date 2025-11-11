import { useEffect, useState } from "react";
import axios from "axios";
import DoctorList from "./DoctorList";
import AppointmentList from "./AppointmentList";
import AppointmentForm from "./AppointmentForm";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h1>Bienvenue sur le site de rendez-vous médicaux</h1>} />
      </Routes>
    </Router>
  );
}

export default App;

