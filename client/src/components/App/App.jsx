import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from '../../utils/history';
import "tailwindcss/dist/base.css";
import "../../styles/globalStyles.css";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import WelcomePage from '../../pages/WelcomePage/WelcomePage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import MapPage from '../../pages/MapPage/MapPage';
import Footer from '../Footer/Footer';
import { fetchCheckUser } from '../../redux/reduxThunk/asyncFuncs'
import { useDispatch, useSelector } from "react-redux";
function App() {
  // const { token } = useSelector(state => state.users)
  // const dispatch = useDispatch()
  // useEffect(()=> {
  //   dispatch(fetchCheckUser(token))
  // })

  return (
    <Router history={history}>
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
        </Switch>
        <Footer />
      </AnimationRevealPage>
    </Router>
  );
}

export default App;
