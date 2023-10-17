import { calDoneQty } from "../../src/utils/doneQty"

describe("calDoneQty tests", () => {
  it("should subtract correctly (positive test case)", () => {
    expect(calDoneQty(2, 5)).toBe(3);
  });

  it("should subtract correctly when one value is zero (positive test case)", () => {
    expect(calDoneQty(0, 8)).toBe(8);
  });

  it("should subtract correctly when both values are negative (positive test case)", () => {
    expect(calDoneQty(-3, -7)).toBe(-4);
  });

  it("should throw an error if rest parameter is undefined (negative test case)", () => {
    expect(() => calDoneQty(undefined, 10)).toThrow(
      "Both parameters must be provided"
    );
  });

  it("should throw an error if expectedqun parameter is undefined (negative test case)", () => {
    expect(() => calDoneQty(5, undefined)).toThrow(
      "Both parameters must be provided"
    );
  });

  it("should throw an error if both parameters are undefined (negative test case)", () => {
    expect(() => calDoneQty(undefined, undefined)).toThrow(
      "Both parameters must be provided"
    );
  });
});
