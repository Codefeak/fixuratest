import React, {useState, useEffect} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import axios from 'axios';
import { MuiThemeProvider , Grid} from '@material-ui/core';

import Main from './component/Main';
import Profile from './component/Profile';
import Header from './component/Header';
import Footer from './component/Footer';
import Investments from './component/Investments';

import {theme, commonStyles} from './styles/app';

function App() {
const [user, setUser] = useState(null);
const [investments, setInvestments] = useState(null);
const classes = commonStyles();
const {REACT_APP_API_KEY, REACT_APP_API_URL, REACT_APP_USER_ID} = process.env;

useEffect(() => {
  axios({
    method: 'get',
    url: `${REACT_APP_API_URL}/${REACT_APP_USER_ID}/`,
    headers: {
      'x-api-key': `${REACT_APP_API_KEY}`
    }
  }).then(response => setUser(response.data))
  axios({
    method: 'get',
    url: `${REACT_APP_API_URL}/${REACT_APP_USER_ID}/investments`,
    headers: {
      'x-api-key': `${REACT_APP_API_KEY}`
    }
  }).then(response => setInvestments(response.data))
}, [])

const routes = (
  <>
    <Route exact path='/profile' render={props => <Profile data={user} {...props}/>}/>
    <Route exact path='/investments' render={props => <Investments data={investments} {...props}/>}/>
  </>
)

  return (
    <>
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Header user={user}/>
        <Main>
          <Grid container className={classes.mainContainer}>
            <Switch>
              {routes}
            </Switch>
          </Grid>
        </Main>
        <Footer/>
      </div>
    </MuiThemeProvider>
    </>
  );
}

export default App;
