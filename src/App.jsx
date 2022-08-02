import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AddContact } from "./components/AddContact";
import { ContactList } from "./components/ContactList";
import EditContact from "./components/EditContact";
import { Navbar } from "./components/Navbar";
import { ViewContact } from "./components/ViewContact";

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/contact/list"} />} />
        <Route path={"/contact/list"} element={<ContactList />} />
        <Route path={"/contact/add"} element={<AddContact />} />
        <Route path={"/contact/view/:contactid"} element={<ViewContact />} />
        <Route path={"/contact/edit/:contactid"} element={<EditContact />} />
      </Routes>
    </>
  );
};
