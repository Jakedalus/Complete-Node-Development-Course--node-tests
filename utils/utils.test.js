const expect = require('expect');

const utils = require('./utils');


it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBeA('number').toBe(44);

    // if (res !== 44) {
    //     throw new Error(`Expected 44, but got ${res}`);
    // }
    
});

it('should square a number', () => {
    var res = utils.square(5);

    expect(res).toBeA('number').toBe(25)

    // if (res !== 25) throw new Error(`Expected 25, but got ${res}`);
});

it('should verify first and last names are set', () => {
    var user = {
        age: 36,
        location: 'outer space'
    };

    var res = utils.setName(user, 'Jake Carpenter');

    expect(res).toBe(user); 

    expect(res).toInclude({
        firstname: 'Jake',
        lastname: 'Carpenter'
    }).toBeA('object');
});

it('should async add 2 numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should async square 1 number', (done) => {
    utils.asyncSquare(6, (square) => {
        expect(square).toBeA('number').toBe(36);
        done();
    });
});


