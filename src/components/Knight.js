import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

function Knight() {
  return (
    <aside class="p-2 sm:p-4 md:p-4 lg:p-6 w-5/6 sm:w-1/2 md:w-2/5 lg:w-1/4 xl:w-1/4 2xl:w-1/6 m-5">  
      <div  style={{ display:"flex", flexDirection:"column", justifyContent:"space-evenly"}} className="max-w-sm rounded overflow-hidden shadow-lg">
        <img  src={'https://opengameart.org/sites/default/files/BronzeKnight.gif'} />
        <div class="px-6 py-4 bg-gradient-to-tr from-purple-300 to-slate-400">
          <div class="font-bold text-xl mb-2">Bronze Knight of Habit Name</div>
          <div class="text-xl mb-2" >Level: 1</div>
          <ProgressBar completed={25} bgColor={"#0072bb"} />
          <div class="text-lg mb-2" >Quest details:</div>
          <div class="text-lg mb-2">Quest Completed Today?
        
          </div>
          <input type="checkbox" />
          <p class="text-gray-700 text-base" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
      
    </div>
  </aside>
  )
}

export default Knight