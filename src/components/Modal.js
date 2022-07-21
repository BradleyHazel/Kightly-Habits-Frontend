import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AppContext from "./AppContext";
import { useContext } from "react";

import CloseIcon from '@mui/icons-material/Close';

import { TextField } from '@mui/material';
import axios from "axios"
import Knight from "./Knight"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

 function BasicModal() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
  
    const myContext = useContext(AppContext);

 
    let handleSubmit = async (e) => {
        e.preventDefault();
    
        axios.post('https://knightly-habits.herokuapp.com/add', {
            user: myContext.user,
            name: name,
            desc: desc,
            expPoints: 0,
            completedToday:false
  }).then((res)=>{
             console.log(res);
         
             
             refreshKnights()
             handleClose()
             setName("")
             setDesc("")
  })}

function refreshKnights(){
  let url = "https://knightly-habits.herokuapp.com/";
  fetch(url, {'credentials': 'include'},) //<-- the url as a string
// Wait for the response and convert it to json
.then(res => res.json())
// Take the json and do something with it
.then(json => {
  let knightArr =mapKnights(json)
  myContext.setKnights(knightArr);

}).catch(console.error);
}

function mapKnights(knightArr){

    let knightMap = knightArr.map((knight1,index) => {
      
     return <Knight key={index}  data={knight1}  />
    })
  return knightMap
  }
 
  return (
    <div>
         <button onClick={handleOpen} class="w-full block text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm py-2.5 text-center font-bold " type="button" data-modal-toggle="add-modal">
                  Add Knight
                </button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style} className="w-auto">
        <div className="flex justify-end">
        <CloseIcon style={{cursor: "pointer"}} onClick={handleClose}  />
        </div>
            <div className="flex flex-col">
            <h1 className="title text-2xl font-bold ">Add a new Habit Knight</h1>
                <br />
        <img  src={'https://opengameart.org/sites/default/files/BronzeKnight.gif'} />
        <br />
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="form-inputs flex flex-col">
              <TextField
                required
                className="form-inputs"
                id="outlined-static"
                label="Name"
                value={name}
               
                placeholder="Habit name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <br />
            <div className="form-inputs flex flex-col">
              <TextField
                className="form-inputs"
                id="outlined-static"
                label="Description"
                value={desc}
                placeholder="Description"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <br />
            <div className="flex flex-col">
           
            <button className="w-full block text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm py-2.5 text-center font-bold" type="submit">
              Add New Knight
            </button>
            < br />
            <button onClick={handleClose} className="w-full block text-white bg-red-500 hover:bg-red-700 font-medium rounded-lg text-sm py-2.5 text-center font-bold" type="submit">
              Close
            </button>
            </div>
       
          </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal