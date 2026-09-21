(function () {
  const toRoman = typeof window !== "undefined"
    ? window.toRoman
    : require("./roman").toRoman;

  QUnit.module("Római számok", function () {
    QUnit.test("alapjelek", function (assert) {
      const cases = [
        [1, "I"], [5, "V"], [10, "X"], [50, "L"],
        [100, "C"], [500, "D"], [1000, "M"]
      ];
      cases.forEach(([number, expected]) => {
        assert.strictEqual(toRoman(number), expected, String(number));
      });
    });

    QUnit.test("ismételt jelek", function (assert) {
      const cases = [
        [2, "II"], [3, "III"], [8, "VIII"], [30, "XXX"],
        [58, "LVIII"], [76, "LXXVI"]
      ];
      cases.forEach(([number, expected]) => {
        assert.strictEqual(toRoman(number), expected, String(number));
      });
    });

    QUnit.test("kivonásos alakok", function (assert) {
      const cases = [
        [4, "IV"], [9, "IX"], [40, "XL"],
        [90, "XC"], [400, "CD"], [900, "CM"]
      ];
      cases.forEach(([number, expected]) => {
        assert.strictEqual(toRoman(number), expected, String(number));
      });
    });

    QUnit.test("összetett számok és felső határ", function (assert) {
      const cases = [
        [14, "XIV"], [19, "XIX"], [44, "XLIV"], [49, "XLIX"],
        [99, "XCIX"], [444, "CDXLIV"], [1994, "MCMXCIV"],
        [2026, "MMXXVI"], [3888, "MMMDCCCLXXXVIII"], [3999, "MMMCMXCIX"]
      ];
      cases.forEach(([number, expected]) => {
        assert.strictEqual(toRoman(number), expected, String(number));
      });
    });

  });
})();
