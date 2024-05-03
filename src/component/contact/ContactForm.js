import PropTypes from 'prop-types'
import React, {useState} from 'react';
import {Box, Button, TextField} from "@material-ui/core";

const ContactForm = ({nin, contact, updateContactState, createContact, isFormValid}) => {
    const [showNin, setShowNin] = useState(false);
    return (
        <React.Fragment>
            <Box mb={1}>
                <TextField
                    name="nin"
                    label="Fødselsnummer (hold musen over for å vise)"
                    variant="outlined"
                    fullWidth
                    disabled
                    inputProps={{
                        style: {
                            visibility: showNin ? 'visible' : 'hidden'
                        }
                    }}
                    value={nin ? nin : undefined}
                    onMouseEnter={() => setShowNin(true)}
                    onMouseLeave={() => setShowNin(false)}
                />
            </Box>
            <Box mb={1}>
                <TextField
                    name="firstName"
                    label="Fornavn"
                    variant="outlined"
                    required
                    fullWidth
                    value={contact ? contact.firstName : undefined}
                    onChange={updateContactState}
                />
            </Box>
            <Box mb={1}>
                <TextField
                    name="lastName"
                    label="Etternavn"
                    variant="outlined"
                    required
                    fullWidth
                    value={contact ? contact.lastName : undefined}
                    onChange={updateContactState}
                />
            </Box>
            <Box mb={1}>
                <TextField
                    name="mail"
                    label="E-post"
                    variant="outlined"
                    required
                    fullWidth
                    value={contact ? contact.mail : undefined}
                    onChange={updateContactState}
                />
            </Box>
            <Box mb={1}>
                <TextField
                    name="mobile"
                    label="Mobil"
                    variant="outlined"
                    required
                    fullWidth
                    value={contact ? contact.mobile : undefined}
                    onChange={updateContactState}
                />
            </Box>
            <Box mt={2} display="flex" justifyContent="flex-end">
                <Button variant="contained" disabled={!isFormValid()}
                        onClick={() => createContact()} color="primary">
                    {contact ? "Oppdater" : "Opprett"}
                </Button>
            </Box>
        </React.Fragment>
    );
    //  }
}

ContactForm.propTypes = {
    createContact: PropTypes.func.isRequired,
    isFormValid: PropTypes.func.isRequired,
    nin: PropTypes.string.isRequired,
    updateContactState: PropTypes.func.isRequired
};

export default ContactForm;

