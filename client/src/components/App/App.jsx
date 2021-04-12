import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "tailwindcss/dist/base.css";
import "../../styles/globalStyles.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import WelcomePage from '../../pages/WelcomePage/WelcomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import MapPage from '../../pages/MapPage/MapPage';
import Footer from '../Footer/Footer';
import FieldPage from '../../pages/FieldPage/FieldPage';

function App() {
  return (
    <Router>
      <AnimationRevealPage disabled>
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route path="/map">
            <MapPage />
          </Route>
          <Route path="/signin">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <RegisterPage />
          </Route>
          <Route path="/fieldpage">
            <FieldPage />
          </Route>
        </Switch>
        <Footer />
      </AnimationRevealPage>
    </Router>
  );
};

export default App;
