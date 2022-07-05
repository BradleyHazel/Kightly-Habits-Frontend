import React, { useEffect } from 'react';
import axios from 'axios';
import { useContext } from "react";

import AppContext from "../AppContext";

axios.defaults.withCredentials = true;


function Logout() {
  
  const myContext = useContext(AppContext);

    useEffect(() => {

      
        axios.get('http://localhost:8001/logout')
        .then(res => {
         console.log(res)
         myContext.setLoggedIn(false)
       // window.location.reload(true);
       // nav("/");
        })
        .catch((error) => {
          console.log(error)
      });
    }, []);
  return (
    <div className='container'>Logout
    <div className="container">
        <img alt="Crossed swords and a shield" src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Wesnoth_shield.svg"></img>
      </div>
      </div>
  )
}

export default Logout