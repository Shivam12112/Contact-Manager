import React from "react";
import { NavLink } from "react-router-dom";

export const ContactList = () => {
  return (
    <>
      <section>
        <div className='contanier p-3'>
          <div className='row'>
            <div className='col-md-1' />
            <div className='col-md-10'>
              <p className='h4 fw-bold'>
                Phone Directory
                <NavLink
                  to={"/contact/add"}
                  className='btn btn-sm btn-success ms-2'
                >
                  <i className='fa fa-user-plus me-1 '></i>
                  New
                </NavLink>
              </p>
              <p className='fst-italic'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum
                assumenda magnam dignissimos at laudantium sit voluptas enim
                dicta. Iure obcaecati nobis distinctio animi expedita aperiam
                cumque, hic et eveniet.
              </p>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-1' />
            <div className='col-md-3'>
              <input
                type='text'
                placeholder='Search Name...'
                className='form-control'
              />
            </div>
            <div className='col'>
              <button type='submit' className='btn btn-warning  '>
                <i className='fa fa-search me-1' />
                <span className='fw-bold '>Find</span>
              </button>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-1' />
            <div className='col-md-5'>
              <div className='col'>
                <section className='contact-list my-4'>
                  <div className='row'>
                    <div className='col'>
                      <div className='card'>
                        <div className='card-body'>
                          <div className='row align-items-center'>
                            <div className='col-md-3'>
                              <img
                                className='contact-img'
                                src='../user.png'
                                alt=''
                              />
                            </div>
                            <div className='col-md-7 ms-4'>
                              <ul className='list-group'>
                                <li className='list-group-item list-group-item-action '>
                                  Name :
                                  <span className='fw-bold ms-1 '>
                                    Shivam Kushwaha
                                  </span>
                                </li>

                                <li className='list-group-item list-group-item-action '>
                                  Contact :
                                  <span className='fw-bold ms-1'>
                                    7654368877
                                  </span>
                                </li>

                                <li className='list-group-item list-group-item-action '>
                                  Email :
                                  <span className='fw-bold ms-1'>
                                    shivam@abc.com
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className='col-md-1 d-flex flex-column align-items-center ms-2'>
                              <NavLink
                                className='btn btn-warning bt '
                                to={`/contact/view/:contactid`}
                              >
                                <i className='fa-solid fa-eye' />
                              </NavLink>
                              <NavLink
                                className='btn btn-success bt my-1'
                                to={`/contact/edit/:contactid`}
                              >
                                <i className='fa fa-pen-to-square'></i>
                              </NavLink>
                              <button className='btn btn-danger bt ' to={`/`}>
                                <i className='fa fa-trash'></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='col'>
                <section className='contact-list my-4'>
                  <div className='row'>
                    <div className='col'>
                      <div className='card'>
                        <div className='card-body'>
                          <div className='row align-items-center'>
                            <div className='col-md-3'>
                              <img
                                className='contact-img'
                                src='../user.png'
                                alt=''
                              />
                            </div>
                            <div className='col-md-7 ms-4'>
                              <ul className='list-group'>
                                <li className='list-group-item list-group-item-action '>
                                  Name :
                                  <span className='fw-bold ms-1 '>
                                    Shivam Kushwaha
                                  </span>
                                </li>
                                <li className='list-group-item list-group-item-action '>
                                  Contact :
                                  <span className='fw-bold ms-1'>
                                    7654368877
                                  </span>
                                </li>
                                <li className='list-group-item list-group-item-action '>
                                  Email :
                                  <span className='fw-bold ms-1'>
                                    shivam@abc.com
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <div className='col-md-1 d-flex flex-column align-items-center ms-2'>
                              <NavLink
                                className='btn btn-warning bt '
                                to={`/contact/view/:contactid`}
                              >
                                <i className='fa-solid fa-eye' />
                              </NavLink>
                              <NavLink
                                className='btn btn-success bt my-1'
                                to={`/contact/edit/:contactid`}
                              >
                                <i className='fa fa-pen-to-square'></i>
                              </NavLink>
                              <button className='btn btn-danger bt ' to={`/`}>
                                <i className='fa fa-trash'></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
