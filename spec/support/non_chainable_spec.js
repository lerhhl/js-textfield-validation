var validation = require("../../src/non_chainable");

describe("Non-chainable methods", function() {
  describe("validateEmail", function() {
    it("invalid email addresses", function() {
      expect(validation.validateEmail("@")).toEqual(false);
      expect(validation.validateEmail("@com")).toEqual(false);
      expect(validation.validateEmail("invalidEmail")).toEqual(false);
      expect(validation.validateEmail("invalidEmail@")).toEqual(false);
      expect(validation.validateEmail("invalidEmail@com.")).toEqual(false);
    })
    it("valid email address", function() {
      expect(validation.validateEmail("test@test.com")).toEqual(true);
    })
  })

  describe("validateIPAddress", function() {
    it("incomplete ip addresses", function() {
      expect(validation.validateIPAddress("111")).toEqual(false);
      expect(validation.validateIPAddress("111.111")).toEqual(false);
      expect(validation.validateIPAddress("111.111.111")).toEqual(false);
    })
    it("invalid ip addresses when any one set of number is more than 255", function() {
      expect(validation.validateIPAddress("256.1.1.1")).toEqual(false);
      expect(validation.validateIPAddress("1.256.1.1")).toEqual(false);
      expect(validation.validateIPAddress("1.1.256.1")).toEqual(false);
      expect(validation.validateIPAddress("1.1.1.256")).toEqual(false);
    })
    it("valid ip address", function() {
      expect(validation.validateIPAddress("1.1.1.1")).toEqual(true);
      expect(validation.validateIPAddress("255.255.255.255")).toEqual(true);
    })
  })
})