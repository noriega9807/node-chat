const moment = require('moment');

moment.locale('es');

var someTimestamp = moment().valueOf();

console.log(someTimestamp);

var createdAt = 12345;

var date = moment(createdAt);

console.log(date.format('MMM Do, YYYY h:mm a'));
