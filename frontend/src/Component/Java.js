import React from 'react'
import javacss from './Java.module.css'
import Header from '../Navbar/Header'
import Footer from '../Navbar/Footer'

const Java = () => {
  return (
    <React.Fragment>
      {/* <Header/> */}
     <section className={javacss.maincontainer}>
       <figure className={javacss.figcontainer}>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/UmnCZ7-9yDY?si=cTngm8A2zdCtZkqK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       </figure>
       <p> all ths syllabyus</p>
    
     </section>
     {/* <Footer/> */}
     </React.Fragment>
  )
}

export default Java
