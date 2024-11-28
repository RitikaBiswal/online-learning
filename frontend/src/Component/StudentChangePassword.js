import React, { useState } from "react";
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";
import MenuStudent from "./MenuStudent";
import MenuAdmin from "../Admin/Menuadmin";
import SIdebar from "../Admin/SIdebar";

const Changepassword = () => {
    const location = useLocation();
    const isAdmin = location.pathname.startsWith('/admin');
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        email: '',
        crr_pass: '',
        new_pass: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isAdmin) {
            try {
                setLoading(true);
                console.log(formData);
                const response = await axios.post('http://localhost:3001/changepassword/admin', formData);
                setMessage(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        } else {
            try {
                setLoading(true);
                console.log(formData);
                const response = await axios.post('http://localhost:3001/changepassword/student', formData);
                setMessage(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <React.Fragment>
            <div className="super7" >
                {isAdmin ? <SIdebar /> : <MenuStudent />}
                <div className="row" style={{ paddingTop: '30px' }}>
                    <div className="col-md-6">
                        <div className="login-form mt-5">
                            {/* <h2 className="mb-4">Change Password</h2> */}
                            <form onSubmit={handleSubmit} style={{ marginTop: "30px", marginBottom: "30px", marginLeft: "130px", backgroundColor: "black" }}>
                                <div className="form-group">
                                    <input type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        onChange={handleChange}
                                        required />
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                        className="form-control"
                                        id="crr_pass"
                                        name="crr_pass"
                                        placeholder="Enter your old password"
                                        onChange={handleChange}
                                        required />
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                        className="form-control"
                                        id="new_pass"
                                        name="new_pass"
                                        placeholder="Enter new password"
                                        onChange={handleChange}
                                        required />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Change Password</button>
                            </form>
                            {loading && (<h3 style={{ color: 'blue' }}>Processing..</h3>)}
                            {error && (<h3 style={{ color: 'red' }}>{error.message}</h3>)}
                            {message && (<h3 style={{ color: 'green' }}>{message}</h3>)}
                        </div>
                    </div>
                    <div className="col-md-6 mt-5">
                        Password Change Instructions...
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Changepassword;
