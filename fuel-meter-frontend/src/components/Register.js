import React, { useState } from 'react';

const Register = () => {
    const [userInfo, setUserInfo] = useState({ name: '', email: '', password: ''});

    const handleRegister = () => {
        // JWT
    };

    return (
        <div className='register'>
            <h2>Register</h2>
            <form>
                <input
                    type='text'
                    placeholder='Name'
                    value={userInfo.name}
                    onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                />
                <input
                    type='text'
                    placeholder='Email'
                    value={userInfo.email}
                    onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                />
                <input
                    type='password'
                    placeholder='Password'
                    value={userInfo.password}
                    onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                />
                <button onClick={handleRegister}>Register</button>
            </form>
        </div>
    );
};

export default Register;