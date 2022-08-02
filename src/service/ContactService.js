import axios from "axios";
export class ContactService {
  static serverURL = `http://localhost:4000`;

  static getAllContacts() {
    let dataURL = `${this.serverURL}/contacts}`;
    return axios.get(dataURL);
  }
}