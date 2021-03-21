import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from "data/actionTypes"

const triggerShow = (message, type) => ({
    type: SHOW_NOTIFICATION,
    payload: { message, type }
})

const triggerHide = () => ({
    type: HIDE_NOTIFICATION
})

export const showNotification = (message, type) => async dispatch => dispatch(triggerShow(message, type));
export const hideNotification = () => async dispatch => dispatch(triggerHide());
