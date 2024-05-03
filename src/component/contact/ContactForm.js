import PropTypes from 'prop-types'
import React, {useState} from 'react';
import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField
} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

const ContactForm = ({nin, contact, updateContactState, createContact, isFormValid}) => {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <React.Fragment>
            <Box mb={1}>
                <FormControl variant="outlined" required fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">Fødselsnummer</InputLabel>
                    <OutlinedInput
                        name="nin"
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={nin ? nin : undefined}
                        readOnly
                        //onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={130}
                    />
                </FormControl>
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

