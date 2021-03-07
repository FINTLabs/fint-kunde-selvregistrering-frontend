import PropTypes from 'prop-types'
import React from 'react';
import GoToCustomerPortal from "../GoToCustomerPortal";
import InformationCard from "../InformationCard";

const ContactCreated = () => (
    <>
        <InformationCard
            body="For at du skal kunne ta i bruk FINT Kundeportal må du be FINT administratoren i din
            organisasjon gi det rettigheter til å administrere din organisasjon."
            header="Brukeren din er nå opprettet!"
        />

        <GoToCustomerPortal redirect={false}/>
    </>
);

ContactCreated.propTypes = {
};

export default ContactCreated;

