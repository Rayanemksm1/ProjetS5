import React, { useEffect, useState } from "react";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/doctors/")
      .then(res => res.json())
      .then(data => setDoctors(data))
      .catch(err => console.error("Erreur :", err));
  }, []);

  return (
    <div>
      <h2>Liste des médecins</h2>
      <ul>
        {doctors.map(doc => (
          <li key={doc.id}>{doc.name} — {doc.specialty}</li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorList;

