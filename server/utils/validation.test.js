const expect = require('expect');

const {
    isRealString
} = require('./validation');


describe('Validate name and room', () => {
    it('should reject non string values', () => {
        var isString = isRealString(2);

        expect(isString).toBe(false);
    });

    it('should reject strings with only spaces', () => {
        var isString = isRealString('         ');

        expect(isString).toBe(false);
    });

    it('should allow strings with non-space characters', () => {
        var isString = isRealString('    hola   ');

        expect(isString).toBe(true);
    });
});
