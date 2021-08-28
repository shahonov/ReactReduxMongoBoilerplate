import { Formik } from 'formik';

import SignInForm from './SignInForm';

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
