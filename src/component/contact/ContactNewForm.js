import PropTypes from 'prop-types'
import React, {Component} from 'react';
import Grid from "../../../node_modules/@material-ui/core/Grid/Grid";
import {Button, TextField, withStyles} from "@material-ui/core";

const styles = (theme) => ({
    button: {
        marginTop: theme.spacing.unit * 4,
    }
});

class ContactNewForm extends Component {

    render() {
        const {classes, nin} = this.props;
        return (

            <React.Fragment>
                <TextField
                    name="nin"
                    label="Fødselsnummer"
                    fullWidth
                    disabled
                    value={nin ? nin : ' '}
                />
                <TextField
                    name="firstName"
                    label="Fornavn"
                    required
                    fullWidth
                    onChange={this.props.updateContactState}
                />
                <TextField
                    name="lastName"
                    label="Etternavn"
                    required
                    fullWidth
                    onChange={this.props.updateContactState}
                />
                <TextField
                    name="mail"
                    label="E-post"
                    required
                    fullWidth
                    onChange={this.props.updateContactState}
                />
                <TextField
                    name="mobile"
                    label="Mobil"
                    required
                    fullWidth
                    onChange={this.props.updateContactState}
                />
                <Grid container className={classes.button} justify="flex-end" alignItems="flex-end">
                    <Button variant="contained" disabled={!this.props.isFormValid()}
                            onClick={() => this.props.createContact()} color="primary">
                        Opprett
                    </Button>
                </Grid>
            </React.Fragment>
        );
    }
}

ContactNewForm.propTypes = {
    classes: PropTypes.object.isRequired,
    createContact: PropTypes.func.isRequired,
    isFormValid: PropTypes.func.isRequired,
    nin: PropTypes.string.isRequired,
    updateContactState: PropTypes.func.isRequired
};

export default withStyles(styles)(ContactNewForm);

