import { Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

import { useNavigate } from "react-router-dom";



function LoginHome() {
  
  const nav = useNavigate();
  
  function handleClick(){
    nav("/register");
  }
  return (
    <div className="home-container ">
      <h1 className="home-h1">Knightly Habits</h1>
      <h3 className="home-h3">
      Are you ready to RPGify your habits! Knightly Habits is here to help!
      </h3>
      <h3 className="home-h3">
        Sign up now to start taking building your army of habits!
      </h3>
      <Button className="home-btn" onClick={handleClick}>
   
                register
            
      </Button>
     

    </div>
  );
}

export default LoginHome