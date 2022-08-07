import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import contactService from "../service/contactService";
import Spinner from "./Spinner";

function EditContact() {
  let { contactid } = useParams();

  let navigate = useNavigate();

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

  const handleInput = (event) => {
    setState({
      ...state,
      contact: {
        ...state.contact,
        [event.target.name]: event.target.value,
      },
    });
  };

  useEffect(() => {
    async function edit() {
      try {
        document.title = "Phone-Directory | Edit-Contact";
        setState({ loading: true });
        let response = await contactService.getContact(contactid);
        let group = await contactService.getGroups();
        setState({ groups: group.data });
        setState({
          contact: response.data,
          loading: false,
          groups: group.data,
        });
      } catch (error) {
        setState({
          loading: false,
          errorMessage: error,
        });
      }
    }
    edit();
  }, [contactid]);

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      let response = await contactService.updateContact(
        state.contact,
        contactid
      );
      if (response) {
        navigate(`/`, { replace: true });
      }
    } catch (error) {
      setState({
        errMesssge: error,
      });
      navigate(`/contact/edit/${contactid}`, { replace: false });
    }
  };

  let { loading, contact, groups } = state;
  // console.log(groups);

  return (
    <React.Fragment>
      <section>
        <pre>{JSON.stringify(contact)}</pre>
        <div className="container p-3">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h4 fw-bold">Update Contact</p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  eum assumenda magnam dignissimos at laudantium sit voluptas
                  enim dicta. Iure obcaecati nobis distinctio animi expedita
                  aperiam cumque, hic et eveniet.
                </p>
              </div>
            </div>
            {loading ? (
              <Spinner />
            ) : (
              <div className="row d-flex justify-content-center">
                <div className="col-md-6 text-center mb-3">
                  <img
                    src={contact.photo}
                    // className='contact-img2'
                    className="contact-img2 img-fluid"
                    alt=""
                  />
                </div>

                <div className="col-md-5">
                  <form onSubmit={handleSubmitForm}>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name..."
                        required={true}
                        name="name"
                        onChange={handleInput}
                        value={contact.name}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Photo URL..."
                        name="photo"
                        onChange={handleInput}
                        value={contact.photo}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Mobile Number..."
                        required={true}
                        name="mobile"
                        onChange={handleInput}
                        value={contact.mobile}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email..."
                        name="email"
                        onChange={handleInput}
                        value={contact.email}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company..."
                        name="company"
                        onChange={handleInput}
                        value={contact.company}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title..."
                        name="title"
                        onChange={handleInput}
                        value={contact.title}
                      />
                    </div>
                    <div className="mb-2">
                      <select
                        className="form-control"
                        name="groupId"
                        onChange={handleInput}
                        value={contact.groupId}
                      >
                        {groups.length > 0 &&
                          groups.map((group) => {
                            return (
                              <option key={group.id} value={group.id}>
                                {group.name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                    <div className="mb-2">
                      <input
                        type="submit"
                        className="btn btn-success me-2 "
                        value="Update"
                      />
                      <NavLink to={"/contact/list"}>
                        <input
                          type="reset"
                          className="btn btn-danger "
                          value="Cancel"
                        />
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default EditContact;
