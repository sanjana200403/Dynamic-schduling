import React from 'react';
import './Login.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Sign Up</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <Link to="/login">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
