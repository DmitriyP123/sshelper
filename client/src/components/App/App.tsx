import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import store
// import Provider from react-redux
import './App.css';
import { Navbar } from '../Navbar/Navbar';
import { LoginPage } from '../Pages/LoginPage/LoginPage';
import { RegisterPage } from '../Pages/RegisterPage/RegisterPage';
import { MapPage } from '../Pages/MapPage/MapPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
        </Route>
        <Route path="/map">
          <MapPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  )
};

export default App;
