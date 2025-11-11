import React, { useState, useEffect } from "react";

function EditAppointmentForm({ appointment, onClose, onUpdated }) {
  const [doctors, setDoctors] = useState([]);
  const [patientName, setPatientName] = useState(appointment.patient_name);
  const [doctorId, setDoctorId] = useState(appointment.doctor);
  const [dateTime, setDateTime] = useState(appointment.date_time);

  // Récupérer la liste des médecins
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/doctors/")
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://127.0.0.1:8000/api/appointments/${appointment.id}/`, {
      method: "PUT", // ou PATCH si tu veux mettre à jour partiellement
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patient_name: patientName,
        doctor: doctorId,
        date_time: dateTime,
      }),
    })
    .then(res => res.json())
    .then(data => {
      console.log("Rendez-vous mis à jour :", data);
      onUpdated(); // permet de rafraîchir la liste
      onClose();   // fermer le formulaire
    })
    .catch(err => console.error(err));
  };

  return (
    <div className="edit-form">
      <h3>Modifier le rendez-vous</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={patientName}
          onChange={e => setPatientName(e.target.value)}
          required
        />
        <select value={doctorId} onChange={e => setDoctorId(e.target.value)} required>
          {doctors.map(d => (
            <option key={d.id} value={d.id}>{d.name}</option>
          ))}
        </select>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={e => setDateTime(e.target.value)}
          required
        />
        <button type="submit">Modifier</button>
        <button type="button" onClick={onClose}>Annuler</button>
      </form>
    </div>
  );
}

export default EditAppointmentForm;

