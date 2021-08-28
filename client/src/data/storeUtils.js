/* istanbul ignore file */

export const throttle = (func, wait) => {
    let inThrottle = false;
    return () => {
        if (!inThrottle) {
            inThrottle = true;
            setTimeout(() => inThrottle = false, wait);
            return func();
        }
    }
}

export const loadState = () => {
    try {
        // const currentVersion = localStorage.getItem('app-version');
        // if (currentVersion !== process.env.REACT_APP_VERSION) {
        //     localStorage.setItem('app-version', process.env.REACT_APP_VERSION)
        //     return undefined;
        // }
        const serializedState = localStorage.getItem('state');
        if (serializedState) {
            const state = JSON.parse(serializedState);
            const { modelsInfo, ...restState } = state;
            return restState;
        }
    } catch (error) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        if (process.env.NODE_ENV.toLowerCase() === 'development') {
            console.error(`Save state error: ${err}`);
        }
    }
}
