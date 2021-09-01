/* istanbul ignore file */

import NodeRSA from "node-rsa";

import { SIGN_IN_SUCCESS } from "data/actionTypes";
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
        console.log(result);
        if (result.code === 400) {
            dispatch(showNotification('could not sign in', notificationTypes.error));
        } else {
            dispatch(signInSuccess(result));
            dispatch(showNotification('successfully signed in', notificationTypes.success));
        }
    } catch (err) {
        dispatch(showNotification('could not sign in', notificationTypes.error));
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
            dispatch(showNotification('Изпратихме активационен линк на имейла ти.', notificationTypes.success));
        } else {
            dispatch(showNotification('Неуспешна регистрация.', notificationTypes.error));
        }
    } catch (err) {
        dispatch(showNotification('Неуспешна регистрация.', notificationTypes.error));
    } finally {
        dispatch(hideApplicationLoader());
    }
}
