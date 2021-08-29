import { notificationTypes } from 'constants/notificationTypes/notificationTypes';
import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from 'data/actionTypes';
import { getNotification, notificationReducer } from './notificationReducer';

let initialState = {};
beforeEach(() => {
    initialState = {
        ok: true
    }
});

describe('notificationReducer', () => {
    it('should return notification active data when show notification action type', () => {
        const action = {
            type: SHOW_NOTIFICATION,
            payload: {
                message: 'Alert',
                type: notificationTypes.success
            }
        };
        const result = notificationReducer(initialState, action);
        const expected = {
            message: 'Alert',
            type: notificationTypes.success,
            isOpen: true
        }
        expect(result).toEqual(expected);
    });

    it('should return empty fields when hide notification action type', () => {
        const action = { type: HIDE_NOTIFICATION };
        const result = notificationReducer(initialState, action);
        const expected = {
            message: '',
            type: '',
            isOpen: false
        }
        expect(result).toEqual(expected);
    });

    it('should return current state when unknown action type', () => {
        const action = { type: 'UNKNOWN' };
        const result = notificationReducer(initialState, action);
        expect(result).toEqual(initialState);
    });

    it('should return notification field from state', () => {
        const state = {
            notification: {
                testValue: 'asd'
            }
        };
        const notification = getNotification(state);
        expect(notification.testValue).toEqual('asd');
    })
});