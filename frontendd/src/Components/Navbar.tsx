import React, { useState } from "react";
import "./Navbar.css";  // Import styles for Navbar
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [activePage, setActivePage] = useState<string>("home");
const navigate = useNavigate()
  const handleClick = () => {
    const userJson = localStorage.getItem('user');
     navigate('/')
   
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand"
      style={{
        cursor:"pointer"
      }}
      onClick={()=>{
       handleClick()
      }}
      >
    
        My App
        
        </div>
      <ul className="navbar-links">
   
        <li 
        style={{
          cursor:"pointer"
        }}
        onClick={()=>{
          localStorage.removeItem('user');
          navigate('/login')
        }}>
         
            Logout
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
