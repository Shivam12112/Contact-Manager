import axios from "axios";

export default class contactService {
  static myAPI = "http://localhost:7000";

  static allContacts() {
    let contacts = `${this.myAPI}/contacts`;
    return axios.get(contacts);
  }
  static getContact(contactId) {
    let contact = `${this.myAPI}/contacts/${contactId}`;
    return axios.get(contact);
  }
  static getGroup(groupId) {
    let group = `${this.myAPI}/groups/${groupId}`;
    return axios.get(group);
  }
}
