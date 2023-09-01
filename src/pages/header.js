import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Authentication from '../components/Authentication';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light  px-3 " id="navbarColor">
      <Link className="navbar-brand" to="/">Book Donation Library</Link>
        < button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className = "collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link id = "button" className="nav-link" to="/"><strong>Home</strong></Link>
            </li>
            <Authentication/>

        </ul>
        </div>
      </nav>
    

      <Outlet />
    </>
  )
};

export default Header;