import React, { useState } from "react";
import Display from "./pages/Display/Display";
import Patients from "./components/Patients/Patients";
import Login from "./components/Login";

const App = () => {
  const [patients, setPatients] = useState([]);

  return (
    <>
      {/* Authentication Section (Always Visible) */}
      <div>
        <h1>Patient Authentication</h1>
        {patients.length === 0 ? (
          <Login setPatients={setPatients} />
        ) : (
          <Display patients={patients} />
        )}
      </div>

      {/* Pass patients to Display */}
      {/* <Display /> */}
    </>
  );
};

export default App;
