import React from 'react'
import { NavLink } from "react-router-dom";
function Card() {
  return (


    <div className="col-md-6">
      <section className="contact-list my-4">

        <div className="row">
          <div className="col">

            <div className="row align-items-center">
              <div className="col-md-3">
                <img
                  className="contact-img"
                  src="../user.png"
                  alt=""
                />
              </div>
              <div className="col-md-7 ms-3">
                <ul className="list-group">
                  <li className="list-group-item list-group-item-action ">
                    Name :
                    <span className="fw-bold ms-1 ">
                      Shivam Kushwaha
                    </span>
                  </li>

                  <li className="list-group-item list-group-item-action ">
                    Contact :
                    <span className="fw-bold ms-1">7654368877</span>
                  </li>

                  <li className="list-group-item list-group-item-action ">
                    Email :
                    <span className="fw-bold ms-1">shivam@abc.com</span>
                  </li>
                </ul>
              </div>
              <div className="col-md-1 d-flex flex-column align-items-center ms-3">
                <NavLink
                  className="btn btn-warning bt "
                  to={`/contact/view/:contactid`}
                >
                  <i className="fa-solid fa-eye" />
                </NavLink>
                <NavLink
                  className="btn btn-success bt my-1"
                  to={`/contact/edit/:contactid`}
                >
                  <i className="fa fa-pen-to-square"></i>
                </NavLink>
                <button className="btn btn-danger bt " to={`/`}>
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Card
