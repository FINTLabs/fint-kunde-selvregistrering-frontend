import React, {useEffect, useState} from 'react';
import ContactApi from "./data/ContactApi";
import LoadingProgress from "./component/LoadingProgress";
import ContactNew from "./component/contact/ContactNew";
import ContactUpdate from "./component/contact/ContactUpdate";

const Main = () => {

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

    const renderFound = () => {
        if (contact.legal.length || contact.technical.length) {
            return <ContactUpdate contact={contact} complete={true}/>;
        } else {
            return <ContactUpdate contact={contact} complete={false}/>;
        }
    }

    if (loading) return <LoadingProgress size={50}/>;
    if (!foundContact) return (<ContactNew nin={nin}/>);
    return renderFound();
}

export default Main;
