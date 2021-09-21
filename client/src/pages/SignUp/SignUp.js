import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import SignUpForm from './SignUpForm';

import {
    validatePasswords,
    validateEmailInputs,
    validatePasswordsMatch
} from 'global/formikValidations';
import { signUp } from 'data/actions/userActions';

import './SignUp.scss';

const SignIn = ({ signUp }) => {
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
                onSubmit={values => signUp(values.email, values.password)}
            >
                {props => <SignUpForm {...props} />}
            </Formik>
        </div>
    );
}

const mapDispatchToProps = { signUp };

export default connect(null, mapDispatchToProps)(SignIn);
