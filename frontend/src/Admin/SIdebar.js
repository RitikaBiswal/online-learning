import React, { useState } from 'react';
import { MdOutlineMenu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CgAssign } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import sidebarcss from './Sidebar.module.css';
import Adminlanding from './Adminlanding';
import ManageCourse from './ManageCourse';
import AddCourse from './AddCourse';
import AddMaterial from './AddMaterial'
import AssignCourse from './AssignCourse'
import ManageAssignedCourses from './ManageAssignedCourses'

import ManageStudent from './Managestudent'
import StudentChangePassword from '../Component/StudentChangePassword'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Profile from '../Component/Profile';
import { useNavigate } from 'react-router-dom'
import admin from '../Assets/admin.png'
import Login from '../Component/Login';
const Sidebar = () => {
    const [isopen, setisopen] = useState(true);
    const toggle = () => {
        setisopen(!isopen);
    }
    const navigate = useNavigate();
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const logout = (event) => {
        event.preventDefault()
        sessionStorage.clear();
        navigate('/admin/login');
    }


    // const logout = () => {
    //     sessionStorage.clear();
    // }
    const menuItem = [
        {
            path: "/adminpage/Managestd",
            name: "Managestudent",
            icon: <CgProfile />,
            component: ManageStudent
        },
        
        {
            path: "/adminpage/assignCourse",
            name: "AssignCourse",
            icon: <CgAssign />,
            component: AssignCourse
        },
        {
            path: "/adminpage/Addmaterial",
            name: "Addmaterial",
            icon: <CgAssign />,
            component: AddMaterial
        },
        {
            path: "/adminpage/manageac",
            name: "ManageAssignCourses",
            icon: <CgAssign />,
            component: ManageAssignedCourses
        },
        {
            path: "/adminpage/managec",
            name: "ManageCourse",
            icon: <CgAssign />,
            component: ManageCourse
        },
        {
            path: "/adminpage/Addcourse",
            name: "AddCourse",
            icon: <MdOutlineMenu />,
            component: AddCourse
        },
        {
            path: "/adminpage/changepass",
            name: "StudengChangePassword",
            icon: <MdOutlineMenu />,
            component: StudentChangePassword
        },
        {
            path: "/adminpage/profile",
            name: "Profile",
            icon: <MdOutlineMenu />,
            component: Profile
        },
        {
            path: "/admin/login",
            name: "Logout",
            icon: <MdOutlineMenu />,
            onClick: logout
        }
    ];

    return (
        <div className={sidebarcss.container}>
            <div style={{ width: isopen ? "350px" : "50px" }} className={sidebarcss.sidebar}>
                <div className={sidebarcss.top_section}>
                    <div style={{ display: isopen ? "block" : "none" }} className={sidebarcss.logo}>
                        <img src={admin} alt="" />
                    </div>
                    <div style={{ marginLeft: isopen ? "40px" : "0px" }} className={sidebarcss.bars}>
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className={sidebarcss.link} activeClassName="active">
                        <div className={sidebarcss.icon}>{item.icon}</div>
                        <div style={{ display: isopen ? "block" : "none" }} className={sidebarcss.link_text}>{item.name}</div>
                    </NavLink>
                ))}
            </div>
            <main>
                <Routes>
                    {menuItem.map((item, index) => (
                        <Route key={index} path={item.path} element={<item.component />} />
                    ))}
                </Routes>
            </main>
        </div>
    );
};

export default Sidebar;
