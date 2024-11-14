// test/math.test.js
import { expect } from "chai";
import { add, subtract } from "./math.js";  

describe("Math Functions", function () {
  it("should add two numbers correctly", function () {
    const result = add(3, 4);
    expect(result).to.equal(7);
  });

  it("should subtract two numbers correctly", function () {
    const result = subtract(5, 2);
    expect(result).to.equal(3);
  });
});
