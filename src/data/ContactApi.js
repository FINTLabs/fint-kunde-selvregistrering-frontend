import axios from "axios";

class ContactApi {


    static getContact() {
          return axios.get(`/api/self/register`);
    }

    static deleteContact() {
        return axios.delete(`/api/self/register`);
    }

    static createContact(contact) {
        return axios.post(`/api/self/register`, contact);
    }

    static updateContact(contact) {
        return axios.put(`/api/self/register`, contact)
    }

}

export default ContactApi;
