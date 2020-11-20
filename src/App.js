import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar.js'
import CountriesList from './components/CountriesList.js'
import CountryDetails from './components/CountryDetails.js'


function App() {
  return (
    <>
      <Navbar />

      <div className="content">
        <Switch>
  
          <Route exact path='/country/:flag' render={(props) => <CountryDetails {...props} />} />
  
        </Switch>
        <ul>
          <CountriesList />
        </ul>
      </div>
      


    </>
  );
}

export default App;
