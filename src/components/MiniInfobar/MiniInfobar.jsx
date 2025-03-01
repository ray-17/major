import React from 'react'
import './MiniInfobar.css'
import assets from '../../assets/assets'

const MiniInfobar = () => {
  return (
    <div className='mib'>
      <span>Lab Results</span>

      <div className="lab-results">
        <ul>
          <li>Blood Tests <img src={assets.download} alt="" /></li>
          <li className='active'>CT Scans <img src={assets.download} alt="" /></li>
          <li>Radiology Reports <img src={assets.download} alt="" /></li>
          <li>X-Rays <img src={assets.download} alt="" /></li>
          <li>Urine Test <img src={assets.download} alt="" /></li>
          <li>PCR Test <img src={assets.download} alt="" /></li>
          <li>MRI Scans <img src={assets.download} alt="" /></li>
        </ul>
      </div>
    </div>
  )
}

export default MiniInfobar