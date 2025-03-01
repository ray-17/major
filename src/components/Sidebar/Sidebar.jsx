import React from 'react'
import './Sidebar.css'
import assets from '../../assets/assets'
import Patients from '../Patients/Patients'

const Sidebar = ({patients}) => {
  return (
    <div className='sb'>
       <Patients patients={patients}/>
        <div className="sb-title">
        <span>Patients</span>
        <div className="sb-search">
        <input type="text" />
        <img src={assets.search} alt="" />
        </div>
        </div>
       
    </div>
  )
}

export default Sidebar