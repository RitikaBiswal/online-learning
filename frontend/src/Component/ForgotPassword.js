import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
import forgotcss from './ForgotPassword.module.css';

const ForgotPassword = () => {
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // Corrected from e.preventdefault()
        try {
            setLoading(true);
            setError(null);
            setMessage(null);

            const response = await axios.post('http://localhost:3001/sendotp', { email });
            setLoading(false);
            setMessage(response.data.message);
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError(err.response.data.error);
        }
    }

    return (
        <div>
            <div className={forgotcss.maincontainer}>
                <form onSubmit={handleSubmit} className={forgotcss.formstyle}>
                    <h3 className={forgotcss.heading}>Change your password here</h3>

                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="Email or Phone" id="email" name='email' onChange={handleChange} required />
                    <Link to='/OTPInput'><button type="submit">Send</button></Link>
                    {loading && (<h3 style={{ color: 'blue' }}>Processing...</h3>)}
                    {error && (<h3 style={{ color: 'red' }}>{error}</h3>)}
                    {message && (<h3 style={{ color: 'green' }}>{message}</h3>)}
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword;
