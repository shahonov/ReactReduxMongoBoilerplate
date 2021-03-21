import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from "data/actionTypes";

const initialState = {
    message: '',
    type: '',
    isOpen: false,
}

export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION: return {
            isOpen: true,
            message: action.payload.message,
            type: action.payload.type,
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
