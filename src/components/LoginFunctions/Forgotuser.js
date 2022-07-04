import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Temppassword from './Temppassword';


function Forgotuser() {
  
  const [email, setEmail] = useState("");

  const nav = useNavigate();


  let handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:8001/forgotuser' , {
      email: email,
     }).then((res)=>{
         console.log(res);
            nav("/usernameconfirm");
}).catch((error) => {
 console.log(error)
});
     }

  return (
    <div style={{boxShadow:"inset 0 0 0 1000px rgba(58, 88, 121, 0.547)"}} className="form-container w-screen">
      <div className="form-content-left">
        <img className="form-img hidden lg:block" src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Wesnoth_shield.svg"></img>
      </div>
      <div className="form-content-right">
        <div>
        <h1 className="title  text-2xl text-white font-bold">Forgot Username</h1>
        <br/>
        <form onSubmit={handleSubmit}>
          <TextField
            className="form-inputs"
            id="outlined-static"
            label="Email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <button className="form-input-btn" type="submit">
          Submit
          </button>
          {/* <Button
            className="form-inputs"
            type="submit"
            variant="outlined"
            sx={{
              color: "black",
              backgroundColor: "white",
              borderColor: "purple",
            }}
          >
            Submit
          </Button> */}
        </form>
        </div>
      
        <Temppassword />
      </div>
    </div>
  );
}

export default Forgotuser