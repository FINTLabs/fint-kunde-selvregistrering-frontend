import React, {useEffect, useState} from 'react';
import ContactApi from "../data/ContactApi";
import LoadingProgress from "./LoadingProgress";
import ContactNew from "./contact/ContactNew";
import ContactUpdate from "./contact/ContactUpdate";

const ContactRouter = () => {

    const [loading, setLoading] = useState(false);
    const [foundContact, setFoundContact] = useState(false);
    const [contact, setContact] = useState(null);
    const [nin, setNin] = useState("");

    useEffect(() => {
        setLoading(true);
        ContactApi
            .getContact()
            .then(response => {
                if (response.status === 200) {
                    setNin(response.data.nin);
                    setContact(response.data);
                    setFoundContact(true);
                }
            })
            .catch((reason => {
                setContact(null);
                setNin(reason.response.data.message);
                setFoundContact(false);
            }))
            .finally(() => setLoading(false));
    }, [nin, foundContact]);

    const isConnectedToOrganisation = () => {
        console.log("isConnectedToOrganisation", contact.legal.length > 0 || contact.technical.length > 0);
        return contact.legal.length > 0 || contact.technical.length > 0;
    }

    if (loading) return <LoadingProgress size={50}/>;
    if (!foundContact) return (<ContactNew nin={nin}/>);
    return <ContactUpdate contact={contact} complete={isConnectedToOrganisation()}/> ;
}

export default ContactRouter;
