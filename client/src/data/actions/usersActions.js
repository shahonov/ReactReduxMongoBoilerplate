import { usersService } from "services/usersService"
import { notificationTypes } from "../constants";
import { hideApplicationLoader, showApplicationLoader } from "./applicationLoaderActions";
import { showNotification } from "./notificationActions";

export const getUser = async (email, password) => async dispatch => {
    try {
        dispatch(showApplicationLoader());
        const result = await usersService.getUser(email, password);
        console.log(result);
        // TODO: dispatch expiration to state and persist
        dispatch(showNotification('successfully signed in', notificationTypes.success));
    } catch (err) {
        console.warn('getUser:', err);
        dispatch(showNotification('could not sign in', notificationTypes.error));
    } finally {
        dispatch(hideApplicationLoader());
    }
}
