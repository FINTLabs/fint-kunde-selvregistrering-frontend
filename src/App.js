import React from 'react';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import {Box, createTheme, createStyles, makeStyles} from "@material-ui/core";
import ContactRouter from "./component/ContactRouter";
import Grid from "@material-ui/core/Grid/Grid";
import FintLogo from "./images/fint-by-vigo.svg";

const theme = createTheme({
    palette: {
        primary: {
            light: '#7fb434',
            main: '#5FA202',
            dark: '#427101',
        },
        secondary: {
            light: '#4b727a',
            main: '#1F4F59',
            dark: '#15373e',
        },
    },
});

const useStyles = makeStyles((theme) =>
    createStyles({
            logo: {
                marginBottom: theme.spacing(2),
                height: 'auto%',
                width: '40%',
            },
        }
    ));

const App = () => {
    const classes = useStyles();
    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <Box display="flex" justifyContent="center">
                    <Box maxWidth="500px">
                        <Grid container justifyContent="center" alignItems="center">
                            <img src={FintLogo} alt="logo" className={classes.logo}/>
                        </Grid>
                        <ContactRouter/>
                    </Box>
                </Box>
            </MuiThemeProvider>
        </div>
    );
};

export default App;
