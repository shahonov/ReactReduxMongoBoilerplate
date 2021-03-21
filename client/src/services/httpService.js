import { store } from 'data/store';

const baseUrl = 'http://localhost:5000/';

const buildUrl = endpoint => {
    return `${baseUrl}${endpoint}`;
}

const validateExpiration = async () => {
    const state = await store.getState();
    console.log(state);
}

export const httpService = {
    get: async (endpoint) => {
        await validateExpiration();
        const url = buildUrl(endpoint);
        const response = await fetch(url);
        const json = response.json();
        return json;
    },
    post: async (endpoint, body) => {
        await validateExpiration();
        const url = buildUrl(endpoint);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
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
            headers: {
                'Content-Type': 'application/json'
            },
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
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const json = await response.json();
        return json;
    }
}
