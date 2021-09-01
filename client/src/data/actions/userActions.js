/* istanbul ignore file */

import { usersService } from "services/usersService"
import { showNotification } from "./notificationActions";
import { notificationTypes } from "constants/notificationTypes";
import { SIGN_IN_SUCCESS, SIGN_UP_SUCCESS } from "data/actionTypes";
import { hideApplicationLoader, showApplicationLoader } from "./applicationLoaderActions";

const signInSuccess = payload => ({ type: SIGN_IN_SUCCESS, payload });
export const signIn = (email, password) => async dispatch => {
    try {
        dispatch(showApplicationLoader());
        const result = await usersService.signIn(email, password);
        dispatch(signInSuccess(result));
        dispatch(showNotification('successfully signed in', notificationTypes.success));
    } catch (err) {
        dispatch(showNotification('could not sign in', notificationTypes.error));
    } finally {
        dispatch(hideApplicationLoader());
    }
}

const signUpSuccess = payload => ({ type: SIGN_UP_SUCCESS, payload });
export const signUp = (email, password) => async dispatch => {
    try {
        dispatch(showApplicationLoader());
        const result = await usersService.signUp(email, password);
        dispatch(signUpSuccess(result));
        dispatch(showNotification('account activation link has been sent to your email', notificationTypes.success));
    } catch (err) {
        dispatch(showNotification('could not sign up', notificationTypes.error));
    } finally {
        dispatch(hideApplicationLoader());
    }
}
