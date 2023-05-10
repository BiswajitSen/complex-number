const { ImaginaryNumber } = require("./imaginaryNumber");
const { RealNumber } = require("./realNumber");

class ComplexNumber {
  #realNumber
  #imaginaryNumber

  constructor(realNumber, imaginaryNumber) {
    this.#realNumber = realNumber;
    this.#imaginaryNumber = imaginaryNumber;
  }

  add(other) {
    const realPartssum = this.#realNumber.add(other.#realNumber);
    const imaginaryPartsSum = this.#imaginaryNumber.add(other.#imaginaryNumber);

    return new ComplexNumber(realPartssum, imaginaryPartsSum);
  }

  sub(other) {
    const realPartDiff = this.#realNumber.sub(other.#realNumber);
    const imaginaryPartDiff = this.#imaginaryNumber.sub(other.#imaginaryNumber);

    return new ComplexNumber(realPartDiff, imaginaryPartDiff);
  }

  multiply(other) {
    const a = this.#realNumber.multiply(other.#realNumber)
    const b = this.#imaginaryNumber.multiply(other.#imaginaryNumber);

    const realPartsProduct = a.add(b);

    const c = this.#imaginaryNumber.multiplyReal(other.#realNumber);
    const d = other.#imaginaryNumber.multiplyReal(this.#realNumber);
    const imaginaryPartsProduct = c.add(d);

    return new ComplexNumber(realPartsProduct, imaginaryPartsProduct);
  }

  toString() {
    return `${this.#realNumber.toString()} + ${this.#imaginaryNumber.toString()}`
  }
}

exports.ComplexNumber = ComplexNumber;
