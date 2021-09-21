/* istanbul ignore file */

import NodeRSA from "node-rsa";

import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from "data/actionTypes";
import { usersService } from "services/usersService"
import { cryptoService } from "services/cryptoService";
import { showNotification } from "./notificationActions";
import { notificationTypes } from "constants/notificationTypes";
import { hideApplicationLoader, showApplicationLoader } from "./applicationLoaderActions";

const signInSuccess = payload => ({ type: SIGN_IN_SUCCESS, payload });
export const signIn = (email, password) => async dispatch => {
    try {
        dispatch(showApplicationLoader());
        const { publicRSAKey, encryptionId } = await cryptoService.getEncryptionInfo();
        const rsa = new NodeRSA(publicRSAKey);
        const encryptedPassword = rsa.encrypt(password, 'base64');
        const result = await usersService.signIn(email, encryptedPassword, encryptionId);
        if (result.code === 400) {
            dispatch(showNotification('Could not sign in.', notificationTypes.error));
        } else {
            dispatch(signInSuccess(result.user));
            dispatch(showNotification('Successfully signed in.', notificationTypes.success));
        }
    } catch (err) {
        console.log(err);
        dispatch(showNotification('Could not sign in.', notificationTypes.error));
    } finally {
        dispatch(hideApplicationLoader());
    }
}

export const signUp = (email, password) => async dispatch => {
    try {
        dispatch(showApplicationLoader());
        const { publicRSAKey, encryptionId } = await cryptoService.getEncryptionInfo();
        const rsa = new NodeRSA(publicRSAKey);
        const encryptedPassword = rsa.encrypt(password, 'base64');
        const result = await usersService.signUp(email, encryptedPassword, encryptionId);
        if (result.isSuccess) {
            dispatch(showNotification('We have sent an activation link to your email.', notificationTypes.success));
        } else {
            dispatch(showNotification('Could not sign up.', notificationTypes.error));
        }
    } catch (err) {
        dispatch(showNotification('Could not sign up.', notificationTypes.error));
    } finally {
        dispatch(hideApplicationLoader());
    }
}

const signOutSuccess = () => ({ type: SIGN_OUT_SUCCESS });
export const signOut = () => async dispatch => {
    try {
        usersService.signOut();
        dispatch(signOutSuccess());
        dispatch(showNotification('Successfully signed out.', notificationTypes.success));
    } catch (err) {
        dispatch(showNotification('Could not sign out.', notificationTypes.error));
    } finally {
        dispatch(hideApplicationLoader());
    }
}
