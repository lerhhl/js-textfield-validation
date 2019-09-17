const assert = require("assert");
const { Validation } = require("../index");

describe("Validation", () => {
  describe("create new instance", () => {
    let text = new Validation("new instance");
    it("should initialise with the parameter given", () => {
      assert.strictEqual(text.value, "new instance");
    });
    it("should have an empty error", () => {
      assert.strictEqual(text.error, "");
    })
  })

  describe("noSpace", () => {
    describe("if a string parameter is given", () => {
      it("should remove space", () => {
        let text = new Validation("with space").noSpace();
        assert.strictEqual(text.value, "withspace");
        assert.strictEqual(text.error, "");
      });
    });

    describe("if a non string parameter is given", () => {
      it("should have an error - Only String input is allowed.", () => {
        let text = new Validation(123).noSpace();
        assert.strictEqual(text.value, 123);
        assert.strictEqual(text.error, "Only String input is allowed.");
      });
    });
  });

  describe("removeNum", () => {
    it("should remove numbers", () => {
      let text = new Validation("with number1!").removeNum();
      assert.strictEqual(text.value, "with number!");
      assert.strictEqual(text.error, "");
    });
  });

  describe("wordOnly", () => {
    it("should remove space", () => {
      let text = new Validation("remove space").wordOnly();
      assert.strictEqual(text.value, "removespace");
      assert.strictEqual(text.error, "");
    });
    it("should remove number", () => {
      let text = new Validation("removenum1").wordOnly();
      assert.strictEqual(text.value, "removenum");
      assert.strictEqual(text.error, "");
    });
    it("should remove special character", () => {
      let text = new Validation("removespecialchar!").wordOnly();
      assert.strictEqual(text.value, "removespecialchar");
      assert.strictEqual(text.error, "");
    });
  });

  describe("singleSpace", () => {
    it("should replace double space with single space", () => {
      let text = new Validation("replace double  space").singleSpace();
      assert.strictEqual(text.value, "replace double space");
      assert.strictEqual(text.error, "");
    });
  });

  describe("numOnly", () => {
    it("should remove letter", () => {
      let text = new Validation("123e").numOnly();
      assert.strictEqual(text.value, "123");
      assert.strictEqual(text.error, "");
    });
    it("should remove space", () => {
      let text = new Validation("12 3").numOnly();
      assert.strictEqual(text.value, "123");
      assert.strictEqual(text.error, "");
    });
    it("should remove special character", () => {
      let text = new Validation("123!").numOnly();
      assert.strictEqual(text.value, "123");
      assert.strictEqual(text.error, "");
    });
  });

  describe("removeLeadingZero", () => {
    it("should remove leading zero", () => {
      let text = new Validation("01230").removeLeadingZero();
      assert.strictEqual(text.value, "1230");
      assert.strictEqual(text.error, "");
    });
  });

  describe("dollarValue", () => {
    it("given a single digit number, should create a value with two decimal places", () => {
      let text = new Validation("1").dollarValue();
      assert.strictEqual(text.value, "0.01");
      assert.strictEqual(text.error, "");
    });
    it("given a two digits number, should create a value with two decimal places", () => {
      let text = new Validation("12").dollarValue();
      assert.strictEqual(text.value, "0.12");
      assert.strictEqual(text.error, "");
    });
    it("given a number with more than two digits, should create a value with two decimal places", () => {
      let text = new Validation("1234").dollarValue();
      assert.strictEqual(text.value, "12.34");
      assert.strictEqual(text.error, "");
    });
  });

  describe("alphanumericOnly", () => {
    it("should remove space", () => {
      let text = new Validation("12 e").alphanumericOnly();
      assert.strictEqual(text.value, "12e");
      assert.strictEqual(text.error, "");
    });
    it("should remove special character", () => {
      let text = new Validation("12e!").alphanumericOnly();
      assert.strictEqual(text.value, "12e");
      assert.strictEqual(text.error, "");
    });
  });

  describe("ipAddress", () => {
    it("should remove space", () => {
      let text = new Validation("12. ").ipAddress();
      assert.strictEqual(text.value, "12.");
      assert.strictEqual(text.error, "");
    });
    it("should remove letter", () => {
      let text = new Validation("12.e").ipAddress();
      assert.strictEqual(text.value, "12.");
      assert.strictEqual(text.error, "");
    });
    it("should remove dot in front", () => {
      let text = new Validation(".12").ipAddress();
      assert.strictEqual(text.value, "12");
      assert.strictEqual(text.error, "");
    });
    it("should remove special character", () => {
      let text = new Validation("123!").ipAddress();
      assert.strictEqual(text.value, "123");
      assert.strictEqual(text.error, "");
    });
  });

  describe("truncate", () => {
    describe("if integer parameter is given to the method", () => {
      it("should shorten the length of string to the specified length", () => {
        let text = new Validation("123456").truncate(3);
        assert.strictEqual(text.value, "123");
      });
    });

    describe("if non integer parameter is given to the method", () => {
      it("should have error - 'Only Number input for truncate is allowed.'", () => {
        let text = new Validation("123456").truncate("3");
        assert.strictEqual(text.value, "123456");
        assert.strictEqual(text.error, "Only Number input for truncate is allowed.");
      });
    });
  });
})