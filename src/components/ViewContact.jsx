import React from "react";
import { NavLink } from "react-router-dom";

export const ViewContact = () => {
  return (
    <React.Fragment>
      <section>
        <div className='container p-3'>
          <div className='row'>
            <div className='col'>
              <p className='h4 fw-bold'>View Contact</p>
              <p className='fst-italic'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum
                assumenda magnam dignissimos at laudantium sit voluptas enim
                dicta. Iure obcaecati nobis distinctio animi expedita aperiam
                cumque, hic et eveniet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-3'>
        <div className='contanier'>
          <div className='row align-items-center'>
            <div className='col-md-1' />
            <div className='col-md-3'>
              <img
                src='https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png'
                className='contact-img2'
                alt=''
              />
            </div>
            <div className='col-md-6 ms-5'>
              <ul className='list-group'>
                <li className='list-group-item list-group-item-action mb-1'>
                  Name :<span className='fw-bold ms-1 '>Shivam Kushwaha</span>
                </li>

                <li className='list-group-item list-group-item-action mb-1 '>
                  Contact :<span className='fw-bold ms-1'>7654368877</span>
                </li>

                <li className='list-group-item list-group-item-action mb-1 '>
                  Email :<span className='fw-bold ms-1'>shivam@abc.com</span>
                </li>
                <li className='list-group-item list-group-item-action mb-1'>
                  Company :<span className='fw-bold ms-1 '>Genpact</span>
                </li>
                <li className='list-group-item list-group-item-action mb-1 '>
                  Title :<span className='fw-bold ms-1 '>Project Manager</span>
                </li>
                <li className='list-group-item list-group-item-action mb-1'>
                  Group :<span className='fw-bold ms-1 '>Colleague </span>
                </li>
              </ul>
              <div className='my-2'>
                <NavLink to={"/contact/list"}>
                  <input
                    type='submit'
                    className='btn btn-success '
                    value='Go Back'
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
