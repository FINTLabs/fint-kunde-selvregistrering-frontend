import React, { Component } from "react";
import { Grid, Paper, Button, withStyles } from "@material-ui/core";
import ContactApi from "../../data/ContactApi";

const styles = (theme) => ({
    root: {},
    paper: {
        marginTop: theme.spacing(4),
        maxWidth: "320px",
        minWidth: "0",
        padding: theme.spacing(),
    },
    button: {
        marginTop: theme.spacing(4),

    }
});

class ContactDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: "Slett kontakt?",
            confirm: false,
        }
    }

    render() {
        const { classes } = this.props;
        const { label, confirm } = this.state;
        const buttonStyle = {
            backgroundColor: confirm ? 'red' : 'white',
        };
        return <Grid container className={classes.root} justify="center" alignItems="center">
            <Paper className={classes.paper}>
                For at du skal kunne ta i bruk FINT Kundeportal må du be FINT administratoren i din
                organisasjon gi det rettigheter til å administrere din organisasjon.
            </Paper>
            <Grid item>
                <Paper className={classes.paper}>
                    <Button style={buttonStyle} onClick={() => this.deleteContact()}>{label}</Button>
                </Paper>
            </Grid>
        </Grid>;
    }

    deleteContact() {
        const { label, confirm } = this.state;
        if (confirm) {
            ContactApi.deleteContact();
            this.setState({
                label: "Kontakt slettet!",
                foundContact: null,
                contact: null,
            });
            // TODO: route to Main
        } else {
            return this.setState({
                label: label + "!",
                confirm: true,
            });
        }
    }
}

export default withStyles(styles)(ContactDelete);