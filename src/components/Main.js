import React from 'react'
import Sidebar from './Sidebar'
function Main() {
  return (
    <div className="container">
        <Sidebar />
        <main className="flex-1 ml-40">
            <div  className="flex h-screen w-screen p-20 bg-gradient-to-tr from-slate-500 to-green-300 ">
                <h1 className="text-4xl">Top Content</h1>
            </div>
        </main>
    </div>
  )
}

export default Main