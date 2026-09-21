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
  return appendRoman(num, 0);
}

function appendRoman(remaining, index) {
  if (remaining === 0) {
    return "";
  }

  const [value, symbol] = ROMAN_STEPS[index];
  if (remaining < value) {
    return appendRoman(remaining, index + 1);
  }
  return symbol + appendRoman(remaining - value, index);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { toRoman };
}
