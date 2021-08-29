import React from 'react';
import { Formik } from 'formik';
import renderer from 'react-test-renderer';

import SignIn from './SignIn';
import SignInForm from './SignInForm';

describe('SignIn', () => {
    it('should have sign in container', () => {
        const component = renderer.create(<SignIn />);
        const containerCount = component.root.findAllByProps(
            { className: 'sign-in-container' }
        ).length;
        expect(containerCount).toEqual(1);
    });

    it('should have Formik component', () => {
        const component = renderer.create(<SignIn />);
        const formik = component.root.findAllByType(Formik).length;
        expect(formik).toEqual(1);
    });

    it('should have SignInForm component', () => {
        const component = renderer.create(<SignIn />);
        const form = component.root.findAllByType(SignInForm).length;
        expect(form).toEqual(1);
    });
});
