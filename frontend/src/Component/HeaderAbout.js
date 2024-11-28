import React from 'react'
import headerAbout from "./HeaderAbout.module.css"
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { FaSearchengin } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa"
import robo from '../Assets/robot.png';
import satya from '../Assets/satya.jpg';
import rojalin from '../Assets/rojalin1.jpg';
import ritika from '../Assets/ritika.jpg'
import babru from '../Assets/babru.jpg'
import minati from '../Assets/minati1.jpg'
import soubhagya from '../Assets/soubhagya1.jpg'
import soumya1 from '../Assets/soumya1.jpg'
import vdocall from '../Assets/vdocallimg.jpg'
import Footer from '../Navbar/Footer';
import vdo from '../Assets/6586063-uhd_2160_3840_30fps.mp4'

const HeaderAbout = ({ registeredData }) => {
    const [showProfile, setShowProfile] = useState(false);

    const handleProfileClick = () => {
        setShowProfile(!showProfile);
    };
    return (
        <React.Fragment>
            <div className={headerAbout.container}>
                <div className={headerAbout.inner_container}>
                    <div className={headerAbout.logo}>
                        <h3 className={headerAbout.heading31}>Mind Sprint</h3>
                    </div>
                    <div className={headerAbout.menu}>
                        <ul>
                            <Link to='/' style={{ textDecoration: "none", fontWeight: "600", color: "black" }}>Home</Link>
                            <Link to='/About' style={{ textDecoration: "none", fontWeight: "600", color: "black" }}>About</Link>
                            <Link to='/Contact' style={{ textDecoration: "none", fontWeight: "600", color: "black" }}>Contact</Link>
                            {/* <Link to='/Course' style={{textDecoration:"none"   ,fontWeight:"600" , color:"black"}}>Course</Link> */}
                            <Link to='/login' style={{ textDecoration: "none", fontWeight: "600", color: "black" }}>Login</Link>
                        </ul>
                    </div>
                    <div className={headerAbout.search}>
                        <input type="search" placeholder='Search Here' />
                    </div>
                    <div className={headerAbout.search_icon}>
                        <FaSearchengin />
                    </div>
                    <div className={headerAbout.profile}>
                        <CgProfile onClick={handleProfileClick} />
                    </div>
                    {showProfile && (
                        <div className={headerAbout.profile_section}>
                            {/* Add your profile content here */}
                            <div className={headerAbout.contentadd}>

                            </div>
                            <div className={headerAbout.profilelogo}>
                                <div className={headerAbout.circle}></div>
                            </div>
                            <div className={headerAbout.details}>
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
                            <div className={headerAbout.manage}>

                            </div>
                        </div>
                    )}
                    {/* <div className={headerAbout.lang} >
            <GrLanguage/>
            <p>En</p>
       </div> */}
                    {/* <div className={headerAbout.theme}>
           <MdDarkMode/>
       </div> */}
                </div>
                <div className={headerAbout.objective}>
                    <h1 className={headerAbout.heading1}> About us</h1>
                    <p className={headerAbout.para}>Unlock your potential with our interactive e-learning platform </p><p className={headerAbout.para}>where knowledge meets convenience</p>
                </div>
            </div>
            <div className={headerAbout.aboutcontent}>
                <div className={headerAbout.left}>
                    <p className={headerAbout.para5}>about us</p>
                    <h1>students don't come to learn only , come to enjoy</h1>
                    <p className={headerAbout.para5}>we believe in the power of education to transform lives. Our mission is to provide accessible, engaging, and effective e-learning solutions that empower individuals to reach their full potential, regardless of their background or circumstances.</p>
                </div>
                <div className={headerAbout.right}>
                    <img src={robo} alt="reload" />
                </div>
            </div>
            <div className={headerAbout.teamname}>
                
            </div>
            <div className={headerAbout.team}>
                <div className={headerAbout.addimg}>
                    <img src={satya} alt="reload" />
                </div>
                <div className={headerAbout.addimg}>
                    <img src={ritika} alt="" />
                </div>
                <div className={headerAbout.addimg}>
                    <img src={rojalin} alt="" />
                </div>
                <div className={headerAbout.addimg}>
                    <img src={babru} alt="" />
                </div>
                <div className={headerAbout.addimg}>
                    <img src={minati} alt="" />
                </div>
                <div className={headerAbout.addimg}>
                    <img src={soubhagya} alt="" />
                </div>
                <div className={headerAbout.addimg}>
                    <img src={soumya1} alt="" />
                </div>
            </div>

            <div className={headerAbout.acheivment}>
                <div className={headerAbout.achei}>
                    <h1>1000+</h1>
                    <p>student placed</p>
                </div>
                <div className={headerAbout.achei}>
                    <h1>10000+</h1>
                    <p>Learing with us</p>
                </div>
                <div className={headerAbout.achei}>
                    <h1>1500+</h1>
                    <p>tie up with company</p>
                </div>
            </div>

            <div className={headerAbout.history}>
                <p className={headerAbout.para6}><h3><b>Our history</b></h3></p>
                <h3>In the bustling heart of bhubaneswar, a small group of dreamers gathered with a shared vision: to revolutionize education and make learning accessible to all. With nothing but passion and determination, they embarked on a journey that would change the landscape of education forever. As we reflect on how far we've come, we're reminded that our journey is far from over. With each passing day, we strive to make [Platform Name] even better, even more inclusive, and even more impactful. Together, we're writing the next chapter in the story of education—one filled with hope, opportunity, and endless possibility.</h3>
            </div>

            <div className={headerAbout.why}>
                <h1>why Us</h1>
                <div className={headerAbout.innerwhy}>
                    <div className={headerAbout.inncon}>
                        <video src={vdo} alt="" controls autoPlay loop />
                        <p className={headerAbout.para8}>vdo call facility</p>
                    </div>
                    <div className={headerAbout.right_side}>
                        <div className={headerAbout.rightdiv}>1 to 1 vdo call facility</div>
                        <div className={headerAbout.rightdiv}>everyday doubt clear class</div>
                        <div className={headerAbout.rightdiv}>mock interview</div>
                    </div>

                </div>
            </div>
            {/* <Footer /> */}

            <div className={headerAbout.last_content}>
                <h1>Mind Sprint</h1>
            </div>


            <div className={headerAbout.secondlast}>
                <div className={headerAbout.content1}>
                    <h4>team mind Sprint </h4>
                    <p>contact : 9556013448</p>
                    <p>email : mindSprint@12gmail.com</p>
                    <p>twitter</p>
                    <p>facebook:mindsprint777</p>
                </div>
                <div className={headerAbout.content2}>
                    <h4>team mind Sprint </h4>
                    <p>contact : 9556013448</p>
                    <p>email : mindSprint@12gmail.com</p>
                    <p>twitter</p>
                    <p>facebook:mindsprint777</p>
                </div>
                <div className={headerAbout.content3}>
                    <h4>team mind Sprint </h4>
                    <p>contact : 9556013448</p>
                    <p>email : mindSprint@12gmail.com</p>
                    <p>twitter</p>
                    <p>facebook:mindsprint777</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeaderAbout
