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

  });
})();
