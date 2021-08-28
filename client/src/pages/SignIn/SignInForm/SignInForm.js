import {
    Card,
    Button,
    TextField,
    CardActions,
    CardContent
} from '@material-ui/core';
import { ErrorMessage } from 'formik';

import './SignInForm.scss';

const SignInForm = ({
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched
}) => {
    return (
        <form>
            <Card>
                <CardContent>
                    <div className='form-input'>
                        <TextField
                            name='email'
                            label='Email'
                            margin='dense'
                            variant='outlined'
                            onBlur={handleBlur}
                            value={values.email}
                            onChange={handleChange}
                        />
                        {
                            errors.email && touched.email &&
                            <ErrorMessage className='invalid-form-input' component='div' />
                        }
                    </div>
                    <div className='form-input'>
                        <TextField
                            margin='dense'
                            name='password'
                            label='Password'
                            variant='outlined'
                            onBlur={handleBlur}
                            value={values.password}
                            onChange={handleChange}
                        />
                        {
                            errors.password && touched.password &&
                            <ErrorMessage className='invalid-form-input' component='div' />
                        }
                    </div>
                    <div>
                        <span>Don't have an account?</span>
                        {' '}
                        <a href='/sign-up'>Sign up</a>
                    </div>
                </CardContent>
                <CardActions>
                    <Button
                        size='small'
                        color='primary'
                        variant='contained'
                        onClick={handleSubmit}
                    >
                        Sign in
                    </Button>
                </CardActions>
            </Card>
        </form>
    );
}

export default SignInForm;
