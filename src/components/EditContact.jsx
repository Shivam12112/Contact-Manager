import React from "react";
import { NavLink } from "react-router-dom";

function EditContact() {
  return (
    <React.Fragment>
      <section>
        <div className='container p-3'>
          <div className='grid'>
            <div className='row'>
              <div className='col'>
                <p className='h4 fw-bold'>Update Contact</p>
                <p className='fst-italic'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  eum assumenda magnam dignissimos at laudantium sit voluptas
                  enim dicta. Iure obcaecati nobis distinctio animi expedita
                  aperiam cumque, hic et eveniet.
                </p>
              </div>
            </div>
            <div className='row align-items-center'>
              <div className='col-md-4'>
                <form>
                  <div className='mb-2'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Full Name...'
                      required
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type='file'
                      className='form-control'
                      placeholder='Photo URL...'
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type='number'
                      className='form-control'
                      placeholder='Mobile Number...'
                      required
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email...'
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Company...'
                    />
                  </div>
                  <div className='mb-2'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Title...'
                    />
                  </div>
                  <div className='mb-2'>
                    <select className='form-control'>
                      <option value=''>-Select Group-</option>
                      <option value=''>Friend</option>
                      <option value=''>Colleague</option>
                      <option value=''>Family</option>
                      <option value=''>Family</option>
                    </select>
                  </div>
                  <div className='mb-2'>
                    <input
                      type='submit'
                      className='btn btn-success me-2 '
                      value='Update'
                    />
                    <NavLink to={"/contact/list"}>
                      <input
                        type='submit'
                        className='btn btn-danger '
                        value='Cancel'
                      />
                    </NavLink>
                  </div>
                </form>
              </div>
              <div className='col-md-6 my-0'>
                <img
                  src='https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png'
                  // className='contact-img2'
                  className=' contact-img img-fluid'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default EditContact;
