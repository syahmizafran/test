import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  px-3 ">
      <Link className="navbar-brand" to="/">NextaCloud Test</Link>
        < button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className = "collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign up</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/signin">Log In</Link>
            </li>
        </ul>
        </div>
      </nav>
    

      <Outlet />
    </>
  )
};

export default Header;