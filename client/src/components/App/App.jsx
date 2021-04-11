import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import  Navbar  from '../Navbar/Navbar';
import  LoginPage  from '../Pages/LoginPage/LoginPage';
import  RegisterPage  from '../Pages/RegisterPage/RegisterPage';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
      </Route>
      <Route path="/map">
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
    </Switch>
  </Router>
  </>
  );
}

export default App;
