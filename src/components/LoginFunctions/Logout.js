import React, { useEffect } from 'react';
import axios from 'axios';
import { useContext } from "react";

import AppContext from "../AppContext";

// import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;


function Logout() {
  
  const myContext = useContext(AppContext);
  // const nav = useNavigate();

    useEffect(() => {

   

        axios.get('https://knightly-habits.herokuapp.com/logout')
        .then(res => {
         console.log(res)
         myContext.setLoggedIn(false)
       window.location.reload(true);
       // nav("/");
        })
        .catch((error) => {
          console.log(error)
      });
    }, []);
  return (
    <div className='container'>Logout

      </div>
  )
}

export default Logout