import PropTypes from 'prop-types'
import React, { Component } from 'react';
import Grid from "../../../node_modules/@material-ui/core/Grid/Grid";
import { Button, TextField, withStyles } from "@material-ui/core";

const styles = (theme) => ({
    button: {
        marginTop: theme.spacing(4),
    }
});

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovering: false
        };
    }
    render() {
        const { classes, nin, contact } = this.props;
        const style = {
            visibility: this.state.hovering ? 'visible' : 'hidden'
        };
        const handleMouseEnter = () => this.setState({hovering : true});
        const handleMouseLeave = () => this.setState({hovering : false});
        return (
            <React.Fragment>
                <TextField
                    name="nin"
                    label="Fødselsnummer (hold musen over for å vise)"
                    fullWidth
                    disabled
                    inputProps={{
                        style: style,
                    }}
                    value={nin ? nin : undefined}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <TextField
                    name="firstName"
                    label="Fornavn"
                    required
                    fullWidth
                    value={contact ? contact.firstName : undefined}
                    onChange={this.props.updateContactState}
                />
                <TextField
                    name="lastName"
                    label="Etternavn"
                    required
                    fullWidth
                    value={contact ? contact.lastName : undefined}
                    onChange={this.props.updateContactState}
                />
                <TextField
                    name="mail"
                    label="E-post"
                    required
                    fullWidth
                    value={contact ? contact.mail : undefined}
                    onChange={this.props.updateContactState}
                />
                <TextField
                    name="mobile"
                    label="Mobil"
                    required
                    fullWidth
                    value={contact ? contact.mobile : undefined}
                    onChange={this.props.updateContactState}
                />
                <Grid container className={classes.button} justify="flex-end" alignItems="flex-end">
                    <Button variant="contained" disabled={!this.props.isFormValid()}
                        onClick={() => this.props.createContact()} color="primary">
                        {contact ? "Oppdater" : "Opprett"}
                    </Button>
                </Grid>
            </React.Fragment>
        );
    }
}

ContactForm.propTypes = {
    classes: PropTypes.object.isRequired,
    createContact: PropTypes.func.isRequired,
    isFormValid: PropTypes.func.isRequired,
    nin: PropTypes.string.isRequired,
    updateContactState: PropTypes.func.isRequired
};

export default withStyles(styles)(ContactForm);

