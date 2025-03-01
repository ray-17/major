import React from 'react'
import './Display.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import MainContent from '../../components/MainContent/MainContent'
import Infobar from '../../components/Infobar/Infobar'
import Navbar from '../../components/Navbar/Navbar'
import Minicontent from '../../components/Minicontent/Minicontent'
import MiniInfobar from '../../components/MiniInfobar/MiniInfobar'
import Patients from '../../components/Patients/Patients'
import Login from '../../components/Login'

const Display = ({patients}) => {
  
  return (
    <div className='display'>
        <div className="content-container">
            <Navbar/>
            <Sidebar patients={patients}/>
            <MainContent/>
            <Minicontent/>
            <Infobar/>
            <MiniInfobar/>
        </div>
        
    </div>
  )
}

export default Display 