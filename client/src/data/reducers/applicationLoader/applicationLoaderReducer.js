import { HIDE_APPLICATION_LOADER, SHOW_APPLICATION_LOADER } from "data/actionTypes";

const initialState = {
    isActive: false
}

export const applicationLoaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_APPLICATION_LOADER: return { isActive: true };
        case HIDE_APPLICATION_LOADER: return { isActive: false };
        default: return state;
    }
}

export const getApplicationLoader = state => state.applicationLoader;
