import { roles } from './roles';

describe('roles', () => {
    it('should contain admin role', () => {
        expect(Object.keys(roles)).toContain(roles.admin);
    });

    it('should contain manager role', () => {
        expect(Object.keys(roles)).toContain(roles.manager);
    });

    it('should contain user role', () => {
        expect(Object.keys(roles)).toContain(roles.user);
    });

    it('should contain 4 roles', () => {
        expect(Object.keys(roles).length).toEqual(3);
    });
})