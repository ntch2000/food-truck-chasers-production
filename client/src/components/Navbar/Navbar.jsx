import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";
import NavLogo from "../../assets/images/food-truck-chasers-logo-250.png"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-dark navbar-expand-sm navbar-#A9A9A9">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <img src={NavLogo} className="logo" alt="logo" />
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
<<<<<<< HEAD
            <NavLink className="nav-link" to="/ChaserProfile">
                ChaserProfile
              </NavLink>
              <NavLink className="nav-link" to="/CitySelector">
                CitySelector
=======
              <NavLink className="nav-link" to="/Home">
                Home
>>>>>>> 48a6ac595207d171444a2f0bb067ff822441bd1c
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
