import React from 'react'

function Resetconfirmed() {
  return (
    <div style={{boxShadow:"inset 0 0 0 1000px rgba(58, 88, 121, 0.547)"}} className="form-container  w-screen">
      <div className="form-content-left">
        <img className="form-img" src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Wesnoth_shield.svg"  alt='Sword and Shield'></img>
      </div>
      <div className="form-content-right">
        <h1 className="title text-xl text-white font-bold">Password has been reset, check your email!</h1>
      </div>
    </div>
  );
}

export default Resetconfirmed