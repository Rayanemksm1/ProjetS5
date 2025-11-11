import { useEffect, useState } from "react";
import axios from "axios";
import DoctorList from "./DoctorList";
import AppointmentList from "./AppointmentList";
import AppointmentForm from "./AppointmentForm";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/test/")
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🏥 Site de Rendez-vous Médicaux</h1>
      <p>Message du backend : {message}</p>
      <DoctorList />
      <AppointmentList />
      <AppointmentForm />
    </div>
  );
}

export default App;


