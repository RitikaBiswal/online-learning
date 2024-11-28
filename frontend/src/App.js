import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import PrivateRoute from './Component/PrivateRoute';
import About from './Component/About';
import Contact from './Component/Contact';
import Courses from './Component/Courses';
import Register from './Component/Register';
import StudentChangePassword from './Component/StudentChangePassword';
import Java from './Component/Java';
import ForgotPassword from './Component/ForgotPassword';
import OTPInput from './Component/OTPInput';
import Recovered from './Component/Recovered';
import Reset from './Component/Reset';
import Header from './Navbar/Header';
import Landing from './Component/Landing';
import Admin from './Admin/Adminp';
import Adminp from './Admin/Adminp';
import Studenthome from './Component/Studenthome'
import Profile from './Component/Profile';
import ManageStudent from './Admin/Managestudent';
import Adminlanding from './Admin/Adminlanding';
import AddCourse from './Admin/AddCourse';
import ManageCourse from './Admin/ManageCourse';
import AddMaterial from './Admin/AddMaterial';

import AssignCourse from './Admin/AssignCourse';
import MyCourses from './Component/MyCourses';
import CourseDetails from './Component/CourseDetails';
import ManageAssignedCourses from './Admin/ManageAssignedCourses';
import SIdebar from './Admin/SIdebar';


// export const RecoveryContext = createContext();

function App() {
  const [registeredData, setRegisteredData] = useState(null);

  const handleRegister = (data) => {
    setRegisteredData(data);
  };

  return (
    <React.Fragment>
      <Router>
        {/* <Header registeredData={registeredData} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/java" element={<Java />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/otpinput" element={<OTPInput />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student" element={<PrivateRoute />}>
            <Route path="studenthome" element={<Studenthome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="course" element={<Courses />} />
            <Route path="mycourse" element={<MyCourses />} />
            <Route path="coursedetails/:courseName" element={<CourseDetails />} />
            <Route path="studentchangepassword" element={<StudentChangePassword />} />
          </Route>
          <Route path="/admin" element={<Adminlanding />} />
          <Route path='/admin/login' element={<Login />} />
          <Route path='/admin/register' element={<Register />} />
          <Route path='/adminpage/home' element={<SIdebar />} />

          <Route path="/adminpage" element={<PrivateRoute />}>
            <Route path="home" element={<Adminp />} />
            <Route path="managestd" element={<ManageStudent />} />
            <Route path="addcourse" element={<AddCourse />} />
            <Route path='managec' element={<ManageCourse />} />
            <Route path="addmaterial" element={<AddMaterial />} />
            
            <Route path="assigncourse" element={<AssignCourse />} />
            <Route path="manageac" element={<ManageAssignedCourses />} />
            <Route path='changepass' element={<StudentChangePassword />} />
            <Route path="profile" element={<Profile />} />
          </Route>

        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
