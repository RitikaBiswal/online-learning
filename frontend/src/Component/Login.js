import React from 'react';
import login from './Login.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import loginback  from '../Assets/loginback'

const Login = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAdmin) {
      try {
        setLoading(true);
        const response = await axios.post('http://localhost:3001/login/admin', formData);
        if (response.data === 'success') {
          sessionStorage.setItem('isLoggedIn', 'true');
          sessionStorage.setItem('email', formData.email); // Store email after successful login
          navigate('/adminpage/home');
        } else {
          setMessage(response.data.message);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    } else {
      try {
        setLoading(true);
        const response = await axios.post('http://localhost:3001/login/student', formData);
        if (response.data === 'success') {
          sessionStorage.setItem('isLoggedIn', 'true');
          sessionStorage.setItem('email', formData.email); // Store email after successful login
          navigate('/student/Course');
        } else {
          setMessage(response.data.message);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <React.Fragment>
      <div className={login.contain}>
        <form onSubmit={handleSubmit} className={login.mainc}>
          <h3>Login Here</h3>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Email or Phone" id="email" name="email" onChange={handleChange} required />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" name="password" onChange={handleChange} required />
          <button>Log In</button>
          <div className={login.social}>
            <div className={login.go}><Link to='/register' className={login.btn}>sign up</Link></div>
            <div className={login.fb}><Link to='/forgotpassword' className={login.btn2}>forgot</Link></div>
          </div>
          {loading && (<h3 style={{ color: 'blue' }}>Processing..</h3>)}
          {error && (<h3 style={{ color: 'red' }}>{error.message}</h3>)}
          {message && (<h3 style={{ color: 'red' }}>{message}</h3>)}
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
