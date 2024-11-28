import React from 'react'
import headercss from "./Header.module.css"
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { GrLanguage } from "react-icons/gr";
import { FaSearchengin } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa"

const Header = ({ registeredData }) => {
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };
  return (
    <div className={headercss.container}>
      <div className={headercss.inner_container}>
        <div className={headercss.logo}>
          <h3 className={headercss.heading31}>Mind Sprint</h3>
        </div>
        <div className={headercss.menu}>
          <ul>
            <Link to='/' style={{ textDecoration: "none", fontWeight: "600", color: "black" }}>Home</Link>
            <Link to='/About' style={{ textDecoration: "none", fontWeight: "600", color: "black" }}>About</Link>
            <Link to='/Contact' style={{ textDecoration: "none", fontWeight: "600", color: "black" }}>Contact</Link>
            {/* <Link to='/Course' style={{textDecoration:"none"   ,fontWeight:"600" , color:"black"}}>Course</Link> */}
            <Link to='/login' style={{ textDecoration: "none", fontWeight: "600", color: "black" }}>Login</Link>
          </ul>
        </div>
        <div className={headercss.search}>
          <input type="search" placeholder='Search Here' />
        </div>
        <div className={headercss.search_icon}>
          <FaSearchengin />
        </div>
        <div className={headercss.profile}>
          <CgProfile onClick={handleProfileClick} />
        </div>
        {showProfile && (
          <div className={headercss.profile_section}>
            {/* Add your profile content here */}
            <div className={headercss.contentadd}>

            </div>
            <div className={headercss.profilelogo}>
              <div className={headercss.circle}></div>
            </div>
            <div className={headercss.details}>
              {registeredData && (
                <div>
                  <h5>{registeredData.username}</h5>
                  <h5>{registeredData.email}</h5>
                  <h5>Mobile no: {registeredData.mobileno}</h5>
                  <h5>Address: {registeredData.address}</h5>
                </div>
              )}
              <span><FaGoogle /></span><p>manage your account</p><br />
              <span><FaSignOutAlt /></span><h4>signout</h4>
            </div>
            <div className={headercss.manage}>

            </div>
          </div>
        )}
        {/* <div className={headercss.lang} >
            <GrLanguage/>
            <p>En</p>
       </div> */}
        {/* <div className={headercss.theme}>
           <MdDarkMode/>
       </div> */}
      </div>
      <div className={headercss.objective}>
        <p className={headercss.para}> <i className="fa-regular fa-circle-play"></i>On Demand video Training</p>
        <h1 className={headercss.heading1}> Just Visualize and  Play with Code </h1>
        <p className={headercss.para}>Unlock your potential with our interactive e-learning platform </p><p className={headercss.para}>where knowledge meets convenience</p>
        <button className={headercss.btn}>Start course</button>
      </div>
    </div>
  )
}

export default Header
