// import React from 'react';
// import {Link, useNavigate} from 'react-router-dom';

// const Menuadmin = () => {

//     const navigate = useNavigate();
//     const logout = (event)=>{
//         event.preventDefault()
//         sessionStorage.clear();
//         navigate('/login');
//     }
//     return(
//         <React.Fragment>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
//               <a className="navbar-brand" href="#">E-Learning</a>
//               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                   <span className="navbar-toggler-icon"></span>
//               </button>
//               <div className="collapse navbar-collapse" id="navbarNav">
//                   <ul className="navbar-nav ml-auto">
//                       <li className="nav-item active">
//                             <Link to="/adminpage/home" className="nav-link">Home</Link>
//                       </li>
//                       <li className="nav-item active">
//                             <Link to="/adminpage/managestd" className="nav-link">Manage Student</Link>
//                       </li>
//                       <li className="nav-item active">
//                             <Link to="/adminpage/addcourse" className="nav-link">Add Course</Link>
//                       </li>
//                       <li className="nav-item active">
//                             <Link to="/adminpage/managcourse" className="nav-link">Manage Courses</Link>
//                       </li>
//                       <li className="nav-item active">
//                             <Link to="/adminpage/addmaterial" className="nav-link">Add Materials</Link>
//                       </li>
//                       <li className="nav-item active">
//                             <Link to="/adminpage/managmaterial" className="nav-link">Manage Material</Link>
//                       </li>
//                       <li className="nav-item active">
//                             <Link to="/adminpage/assigncourse" className="nav-link">Assign Course</Link>
//                       </li>
//                       <li className="nav-item active">
//                             <Link to="/adminpage/manageac" className="nav-link">Manage Std Course</Link>
//                       </li>
//                       <li className="nav-item">
//                             <Link to="/adminpage/changepass" className="nav-link">Change Password</Link>
//                       </li>
//                       <li className="nav-item">
//                             <Link to="/adminpage/profile" className="nav-link">Profile</Link>
//                       </li>
//                       <li className="nav-item" >
//                             <Link to="#" onClick={logout} className="nav-link">Logout</Link>
//                       </li>
//                   </ul>
//               </div>
//           </nav>
//         </React.Fragment>
//     )
// }
// export default Menuadmin;