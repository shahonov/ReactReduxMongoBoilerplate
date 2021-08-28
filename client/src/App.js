/* istanbul ignore file */

import { Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import Notification from "./components/Notification";
import ApplicationLoader from "./components/ApplicationLoader";

import Home from "pages/Home";

import { history } from "data/store";

export const App = () => {
  return (
    <Router history={history}>
      <ApplicationLoader />
      <Notification />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
