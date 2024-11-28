import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

const MenuStudent = () => {

    const navigate = useNavigate();
   const logout = (event) => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
        sessionStorage.clear();
        navigate('/login');
    } else {
        event.preventDefault(); // Prevent default action if "Cancel" is clicked
    }
}
    return(
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
              <a className="navbar-brand" href="#">E-Learning</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                            <Link to="/student/studenthome" className="nav-link">Home</Link>
                      </li>  
                      <li className="nav-item active">
                            <Link to="/student/mycourse" className="nav-link">Assigned Courses</Link>
                      </li>
                      <li className="nav-item">
                            <Link to="/student/studentchangepassword" className="nav-link">Change Password</Link>
                      </li>  
                      <li className="nav-item">
                            <Link to="/student/profile" className="nav-link">Profile</Link>
                      </li>                  
                      <li className="nav-item">
                            <Link to="/student/course" className="nav-link">My Courses</Link>
                      </li>
                      <li className="nav-item" >
                            <Link to="#" onClick={logout} className="nav-link">Logout</Link>
                      </li>
                  </ul>
              </div>
          </nav>   
        </React.Fragment>
    )
}
export default MenuStudent;