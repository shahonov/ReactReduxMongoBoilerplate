/* istanbul ignore file */

import { endpoints } from 'constants/endpoints';
import { SIGN_OUT_SUCCESS } from 'data/actionTypes';
import { store } from 'data/store';

const baseUrl = 'http://localhost:5000/';

const buildUrl = endpoint => {
    return `${baseUrl}${endpoint}`;
}

const shouldValidateGetExpiration = endpoint => {
    return (
        endpoint !== endpoints.users.signIn &&
        endpoint !== endpoints.users.signOut &&
        endpoint !== endpoints.crypto.publicRSAKey
    );
}

const shouldValidatePostExpiration = endpoint => {
    return (
        endpoint !== endpoints.users.signIn &&
        endpoint !== endpoints.users.signOut &&
        endpoint !== endpoints.users.signUp
    );
}

const validateExpiration = async () => {
    const state = await store.getState();
    if (state.user.expiration < Date.now()) {
        store.dispatch({ type: SIGN_OUT_SUCCESS });
        throw Error('Сесията изтече.');
    }
}

const getHeaders = async () => {
    const state = await store.getState();
    const token = state.user.token;
    if (token) {
        return {
            'x-auth': token,
            'Content-Type': 'application/json'
        }
    } else {
        return {
            'Content-Type': 'application/json'
        };
    }
}

export const httpService = {
    get: async (endpoint) => {
        if (shouldValidateGetExpiration(endpoint)) {
            await validateExpiration();
        }
        const url = buildUrl(endpoint);
        const response = await fetch(url, {
            headers: await getHeaders()
        });
        const json = await response.json();
        return json;
    },
    post: async (endpoint, body) => {
        if (shouldValidatePostExpiration(endpoint)) {
            await validateExpiration();
        }
        const url = buildUrl(endpoint);
        const response = await fetch(url, {
            method: 'POST',
            headers: await getHeaders(),
            body: JSON.stringify(body)
        });
        const json = await response.json();
        return json;
    },
    patch: async (endpoint, body) => {
        await validateExpiration();
        const url = buildUrl(endpoint);
        const response = await fetch(url, {
            method: 'PATCH',
            headers: await getHeaders(),
            body: JSON.stringify(body)
        });
        const json = await response.json();
        return json;
    },
    delete: async (endpoint, body) => {
        await validateExpiration();
        const url = buildUrl(endpoint);
        const response = await fetch(url, {
            method: 'DELETE',
            headers: await getHeaders(),
            body: JSON.stringify(body)
        });
        const json = await response.json();
        return json;
    }
}
