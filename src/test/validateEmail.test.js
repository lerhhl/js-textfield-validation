const assert = require("assert");
const validateEmail = require("../validateEmail");

describe("validateEmail", () => {
  describe("if non string parameter is given", () => {
    describe("parameter is an integer", () => {
      it("should be false", () => {
        assert.strictEqual(validateEmail(123), false);
      });
    });
  
    describe("parameter is an array", () => {
      it("should be false", () => {
        assert.strictEqual(validateEmail([]), false);
      });
    });
  
    describe("parameter is an object", () => {
      it("should be false", () => {
        assert.strictEqual(validateEmail({}), false);
      });
    });

    describe("parameter is an undefined", () => {
      it("should be false", () => {
        assert.strictEqual(validateEmail(), false);
      });
    });
  });

  describe("if parameter is an invalid email", () => {
    describe("if parameter is an empty string", () => {
      it("should be false", () => {
        assert.strictEqual(validateEmail(""), false);
      });
    });

    describe("parameter is a string without @ and .com", () => {
      it("should be false", () => {
        assert.strictEqual(validateEmail("invalid email"), false);
      });
    });

    describe("parameter is a string without .com", () => {
      it("should be false", () => {
        assert.strictEqual(validateEmail("invalid@email"), false);
      });
    });

    describe("parameter is a string without @", () => {
      it("should be false", () => {
        assert.strictEqual(validateEmail("invalidemail.com"), false);
      });
    });
  });
  
  describe("if paramater is a valid email", () => {
    describe("parameter is a string without host-specific label", () => {
      it("should be true", () => {
        assert.strictEqual(validateEmail("example@email.com"), true);
      });
    });

    describe("parameter is a string with host-specific label", () => {
      it("should be true", () => {
        assert.strictEqual(validateEmail("example@email.com.sg"), true);
      });
    });
  });
});