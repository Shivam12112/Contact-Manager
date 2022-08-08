import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import contactService from "../service/contactService";
import Spinner from "./Spinner";

export const ViewContact = () => {
  let { contactid } = useParams();

  let [state, setState] = useState({
    loading: false,
    contact: [],
    group: "",
    errorMessege: "",
  });
  useEffect(() => {
    async function fetchContact() {
      try {
        document.title = "Phone-Directory | View-Contact";
        setState({ loading: true });
        let response = await contactService.getContact(contactid);
        // console.log(response.data);
        let groupName = await contactService.getGroup(response.data.groupId);
        setState({
          loading: false,
          contact: response.data,
          group: groupName.data,
        });
      } catch (error) {
        setState({ loading: false, errorMessege: error });
      }
    }
    fetchContact();
  }, [contactid]);

  let { loading, contact, group } = state;
  // console.log(contact);
  return (
    <React.Fragment>
      <section>
        <div className="container p-3">
          <div className="row">
            <div className="col">
              <p className="h4 fw-bold">View Contact</p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum
                assumenda magnam dignissimos at laudantium sit voluptas enim
                dicta. Iure obcaecati nobis distinctio animi expedita aperiam
                cumque, hic et eveniet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3">
        {loading ? (
          <Spinner />
        ) : (
          <div className="contanier">
            <div className="row align-items-center">
              <div className="col-md-1" />
              <div className="col-md-3">
                <img src={contact.photo} className="contact-img2" alt="" />
              </div>
              <div className="col-md-6 ms-5">
                <ul className="list-group">
                  <li className="list-group-item list-group-item-action mb-1">
                    Name :<span className="fw-bold ms-1 ">{contact.name}</span>
                  </li>

                  <li className="list-group-item list-group-item-action mb-1 ">
                    Contact :
                    <span className="fw-bold ms-1">{contact.mobile}</span>
                  </li>

                  <li className="list-group-item list-group-item-action mb-1 ">
                    Email :<span className="fw-bold ms-1">{contact.email}</span>
                  </li>
                  <li className="list-group-item list-group-item-action mb-1">
                    Company :
                    <span className="fw-bold ms-1 ">{contact.company}</span>
                  </li>
                  <li className="list-group-item list-group-item-action mb-1 ">
                    Title :
                    <span className="fw-bold ms-1 ">{contact.title}</span>
                  </li>
                  <li className="list-group-item list-group-item-action mb-1">
                    Group :<span className="fw-bold ms-1 ">{group.name}</span>
                  </li>
                </ul>
                <div className="my-2">
                  <NavLink to={"/contact/list"}>
                    <input
                      type="submit"
                      className="btn btn-success "
                      value="Go Back"
                    />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </React.Fragment>
  );
};
