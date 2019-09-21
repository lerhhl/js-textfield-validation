const assert = require("assert");
const validateNRIC = require("../validateNRIC");

describe("validateNRIC", () => {
  describe("if non string parameter is given", () => {
    describe("parameter is an integer", () => {
      it("should be false", () => {
        assert.strictEqual(validateNRIC(123), false);
      });
    });
  
    describe("parameter is an array", () => {
      it("should be false", () => {
        assert.strictEqual(validateNRIC([]), false);
      });
    });
  
    describe("parameter is an object", () => {
      it("should be false", () => {
        assert.strictEqual(validateNRIC({}), false);
      });
    });

    describe("parameter is an undefined", () => {
      it("should be false", () => {
        assert.strictEqual(validateNRIC(), false);
      });
    });
  });

  describe("if parameter is an invalid NRIC", () => {
    describe("if parameter is an empty string", () => {
      it("should be false", () => {
        assert.strictEqual(validateNRIC(""), false);
      });
    });

    describe("if parameter is a string that its length is not equal to 9", () => {
      it("should be false", () => {
        assert.strictEqual(validateNRIC("12345678"), false);
      });

      it("should be false", () => {
        assert.strictEqual(validateNRIC("1234567890"), false);
      });

      it("should be false", () => {
        assert.strictEqual(validateNRIC("K0200200J"), false);
      });
    });
  });

  describe("if parameter is a valid NRIC", () => {
    describe("starting with S", () => {
      it("should be true", () => {
        assert.strictEqual(validateNRIC("S0200200J"), true);
      });
    });
    
    describe("starting with T", () => {
      it("should be true", () => {
        assert.strictEqual(validateNRIC("T0100000J"), true);
      });
    });

    describe("starting with F", () => {
      it("should be true", () => {
        assert.strictEqual(validateNRIC("F0200200X"), true);
      });
    });

    describe("starting with G", () => {
      it("should be true", () => {
        assert.strictEqual(validateNRIC("G0100000X"), true);
      });
    });

  });
});