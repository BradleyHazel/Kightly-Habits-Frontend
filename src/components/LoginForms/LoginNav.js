import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginNav.css";

function LoginNav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  return (

      <nav className="navbar h-screen justify-around bg-gradient-to-l from-slate-400 to-green-400 w-20 sm:w-40 md:w-40 lg:w-40 xl:w-40 2xl:w-40">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo text-md sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl" onClick={closeMobileMenu}>
            Knightly Habits
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
         
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
            <br />
            <li className="nav-item">
              <Link to="/register" className="nav-links" onClick={closeMobileMenu}>
                Signup
              </Link>
            </li>
            
            <br />
            <li className="nav-item">
              <Link
                to="/resetpassword"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Change Password
              </Link>
            </li>
            <br />
                <li className="nav-item">
              <Link
                to="/forgotuser"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Password and Username Recovery
              </Link>
            </li>
          </ul>
          <div></div>
          <div></div>
          
        </div>
      </nav>
  );
}

export default LoginNav;
