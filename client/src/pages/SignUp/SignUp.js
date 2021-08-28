import { Formik } from 'formik';

import SignUpForm from './SignUpForm';

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
