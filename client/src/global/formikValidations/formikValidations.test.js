import { validateEmailInputs, validateNonEmptyInputs, validateNumberInputs, validatePasswords, validatePasswordsMatch } from './formikValidations';

let values = {};

beforeEach(() => {
    values = {
        test1: '12',
        test2: '',
        test3: 'test-input',
        test4: 'test.email@mail.com',
        test5: 'asdAsd',
        test6: 'qweQwe1'
    }
})

describe('formikValidations', () => {
    it('should return non-empty-input error', () => {
        const validationResult = validateNonEmptyInputs(values, ['test2']);
        expect(validationResult).toEqual({ test2: 'Required field' });
    });

    it('should not return non-empty-input error', () => {
        const validationResult = validateNonEmptyInputs(values, ['test3']);
        expect(validationResult).toEqual({});
    });

    it('should return not-a-number-input error', () => {
        const validationResult = validateNumberInputs(values, ['test5']);
        expect(validationResult).toEqual({ test5: 'Expected number value' });
    });

    it('should not return not-a-number-input error', () => {
        const validationResult = validateNumberInputs(values, ['test1']);
        expect(validationResult).toEqual({});
    });

    it('should return not-a-valid-email-input error', () => {
        const validationResult = validateEmailInputs(values, ['test3']);
        expect(validationResult).toEqual({ test3: 'Not a valid email address' });
    });

    it('should not return not-a-valid-email-input error', () => {
        const validationResult = validateEmailInputs(values, ['test4']);
        expect(validationResult).toEqual({});
    });

    it('should return invalid password', () => {
        const validationResult = validatePasswords(values, ['test5']);
        expect(validationResult).toEqual(
            { test5: 'Should contain at least one lowercase, one upper case letter and a number' }
        );
    });

    it('should not return invalid password error', () => {
        const validationResult = validatePasswords(values, ['test6']);
        expect(validationResult).toEqual({});
    });

    it('should return passwords does not match error', () => {
        const validationResult = validatePasswordsMatch(values, ['test6', 'test5']);
        expect(validationResult).toEqual(
            {
                test6: 'Passwords does not match',
                test5: 'Passwords does not match'
            }
        );
    });

    it('should not return passwords does not match error', () => {
        const validationResult = validatePasswordsMatch(values, ['test6', 'test6']);
        expect(validationResult).toEqual({});
    });
});