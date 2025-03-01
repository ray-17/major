import React from 'react'
import './Patients.css'
import assets from '../../assets/assets';


// const patients = [
//   { name: "Emily Williams", gender: "Female", age: 18, image:assets.emily },
//   { name: "Ryan Johnson", gender: "Male", age: 45, image: assets.ryan },
//   { name: "Brandon Mitchell", gender: "Male", age: 36, image: assets.brandon },
//   { name: "Jessica Taylor", gender: "Female", age: 28, image: assets.jessica, selected: true },
//   { name: "Samantha Johnson", gender: "Female", age: 56, image: assets.samantha },
//   { name: "Ashley Martinez", gender: "Female", age: 54, image: assets.ashley },
//   { name: "Olivia Brown", gender: "Female", age: 32, image: assets.olivia },
//   { name: "Tyler Davis", gender: "Male", age: 19, image: assets.tyler },
//   { name: "Kevin Anderson", gender: "Male", age: 30, image: assets.kevin },
//   { name: "Dylan Thompson", gender: "Male", age: 36, image: assets.dylan },
//   { name: "Nathan Evans", gender: "Male", age: 58, image: assets.nathan },
//   { name: "Mike Nolan", gender: "Male", age: 31, image: assets.mike },
// ];


const Patients = ({patients}) => {
  if (!patients.length) return <p>No patients found.</p>;
  
  return (
    <div className="patients-container">
      <ul className="patients-list">
        {patients.map((patient, index) => (
          <li key={index} className={`patient-item ${patient.selected ? "selected" : ""}`}>
            <img src={patient.image} alt={patient.name} className="patient-avatar" />
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

