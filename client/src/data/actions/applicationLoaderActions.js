import { HIDE_APPLICATION_LOADER, SHOW_APPLICATION_LOADER } from "data/actionTypes"

const triggerShow = () => ({
    type: SHOW_APPLICATION_LOADER
})

const triggerHide = () => ({
    type: HIDE_APPLICATION_LOADER
})

export const showApplicationLoader = () => async dispatch => dispatch(triggerShow());
export const hideApplicationLoader = () => async dispatch => dispatch(triggerHide());
