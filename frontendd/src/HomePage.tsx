import React, { useEffect, useState } from 'react';
import './HomePage.css'; // Make sure to import the CSS file
import Navbar from './Components/Navbar';
import UserList from './Components/UserList';
import UserDetails from './Components/UserDetails';
interface User{
  email:string,
  id:string,
  role: string
}
const HomePage = () => {
  const [userLocal,setUserLocal] = useState({
    email:"",
    id:"",
    role: ""
  })
  useEffect(()=>{
    const userJson = localStorage.getItem('user');
    if (userJson) {
      try {
        const user = JSON.parse(userJson);
        
        // Check if user data and id are present
        if (user && user.id) {
       setUserLocal(user)
         
        } else {
          console.log('User data is invalid or missing id.');
        }
      } catch (error) {
        console.error('Failed to parse user data:', error);
      }
    } else {
      console.log('No user data found in localStorage.');
    }
   

  },[])
 
   
  return (
    <div>
      <Navbar/>
      {
        userLocal.role === "admin"?(
        
          
          <UserList/>
        ):
        <UserDetails/>

      }

 
    </div>
  );
};

export default HomePage;
