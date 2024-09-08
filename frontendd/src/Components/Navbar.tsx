import React, { useState } from "react";
import "./Navbar.css";  // Import styles for Navbar
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activePage, setActivePage] = useState<string>("home");

  const handleClick = (page:string) => {
    setActivePage(page);
    // Optional: Implement scroll to section or navigation here
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">My App</div>
      <ul className="navbar-links">
     
     
       
        <li>
         
            Logout
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
