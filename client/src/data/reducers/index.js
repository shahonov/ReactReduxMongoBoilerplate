import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { applicationLoaderReducer } from './applicationLoaderReducer';
import { notificationReducer } from './notificationReducer';

export const createRootReducer = () => combineReducers({
    user: userReducer,
    applicationLoader: applicationLoaderReducer,
    notification: notificationReducer,
})
