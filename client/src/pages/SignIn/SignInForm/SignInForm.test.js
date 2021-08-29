import React from 'react';
import renderer from 'react-test-renderer';
import {
    Card,
    TextField,
    CardActions,
    CardContent
} from '@material-ui/core';

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
        const component = renderer.create(<SignInForm {...props} />);
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

    it('should contain card component and its subcomponents', () => {
        const component = renderer.create(<SignInForm {...props} />);
        expect(component.root.findAllByType(Card).length).toEqual(1);
        expect(component.root.findAllByType(CardContent).length).toEqual(1);
        expect(component.root.findAllByType(CardActions).length).toEqual(1);
    });

    it('should render error messages when errors and touched are true', () => {
        props.errors = { email: true, password: true };
        props.touched = { email: true, password: true };
        const component = renderer.create(<SignInForm {...props} />);
        const errorDivsCount = component.root.findAllByProps(
            { className: 'invalid-form-input' }
        ).length;
        expect(errorDivsCount).toEqual(2);
    });

    it('should not render error messages when errors is true and touched is false', () => {
        props.errors = { email: true, password: true };
        props.touched = { email: false, password: false };
        const component = renderer.create(<SignInForm {...props} />);
        const errorDivsCount = component.root.findAllByProps(
            { className: 'invalid-form-input' }
        ).length;
        expect(errorDivsCount).toEqual(0);
    });

    it('should not render error messages when errors is false and touched is true', () => {
        props.errors = { email: false, password: false };
        props.touched = { email: true, password: true };
        const component = renderer.create(<SignInForm {...props} />);
        const errorDivsCount = component.root.findAllByProps(
            { className: 'invalid-form-input' }
        ).length;
        expect(errorDivsCount).toEqual(0);
    });
});
