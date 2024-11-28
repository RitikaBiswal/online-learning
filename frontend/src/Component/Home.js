import React from 'react'
import Header from '../Navbar/Header'
// import Footer from '../Navbar/Footer'
import homecss from './HomeStyle.module.css'
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
import Landing from './Landing';

const Home = () => {
  // const [theme,settheme]=useState('light')
  return (
    <React.Fragment>
      <Header />
      {/* <Landing/> */}
      <div className={homecss.container}>
        <div className={homecss.page}>
          <h3 className={homecss.heading3}>Technology that you will learn here</h3>
          <p className={homecss.para1}><i class="fa-brands fa-java"></i>  <i class="fa-brands fa-js"></i><i class="fa-brands fa-python"></i><i class="fa-solid fa-database"></i><i class="fa-brands fa-react"></i></p>
        </div>

        <div className={homecss.latest}>
          <div className={homecss.innerlatest}>
            <div className={homecss.div1}>
              <p className={homecss.para5}>industry knowledge</p>
              <h4 className={homecss.heading5}>Latest Courses</h4>
            </div>
            <div className={homecss.div2}>
            Help your IT and engineering teams learn critical skills and prep for their next certification, while maintaining productivity.We offer continuously-updated courses on emerging topics that keep your tech teams ahead of the curve.
            </div>
            <div className={homecss.div3}>
              <button className={homecss.btn3}>more courses</button>
            </div>
          </div>
        </div>
        <div className={homecss.card}>

          <Card style={{ width: '20rem' }}>
            <Link to="/Java">
              <Card.Img variant="top" src={java} />
            </Link>
            <Card.Body>
              <Card.Title>Java Fullstack Devlopment course</Card.Title>
              <Card.Text>
                We Teach About core Java
                JDBC Connnection , Hibernate , JSP , Servlet , Spring , Spring Boot
              </Card.Text>
              {/* <span style={{backgroundColor:"rgb(43, 214, 226)"}}>Best Seller</span> */}
              {/* <img src={rating} alt="reload"/> */}
              <Button variant="primary" ><Link to='/Java' className={homecss.link_text}>Read More</Link></Button>
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
              <Button variant="primary" >Read More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={web} />
            <Card.Body>
              <Card.Title> Fullstack  Web Devlopment course</Card.Title>
              <Card.Text>
                in Full stack web devlopmenet we teach about  HTML , CSS , JAVASCRIPT , NODE JS , REACT JS
              </Card.Text>
              <Button variant="primary">Read more</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={ai} />
            <Card.Body>
              <Card.Title>Learn Ai for you Bright Future</Card.Title>
              <Card.Text>
                We Teach about AI , ML  , deep learning and staticstics and we do a project also using al ml.
              </Card.Text>
              <Button variant="primary" >Read more</Button>
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
              <Button variant="primary" >Read More</Button>
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
              <Button variant="primary" >Read More</Button>
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
              <Button variant="primary" >Read More</Button>
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
              <Button variant="primary" >Read More</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={ai} />
            <Card.Body>
              <Card.Title>Learn Ai for you Bright Future</Card.Title>
              <Card.Text>
                We Teach about AI , ML  , deep learning and staticstics and we do a project also using al ml.
              </Card.Text>
              <Button variant="primary" >Read more</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={ai} />
            <Card.Body>
              <Card.Title>Learn Ai for you Bright Future</Card.Title>
              <Card.Text>
                We Teach about AI , ML  , deep learning and staticstics and we do a project also using al ml.
              </Card.Text>
              <Button variant="primary" >Read more</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={ai} />
            <Card.Body>
              <Card.Title>Learn Ai for you Bright Future</Card.Title>
              <Card.Text>
                We Teach about AI , ML  , deep learning and statistics and we do a project also using al ml.
              </Card.Text>
              <Button variant="primary" >Read more</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={ai} />
            <Card.Body>
              <Card.Title>Learn Ai for you Bright Future</Card.Title>
              <Card.Text>
                We Teach about AI , ML  , deep learning and staticstics and we do a project also using al ml.
              </Card.Text>
              <Button variant="primary" >Read more</Button>
            </Card.Body>
          </Card>
        </div>
        <Footer />
      </div>

    </React.Fragment>
  )
}

export default Home
