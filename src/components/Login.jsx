import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App'; // Adjust the path as needed

const Login = () => {
    const { state, dispatch } = useContext(UserContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async(e) => {
        e.preventDefault();

        try {
            const res = await fetch('/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (!res.ok) {
                throw new Error('Login failed');
            }

            const data = await res.json();

            dispatch({ type: 'USER', payload: true });
            localStorage.setItem('token', data.token); // Store the token in localStorage
            window.alert('Login successful');
            navigate('/Create');
        } catch (error) {
            console.error(error);
            window.alert('Login failed. Please check your credentials.');
        }
    };

    return ( <
        div className = "auth" >
        <
        div className = "auth-container" >
        <form>
        <div method = "POST"  className = "container" >
        <div className = "Box" >
        <div className = "Login" >
                            <h2> Login </h2>
        </div>

        <div className = "Box1">
        <div className="Imfo1" > Email </div>
                                <input className = "Imp2"
        type = "email"
        name = "Email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }/>
                            </div>

        <
        div className = "Box1" >
        <
        div className = "Imfo1" > Password < /div> <
        input className = "Imp2"
        type = "password"
        name = "Password"
        value = { password }
        onChange = {
            (e) => setPassword(e.target.value) }
        /> <
        /div>

        <
        button onClick = { handleLogin } >
        <
        div className = "button1" > Login < /div> <
        /button> <
        /div> <
        /div> <
        /form> <
        /div> <
        /div>
    );
};

export default Login;