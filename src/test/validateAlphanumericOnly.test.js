const assert = require("assert");
const validateAlphanumericOnly = require("../validateAlphanumericOnly");

describe("validateAlphanumericOnly", () => {
  describe("invalid parameter given", () => {
    describe("parameter is an array", () => {
      it("should be false", () => {
        assert.deepStrictEqual(validateAlphanumericOnly([]), false);
      });
    });

    describe("parameter is an object", () => {
      it("should be false", () => {
        assert.deepStrictEqual(validateAlphanumericOnly({}), false);
      });
    });

    describe("parameter is an undefined or null", () => {
      it("should be false", () => {
        assert.strictEqual(validateAlphanumericOnly(), false);
      });
    });

    describe("parameter includes special character", () => {
      it("should be false", () => {
        assert.strictEqual(validateAlphanumericOnly("1a!"), false);
      });
    });

    describe("parameter is an empty string", () => {
      it("should be false", () => {
        assert.strictEqual(validateAlphanumericOnly(""), false);
      });
    });
  });

  describe("valid parameter given", () => {
    describe("parameter is an integer", () => {
      it("should be true", () => {
        assert.strictEqual(validateAlphanumericOnly(1), true);
      });
    });

    describe("parameter is a letter", () => {
      it("should be true", () => {
        assert.strictEqual(validateAlphanumericOnly("a"), true);
      });
    });

    describe("parameter is a string that includes number and letter", () => {
      it("should be true", () => {
        assert.strictEqual(validateAlphanumericOnly("1a"), true);
      });
    });
  });
});