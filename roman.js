const ROMAN_STEPS = [
  [1000, "M"],
  [500, "D"],
  [100, "C"],
  [50, "L"],
  [10, "X"],
  [5, "V"],
  [1, "I"],
];

function toRoman(num) {
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
