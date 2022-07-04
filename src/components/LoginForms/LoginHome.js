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
    <div className="home-container h-screen ">
      <h1 className="home-h1 darker">Knightly Habits</h1>
      <div className="darker">
      <h2 className="home-h2 ">
      Are you ready to RPGify your habits? Knightly Habits is here to help!
      </h2>
      <h2 className="home-h2">
        Sign up now to start building your army of habits!
      </h2>
      </div>
      <Button className="home-btn darker" onClick={handleClick}>
   
                register
            
      </Button>
     

    </div>
  );
}

export default LoginHome