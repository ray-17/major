import React from 'react'
import './Infobar.css'
import assets from '../../assets/assets'

const Infobar = () => {
  return (
    <div className= 'ib'>
        <div className="ib-profile">
          <img src={assets.profile_img} alt="" />
          <h3>Jessica Taylor</h3>
        </div>
        <div className="ib-profile-icons">
          <img src={assets.schedule} alt="" />
          <p style={{position:"absolute", marginLeft:"42px", marginTop:"-28px"}}>Date of Birth</p>
          <p style={{position:"absolute", marginLeft:"42px", marginTop:"-14px", fontWeight:"bold"}}>August 23, 1996</p>
          <img src={assets.female} alt="" style={{position:"absolute", marginTop:"37px", marginLeft:"-20px" }}/>
          <p style={{position:"absolute", marginLeft:"42px", marginTop:"8px"}}>Gender</p>
          <p style={{position:"absolute", marginLeft:"42px", marginTop:"22px", fontWeight:"bold"}}>Female</p>
          <img src={assets.phone} alt="" style={{position:"absolute", marginTop:"72px", marginLeft:"-20px" }}/>
          <p style={{position:"absolute", marginLeft:"42px", marginTop:"42px"}}>Contact Info.</p>
          <p style={{position:"absolute", marginLeft:"42px", marginTop:"56px", fontWeight:"bold"}}>(415) 555-1234</p>
          <img src={assets.phone} alt="" style={{position:"absolute", marginTop:"107px", marginLeft:"-20px" }} />
          <p style={{position:"absolute", marginLeft:"42px", marginTop:"76px"}}>Emergency Contacts</p>
          <p style={{position:"absolute", marginLeft:"42px", marginTop:"90px", fontWeight:"bold"}}>(415) 555-5678</p>
          <img src={assets.insurance} alt="" style={{position:"absolute", marginTop:"142px", marginLeft:"-20px" }}/>
          <p style={{position:"absolute", marginLeft:"42px", marginTop:"112px"}}>Insurance Provider</p>
          <p style={{position:"absolute", marginLeft:"42px", marginTop:"126px", fontWeight:"bold"}}>Sunrise Health Assurance</p>
        </div>
        <div className="ib-button">
          <button>Show All Information</button>
        </div>
    </div>
  )
}

export default Infobar