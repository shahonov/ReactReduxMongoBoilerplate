import { Formik } from 'formik';

import SignInForm from './SignInForm';

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
