import { TextField } from '@material-ui/core';
import React from 'react';
import renderer from 'react-test-renderer';

import SignInForm from './SignInForm';

let props = {};
beforeEach(() => {
    props = {
        handleSubmit: jest.fn(),
        handleChange: jest.fn(),
        handleBlur: jest.fn(),
        values: {
            email: '',
            password: ''
        },
        touched: {},
        errors: {}
    };
});

describe('SignInForm', () => {
    it('should have two input text fields (email and password)', () => {
        const component = renderer.create(
            <SignInForm {...props} />
        );
        const textFields = component.root.findAllByType(TextField);

        expect(textFields.length).toEqual(2);

        expect(textFields[0].props.name).toEqual('email');
        expect(textFields[1].props.name).toEqual('password');

        expect(textFields[0].props.label).toEqual('Email');
        expect(textFields[1].props.label).toEqual('Password');

        expect(textFields[0].props.margin).toEqual('dense');
        expect(textFields[1].props.margin).toEqual('dense');

        expect(textFields[0].props.variant).toEqual('outlined');
        expect(textFields[1].props.variant).toEqual('outlined');

        expect(textFields[0].props.fullWidth).toBeTruthy();
        expect(textFields[1].props.fullWidth).toBeTruthy();
    });
});
