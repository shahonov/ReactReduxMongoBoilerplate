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
            errors[name] = 'Not a valid email address';
        }
    }
    return errors;
}

export const validatePasswords = (values, names) => {
    const errors = {};
    const passwordRegEx = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])');
    for (const name of names) {
        if (!passwordRegEx.test(values[name])) {
            errors[name] = 'Should contain at least one lowercase, one upper case letter and a number';
        }
    }
    return errors;
}

export const validatePasswordsMatch = (values, names) => {
    const errors = {};
    let isMatch = true;
    let prev = '';
    for (const name of names) {
        if (!prev) {
            prev = values[name];
        } else {
            if (prev !== values[name]) {
                isMatch = false;
            }
        }
    }

    if (!isMatch) {
        for (const name of names) {
            errors[name] = 'Passwords does not match';
        }
    }

    return errors;
}
