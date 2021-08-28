/* istanbul ignore file */

import { Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/sign-in' component={SignIn} />
            <Route path='/sign-up' component={SignUp} />
        </Switch>
    );
}

export default AppRouter;
