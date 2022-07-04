import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoginNav.css";

function LoginNav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  return (

      <nav className="navbar h-screen justify-around bg-gradient-to-t from-slate-400 to-green-400">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Knightly Habits
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/register" className="nav-links" onClick={closeMobileMenu}>
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resetpassword"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Change Password
              </Link>
            </li>
            
                <li className="nav-item">
              <Link
                to="/forgotuser"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Password/Username Recovery
              </Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default LoginNav;
