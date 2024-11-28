import React from 'react';
import Header from '../Navbar/Header';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../Assets/slider1.jpg';
import slider21 from '../Assets/slider21.jpg';
import slider22 from '../Assets/slider22.webp';
import coursecss from './Courses.module.css'
import Footer from '../Navbar/Footer';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import java from '../Assets/java.jpg';
import python from '../Assets/python.jpg';
import web from '../Assets/web.jpg';
import ai from '../Assets/ai.jpg';
import rating from '../Assets/rating.png';
import { Link } from 'react-router-dom';
import MenuStudent from './MenuStudent';

// import Java from './Java';
const Courses = ({history}) => {

  // // const history = useHistory(); 
  // const handleclick=()=>{
  //   history.push('/Java');
  // }
  return (
    <div>
      <MenuStudent/>
      {/* <Header /> */}
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
      <div className={coursecss.card_div}>
      <Card style={{ width: '20rem' }}>
      <Link to="/Java">
            <Card.Img variant="top" src={java} />
        </Link>
      <Card.Body className={coursecss.javabody}>
        <Card.Title>Java Fullstack Devlopment course</Card.Title>
        <Card.Text>
           We Teach About core Java 
           JDBC Connnection , Hibernate , JSP , Servlet , Spring , Spring Boot  
        </Card.Text>
        <span style={{backgroundColor:"rgb(43, 214, 226)"}}>Best Seller</span><br />
        <img src={rating} alt="reload" className={coursecss.rat}/>
        <Link variant="primary"  className={coursecss.btn} to='/Java'>Read More</Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={python} />
      <Card.Body>
        <Card.Title>python Fullstack Devlopment course</Card.Title>
        <Card.Text>
          We teach about core of python and then the framework like django 
          MVT, ORM, all django topic.
        </Card.Text>
        <Button variant="primary"  className={coursecss.btn}>Read More</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={web} />
      <Card.Body>
        <Card.Title> Fullstack  Web Devlopment course</Card.Title>
        <Card.Text>
          in Full stack web devlopmenet we teach about  HTML , CSS , JAVASCRIPT , NODE JS , REACT JS
        </Card.Text>
        <Button variant="primary"  className={coursecss.btn}>Read more</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={ai} />
      <Card.Body>
        <Card.Title>Learn AI for you Bright Future</Card.Title>
        <Card.Text>
          We Teach about AI , ML  , deep learning and staticstics and we do a project also using al ml.
        </Card.Text>
        <Button variant="primary" className={coursecss.btn}>Read more</Button>
      </Card.Body>
    </Card>
    </div>
    <h1></h1>
    <h1></h1>
      <Footer/>
    </div>
  );
}

export default Courses;
