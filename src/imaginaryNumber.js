const { RealNumber } = require("./realNumber");

class ImaginaryNumber {
  #value

  constructor(value) {
    this.#value = value;
  }

  toString() {
    return `${this.#value}i`;
  }

  add(addend) {
    const sum = this.#value.add(addend.#value);
    return new ImaginaryNumber(sum);
  }

  sub(subtraend) {
    const difference = this.#value.sub(subtraend.#value);
    return new ImaginaryNumber(difference);
  }

  multiply(multiplicand) {
    const minusOne = new RealNumber(-1);

    return this.#value.multiply(multiplicand.#value).multiply(minusOne);
  }

  multiplyReal(multiplicand) {
    const product = this.#value.multiply(multiplicand);
    return new ImaginaryNumber(product);
  }
}

exports.ImaginaryNumber = ImaginaryNumber;
