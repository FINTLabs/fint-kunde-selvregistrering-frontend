import React, {useState} from "react";
import PropTypes from "prop-types";
import ContactApi from "../../data/ContactApi";
import ContactForm from "./ContactForm";
import ContactCreated from "./ContactCreated";

const ContactNew = (props) => {

    const updateContactState = (event) => {
        setContact({...contact, nin: nin, [event.target.name]: event.target.value});
    };

    const [created, setCreated] = useState(false);
    const [nin] = useState(props.nin)
    const [contact, setContact] = useState({});


    const createContact = () => {
        ContactApi.createContact(contact)
            .then(response => {
                if (response.status === 201) {
                    setCreated(true);
                }
            })
            .catch(() => {
            });
    };

    const isFormValid = () => {
        return contact.nin && contact.firstName && contact.lastName && contact.mail && contact.mobile;
    };

    return (
        <>
            {created ?
                <ContactCreated/>
                :
                <ContactForm
                    createContact={createContact}
                    isFormValid={isFormValid}
                    updateContactState={updateContactState}
                    nin={nin}
                />
            }
        </>


    );
}

ContactNew.propTypes = {
    nin: PropTypes.string.isRequired
};

export default ContactNew;
