import React from 'react';
import { Formik } from 'formik';

import SignUpForm from './SignUpForm';

import {
    validatePasswords,
    validateEmailInputs,
    validatePasswordsMatch
} from 'global/formikValidations';

import './SignUp.scss';

const SignIn = () => {
    return (
        <div className='sign-up-container'>
            <Formik
                enableReinitialize
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validate={values => {
                    return {
                        ...validateEmailInputs(values, ['email']),
                        ...validatePasswords(values, ['password', 'confirmPassword']),
                        ...validatePasswordsMatch(values, ['password', 'confirmPassword'])
                    };
                }}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {props => <SignUpForm {...props} />}
            </Formik>
        </div>
    );
}

export default SignIn;
