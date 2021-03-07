import PropTypes from 'prop-types'
import React from "react";
import {CircularProgress, withStyles} from "@material-ui/core";

const styles = () => ({
    progress: {
        position: 'absolute',
        top: '30%',
        left: '50%',
        marginRight: '-50%',
    },
});

function LoadingProgress(props) {

    const {classes, color, size} = props;

    return (
        <CircularProgress color={color} className={classes.progress} size={size}/>
    );
}

LoadingProgress.propTypes = {
    classes: PropTypes.object,
    color: PropTypes.string,
    size: PropTypes.number
};

LoadingProgress.defaultProps = {
    color: 'secondary',
    size: 150
};

export default withStyles(styles)(LoadingProgress);

