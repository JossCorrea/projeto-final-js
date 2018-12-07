import React from 'react';
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Course from './pages/course'
import Navbar from './components/navbar'
import Week from './pages/week'
import Module from './pages/module'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#7E459B',
    },
    secondary: {
      light: '#7E459B',
      main: '#B382BA',
      contrastText: '#fff',
    }
  }
});


export const history = createBrowserHistory();

const Home = () => [
  <Navbar />,
  <Course />
];

function App(){
  return(
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <Route exact path="/" component={Home} />
        <Route path="/module" component={Module} />
        <Route path="/week" component={Week} />
        </MuiThemeProvider>
    </Router>
  )
}

export default App;
