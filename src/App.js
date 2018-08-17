import React, {Component} from 'react';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {createMuiTheme} from "@material-ui/core";
import Main from "./Main";

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

class App extends Component {
    render() {
        return (
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <Main/>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
