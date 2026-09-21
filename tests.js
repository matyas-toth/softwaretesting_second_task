(function () {
  const toRoman = typeof window !== "undefined"
    ? window.toRoman
    : require("./roman").toRoman;

  QUnit.module("Római számok", function () {
  });
})();
