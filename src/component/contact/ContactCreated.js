import PropTypes from 'prop-types'
import React from 'react';
import GoToCustomerPortal from "../GoToCustomerPortal";
import InformationCard from "../InformationCard";

const ContactCreated = () => (
    <>
        <InformationCard
            body="Din brukerkonto er opprettet.
             For å bruke Kundeportalen må en FINT-administrator i din organisasjon legge deg til som teknisk kontakt i Kundeportalen."
            header="Brukeren din er nå opprettet!"
        />

        <GoToCustomerPortal redirect={false}/>
    </>
);

ContactCreated.propTypes = {
};

export default ContactCreated;

