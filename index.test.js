import {
  analyzeArray,
  calculator,
  capitalize,
  reverseString,
  caesarCipher,
} from "./index.js";
describe("capitalize", () => {
  it("capitalizes first letter and lowercases the rest", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("hELLO")).toBe("Hello");
  });
});
test("reverseString: string is reversed", () => {
  const str = "hello";
  expect(reverseString(str)).toBe("olleh");
});
describe("calculator", () => {
  const { add, subtract, multiply, divide } = calculator();
  it("2+2=4", () => expect(add(2, 2)).toBe(4));
  it("2-2=0", () => expect(subtract(2, 2)).toBe(0));
  it("2*2=4", () => expect(multiply(2, 2)).toBe(4));
  it("2/2=1", () => expect(divide(2, 2)).toBe(1));
  it("2/0=Infinity", () => expect(divide(2, 0)).toBe(Infinity));
});
describe("caesar cipher", () => {
  it("shifting works", () => expect(caesarCipher("abc", 3)).toBe("def"));
  it("shifting works with warping", () =>
    expect(caesarCipher("xyz", 3)).toBe("abc"));
  it("case is preserved", () => expect(caesarCipher("aBc", 3)).toBe("dEf"));
  it("punctuation is preserved", () =>
    expect(caesarCipher("ab!", 3)).toBe("de!"));
});
test("analyzeArray: array info correctly computed", () =>
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }));
