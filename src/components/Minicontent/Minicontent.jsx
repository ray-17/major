import React from 'react'
import './Minicontent.css'


const Minicontent = () => {
  const records = [
    { problem: "Hypertension", description: "Chronic high blood pressure", status: "Under Observation" },
    { problem: "Type 2 Diabetes", description: "Insulin resistance and elevated blood sugar", status: "Cured" },
    { problem: "Asthma", description: "Recurrent episodes of bronchial constriction", status: "Inactive" },
    { problem: "Osteoarthritis", description: "Degenerative joint disease", status: "Untreated" },
  ];
  return (
    <div className='mic'>
      <span>Diagnostic List</span>
      
      <div className="headerbar">
        <ul>
          <li>Problem/Diagnosis</li>
          <li>Description</li>
          <li>Status</li>
        </ul>
        <div className="records-container">
      <table className="records-table">
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td style={{textWrap:"nowrap"}}>{record.problem}</td>
              <td>{record.description}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
      
      </div>
  )
}

export default Minicontent