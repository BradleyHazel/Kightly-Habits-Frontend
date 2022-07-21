
import React, { useEffect } from 'react';
import Sidebar from './Sidebar'
import Knight from './Knight'
import { useContext } from "react";
import AppContext from "./AppContext";


function Main() {

  
  const myContext = useContext(AppContext);

  useEffect(() => {
    
    let url = "https://knightly-habits.herokuapp.com/";
    fetch(url, {'credentials': 'include'},) //<-- the url as a string
  // Wait for the response and convert it to json
  .then(res => res.json())
  // Take the json and do something with it
  .then(json => {
    let knightArr =mapKnights(json)
    myContext.setKnights(knightArr);

  })
  // Catch and log any errors to the console
  .catch(console.error);
  }, []);


  function mapKnights(knightArr){

    let knightMap = knightArr.map((knight,index) => {
      
     return <Knight id={knight._id} key={knight._id}  data={knight}  />
    })
  return knightMap
  }


  return (
    <div className="" style={{display: "flex"}}>
        
        <Sidebar />
        <div style={{	width: "90vw"}} className="flex flex-row justify-evenly items-center overflow-scroll	flex-wrap	 h-screen bg-gradient-to-tr from-slate-300 to-green-300 ">
        {myContext.knights}
     

   
        
        </div>
        
    </div>
  )
}

export default Main