import ProgressBar from "@ramonak/react-progress-bar";
import React, { useCallback, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";


function Knight(props) {

  function levelCalculator (exp){
    if(exp<100){
      return 1
    }
    else if(exp<200){
      return 2
    }
    else if(exp<300){
      return 3
    }
    else{
      return 4
    }
    
  }

  let level = levelCalculator(props.data.expPoints)
  let exp = props.data.expPoints
  while(exp>100){
    exp=exp-100
  }
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
    if(e.target.checked){
    fire()
    }
  }

  return (
    <aside class="p-2 sm:p-4 md:p-4 lg:p-6 w-5/6 sm:w-1/2 md:w-2/5 lg:w-1/4 xl:w-1/4 2xl:w-1/6 m-5 ">  
      <div  style={{ display:"flex", flexDirection:"column", justifyContent:"space-evenly"}} className="max-w-sm rounded overflow-hidden shadow-lg">
        <img  src={'https://opengameart.org/sites/default/files/BronzeKnight.gif'} />
        <div class="px-6 py-4 bg-gradient-to-tr from-purple-400 to-slate-500 ">
          <div class="font-bold text-xl mb-2">Bronze Knight of {props.data.name}</div>
          <div class="text-xl mb-2" >Level: {level}</div>
          <div>EXP</div>
          <ProgressBar completed={exp} bgColor={"#0072bb"} />
     
          <button style={{}} class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded">
          Quest details 
                </button>
          <div class="text-md mb-2">Quest Completed Today?</div>
          
          <input onClick={decidedFire} type="checkbox" />
          <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        </div>
      
    </div>
  </aside>
  )
}

export default Knight