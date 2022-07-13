import ProgressBar from "@ramonak/react-progress-bar";
import React, {useState, useCallback, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { TextField } from '@mui/material';
import axios from 'axios';

axios.defaults.withCredentials = true;
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Knight(props) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState(props.data.name);
  const [desc, setDesc] = useState(props.data.desc);

  const [newName, setnewName] = useState(props.data.name);
  const [newDesc, setnewDesc] = useState(props.data.desc);

  

  let level = levelCalculator(props.data.expPoints)
  let knightPicture = pickKnightImg(level)
  let title = pickKnightTitle(level)
  const [knightLvl, setknightLvl] = useState(level);
  const [checkValue,setcheckValue] =useState(props.data.completedToday)
  const [knightXPTotal, setknightXPTotal] = useState(props.data.expPoints);
  const [knightTitle, setknightTitle] = useState(title);


  const [knightImg, setknightImg] = useState(knightPicture);
  function levelCalculator (exp){
    return Math.floor(exp/100)
  
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    axios.put('http://localhost:8001/'+props.data._id, {
        name: newName,
        desc: newDesc,
}).then((res)=>{
         console.log(res);
  
         
         handleClose()
         setName(newName)
         setDesc(newDesc)
})}

  function pickKnightImg (level){
    if(level <= 0){
      return "https://opengameart.org/sites/default/files/BronzeKnight.gif"
    }
    else if (level ==1){
      return "https://opengameart.org/sites/default/files/BlackKnight.gif"
    }
    else if (level ==2){
      return "https://opengameart.org/sites/default/files/MitheralKnight.gif"
    }
    else if (level ==3){
      return "https://opengameart.org/sites/default/files/AdamantKnight.gif"
    }
    else if(level >= 4){
      return "https://opengameart.org/sites/default/files/GoldKnight.gif"
    }
    
  }
  function pickKnightTitle (level){
    if(level == 0){
      return "Bronze"
    }
    else if (level ==1){
      return "Black"
    }
    else if (level ==2){
      return "Mitheral"
    }
    else if (level ==3){
      return "Adamant"
    }
    else if (level ==4){
      return "Gold"
    }
  }

  
  let exp = props.data.expPoints
  while(exp>=100){
    exp=exp-100
  }
  const [knightShowXP, setknightShowXP] = useState(exp);


  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  };
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.6 },
        particleCount: Math.floor(100 * particleRatio)
      });
  }, []);

  const fire = useCallback(() => {

    makeShot(0.15, {
      spread: 26,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.2, {
      spread: 60,
      startVelocity: 55
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });
  }, [makeShot]);

  function decidedFire (e){
    if(checkValue == true){
    let expNew = knightXPTotal - 25
    setknightXPTotal(expNew)
    setcheckValue(false)

    level = levelCalculator(knightXPTotal-25)
    setknightLvl(level)

    title = pickKnightTitle(level)
    setknightTitle(title)

    knightPicture = pickKnightImg(level)
    setknightImg(knightPicture)

    exp = knightXPTotal -25
    while(exp>=100){
      exp=exp-100
    }
    setknightShowXP(exp)
    let shift = knightXPTotal -25

    axios.put('http://localhost:8001/'+e.currentTarget.id, {
      
      expPoints:shift,
      completedToday:false
  
    })
    .then((response) => {
     
  console.log(response)

    })}

    else{
      let expNew = knightXPTotal + 25
      setknightXPTotal(expNew)
      setcheckValue(true)
      let oldLevel = knightLvl
      level = levelCalculator(knightXPTotal+25)

      knightPicture = pickKnightImg(level)
      setknightImg(knightPicture)

      title = pickKnightTitle(level)
      setknightTitle(title)
      
      setknightLvl(level)
      if(level>oldLevel){
        fire()
      }
      exp = knightXPTotal +25
      while(exp>=100){
        exp=exp-100
      }
      setknightShowXP(exp)
      let shift = knightXPTotal +25

      axios.put('http://localhost:8001/'+e.currentTarget.id, {
      
        expPoints:shift,
        completedToday:true
    
      })
      .then((response) => {
       
    console.log(response)
  
      })

    }
  }

  return (
    <aside class="p-2 sm:p-4 md:p-4 lg:p-6 w-5/6 sm:w-1/2 md:w-2/5 lg:w-1/4 xl:w-1/4 2xl:w-1/6 m-5 ">  
      <div  style={{ display:"flex", flexDirection:"column", justifyContent:"space-evenly"}} className="max-w-sm rounded overflow-hidden shadow-lg">
        <img  src={knightImg} />
        <div class="px-6 py-4 bg-gradient-to-tr from-purple-400 to-slate-500 ">
          <div class="font-bold text-lg mb-2">{knightTitle} Knight of {name}</div>
          <div class="text-xl mb-2" >Level: {knightLvl}</div>
          <div>EXP</div>
          <div>Total: {knightXPTotal}</div>
          <ProgressBar completed={knightShowXP} bgColor={"#0072bb"} />

          <button onClick={handleOpen} class="w-full block text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm py-2.5 text-center font-bold " type="button" data-modal-toggle="add-modal">
          Quest details
                </button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
            <div className="flex flex-col">
            <h1 className="title text-2xl font-bold ">Update the {knightTitle} Knight of {name}</h1>
                <br />
        <img  src={knightImg} />
        <br />
        <form onSubmit={handleSubmit}>
            <div className="form-inputs">
              <TextField
                required
                className="form-inputs"
                id="outlined-static"
                label="Name"
                value={newName}
               
                placeholder="Habit name"
                onChange={(e) => setnewName(e.target.value)}
              />
            </div>
            <br />
            <div className="form-inputs">
              <TextField
                className="form-inputs"
                id="outlined-static"
                label="Description"
                value={newDesc}
                placeholder="Description"
                onChange={(e) => setnewDesc(e.target.value)}
              />
            </div>
            <div className="flex">
            <button onClick={handleClose} className="w-full block text-white bg-red-500 hover:bg-red-700 font-medium rounded-lg text-sm py-2.5 text-center font-bold" type="submit">
              Close
            </button>
            <button className="w-full block text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm py-2.5 text-center font-bold" type="submit">
              Update Knight
            </button>
            </div>
       
          </form>
          </div>
        </Box>
      </Modal>
     
          <div class="text-md mb-2">Quest Completed Today?</div>
          
          
          <input id={props.data._id} onClick={decidedFire} type="checkbox" checked={checkValue}/>
          <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        </div>
      
    </div>
  </aside>
  )
}

export default Knight