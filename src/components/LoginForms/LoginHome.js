import { Button } from '@mui/material';
import React from 'react'
import { useNavigate } from "react-router-dom";

function LoginHome() {
  
  const nav = useNavigate();
  
  function handleClick1(){
    nav("/register");
  }
  function handleClick(){
    nav("/login");
  }
  return (
    <div className="home-container h-screen ">
      <h1 className="home-h1 darker text-2xl sm:text-4xl md:text-6xl lg:text-8xl">Knightly Habits</h1>
      <div className="darker">
      <h2 className="home-h2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
      Are you ready to RPGify your habits? Knightly Habits is here to help!
      </h2>
      <h2 className="home-h2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        Sign up now to start building your army of habits!
      </h2>
      </div>
      <Button className="home-btn darker" onClick={handleClick}>
   
   Login

</Button>
<br />
      <Button className="home-btn darker" onClick={handleClick1}>
   
                Register
            
      </Button>
     

    </div>
  );
}

export default LoginHome