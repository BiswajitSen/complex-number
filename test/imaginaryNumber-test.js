const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const { RealNumber } = require('../src/realNumber');
const { ImaginaryNumber } = require('../src/imaginaryNumber');

describe('new imaginaryNumber', function () {
  it('Should create an Object of type imaginary', function () {
    const rnum = new RealNumber(5);
    const inum = new ImaginaryNumber(rnum);
    const actual = inum.toString();
    const expected = '5i';
    strictEqual(actual, expected);
  });

  it('Should add two imaginary numbers and give back another imaginary number', function () {
    const rnum = new RealNumber(4);
    const inum = new ImaginaryNumber(rnum);
    const actual = inum.add(inum).toString();
    const expected = '8i';
    strictEqual(actual, expected);
  });

  it('Should subtract two imaginary numbers and give back another imaginary number', function () {
    const rnum = new RealNumber(4);
    const inum = new ImaginaryNumber(rnum);
    const actual = inum.sub(inum).toString();
    const expected = '0i';
    strictEqual(actual, expected);
  });

  it('Should multiply two imaginary numbers and give back a real number', function () {
    const rnum = new RealNumber(4);
    const inum = new ImaginaryNumber(rnum);
    const actual = inum.multiply(inum).toString();
    const expected = '-16';
    strictEqual(actual, expected);
  });
});
