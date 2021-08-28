/* istanbul ignore file */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import { loadState, saveState, throttle } from './storeUtils';
import { createRootReducer } from './reducers';

const reducers = createRootReducer();
const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = loadState();
export const store = createStore(reducers, persistedState, composeEnhancers(
    applyMiddleware(...middlewares)
));

store.subscribe(throttle(() => {
    // Remove applicationLoader from state to fix bug with frozen loader on refresh
    const { user, page } = store.getState();
    saveState({ user, page });
}, 1000));

export const history = createBrowserHistory();
