const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const { RealNumber } = require('../src/realNumber');

describe('new RealNumber', function () {
  it('Should create an Object of type real', function () {
    const a = new RealNumber(5);
    const actual = a.toString();
    const expected = '5';
    strictEqual(actual, expected);
  });

  it('Should add two real numbers and give back another real number', function () {
    const a = new RealNumber(4);
    const actual = a.add(a).toString();
    const expected = '8';
    strictEqual(actual, expected);
  });

  it('Should subtract two real numbers and give back another real number', function () {
    const a = new RealNumber(4);
    const actual = a.sub(a).toString();
    const expected = '0';
    strictEqual(actual, expected);
  });

  it('Should return 0, if both the numbers has same value', function () {
    const a = new RealNumber(4);
    const actual = a.sub(a).toString();
    const expected = '0';
    strictEqual(actual, expected);
  });

  it('Should multiply two real numbers and give back another real number', function () {
    const a = new RealNumber(4);
    const actual = a.multiply(a).toString();
    const expected = '16';
    strictEqual(actual, expected);
  });
});

