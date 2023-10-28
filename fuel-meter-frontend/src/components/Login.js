import React, { useState } from "react";
import axios from 'axios';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: ''});

    const handleLogin = () => {
        // JWT
        try {
            const response =  axios.post('http://localhost:5000/login', credentials);
            const token =response.data.token;
            localStorage.setItem('token', token);
        }

            catch (error) {
                console.error('Authentication failed:', error);

            }
        }
    };

        return (
        <div className="login">
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="Email" value={credentials.email} onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} 
                />
                <input type="password" placeholder="Password" value={credentials.password} onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    );


export default Login;