import axios from "axios";

export default class contactService {
  static myAPI = "http://localhost:7000";

  static allContacts() {
    let dataURL = `${this.myAPI}/contacts`;
    return axios.get(dataURL);
  }
  static getContact(contactId) {
    let dataURL = `${this.myAPI}/contacts/${contactId}`;
    return axios.get(dataURL);
  }

  static getGroups() {
    let dataURL = `${this.myAPI}/groups`;
    return axios.get(dataURL);
  }

  static getGroup(groupId) {
    let dataURL = `${this.myAPI}/groups/${groupId}`;
    return axios.get(dataURL);
  }

  static newContact(contact) {
    let dataURL = `${this.myAPI}/contacts`;
    return axios.post(dataURL, contact);
  }

  static updateContact(contact, contactId) {
    let dataURL = `${this.myAPI}/contacts/${contactId}`;
    return axios.put(dataURL, contact);
  }

  static deleteContact(contactId) {
    let dataURL = `${this.myAPI}/contacts/${contactId}`;
    return axios.delete(dataURL);
  }
}
