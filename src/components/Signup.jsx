import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  // Initialize the navigate function for routing
  const navigate = useNavigate();

  // Initialize the state to manage form input values
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  // Handle changes in the input fields
  const handleInputs = (e) => {
    const { name, value } = e.target;
    // Update the user state using the spread operator
    setUser({ ...user, [name]: value });
  };

  // Handle form submission
  const PostData = async (e) => {
    e.preventDefault();

    // Destructure values from the user state
    const { name, email, password, cpassword } = user;

    // Make a POST request to the server's /register endpoint
    const res = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
       
        password,
        cpassword,
      }),
    });

    // Parse the response as JSON
    const data = await res.json();

    // Check if registration was successful
    if (res.status === 422 || !data) {
      // Show an alert for invalid registration
      window.alert('Invalid Registration');
      console.log('Invalid Registration');
    } else {
      // Show an alert for successful registration
      window.alert('Successful Registration');
      console.log('Successful Registration');
      
      // Navigate to the login page
      navigate('/login');
    }
  };

  return (
    <div className="auth">
      <div className="auth-container">
        <form>
          <div method="POST" className="Box" id="register-form">
            <div className="Login">
              <h2 >SIGN UP</h2>
            </div>
            <div className="form-group">
              <div htmlFor="Name">Name</div>
              <input
                className="Imp2"
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                value={user.name}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group">
              <div htmlFor="Name">Email</div>
              <input
                className="Imp2"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={user.email}
                onChange={handleInputs}
              />
            </div>
         
            <div className="form-group">
              <div htmlFor="Name">Password</div>
              <input
                className="Imp2"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                value={user.password}
                onChange={handleInputs}
              />
            </div>
            <div className="form-group">
              <div htmlFor="Name">Confirm Password</div>
              <input
                className="Imp2"
                type="password"
                name="cpassword"
                id="cpassword"
                autoComplete="off"
                value={user.cpassword}
                onChange={handleInputs}
              />
            </div>
            <button value="register" onClick={PostData}>
              <div className="button1">SIGN UP</div>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default Signup;
