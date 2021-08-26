import { store } from 'data/store';

const baseUrl = 'http://localhost:5000/';

const buildUrl = endpoint => {
    return `${baseUrl}${endpoint}`;
}

const validateExpiration = async () => {
    const state = await store.getState();
    if (state.user.expiration < Date.now()) {
        throw Error('session has expired');
    }
}

const getHeaders = async () => {
    const state = await store.getState();
    const token = state.user.token;
    if (token) {
        return {
            'Content-Type': 'application/json'
        }
    } else {
        return {
            'x-authrz': token,
            'Content-Type': 'application/json'
        };
    }
}

export const httpService = {
    get: async (endpoint) => {
        await validateExpiration();
        const url = buildUrl(endpoint);
        const response = await fetch(url, {
            headers: {

            }
        });
        const json = response.json();
        return json;
    },
    post: async (endpoint, body) => {
        await validateExpiration();
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
