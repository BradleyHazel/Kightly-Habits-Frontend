import React from 'react'
import Sidebar from './Sidebar'
import Knight from './Knight'
function Main() {
  return (
    <div className="" style={{display: "flex"}}>
        
        <Sidebar />
        <div style={{	width: "90vw"}} className="flex flex-row justify-evenly items-center overflow-scroll	flex-wrap	 h-screen bg-gradient-to-tr from-slate-300 to-green-300 ">
        <Knight />
        <Knight />
        <Knight />
        <Knight />
        <Knight />

   
        
        </div>
        
    </div>
  )
}

export default Main