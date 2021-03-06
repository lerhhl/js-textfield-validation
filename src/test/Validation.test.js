const assert = require("assert");
const Validation = require("../Validation");

describe("Validation", () => {
  describe("create new instance", () => {
    describe("if null parameter is given", () => {
      let text = new Validation(null);
      it("should equal to an empty string", () => {
        assert.strictEqual(text.value, "");
      });
      it("should have an empty error", () => {
        assert.strictEqual(text.error, "");
      });
    });

    describe("if no parameter is given", () => {
      let text = new Validation();
      it("should equal to an empty string", () => {
        assert.strictEqual(text.value, "");
      });
      it("should have an empty error", () => {
        assert.strictEqual(text.error, "");
      });
    });

    describe("if undefined parameter is given", () => {
      let text = new Validation(undefined);
      it("should equal to an empty string", () => {
        assert.strictEqual(text.value, "");
      });
      it("should have an empty error", () => {
        assert.strictEqual(text.error, "");
      });
    });

    describe("if string parameter is given", () => {
      let text = new Validation("new instance");
      it("should initialise with the parameter given", () => {
        assert.strictEqual(text.value, "new instance");
      });
      it("should have an empty error", () => {
        assert.strictEqual(text.error, "");
      });
    });
  });


  describe("noSpace", () => {
    describe("if non string parameter is given to the class", () => {
      describe("given parameter is integer", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation(123).noSpace();
          assert.strictEqual(text.value, 123);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an array", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation([]).noSpace();
          assert.notStrictEqual(text.value, []);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an object", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation({}).noSpace();
          assert.notStrictEqual(text.value, {});
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });
    });

    describe("if a string parameter is given", () => {
      it("should remove space", () => {
        let text = new Validation("with space").noSpace();
        assert.strictEqual(text.value, "withspace");
        assert.strictEqual(text.error, "");
      });
    });
  });

  describe("removeNum", () => {
    describe("if non string parameter is given to the class", () => {
      describe("given parameter is integer", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation(123).removeNum();
          assert.strictEqual(text.value, 123);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an array", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation([]).removeNum();
          assert.notStrictEqual(text.value, []);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an object", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation({}).removeNum();
          assert.notStrictEqual(text.value, {});
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });
    });

    describe("if string parameter is given to the class", () => {
      it("should remove numbers", () => {
        let text = new Validation("with number1!").removeNum();
        assert.strictEqual(text.value, "with number!");
        assert.strictEqual(text.error, "");
      });
    });
  });

  describe("wordOnly", () => {
    describe("if non string parameter is given to the class", () => {
      describe("given parameter is integer", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation(123).wordOnly();
          assert.strictEqual(text.value, 123);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an array", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation([]).wordOnly();
          assert.notStrictEqual(text.value, []);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an object", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation({}).wordOnly();
          assert.notStrictEqual(text.value, {});
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });
    });

    describe("if string parameter is given to the class", () => {
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
  });

  describe("singleSpace", () => {
    describe("if non string parameter is given to the class", () => {
      describe("given parameter is integer", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation(123).singleSpace();
          assert.strictEqual(text.value, 123);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an array", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation([]).singleSpace();
          assert.notStrictEqual(text.value, []);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an object", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation({}).singleSpace();
          assert.notStrictEqual(text.value, {});
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });
    });

    describe("if string parameter is given to the class", () => {
      it("should replace double space with single space", () => {
        let text = new Validation("replace double  space").singleSpace();
        assert.strictEqual(text.value, "replace double space");
        assert.strictEqual(text.error, "");
      });
    });
  });

  describe("numOnly", () => {
    describe("if non string parameter is given to the class", () => {
      describe("given parameter is integer", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation(123).numOnly();
          assert.strictEqual(text.value, 123);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an array", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation([]).numOnly();
          assert.notStrictEqual(text.value, []);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an object", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation({}).numOnly();
          assert.notStrictEqual(text.value, {});
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });
    });

    describe("if string parameter is given to the class", () => {
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
  });

  describe("removeLeadingZero", () => {
    describe("if non string parameter is given to the class", () => {
      describe("given parameter is integer", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation(123).removeLeadingZero();
          assert.strictEqual(text.value, 123);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an array", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation([]).removeLeadingZero();
          assert.notStrictEqual(text.value, []);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an object", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation({}).removeLeadingZero();
          assert.notStrictEqual(text.value, {});
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });
    });

    describe("if string parameter is given to the class", () => {
      it("should remove leading zero", () => {
        let text = new Validation("01230").removeLeadingZero();
        assert.strictEqual(text.value, "1230");
        assert.strictEqual(text.error, "");
      });
    });
  });

  describe("dollarValue", () => {
    describe("if non string parameter is given to the class", () => {
      describe("given parameter is integer", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation(123).dollarValue();
          assert.strictEqual(text.value, 123);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an array", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation([]).dollarValue();
          assert.notStrictEqual(text.value, []);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an object", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation({}).dollarValue();
          assert.notStrictEqual(text.value, {});
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });
    });

    describe("if string parameter is given to the class", () => {
      describe("given parameter is a empty string", () => {
        it("should create a value equal to 0.00", () => {
          let text = new Validation("").dollarValue();
          assert.strictEqual(text.value, "0.00");
          assert.strictEqual(text.error, "");
        });
      });

      describe("given parameter is a single digit number", () => {
        it("should create a value with two decimal places", () => {
          let text = new Validation("1").dollarValue();
          assert.strictEqual(text.value, "0.01");
          assert.strictEqual(text.error, "");
        });
      });

      describe("given parameter is a two digits number", () => {
        it("should create a value with two decimal places", () => {
          let text = new Validation("12").dollarValue();
          assert.strictEqual(text.value, "0.12");
          assert.strictEqual(text.error, "");
        });
      });

      describe("given parameter is a number with more than two digits", () => {
        it("should create a value with two decimal places", () => {
          let text = new Validation("1234").dollarValue();
          assert.strictEqual(text.value, "12.34");
          assert.strictEqual(text.error, "");
        });
      });
    });
  });

  describe("alphanumericOnly", () => {
    describe("if non string parameter is given to the class", () => {
      describe("given parameter is integer", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation(123).alphanumericOnly();
          assert.strictEqual(text.value, 123);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an array", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation([]).alphanumericOnly();
          assert.deepStrictEqual(text.value, []);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an object", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation({}).alphanumericOnly();
          assert.deepStrictEqual(text.value, {});
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });
    });

    describe("if string parameter is given to the class", () => {
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
  });

  describe("ipAddress", () => {
    describe("if non string parameter is given to the class", () => {
      describe("given parameter is integer", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation(123).ipAddress();
          assert.strictEqual(text.value, 123);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an array", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation([]).ipAddress();
          assert.deepStrictEqual(text.value, []);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an object", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation({}).ipAddress();
          assert.deepStrictEqual(text.value, {});
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });
    });

    describe("if string parameter is given to the class", () => {
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
  });

  describe("truncate", () => {
    describe("if non string parameter is given to the class", () => {
      describe("given parameter is integer", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation(123).truncate(3);
          assert.strictEqual(text.value, 123);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an array", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation([]).truncate(3);
          assert.deepStrictEqual(text.value, []);
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });

      describe("given parameter is an object", () => {
        it("should have error - 'Only String input is allowed.'", () => {
          let text = new Validation({}).truncate(3);
          assert.deepStrictEqual(text.value, {});
          assert.strictEqual(text.error, "Only String input is allowed.");
        });
      });
    });

    describe("if non integer parameter is given to the method", () => {
      describe("given parameter is a string", () => {
        it("should have error - 'Only Number input for truncate is allowed.'", () => {
          let text = new Validation("123456").truncate("3");
          assert.strictEqual(text.value, "123456");
          assert.strictEqual(text.error, "Only Number input for truncate is allowed.");
        });
      });

      describe("given parameter is an array", () => {
        it("should have error - 'Only Number input for truncate is allowed.'", () => {
          let text = new Validation("123456").truncate([]);
          assert.strictEqual(text.value, "123456");
          assert.strictEqual(text.error, "Only Number input for truncate is allowed.");
        });
      });

      describe("given parameter is an object", () => {
        it("should have error - 'Only Number input for truncate is allowed.'", () => {
          let text = new Validation("123456").truncate({});
          assert.strictEqual(text.value, "123456");
          assert.strictEqual(text.error, "Only Number input for truncate is allowed.");
        });
      });
    });

    describe("if integer parameter is given to the method", () => {
      describe("length of string is more than given parameter", () => {
        it("should shorten the length of string to the specified length", () => {
          let text = new Validation("123456").truncate(3);
          assert.strictEqual(text.value, "123");
          assert.strictEqual(text.error, "");
        });
      });

      describe("length of string is less than given parameter", () => {
        it("should shorten the length of string to the specified length", () => {
          let text = new Validation("12").truncate(3);
          assert.strictEqual(text.value, "12");
          assert.strictEqual(text.error, "");
        });
      });
    });
  });
})