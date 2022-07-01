import React from 'react'

function Sidebar() {
  return (
    <div>
         <div class="flex">
        <aside class="w-40 fixed left-0 top-0 h-screen bg-slate-700 p-10 content-center">
            <img src="https://cdn.iconscout.com/icon/free/png-256/knight-63-904196.png"/>
            <button className="
            bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  hover:border-transparent rounded
            fixed left-1 px-12 bottom-3 py-2
            ">Logout</button>
            
        </aside>
        </div>
    </div>
  )
}

export default Sidebar