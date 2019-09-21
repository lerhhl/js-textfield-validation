const assert = require("assert");
const validateIPAddress = require("../validateIPAddress");

describe("validateIPAddress", () => {
  describe("invalid ip address given", () => {
    describe("parameter is an integer", () => {
      it("should be false", () => {
        assert.strictEqual(validateIPAddress(1.1), false);
      });
    });

    describe("parameter is an array", () => {
      it("should be false", () => {
        assert.strictEqual(validateIPAddress([]), false);
      });
    });

    describe("parameter is an object", () => {
      it("should be false", () => {
        assert.strictEqual(validateIPAddress({ ipAddress: "12.12.12.12"}), false);
      });
    });

    describe("parameter is an undefined or null", () => {
      it("should be false", () => {
        assert.strictEqual(validateIPAddress(), false);
      });
    });

    describe("parameter is an invalid string", () => {
      it("should return false", () => {
        assert.strictEqual(validateIPAddress(""), false);
        assert.strictEqual(validateIPAddress("1."), false);
        assert.strictEqual(validateIPAddress("1.1."), false);
        assert.strictEqual(validateIPAddress("1.1.1."), false);
        assert.strictEqual(validateIPAddress("1.1.1.1."), false);
        assert.strictEqual(validateIPAddress("0.0.0.0"), false);
        assert.strictEqual(validateIPAddress("256.1.1.1"), false);
        assert.strictEqual(validateIPAddress("1.256.1.1"), false);
        assert.strictEqual(validateIPAddress("1.1.256.1"), false);
        assert.strictEqual(validateIPAddress("1.1.1.256"), false);
        assert.strictEqual(validateIPAddress("a.b.c.d"), false);
      });
    });
  });

  describe("valid ip address given", () => {
    it("should return true", () => {
      assert.strictEqual(validateIPAddress("1.1.1.1"), true);
    });
  });
});