/* istanbul ignore file */

import { combineReducers } from "redux";
import { userReducer } from "./user";
import { notificationReducer } from './notification';
import { applicationLoaderReducer } from './applicationLoader';

export const createRootReducer = () => combineReducers({
    user: userReducer,
    applicationLoader: applicationLoaderReducer,
    notification: notificationReducer,
});
