import React from "react";
import MenuStudent from "./MenuStudent";
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../Assets/slider1.jpg';
import slider21 from '../Assets/slider21.jpg';
import slider22 from '../Assets/slider22.webp';
import coursecss from './Courses.module.css'
import Footer from "../Navbar/Footer";
import Homeimg from '../Assets/lapi-lapi.png';
import Homeimg2 from '../Assets/lapi2.png';
import Mathimg from '../Assets/Mathematics-bro.png';

const Studenthome =()=>{
    return(
        <>
            <MenuStudent/>
            <Carousel className={coursecss.container} style={{borderRadius:"20px"}}>
                <Carousel.Item className={coursecss.contain} style={{borderRadius:"20px"}}>
                    <img src={slider1} className="d-block w-100" alt="First slide"/>
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={coursecss.contain} style={{borderRadius:"20px"}}>
                    <img src={slider21} className="d-block w-100" alt="Second slide" />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={coursecss.contain} style={{borderRadius:"20px"}}>
                    <img src={slider22} className="d-block w-100" alt="Third slide" />
                    <Carousel.Caption>
                        <h3></h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center", 
                width: "100vw", 
                height: "50vh",
                marginBottom: "20px" 
            }}>
                <h1>Elevate Your Learning Journey with us</h1>
                <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between", 
                    width: "100%", 
                    height: "80%" 
                }}>
                    <div 
                        className="imgcont" 
                        style={{ 
                            width: "100%", 
                            height: "100%", 
                            backgroundImage: `url(${Homeimg})`, 
                            backgroundSize: "contain", 
                            backgroundPosition: "left", 
                            backgroundRepeat: "no-repeat" 
                        }}
                    ></div>
                    <div style={{ width: "240%" }}>
                        <p><h5>
                        We're dedicated to empowering students like you to unlock their full potential through immersive and interactive e-learning experiences. Whether you're seeking to deepen your knowledge in a particular subject, explore new skills, or prepare for academic and professional milestones, our platform offers a diverse range of courses tailored to your learning goals. With cutting-edge technology and expert instructors, we strive to create an engaging virtual environment where you can thrive academically and professionally.
                        </h5></p>
                    </div>
                </div>
            </div>
            <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center", 
                width: "100vw", 
                height: "50vh",
                marginBottom: "20px" 
            }}>
                <img src={Mathimg} alt="Mathematics" style={{ maxWidth: "150%", maxHeight: "150%" }} />
            </div>
            <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center", 
                width: "100vw", 
                height: "50vh",
                marginBottom: "200px" 
            }}>
                <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between", 
                    width: "100%", 
                    height: "80%",
                    // marginTop: "0px" 
                }}>
                    <div style={{ width: "240%" }}>
                        <p><h5>
                        Our student home page serves as a dynamic hub where
                         you can access course materials,
                         engage with fellow learners through discussions and collaborative projects, 
                         track your progress,
                          and discover new learning opportunities. From personalized recommendations to comprehensive learning resources,
                           we're committed to providing you with the support and tools you need to succeed on your educational journey.
                        </h5></p>
                    </div>
                    <div 
                        className="imgcont" 
                        style={{ 
                            width: "100%", 
                            height: "200%", 
                            backgroundImage: `url(${Homeimg2})`, 
                            backgroundSize: "contain", 
                            backgroundPosition: "right", 
                            backgroundRepeat: "no-repeat" 
                        }}
                    ></div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Studenthome;
