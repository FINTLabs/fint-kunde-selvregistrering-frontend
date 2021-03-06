import PropTypes from 'prop-types'
import React, {useEffect} from 'react';
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core";

const styles = (theme) => ({
    button: {
        marginTop: theme.spacing(2),
    },
});

const GoToCustomerPortal = props => {
    const {classes, redirect, fullWidth} = props

    useEffect(() => {
        if (redirect) {
            window.location.href = "https://kunde.felleskomponent.no";
        }
    })
    return (
        <div className={classes.button}>
                <Button fullWidth={fullWidth} variant="contained" color="primary"
                        href="https://kunde.felleskomponent.no">
                    Gå til FINT Kundeportal
                </Button>
        </div>
    );
};

GoToCustomerPortal.defaultProps = {
    fullWidth: true,
    redirect: true
};

GoToCustomerPortal.propTypes = {
    fullWidth: PropTypes.bool.isRequired,
    redirect: PropTypes.bool.isRequired
};
export default withStyles(styles)(GoToCustomerPortal);

