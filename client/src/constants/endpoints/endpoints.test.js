import { endpoints } from './endpoints';

describe('endpoints', () => {
    it('should contain user sign in endpoint', () => {
        expect(endpoints.users.signIn).toEqual('users/sign-in');
    });

    it('should contain user sign up endpoint', () => {
        expect(endpoints.users.signUp).toEqual('users/sign-up');
    });

    it('should contain crypto public rsa key endpoint', () => {
        expect(endpoints.crypto.publicRSAKey).toEqual('crypto/public-rsa-key');
    });
});
