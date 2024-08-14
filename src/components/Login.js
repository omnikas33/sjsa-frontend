import React, { useState } from 'react';
import axios from 'axios';
import AdminPanel from './AdminPanel/AdminPanel'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/auth/login', {
        username,
        password,
      });
      
      console.log(response.data); // Check the response structure from backend
  
      // Assuming backend sends { success: true, message: 'Login successful' } on successful login
      if (response.data.success) {
        setIsLoggedIn(true); // Set login status to true
        setMessage(response.data.message); // Optionally set a success message
        // Redirect or show AdminPanel component here if needed
      } else {
        setMessage(response.data.message); // Set error message from backend
      }
    } catch (error) {
      console.error('Login error:', error);
      setMessage('Ivalid CredentialsS'); // Set a generic error message
    }
  };  
  if (isLoggedIn) {
    return <AdminPanel />;
  }

  return (
    <div>
          <div className='loginform'>
      <form className="form " onSubmit={handleSubmit}>
        <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <span></span>
        </div>
        <div className="input-container">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="submit">Sign in</button>
        <p className="signup-link">
          No account? <a href="">Sign up</a>
        </p>
      </form>
      <p>{message}</p>
    </div>

    </div>
  );
};

export default Login;
