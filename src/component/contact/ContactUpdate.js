import React, {useState} from "react";
import ContactApi from "../../data/ContactApi";
import ContactForm from "./ContactForm";
import GoToCustomerPortal from "../GoToCustomerPortal";
import ContactDelete from "./ContactDelete";
import InformationCard from "../InformationCard";
import {Box} from "@material-ui/core";

const ContactUpdate = (props) => {
    const [updated, setUpdated] = useState(false);
    const [complete] = useState(props.complete);
    const [contact, setContact] = useState(props.contact);

    const updateContactState = (event) => {
        setContact({...contact, [event.target.name]: event.target.value});
    };

    const updateContact = () => {
        ContactApi.updateContact(contact)
            .then(response => {
                if (response.status === 201) {
                    setUpdated(true);
                }
            });
    };

    const isFormValid = () => {
        return contact.nin && contact.firstName && contact.lastName && contact.mail && contact.mobile;
    };

    return (
        <>
            {updated &&
            <Box mb={2}>
                <InformationCard dense>
                    Informasjonen er oppdatert!
                </InformationCard>
            </Box>
            }
            <ContactForm
                createContact={updateContact}
                isFormValid={isFormValid}
                updateContactState={updateContactState}
                contact={contact}
                nin={contact.nin}
            />
            {complete && <GoToCustomerPortal redirect={false} fullWidth={true}/>}
            <ContactDelete complete={complete}/>
        </>
    );
}

//ContactUpdate.propTypes = {};

export default ContactUpdate;
