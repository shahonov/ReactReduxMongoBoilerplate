import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';

import SignInForm from './SignInForm';

import {
    validatePasswords,
    validateEmailInputs
} from 'global/formikValidations';
import { signIn } from 'data/actions/userActions';

import './SignIn.scss';

const SignIn = ({ signIn }) => {
    return (
        <div className='sign-in-container'>
            <Formik
                enableReinitialize
                initialValues={{
                    email: '',
                    password: ''
                }}
                validate={values => {
                    return {
                        ...validateEmailInputs(values, ['email']),
                        ...validatePasswords(values, ['password'])
                    };
                }}
                onSubmit={values => signIn(values.email, values.password)}
            >
                {props => <SignInForm {...props} />}
            </Formik>
        </div>
    );
}

const mapDispatchToProps = { signIn };

export default connect(null, mapDispatchToProps)(SignIn);
