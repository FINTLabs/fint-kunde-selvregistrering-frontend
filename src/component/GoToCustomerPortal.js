import PropTypes from 'prop-types'
import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import {withStyles} from "@material-ui/core";

const styles = (theme) => ({
    button: {
        marginTop: theme.spacing.unit * 2,
    },
});

class GoToCustomerPortal extends Component {
    render() {
        const {classes, redirect, fullWidth} = this.props
        return (
            <div className={classes.button}>
                {redirect ?
                    (
                        <Button fullWidth={fullWidth} variant="contained" color="primary"
                                href="https://kunde.felleskomponent.no"
                                component={() => window.location = 'https://kunde.felleskomponent.no'}>
                            Gå til FINT Kunde Portal
                        </Button>
                    )
                    :
                    (
                        <Button fullWidth={fullWidth} variant="contained" color="primary"
                                href="https://kunde.felleskomponent.no">
                            Gå til FINT Kunde Portal
                        </Button>
                    )
                }
            </div>
        );
    }

}

GoToCustomerPortal.defaultProps = {
    fullWidth: true,
    redirect: true
};

GoToCustomerPortal.propTypes = {
    fullWidth: PropTypes.bool.isRequired,
    redirect: PropTypes.bool.isRequired
};
export default withStyles(styles)(GoToCustomerPortal);

