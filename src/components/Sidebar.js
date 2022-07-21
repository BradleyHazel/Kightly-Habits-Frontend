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
   <aside  className="flex justify-between	 flex-col w-2/5  h-screen bg-slate-600  content-center overflow-auto w-16 sm:w-24 md:w-32 lg:w-40 	">
            <aside  className="flex flex-col">
              <img src="https://cdn.iconscout.com/icon/free/png-256/knight-63-904196.png" alt=''/>
              <div className='flex flex-col'>
               
                <Modal />
              </div>
            </aside>
            <div className='flex flex-col'>
              
              <button onClick={logout} style={{}} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold border py-2.5 border-blue-700 rounded-lg">
                logout
              </button>
            </div>
        </aside>
    </div>
  )
}

export default Sidebar