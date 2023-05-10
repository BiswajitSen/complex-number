const { describe, it } = require('node:test');
const { strictEqual } = require('assert');
const { ComplexNumber } = require("../src/complexNumber");
const { ImaginaryNumber } = require("../src/imaginaryNumber");
const { RealNumber } = require("../src/realNumber");
const exp = require('constants');

describe('A complex number', function () {
  it('should be added with another complex number', function () {

    const real = new RealNumber(2);
    const three = new RealNumber(3);
    const six = new RealNumber(6);

    const imaginary = new ImaginaryNumber(three);

    const complex = new ComplexNumber(real, imaginary);

    const realPartOfSum = new RealNumber(4);
    const imaginaryPartOfSum = new ImaginaryNumber(six);

    const actual = complex.add(complex).toString();
    const expected = new ComplexNumber(realPartOfSum, imaginaryPartOfSum).toString();

    strictEqual(actual, expected)
  });

  it('should give another complex number by subtracting each part', function () {

    const real = new RealNumber(2);
    const zero = new RealNumber(0);

    const imaginary = new ImaginaryNumber(real);

    const complex = new ComplexNumber(real, imaginary);

    const realPart = new RealNumber(zero);
    const imaginaryPart = new ImaginaryNumber(zero);

    const actual = complex.sub(complex).toString();
    const expected = new ComplexNumber(realPart, imaginaryPart).toString();

    strictEqual(actual, expected)
  });


  it('should be multiplied with another complex number', function () {

    const real = new RealNumber(2);
    const three = new RealNumber(3);

    const imaginary = new ImaginaryNumber(three);
    const complex = new ComplexNumber(real, imaginary);

    const twelve = new RealNumber(12);
    const realPartOfProduct = new RealNumber(-5);
    const imaginaryPartOfProduct = new ImaginaryNumber(twelve);

    const actual = complex.multiply(complex).toString();
    const expected = new ComplexNumber(realPartOfProduct, imaginaryPartOfProduct).toString();

    strictEqual(actual, expected);
  });
});