import React from 'react'
import Sidebar from './Sidebar'
import Knight from './Knight'
function Main() {
  return (
    <div className="" style={{display: "flex"}}>
        <Sidebar />
        <div style={{ display:"flex", justifyContent:"space-evenly"}} className="flex h-screen w-screen p-10 bg-gradient-to-tr from-slate-400 to-green-300 ">
            
                    <Knight />
                    <Knight />
                    <Knight />
                    <Knight />
                    
                   
    
            </div>
        
    </div>
  )
}

export default Main