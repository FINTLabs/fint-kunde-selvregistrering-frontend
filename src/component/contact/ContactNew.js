import React, {Component} from "react";
import {Box, withStyles} from "@material-ui/core";
import PropTypes from "prop-types";
import ContactApi from "../../data/ContactApi";
import Grid from "../../../node_modules/@material-ui/core/Grid/Grid";
import ContactForm from "./ContactForm";
import ContactCreated from "./ContactCreated";
import fintLogo from "../../images/fint-by-vigo.svg"


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

class ContactNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {},
            created: false,
        };
    }

    updateContactState = (event) => {
        const field = event.target.name;

        const contact = this.state.contact;
        contact[field] = event.target.value;
        contact["nin"] = this.props.nin;
        return this.setState({contact: contact});
    };

    createContact = () => {
        ContactApi.createContact(this.state.contact)
            .then(response => {
                if (response.status === 201) {
                    this.setState({created: true});
                }
            })
            .catch(() => {
            });
    };

    isFormValid = () => {
        const contact = this.state.contact;
        return contact.nin && contact.firstName && contact.lastName && contact.mail && contact.mobile;
    };

    renderNewContactForm() {
        const {nin} = this.props;

        return (
            <ContactForm
                createContact={this.createContact}
                isFormValid={this.isFormValid}
                updateContactState={this.updateContactState}
                nin={nin}
            />
        );
    }

    static renderCreatedMessage() {
        return (
            <ContactCreated/>
        );
    }

    render() {
        const {classes, nin} = this.props;
        const {created} = this.state;
        return (
            <Box display="flex" justifyContent="center">
                <Box maxWidth="375px">
                    <Grid container justify="center" alignItems="center">
                        <img src={fintLogo} alt="logo" className={classes.logo}/>
                    </Grid>
                    <ContactForm
                        createContact={this.createContact}
                        isFormValid={this.isFormValid}
                        updateContactState={this.updateContactState}
                        nin={nin}
                    />
                    {created && ContactNew.renderCreatedMessage()}
                </Box>
            </Box>


        );
    }
}

ContactNew.propTypes = {
    classes: PropTypes.object.isRequired,
    nin: PropTypes.string.isRequired
};

export default withStyles(styles)(ContactNew);
