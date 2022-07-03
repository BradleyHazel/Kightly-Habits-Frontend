import React from 'react'
import Sidebar from './Sidebar'
import Knight from './Knight'
function Main() {
  return (
    <div className="" style={{display: "flex"}}>
        <Sidebar />
        <div  className="flex flex-row justify-evenly items-center	overflow-auto	flex-wrap	 h-screen w-screen  bg-gradient-to-tr from-slate-300 to-green-300 ">
        <Knight />
        <Knight />
        <Knight />
        <Knight />
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