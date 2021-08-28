const { notificationTypes } = require("./notificationTypes");

describe('notificationTypes', () => {
    it('should contain success type', () => {
        expect(notificationTypes.success).toEqual('success');
    });

    it('should contain information type', () => {
        expect(notificationTypes.information).toEqual('info');
    });

    it('should contain warning type', () => {
        expect(notificationTypes.warning).toEqual('warning');
    });

    it('should contain error type', () => {
        expect(notificationTypes.error).toEqual('error');
    });
});