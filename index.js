export const capitalize = (str) =>
  str[0].toUpperCase() + str.substring(1).toLowerCase();
export const reverseString = (str) => str.split("").reverse().join("");
export const calculator = () => ({
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
});
export const caesarCipher = (original, key) =>
  [...original].reduce((acc, val) => {
    const c = val.charCodeAt(0);
    const base = c >= 65 && c <= 90 ? 65 : c >= 97 && c <= 122 ? 97 : 0;
    return acc + String.fromCharCode(base ? base + ((c - base + key) % 26) : c);
  }, "");
export const analyzeArray = (arr) => ({
  average: arr.reduce((acc, x) => acc + x, 0) / arr.length,
  min: Math.min(...arr),
  max: Math.max(...arr),
  length: arr.length,
});
