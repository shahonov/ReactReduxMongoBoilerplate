import React from 'react';
import { Formik } from 'formik';
import renderer from 'react-test-renderer';

import SignUp from './SignUp';
import SignUpForm from './SignUpForm';

describe('SignUp', () => {
    it('should have sign up container', () => {
        const component = renderer.create(<SignUp />);
        const containerCount = component.root.findAllByProps(
            { className: 'sign-up-container' }
        ).length;
        expect(containerCount).toEqual(1);
    });

    it('should have Formik component', () => {
        const component = renderer.create(<SignUp />);
        const formik = component.root.findAllByType(Formik).length;
        expect(formik).toEqual(1);
    });

    it('should have SignInForm component', () => {
        const component = renderer.create(<SignUp />);
        const form = component.root.findAllByType(SignUpForm).length;
        expect(form).toEqual(1);
    });
});
