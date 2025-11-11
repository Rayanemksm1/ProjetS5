import React, { useState, useEffect } from "react";

function AppointmentForm() {
  const [doctors, setDoctors] = useState([]);
  const [patientName, setPatientName] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/doctors/")
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/appointments/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patient_name: patientName,
        doctor: doctorId,
        date_time: dateTime,
      }),
    })
      .then(res => res.json())
      .then(data => console.log("Rendez-vous ajouté :", data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nom du patient" value={patientName} onChange={e => setPatientName(e.target.value)} required />
      <select value={doctorId} onChange={e => setDoctorId(e.target.value)} required>
        <option value="">Sélectionner un médecin</option>
        {doctors.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
      </select>
      <input type="datetime-local" value={dateTime} onChange={e => setDateTime(e.target.value)} required />
      <button type="submit">Ajouter rendez-vous</button>
    </form>
  );
}

export default AppointmentForm;

