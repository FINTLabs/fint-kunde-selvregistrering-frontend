import React, {Component} from "react";
import {Box, Button, Typography, withStyles} from "@material-ui/core";
import ContactApi from "../../data/ContactApi";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import {grey} from "@material-ui/core/colors";

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
        const {classes} = this.props;
        const {label, confirm} = this.state;
        const buttonStyle = {
            backgroundColor: confirm ? 'red' : 'white',
        };
        return (
            <Box mt={4} display="flex" flexDirection="column" alignItems="center">
                <Box border={1} borderRadius={8} p={2} borderColor="grey.400" display="flex">
                    <Box mr={3}>
                    <InfoIcon fontSize="large" style={{ color: grey[600] }}/>
                    </Box>
                    <Typography variant="body2">
                        For at du skal kunne ta i bruk FINT Kundeportal må du be FINT
                        administratoren i
                        din
                        organisasjon gi deg rettigheter til å administrere din organisasjon.
                    </Typography>
                </Box>
                <Box mt={2}>
                    <Button onClick={() => this.deleteContact()}
                            variant={confirm ? "contained" : "outlined"}
                            color={confirm ? "secondary" : "default"}
                    >{label}</Button>
                </Box>
            </Box>
        );
    }

    deleteContact() {
        const {label, confirm} = this.state;
        if (confirm) {
            ContactApi.deleteContact();
            this.setState({
                label: "Kontakt slettet!",
                foundContact: null,
                contact: null,
            });
            // TODO: route to Main
        } else {
            setTimeout(() => {
                this.setState({
                    label: label,
                    confirm: false,
                });
            }, 2000)
            this.setState({
                label: "Klikk for å bekrefte!",
                confirm: true,
            });
        }
    }
}

export default withStyles(styles)(ContactDelete);
