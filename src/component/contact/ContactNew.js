import React, {useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import PropTypes from "prop-types";
import ContactApi from "../../data/ContactApi";
import ContactForm from "./ContactForm";
import ContactCreated from "./ContactCreated";


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {},
        logo: {
            marginBottom: theme.spacing(2),
            height: '50%',
            width: '50%',
        },
        button: {
            marginTop: theme.spacing(4),
        }
    }));

const ContactNew = (props) => {

    const updateContactState = (event) => {
        setContact({...contact, nin: nin, [event.target.name]: event.target.value});
    };

    const [created, setCreated] = useState(false);
    const [nin] = useState(props.nin)
    const [contact, setContact] = useState({});

    const classes = useStyles();

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
            <ContactForm
                createContact={createContact}
                isFormValid={isFormValid}
                updateContactState={updateContactState}
                nin={nin}
            />
            {created && <ContactCreated/>}
        </>


    );
}

ContactNew.propTypes = {
    nin: PropTypes.string.isRequired
};

export default ContactNew;
