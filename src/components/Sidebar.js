import React from 'react'

function Sidebar() {
  return (
    <div >
   <aside className="w-40  left-0 top-0 h-screen bg-slate-600 p-10 content-center">
            <img src="https://cdn.iconscout.com/icon/free/png-256/knight-63-904196.png"/>
            <button className="
            bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white  hover:border-transparent rounded
            fixed left-1 px-12 bottom-3 py-2
            ">Logout</button>
            
        </aside>
    </div>
  )
}

export default Sidebar