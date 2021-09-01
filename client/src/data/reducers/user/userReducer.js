import { SIGN_IN_SUCCESS } from "data/actionTypes";

const initialState = {
    expiration: (() => {
        const date = new Date();
        date.setHours(date.getHours() + 1);
        return date;
    })(),
    role: 'user',
    token: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS: return action.payload;
        default: return state;
    }
}
