import axios from "axios";

class ContactApi {


    static getContact() {
          return axios.get(`localhost:8080/api/self/register/api/self/register`);
    }

    static deleteContact() {
        return axios.delete(`localhost:8080/api/self/register`);
    }

    static createContact(contact) {
        return axios.post(`localhost:8080/api/self/register`, contact);
    }

    static updateContact(contact) {
        return axios.put(`localhost:8080/api/self/register`, contact)
    }

}

export default ContactApi;
