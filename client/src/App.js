/* istanbul ignore file */

import { Router } from "react-router-dom";

import ApplicationLoader from "./components/ApplicationLoader";
import Notification from "./components/Notification";
import AppRouter from "AppRouter";

import { history } from "data/store";

export const App = () => {
  return (
    <Router history={history}>
      <ApplicationLoader />
      <Notification />
      <AppRouter />
    </Router>
  );
}

export default App;
