const ROMAN_STEPS = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

function toRoman(num) {
  if (!Number.isInteger(num) || num < 1 || num > 3999) {
    return "";
  }

  let result = "";
  let remaining = num;

  for (const [value, symbol] of ROMAN_STEPS) {
    const count = Math.floor(remaining / value);
    result += symbol.repeat(count);
    remaining %= value;
  }

  return result;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { toRoman };
}
