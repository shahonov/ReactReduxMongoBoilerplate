import { SIGN_IN_SUCCESS, SIGN_UP_SUCCESS } from 'data/actionTypes';
import { userReducer } from './userReducer';

let initialState = {};
beforeEach(() => {
    initialState = {
        ok: true
    }
});

describe('userReducer', () => {
    it('should return actions payload when sign up success action type', () => {
        const action = { type: SIGN_UP_SUCCESS, payload: { prop1: 'complete1' } };
        const result = userReducer(initialState, action);
        expect(result.prop1).toEqual('complete1');
    });

    it('should return actions payload when sign in success action type', () => {
        const action = { type: SIGN_IN_SUCCESS, payload: { prop2: 'complete2' } };
        const result = userReducer(initialState, action);
        expect(result.prop2).toEqual('complete2');
    });

    it('should return current state when unknown action type', () => {
        const action = { type: 'UNKNOWN' };
        const result = userReducer(initialState, action);
        expect(result).toEqual(initialState);
    });
});