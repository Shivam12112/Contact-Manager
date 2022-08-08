import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <React.Fragment>
      {/* <div className="row">
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
      </div> */}

      <nav className="navbar navbar-dark navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <NavLink to={"/"} className="navbar-brand">
            <i className="fa-regular fa-address-book text-warning mx-3 " />
            Contact <span className="text-warning">Manager </span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex ms-auto">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
