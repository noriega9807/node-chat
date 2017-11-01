const expect = require('expect');

var {
    generateMessage
} = require('./message');

describe('GenerateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Erick';
        var text = 'Hola';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        });
    });
});
