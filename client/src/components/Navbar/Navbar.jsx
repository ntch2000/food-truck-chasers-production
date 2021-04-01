import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <NavLink className="nav-link" to="/ChaserProfile">
                ChaserProfile
              </NavLink>
              <NavLink className="nav-link" to="/CitySelector">
                CitySelector
              </NavLink>
              <NavLink className="nav-link" to="/CreateTruck">
                CreateTruck
              </NavLink>
              <NavLink className="nav-link" to="/EditTruck">
                EditTruck
              </NavLink>
              <NavLink className="nav-link" to="/Index">
                Index
              </NavLink>
              <NavLink className="nav-link" to="/Login">
                Login
              </NavLink>
              <NavLink className="nav-link" to="/Operator">
                Operator
              </NavLink>
              <NavLink className="nav-link" to="/TruckCityList">
                TruckCityList
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
