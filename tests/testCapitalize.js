const test = require('ava');
const capitalize = require('./capitalize');


test('testCapitalize', t => {
    const capitalized = capitalize('test');
    t.is(capitalized, 'TEST');
});