import React from 'react'
import contactcss from './ContactStyle.module.css'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <div className={contactcss.box}>
        <div className={contactcss.nav}>
          <Link to='/' className={contactcss.link}>home</Link>
          <Link to='/About' className={contactcss.link}>about</Link>
        </div>
        <div className={contactcss.contact}>
          <div className={contactcss.inner_contact}>
            <h1>Get in touch with us
            </h1>
            <label htmlFor="name" className={contactcss.lab}>Name</label>
            <input type="text" name="name" id="name" className={contactcss.inp} />
            <label htmlFor="email" className={contactcss.lab}>Email</label>
            <input type="email" name="email" id="email" className={contactcss.inp} />
            <label htmlFor="problem" className={contactcss.lab}> Write your query here</label>
            <textarea name="problem" id="problem" placeholder='write your query here ' cols={64} rows={4}></textarea>
            <button id="submitButton" type="submit" >Submit</button> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
