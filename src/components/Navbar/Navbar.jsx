import React from "react";
import "./Navbar.css";
import assets from "../../assets/assets";

const Navbar = () => {
  return (
    <nav className="navbar">
    
      <div className="navbar-logo">
        <img src= {assets.test_logo} alt="" />
      </div>

     
      <ul className="navbar-links">
        <li> <img src={assets.home} alt="" /><a href="#">Overview</a></li>
        <li> <img src={assets.patients} alt="" /><a href="#">Patients</a></li>
        <li> <img src={assets.calendar} alt="" /><a href="#">Schedule</a></li>
        <li> <img src={assets.message} alt="" /><a href="#">Message</a></li>
        <li> <img src={assets.transactions} alt="" /><a href="#">Transactions</a></li>
      </ul>

      
      <div className="navbar-profile">
        <img src={assets.minidoc} alt="Dr. Jose Simmons" className="profile-pic" />
        <div className="profile-info">
          <span className="profile-name">Dr. Jose Simmons</span>
          <span className="profile-role">General Practitioner</span>
        </div>
        <button className="settings-btn">
            <img src={assets.settings} alt="" />
        </button>
        <button className="menu-btn">
            <img src={assets.vert_menu} alt="" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
