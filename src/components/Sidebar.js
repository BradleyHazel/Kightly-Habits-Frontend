import React from 'react'
import { useNavigate } from "react-router-dom";
import Modal from './Modal'

function Sidebar() {
  const nav = useNavigate();
  function logout (){
    nav("/logout");
  }
  return (
    <div >
   <aside style={{	width: "10vw"}} className="flex justify-between	 flex-col   h-screen bg-slate-600  content-center overflow-auto	">
            <aside  className="flex flex-col">
              <img src="https://cdn.iconscout.com/icon/free/png-256/knight-63-904196.png" alt=''/>
              <div class='flex flex-col'>
               
                <Modal />
              </div>
            </aside>
            <div class='flex flex-col'>
              
              <button onClick={logout} style={{}} class=" bg-blue-500 hover:bg-blue-700 text-white font-bold border py-2.5 border-blue-700 rounded-lg">
                logout
              </button>
            </div>
        </aside>
    </div>
  )
}

export default Sidebar