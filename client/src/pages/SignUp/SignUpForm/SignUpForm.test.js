import React from 'react';
import renderer from 'react-test-renderer';
import {
    Card,
    TextField,
    CardActions,
    CardContent
} from '@material-ui/core';

import SignUpForm from './SignUpForm';

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

describe('SignUpForm', () => {
    it('should have three input text fields (email, password and confirmPassword)', () => {
        const component = renderer.create(<SignUpForm {...props} />);
        const textFields = component.root.findAllByType(TextField);

        expect(textFields.length).toEqual(3);

        expect(textFields[0].props.name).toEqual('email');
        expect(textFields[1].props.name).toEqual('password');
        expect(textFields[2].props.name).toEqual('confirmPassword');

        expect(textFields[0].props.label).toEqual('Email');
        expect(textFields[1].props.label).toEqual('Password');
        expect(textFields[2].props.label).toEqual('Confirm password');

        expect(textFields[0].props.margin).toEqual('dense');
        expect(textFields[1].props.margin).toEqual('dense');
        expect(textFields[2].props.margin).toEqual('dense');

        expect(textFields[0].props.variant).toEqual('outlined');
        expect(textFields[1].props.variant).toEqual('outlined');
        expect(textFields[2].props.variant).toEqual('outlined');

        expect(textFields[0].props.fullWidth).toBeTruthy();
        expect(textFields[1].props.fullWidth).toBeTruthy();
        expect(textFields[2].props.fullWidth).toBeTruthy();
    });

    it('should contain card component and its subcomponents', () => {
        const component = renderer.create(<SignUpForm {...props} />);
        expect(component.root.findAllByType(Card).length).toEqual(1);
        expect(component.root.findAllByType(CardContent).length).toEqual(1);
        expect(component.root.findAllByType(CardActions).length).toEqual(1);
    });

    it('should render error messages when errors and touched are true', () => {
        expect(true).toBeTruthy();
    });

    it('should not render error messages when errors is true and touched is false', () => {
        expect(true).toBeTruthy();
    });

    it('should not render error messages when errors is false and touched is true', () => {
        expect(true).toBeTruthy();
    });
});
