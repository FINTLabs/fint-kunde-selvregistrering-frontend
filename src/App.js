import React from 'react';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import {Box, createMuiTheme, createStyles, makeStyles} from "@material-ui/core";
import Main from "./Main";
import Grid from "@material-ui/core/Grid/Grid";
import fintLogo from "./images/fint-by-vigo.svg";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#f05545',
            main: '#b71c1c',
            dark: '#7f0000',
            contrastText: '#fff',
        },
        secondary: {
            light: '#98ee99',
            main: '#66bb6a',
            dark: '#338a3e',
            contrastText: '#000',
        },
    },
});

const useStyles = makeStyles((theme) =>
    createStyles({
            logo: {
                marginBottom: theme.spacing(2),
                height: '50%',
                width: '50%',
            },
        }
    ));

function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <Box display="flex" justifyContent="center">
                    <Box maxWidth="375px">
                        <Grid container justify="center" alignItems="center">
                            <img src={fintLogo} alt="logo" className={classes.logo}/>
                        </Grid>
                        <Main/>
                    </Box>
                </Box>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
