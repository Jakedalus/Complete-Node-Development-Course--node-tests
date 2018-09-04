const utils = require('./utils');

it('should add two numbers', () => {
    var results = utils.add(33, 11);

    if (results !== 44) {
        throw new Error(`Expected 44, but got ${results}`);
    }
    
});

it('should square a number', () => {
    var results = utils.square(5);

    if (results !== 25) throw new Error(`Expected 25, but got ${results}`);
});