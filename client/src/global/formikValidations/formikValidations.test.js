import { validateEmailInputs, validateNonEmptyInputs, validateNumberInputs } from './formikValidations';

let values = {};

beforeEach(() => {
    values = {
        test1: '12',
        test2: '',
        test3: 'test-input',
        test4: 'test.email@mail.com'
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
        const validationResult = validateNumberInputs(values, ['test2']);
        expect(validationResult).toEqual({});
    });

    it('should not return not-a-number-input error', () => {
        const validationResult = validateNumberInputs(values, ['test1']);
        expect(validationResult).toEqual({});
    });

    it('should return not-a-valid-email-input error', () => {
        const validationResult = validateEmailInputs(values, ['test3']);
        expect(validationResult).toEqual({});
    });

    it('should not return not-a-valid-email-input error', () => {
        const validationResult = validateEmailInputs(values, ['test4']);
        expect(validationResult).toEqual({});
    });
});