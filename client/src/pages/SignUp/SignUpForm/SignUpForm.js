import React from 'react';
import {
    Card,
    Button,
    TextField,
    Typography,
    CardActions,
    CardContent
} from '@material-ui/core';

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
            <Card className='sign-up-form-card'>
                <Typography variant='h5' className='card-header'>Sign up</Typography>
                <CardContent>
                    <div className='form-input'>
                        <TextField
                            fullWidth
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
                            <div name='email' className='invalid-form-input'>{errors.email}</div>
                        }
                    </div>
                    <div className='form-input'>
                        <TextField
                            fullWidth
                            margin='dense'
                            name='password'
                            type='password'
                            label='Password'
                            variant='outlined'
                            onBlur={handleBlur}
                            value={values.password}
                            onChange={handleChange}
                        />
                        {
                            errors.password && touched.password &&
                            <div name='password' className='invalid-form-input'>{errors.password}</div>
                        }
                    </div>
                    <div className='form-input'>
                        <TextField
                            fullWidth
                            margin='dense'
                            type='password'
                            variant='outlined'
                            onBlur={handleBlur}
                            name='confirmPassword'
                            onChange={handleChange}
                            label='Confirm password'
                            value={values.confirmPassword}
                        />
                        {
                            errors.confirmPassword && touched.confirmPassword &&
                            <div name='confirmPassword' className='invalid-form-input'>{errors.confirmPassword}</div>
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
                        fullWidth
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
