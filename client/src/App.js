/* istanbul ignore file */

import { Router } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core';

import ApplicationLoader from "./components/ApplicationLoader";
import Notification from "./components/Notification";
import AppRouter from "AppRouter";

import { history } from "data/store";
import theme from "global/theme";

import 'global-styles.scss';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <ApplicationLoader />
        <Notification />
        <AppRouter />
      </Router>
    </ThemeProvider>
  );
}

export default App;
