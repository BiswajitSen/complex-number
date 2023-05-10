class RealNumber {
  #value;

  constructor(value) {
    this.#value = value;
  }

  toString() {
    return `${this.#value}`;
  }

  add(addend) {
    const sum = this.#value + addend.#value;
    return new RealNumber(sum);
  }

  sub(subtrahend) {
    const difference = this.#value - subtrahend.#value;
    return new RealNumber(difference);
  }

  multiply(multiplicand) {
    const product = this.#value * multiplicand.#value;
    return new RealNumber(product);
  }
}

exports.RealNumber = RealNumber;
