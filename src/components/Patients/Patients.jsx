import React from 'react'
import './Patients.css'
import assets from '../../assets/assets';




const Patients = ({ patients }) => {
  if (!patients.length) return <p>No patients found.</p>;
  
  return (
    <div className="patients-container">
      <ul className="patients-list">
        {patients.map((patient, index) => (
          <li key={index} className={`patient-item ${patient.selected ? "selected" : ""}`}>
            <img src={assets.ashley} alt={patient.name} className="patient-avatar" />
            <div className="patient-info">
              <p className="patient-name">{patient.name}</p>
              <p className="patient-details">{patient.gender}, {patient.age}</p>
            </div>
            <button className="more-options"><img src={assets.menu} alt="" /></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;

