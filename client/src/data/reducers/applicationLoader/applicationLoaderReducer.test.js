import { HIDE_APPLICATION_LOADER, SHOW_APPLICATION_LOADER } from 'data/actionTypes';
import { applicationLoaderReducer } from './applicationLoaderReducer';

let initialState = {};
beforeEach(() => {
    initialState = {
        ok: true
    }
})

describe('applicationLoaderReducer', () => {
    it('should return active true when show application loader action type', () => {
        const action = { type: SHOW_APPLICATION_LOADER };
        const result = applicationLoaderReducer(initialState, action);
        expect(result.isActive).toBeTruthy();
    });

    it('should return active false when hide application loader action type', () => {
        const action = { type: HIDE_APPLICATION_LOADER };
        const result = applicationLoaderReducer(initialState, action);
        expect(result.isActive).toBeFalsy();
    });

    it('should return current state when unknown action type', () => {
        const action = { type: 'UNKNOWN' };
        const result = applicationLoaderReducer(initialState, action);
        expect(result).toEqual(initialState);
    });
});