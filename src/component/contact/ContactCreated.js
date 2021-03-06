import PropTypes from 'prop-types'
import React from 'react';
import GoToCustomerPortal from "../GoToCustomerPortal";
import InformationCard from "../InformationCard";

const ContactCreated = () => (
    <React.Fragment>
        <InformationCard>
            <p>Brukeren din er nå opprettet!</p>
            For at du skal kunne ta i bruk FINT Kundeportal må du be FINT administratoren i din
            organisasjon gi det rettigheter til å administrere din organisasjon.
        </InformationCard>

        <GoToCustomerPortal redirect={false}/>
    </React.Fragment>
);

ContactCreated.propTypes = {
};

export default ContactCreated;

