import PropTypes from 'prop-types'
import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";
import GoToCustomerPortal from "../GoToCustomerPortal";
import Typography from "../../../node_modules/@material-ui/core/Typography/Typography";

const styles = (theme) => ({
    message: {
        border: "dotted 1px gray",
        backgroundColor: theme.palette.primary.light,
        padding: theme.spacing(),
    }
});

class ContactCreated extends Component {
    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <div className={classes.message}>
                    <Typography variant="body2">
                        Brukeren din er nå opprettet.
                        <br/>
                        For at du skal kunne ta i bruk FINT Kundeportal må du be FINT administratoren i din
                        organisasjon gi deg rettigheter til å administrere din organisasjon.
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

