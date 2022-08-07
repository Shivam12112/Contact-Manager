import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <React.Fragment>
      <div className="row">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink to={"/"} className="navbar-brand">
              <h3>
                <i className="fa-regular fa-address-book text-warning mx-3 " />
                Contact <span className="text-warning">Manager </span>
              </h3>
            </NavLink>
            <div className="d-flex">
              <button className="btn btn-primary" type="submit">
                Log In
              </button>
              <button className="btn btn-warning ms-2" type="submit">
                Sign UP
              </button>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};
