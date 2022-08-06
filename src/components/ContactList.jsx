import React from "react";
import contactService from "../service/contactService";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from "./Spinner";

export const ContactList = () => {
  let [state, setState] = useState({
    loading: false,
    contacts: [],
    errorMessege: "",
  });

  useEffect(() => {
    async function fetchAPI() {
      try {
        setState({ loading: true });
        let response = await contactService.allContacts();
        // console.log(response.data);
        setState({ loading: false, contacts: response.data });
      } catch (error) {
        console.log(error);
        setState({
          loading: false,
          errorMessege: error,
        });
      }
    }
    fetchAPI();
  }, []);

  let { loading, contacts } = state;

  return (
    <section>
      <div className="container p-3">
        <div className="row">
          <div className="col-md-12">
            <p className="h4 fw-bold">
              Phone Directory
              <NavLink
                to={"/contact/add"}
                className="btn btn-sm btn-success ms-2"
              >
                <i className="fa fa-user-plus me-1 "></i>
                New
              </NavLink>
            </p>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum
              assumenda magnam dignissimos at laudantium sit voluptas enim
              dicta. Iure obcaecati nobis distinctio animi expedita aperiam
              cumque, hic et eveniet.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <input
              type="text"
              placeholder="Search Name..."
              className="form-control"
            />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-warning  ">
              <i className="fa fa-search me-1" />
              <span className="fw-bold ">Find</span>
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="row">
            {contacts.map((contact) => {
              return (
                <div className="col-md-6 my-2" key={contact.id}>
                  <div className="card">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-md-3">
                          <img
                            className="contact-img"
                            src={contact.photo}
                            alt=""
                          />
                        </div>
                        <div className="col-md-7 ms-4">
                          <ul className="list-group">
                            <li className="list-group-item list-group-item-action ">
                              Name :
                              <span className="fw-bold ms-1 ">
                                {contact.name}
                              </span>
                            </li>

                            <li className="list-group-item list-group-item-action ">
                              Contact :
                              <span className="fw-bold ms-1">
                                {contact.mobile}
                              </span>
                            </li>

                            <li className="list-group-item list-group-item-action ">
                              Email :
                              <span className="fw-bold ms-1">
                                {contact.email}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-1 d-flex flex-column align-items-center ms-2">
                          <NavLink
                            className="btn btn-warning "
                            to={`/contact/view/${contact.id}`}
                          >
                            <i className="fa-solid fa-eye"></i>
                          </NavLink>
                          <NavLink
                            className="btn btn-success  my-1"
                            to={`/contact/edit/${contact.id}`}
                          >
                            <i className="fa fa-pen-to-square"></i>
                          </NavLink>
                          <button className="btn btn-danger " to={`/`}>
                            <i className="fa fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
