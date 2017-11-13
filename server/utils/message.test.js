const expect = require('expect');

var {
    generateMessage,
    generateLocationMessage
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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Erick';
        var lat = 15;
        var lon = 19;
        var url = 'https://www.google.com/maps?q=15,19';
        var message = generateLocationMessage(from, lat, lon);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            url
        });
    });
});
