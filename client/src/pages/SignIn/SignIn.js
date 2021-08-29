import { Formik } from 'formik';

import SignInForm from './SignInForm';

import { validateEmailInputs, validatePasswords } from 'global/formikValidations';

import './SignIn.scss';

const SignIn = () => {
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
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {props => <SignInForm {...props} />}
            </Formik>
        </div>
    );
}

export default SignIn;
