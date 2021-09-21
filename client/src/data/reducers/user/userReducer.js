import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from "data/actionTypes";

const initialState = {
    expiration: 0,
    role: '',
    token: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_SUCCESS: return action.payload;
        case SIGN_OUT_SUCCESS: return initialState;
        default: return state;
    }
}
