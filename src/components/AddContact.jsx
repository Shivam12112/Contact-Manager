import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import contactService from "../service/contactService";

export const AddContact = () => {
  let navigate = useNavigate();
  document.title = "Phone-Directory | Add-Contact";
  let [state, setState] = useState({
    loading: false,
    contact: {
      name: "",
      photo: "",
      mobile: "",
      email: "",
      company: "",
      title: "",
      groupId: "",
    },
    groups: "",
    errMesssge: "",
  });

  const updateInput = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await contactService.newContact(state.contact);
      if (response) {
        navigate("/contact/list", { replace: true });
        // window.alert("Contact Created");
      }
    } catch (error) {
      setState({
        errMesssge: error,
      });
      navigate("/contact/add", { replace: false });
    }
  };

  let { contact } = state;
  // console.log(contact);

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(state.contact)}</pre> */}
      <section>
        <div className="container p-3">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h4 fw-bold">Add Contact</p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  eum assumenda magnam dignissimos at laudantium sit voluptas
                  enim dicta. Iure obcaecati nobis distinctio animi expedita
                  aperiam cumque, hic et eveniet.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <form onSubmit={handleOnSubmit}>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name..."
                      required
                      name="name"
                      value={contact.name}
                      onChange={updateInput}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Photo URL..."
                      name="photo"
                      value={contact.photo}
                      onChange={updateInput}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Mobile Number..."
                      required
                      name="mobile"
                      value={contact.mobile}
                      onChange={updateInput}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email..."
                      name="email"
                      value={contact.email}
                      onChange={updateInput}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company..."
                      name="company"
                      value={contact.company}
                      onChange={updateInput}
                    />
                  </div>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title..."
                      name="title"
                      value={contact.title}
                      onChange={updateInput}
                    />
                  </div>
                  <div className="mb-2">
                    <select
                      className="form-control"
                      name="groupId"
                      value={contact.groupId}
                      onChange={updateInput}
                    >
                      <option value="">-Select Group-</option>
                      <option value={1}>Colleague</option>
                      <option value={2}>Friend</option>
                      <option value={3}>Family</option>
                      <option value={4}>Service</option>
                      <option value={5}>Community</option>
                      <option value={6}>Social</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <input
                      type="submit"
                      className="btn btn-success me-2 "
                      value="Submit"
                    />
                    <NavLink to={"/contact/list"}>
                      <input
                        type="submit"
                        className="btn btn-danger "
                        value="Cancel"
                      />
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
