import React, {useState} from "react";
import {Box, Button} from "@material-ui/core";
import ContactApi from "../../data/ContactApi";
import InformationCard from "../InformationCard";
import PropTypes from "prop-types";


const ContactDelete = ({complete}) => {
    const [label, setLabel] = useState("Slett kontakt?");
    const [confirm, setConfirm] = useState(false);
    const [timer, setTimer] = useState();

    const deleteContact = () => {
        if (confirm) {
            ContactApi.deleteContact()
                .then(response => {
                    clearTimeout(timer);
                    setLabel("Kontakt slettet!");
                    setTimeout(() => window.location.href = "https://www.fintlabs.no", 1500)
                });
        } else {
            setTimer(setTimeout(() => {
                setLabel("Slett kontakt?");
                setConfirm(false);
            }, 2000));
            setLabel("Klikk for å bekrefte!");
            setConfirm(true);
        }
    }

    return (
        <Box mt={4} display="flex" flexDirection="column" alignItems="center">
            {!complete &&
            <InformationCard>
                For at du skal kunne ta i bruk FINT Kundeportal må du be FINT
                administratoren i
                din
                organisasjon gi deg rettigheter til å administrere din organisasjon.
            </InformationCard>
            }
            <Box mt={2}>
                <Button onClick={() => deleteContact()}
                        variant={confirm ? "contained" : "outlined"}
                        color={confirm ? "secondary" : "default"}
                >{label}</Button>
            </Box>
        </Box>
    );
}

ContactDelete.propTypes = {
    complete: PropTypes.bool.isRequired
};


export default ContactDelete;
