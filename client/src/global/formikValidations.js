export const validateNonEmptyInputs = (values, names) => {
    const errors = {};
    for (const name of names) {
        if (values[name].toString().length === 0) {
            errors[name] = 'Required field';
        }
    }
    return errors;
}

export const validateNumberInputs = (values, names) => {
    const errors = {};
    for (const name of names) {
        if (isNaN(values[name])) {
            errors[name] = 'Expected number value';
        }
    }
    return errors;
}

export const validateEmailInputs = (values, names) => {
    const errors = {};
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    for (const name of names) {
        const isValidEmail = emailRegEx.test(String(values[name]).toLowerCase());
        if (!isValidEmail) {
            values[name] = 'Not a valid email address';
        }
    }
    return errors;
}
