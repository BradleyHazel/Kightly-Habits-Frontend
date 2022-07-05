import React, { useEffect } from 'react';
import axios from 'axios';
import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import AppContext from "../AppContext";

axios.defaults.withCredentials = true;


function Logout() {
  const nav = useNavigate();
  const myContext = useContext(AppContext);

    useEffect(() => {

      
        axios.get('http://localhost:8001/logout')
        .then(res => {
         console.log(res)
         myContext.setLoggedIn(false)
       // window.location.reload(true);
        nav("/login");
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