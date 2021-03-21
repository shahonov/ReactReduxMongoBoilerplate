import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { applicationLoaderReducer } from './applicationLoaderReducer';
import { notificationReducer } from './notificationReducer';

export const createRootReducer = () => combineReducers({
    users: usersReducer,
    applicationLoader: applicationLoaderReducer,
    notification: notificationReducer,
})
