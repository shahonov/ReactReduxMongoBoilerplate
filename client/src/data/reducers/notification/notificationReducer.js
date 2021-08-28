import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from "data/actionTypes";

const initialState = {
    isOpen: false,
    message: '',
    type: '',
}

export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION: return {
            message: action.payload.message,
            type: action.payload.type,
            isOpen: true,
        }
        case HIDE_NOTIFICATION: return {
            isOpen: false,
            message: '',
            type: ''
        }
        default: return state;
    }
}

export const getNotification = state => state.notification;
