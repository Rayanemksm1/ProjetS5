import React, { useEffect, useState } from "react";
import EditAppointmentForm from "./EditAppointmentForm";

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [editingAppointment, setEditingAppointment] = useState(null);

  useEffect(() => {
    fetchDoctors();
    fetchAppointments();
  }, []);

  const fetchDoctors = () => {
    fetch("http://127.0.0.1:8000/api/doctors/")
      .then(res => res.json())
      .then(data => setDoctors(data));
  };

  const fetchAppointments = () => {
    fetch("http://127.0.0.1:8000/api/appointments/")
      .then(res => res.json())
      .then(data => setAppointments(data));
  };

  const handleDelete = (id) => {
    fetch(`http://127.0.0.1:8000/api/appointments/${id}/`, { method: "DELETE" })
      .then(() => fetchAppointments())
      .catch(err => console.error(err));
  };

  const filteredAppointments = selectedDoctor
    ? appointments.filter(a => a.doctor === parseInt(selectedDoctor))
    : appointments;

  return (
    <div>
      <h2>📅 Rendez-vous</h2>

      {/* Filtre par médecin */}
      <select
        value={selectedDoctor}
        onChange={e => setSelectedDoctor(e.target.value)}
      >
        <option value="">Tous les médecins</option>
        {doctors.map(d => (
          <option key={d.id} value={d.id}>{d.name}</option>
        ))}
      </select>

      <ul>
        {filteredAppointments.map(a => (
          <li key={a.id}>
            {a.patient_name} — {a.date_time} avec Dr. {a.doctor_name || a.doctor}
            <button onClick={() => handleDelete(a.id)}>Supprimer</button>
            <button onClick={() => setEditingAppointment(a)}>Modifier</button>
          </li>
        ))}
      </ul>

      {/* Formulaire d’édition */}
      {editingAppointment && (
        <EditAppointmentForm
          appointment={editingAppointment}
          onClose={() => setEditingAppointment(null)}
          onUpdated={fetchAppointments}
        />
      )}
    </div>
  );
}

export default AppointmentList;

