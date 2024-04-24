import PropTypes from 'prop-types'
import React, {useEffect} from 'react';
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";


const GoToCustomerPortal = ({redirect, fullWidth}) => {

    useEffect(() => {
        if (redirect) {
            window.location.href = "https://kunde.felleskomponent.no";
        }
    });

    return (
        <Box mt={2}>
                <Button fullWidth={fullWidth} variant="outlined" color="primary"
                        href="https://kunde.felleskomponent.no">
                    Gå til Kundeportalen
                </Button>
        </Box>
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
export default GoToCustomerPortal;

