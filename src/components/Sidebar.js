import React from 'react'
import { useNavigate } from "react-router-dom";


function Sidebar() {
  const nav = useNavigate();
  function logout (){
    nav("/logout");
  }
  return (
    <div >
   <aside className="flex justify-between	 flex-col w-20 sm:w-20 md:w-24 lg:w-28 xl:w-34 2xl:w-40    h-screen bg-slate-600  content-center overflow-auto	">
            <aside  className="flex flex-col">
              <img src="https://cdn.iconscout.com/icon/free/png-256/knight-63-904196.png" alt=''/>
              <div class='flex flex-col'>
                <button style={{}} class=" bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded">
                  Add 
                </button>
              </div>
            </aside>
            <div class='flex flex-col'>
              <button onClick={logout} style={{}} class=" bg-blue-500 hover:bg-blue-700 text-white font-bold border border-blue-700 rounded">
                logout
              </button>
            </div>
        </aside>
    </div>
  )
}

export default Sidebar