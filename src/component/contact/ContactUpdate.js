import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import ContactApi from "../../data/ContactApi";
import Paper from "../../../node_modules/@material-ui/core/Paper/Paper";
import Grid from "../../../node_modules/@material-ui/core/Grid/Grid";
import ContactForm from "./ContactForm";


const styles = (theme) => ({
    root: {},
    paper: {
        marginTop: theme.spacing.unit * 4,
        maxWidth: "320px",
        minWidth: "0",
        padding: theme.spacing.unit,
    },
    logo: {
        marginBottom: theme.spacing.unit * 2,
        height: '50%',
        width: '50%',
    },
    button: {
        marginTop: theme.spacing.unit * 4,
    }
});

class ContactUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updated: false,
            contact: this.props.contact
        };
    }

    updateContactState = (event) => {
        const field = event.target.name;

        const contact = this.state.contact;
        contact[field] = event.target.value;
        return this.setState({ contact: contact });
    };

    updateContact = () => {
        ContactApi.updateContact(this.state.contact)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ updated: true });
                }
            })
            .catch(() => {
            });
    };

    isFormValid = () => {
        const contact = this.state.contact;
        return contact.nin && contact.firstName && contact.lastName && contact.mail && contact.mobile;
    };

    render() {
        const { classes } = this.props;
        const { contact } = this.state;
        return (
            <Grid container className={classes.root} justify="center" alignItems="center">
                <Grid item>
                    <Paper className={classes.paper}>
                        <Grid container justify="center" alignItems="center">
                            <img src="fint.svg" alt="logo" className={classes.logo} />
                        </Grid>
                        <ContactForm
                            createContact={this.updateContact}
                            isFormValid={this.isFormValid}
                            updateContactState={this.updateContactState}
                            contact={contact}
                            nin={contact.nin}
                        />
                    </Paper>
                </Grid>
            </Grid>

        );
    }
}

ContactUpdate.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactUpdate);
