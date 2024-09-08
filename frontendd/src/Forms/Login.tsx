import React, { useState } from 'react';
import './Login.css'; // Import the CSS file for styling
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
const Login:React.FC = () => {
  const [email,setEmail] = useState<string>("")
  const [password,setPassword] = useState<string>("")
  const navigate = useNavigate()
 
  // ===============================
  const handleLogin =async(e:React.FormEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    console.log(email,password)
    try {
      const response = await axios.post(`http://localhost:4000/login`, {email,password});
      console.log(response,"loginapi response")
      if(response.data.message){
        toast.success(response.data.message)

        if(response.data.user)
        localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/')

      }
      else{
        toast.error("Something Wrong")
      }
    
      
      
    } catch (error:any) {
      console.log(error)
      if(error.response.data.message){
        toast.error(error.response.data.message)
      }
    
    }
    
    
  }
  return (
    <div className="login-container">
    <div className="login-box">
      <h1>Sign In</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
          setEmail(e.target.value)
          }}
          type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
              setPassword(e.target.value)
              }}
          type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <button 
        className='btn'
        type="submit" onClick={(e:React.FormEvent<HTMLButtonElement>)=>{
          handleLogin(e)
        }}>Sign In</button>
      </form>
      <div className="signup-link">
        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </div>
  </div>
  )
}

export default Login
