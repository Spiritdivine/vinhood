import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.scss";
import rick from "../assets/navbar/rick.png"
import Figure from 'react-bootstrap/Figure'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  mb-4 w-100">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={rick}
            />  
          </Figure>       
        </Link>
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{color:"black"}}
        >
          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/character" className="nav-link">
              Character
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/location"
            >
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
