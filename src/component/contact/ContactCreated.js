import PropTypes from 'prop-types'
import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import GoToCustomerPortal from "../GoToCustomerPortal";
import Typography from "../../../node_modules/@material-ui/core/Typography/Typography";

const styles = (theme) => ({
    message: {
        border: "dotted 1px gray",
        backgroundColor: theme.palette.secondary.light,
        padding: theme.spacing.unit,
    }
});

class ContactCreated extends Component {
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <div className={classes.message}>
                    <Typography variant="subheading">
                        Brukeren din er nå opprettet.
                    </Typography>
                    <Typography variant="body1">
                        For at du skal kunne ta i bruk FINT Kundeportal må du be FINT administratoren i din
                        organisasjon gi det rettigheter til å administrere din organisasjon.
                    </Typography>
                </div>
                <GoToCustomerPortal redirect={false}/>
            </React.Fragment>
        );
    }
}

ContactCreated.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContactCreated);

