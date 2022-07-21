import React, { useState } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";



function Temppassword() {
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const nav = useNavigate();


  let handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('https://knightly-habits.herokuapp.com/forgot' , {
      username: username,
      email: email,
     }).then((res)=>{
         console.log(res);
            nav("/resetconfirmed");
}).catch((error) => {
 console.log(error)
});
     }

  return (
    <div className="">
      <h1  className="text-2xl text-white font-bold">Reset password</h1>
      <form onSubmit={handleSubmit}>
        <br />

        <TextField
          className="form-inputs"
          id="outlined-static"
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <br />
        <br />
        <TextField
          className="form-inputs"
          id="outlined-static"
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
  );
}

export default Temppassword