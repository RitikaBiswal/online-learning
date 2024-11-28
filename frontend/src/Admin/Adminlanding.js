import React from 'react';
import Navbar from './Navbar';
import Footer from '../Navbar/Footer';
import admincss from './AdminLanding.module.css'
import SIdebar from './SIdebar';

const Adminlanding = () => {
    return (<>
        <Navbar />
        {/* <SIdebar /> */}
        <div className={admincss.back}></div>
    </>)
}

export default Adminlanding;