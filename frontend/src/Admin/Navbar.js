import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import navcss from './Navbar.module.css';

const Navbar = () => {

    const navigate = useNavigate();
    const logout = (event) => {
        event.preventDefault()
        sessionStorage.clear();
        navigate('/login');
    }
    return (
        <React.Fragment>
            <nav className={navcss.navbar}>
                <div className={navcss.navcontent}>
                <ul className={navcss.ulcontent}>
                        <li>
                            <Link to="/admin" className={navcss.nav_link}>Home</Link>
                        </li>
                        <li>
                            <Link to="/admin/login"className={navcss.nav_link}>Login</Link>
                        </li>
                        <li>
                            <Link to="/admin/register" className={navcss.nav_link}>Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}
export default Navbar;
