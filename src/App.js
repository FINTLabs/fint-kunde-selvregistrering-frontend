import React from 'react';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import {Box, createMuiTheme, createStyles, makeStyles} from "@material-ui/core";
import Main from "./Main";
import Grid from "@material-ui/core/Grid/Grid";
import fintLogo from "./images/fint-by-vigo.svg";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#7fb434',
            main: '#5FA202',
            dark: '#427101',
            //contrastText: '#fff',
        },
        secondary: {
            light: '#4b727a',
            main: '#1F4F59',
            dark: '#15373e',
            //contrastText: '#000',
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
                    <Box maxWidth="500px">
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
