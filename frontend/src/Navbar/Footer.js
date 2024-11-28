import React from 'react'
import footercss from'./Footer.module.css'
const Footer = () => {
  return (
        <footer className={footercss.footer}>
            <div className={footercss.waves}>
            <div className={footercss.wave}></div>
            <div className={footercss.wave}></div>
            <div className={footercss.wave}></div>
            <div className={footercss.wave}></div>
            </div>
            <h4>Follow Us on Social Media</h4>
            <div class="social-media">
    <a href="https://www.facebook.com" class="facebook" target="_blank" aria-label="Facebook">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="https://www.twitter.com" class="twitter" target="_blank" aria-label="Twitter">
      <i class="fab fa-twitter"></i>
    </a>
    <a href="https://www.instagram.com" class="instagram" target="_blank" aria-label="Instagram">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="https://www.linkedin.com" class="linkedin" target="_blank" aria-label="LinkedIn">
      <i class="fab fa-linkedin-in"></i>
    </a>
    </div>
                    <ul className={footercss.menu}>
                    <li className={footercss.menu__item}><a className={footercss.menu__link} href="#">Home</a></li>
                    <li className={footercss.menu__item}><a className={footercss.menu__link} href="#">About</a></li>
                    <li className={footercss.menu__item}><a className={footercss.menu__link} href="#">courses</a></li>
                    <li className={footercss.menu__item}><a className={footercss.menu__link} href="#">Team</a></li>
                    <li className={footercss.menu__item}><a className={footercss.menu__link} href="#">Contact</a></li>
                    </ul>
                    
                    
            </footer>
  )
}

export default Footer
