import {
    Card,
    Button,
    TextField,
    CardActions,
    CardContent
} from '@material-ui/core';
import { ErrorMessage } from 'formik';

import './SignUpForm.scss';

const SignUpForm = ({
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
                    <div className='form-input'>
                        <TextField
                            margin='dense'
                            variant='outlined'
                            onBlur={handleBlur}
                            name='confirmPassword'
                            onChange={handleChange}
                            label='Confirm Password'
                            value={values.confirmPassword}
                        />
                        {
                            errors.password && touched.password &&
                            <ErrorMessage className='invalid-form-input' component='div' />
                        }
                    </div>
                    <div>
                        <span>Already have an account?</span>
                        {' '}
                        <a href='/sign-in'>Sign in</a>
                    </div>
                </CardContent>
                <CardActions>
                    <Button
                        size='small'
                        color='primary'
                        variant='contained'
                        onClick={handleSubmit}
                    >
                        Sign up
                    </Button>
                </CardActions>
            </Card>
        </form>
    );
}

export default SignUpForm;
