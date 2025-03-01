import React from 'react'
import './MainContent.css'
import Graph from '../Charts/Graph'
import assets from '../../assets/assets'

const MainContent = () => {
  return (
    <div className='mac'>
        <div className="cardTitle">
        <span>Diagnosis History</span>
        <div className="graphTitle">
          <span>Blood Pressure</span>
          <p>Last 6 months</p>
          <img src={assets.expand} alt="" />
        </div>
        <div className="graph-card">
          <Graph/>
          <div className="graph-legend">
          <div><span className="systolic-dot"> </span>
          <p style={{fontWeight:"bolder", fontSize:"11px", position:"absolute", marginLeft:"25px", marginTop:"-13px"}}>Systolic</p>
          </div>
          <p style={{fontWeight:"bolder", fontSize:"15px", marginLeft:"10px", marginTop:"5px"}}>160</p>
          <img src={assets.arrow_up} alt="" style={{marginTop:"8px", marginLeft:"9px"}} />
          <p style={{textAlign:"left", fontSize:"8.5px", position:"absolute", marginTop:"50px", marginLeft:"22px", textWrap:"nowrap"}}>Higher than Average</p>

          <hr/>
          <div>
          <span className="diastolic-dot"> </span>
          <p style={{fontWeight:"bolder", fontSize:"11px", position:"absolute", marginLeft:"25px", marginTop:"-13px"}}>Diastolic</p>
          </div>
          <p style={{fontWeight:"bolder", fontSize:"15px", marginLeft:"10px", marginTop:"5px"}}>78</p>
          <img src={assets.arrow_down} alt="" style={{marginTop:"8px", marginLeft:"10px"}}/>
          <p style={{textAlign:"left", fontSize:"8px", position:"absolute", marginTop:"130px", marginLeft:"22px", textWrap:"nowrap"}}>Lower than Average</p>
          </div>
        </div>
        </div>
        <div className="res-rate">
          <img src = {assets.res_rate} alt="" />
          <p>Respiratory Rate</p>
          <span>20 bpm</span>
          <p style={{marginTop:"4px"}}>Normal</p>
        </div>
        <div className="temp">
        <img src = {assets.temp} alt="" />
        <p>Temperature</p>
          <span>98.6</span>
          <p style={{marginTop:"4px"}}>Normal</p>
        </div>
        <div className="heart-rate">
        <img src = {assets.heart_rate} alt="" />
        <p>Heart Rate</p>
          <span>78 bpm</span>
          <img src={assets.arrow_down} alt="" style={{width:"6px", position:"absolute", marginTop:"30px", marginLeft:"-53px"}}/>
          <p style={{marginTop:"4px", marginLeft:"20px"}}>Lower than Average</p>
        </div>
    </div>
  )
}

export default MainContent