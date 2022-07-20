import React, { useState } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";



import picture from "../../assets/Wesnoth_shield.svg"

function Resetpassword() {
  
  const [username, setUsername] = useState("");
  const [oldpassword, setOldpassword] = useState("");
  
  const [newpassword, setNewpassword] = useState("");

  const nav = useNavigate();


  let handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('https://knightly-habits.herokuapp.com/reset' , {
      username: username,
      oldpassword: oldpassword,
      newpassword: newpassword,
     }).then((res)=>{
         console.log(res);
            nav("/resetconfirmed");
}).catch((error) => {
 console.log(error)
});
     }

  return (
    <div style={{boxShadow:"inset 0 0 0 1000px rgba(58, 88, 121, 0.547)"}} className="form-container w-screen">
      <div className="form-content-left">
        <img alt="Crossed swords and a shield" className="form-img hidden lg:block" src={picture}></img>
      </div>
      <div className="form-content-right">
        <div>
          <br />
        <h1 className="title  text-2xl text-white font-bold">Change Password</h1>
        <form onSubmit={handleSubmit}>
          <br />

          <TextField
            className="form-inputs"
            id="outlined-static"
            label="Username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <br />
          <br/>
          <TextField
            className="form-inputs"
            id="outlined-static"
            type="password"
            label="Old Password"
            value={oldpassword}
            placeholder="Old Password"
            onChange={(e) => setOldpassword(e.target.value)}
          />
          <br />
          <br/>
          <TextField
            className="form-inputs"
            id="outlined-static"
            type="password"
            label="New Password"
            value={newpassword}
            placeholder="New Password"
            onChange={(e) => setNewpassword(e.target.value)}
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
      </div>
    </div>
  );
}

export default Resetpassword