var Validation = require("../../src/chainable");

describe("Chainable methods", function() {
  describe("noSpace", function() {
    it("no space", function() {
      expect(Validation.noSpace("a ")).toEqual("a");
      expect(Validation.noSpace(" a")).toEqual("a");
      expect(Validation.noSpace("a")).toEqual("a");
    })
  })

  describe("removeNum", function() {
    it("remove number", function() {
      expect(Validation.removeNum("a1")).toEqual("a");
      expect(Validation.removeNum("1a")).toEqual("a");
      expect(Validation.removeNum("a.")).toEqual("a.");
      expect(Validation.removeNum("a")).toEqual("a");
      expect(Validation.removeNum("1")).toEqual("");
    })
  })

  describe("wordOnly", function() {
    it("accept word only", function() {
      expect(Validation.wordOnly("a1")).toEqual("a");
      expect(Validation.wordOnly("1a")).toEqual("a");
      expect(Validation.wordOnly("a.")).toEqual("a");
      expect(Validation.wordOnly("1")).toEqual("");
      expect(Validation.wordOnly("a")).toEqual("a");
    })
  })

  describe("singleSpace", function() {
    it("remove single space", function() {
      expect(Validation.singleSpace("a  ")).toEqual("a ");
      expect(Validation.singleSpace("  a")).toEqual(" a");
      expect(Validation.singleSpace("a ")).toEqual("a ");
      expect(Validation.singleSpace(" a")).toEqual(" a");
      expect(Validation.singleSpace("a1 ")).toEqual("a1 ");
      expect(Validation.singleSpace(" 1a")).toEqual(" 1a");
      expect(Validation.singleSpace("a")).toEqual("a");
    })
  })

  describe("numOnly", function() {
    it("accept number only", function() {
      expect(Validation.numOnly("1a")).toEqual("1");
      expect(Validation.numOnly("a1")).toEqual("1");
      expect(Validation.numOnly("1.")).toEqual("1");
      expect(Validation.numOnly(".1")).toEqual("1");
      expect(Validation.numOnly("1 ")).toEqual("1");
      expect(Validation.numOnly(" 1")).toEqual("1");
      expect(Validation.numOnly("1")).toEqual("1");
    })
  })

  describe("removeLeadingZero", function() {
    it("remove one leading zero only", function() {
      expect(Validation.removeLeadingZero("01")).toEqual("1");
      expect(Validation.removeLeadingZero("10")).toEqual("10");
      expect(Validation.removeLeadingZero("0.1")).toEqual(".1");
      expect(Validation.removeLeadingZero("001")).toEqual("01");
    })
  })

  describe("dollarValue", function() {
    it("place a dot if more than 2 digits value", function() {
      expect(Validation.dollarValue("111")).toEqual("1.11");
      expect(Validation.dollarValue("1111")).toEqual("11.11");
      expect(Validation.dollarValue("11")).toEqual("11");
      expect(Validation.dollarValue("011")).toEqual("11");
      expect(Validation.dollarValue("11a")).toEqual("11");
      expect(Validation.dollarValue("a11")).toEqual("11");
      expect(Validation.dollarValue("1a1")).toEqual("11");
    })
  })

  describe("alphanumericOnly", function() {
    it("accept alphanumeric only", function() {
      expect(Validation.alphanumericOnly("1")).toEqual("1");
      expect(Validation.alphanumericOnly("1a")).toEqual("1a");
      expect(Validation.alphanumericOnly("a1")).toEqual("a1");
      expect(Validation.alphanumericOnly("1a.")).toEqual("1a");
      expect(Validation.alphanumericOnly(".1a")).toEqual("1a");
      expect(Validation.alphanumericOnly(" 1a")).toEqual("1a");
      expect(Validation.alphanumericOnly("1a ")).toEqual("1a");
    })
  })

  describe("ipAddress", function() {
    it("accept number and dot", function() {
      expect(Validation.ipAddress("1.")).toEqual("1.");
      expect(Validation.ipAddress(".1")).toEqual("1");
      expect(Validation.ipAddress("1a")).toEqual("1");
      expect(Validation.ipAddress("a1")).toEqual("1");
      expect(Validation.ipAddress("1..")).toEqual("1..");
      expect(Validation.ipAddress("1")).toEqual("1");
      expect(Validation.ipAddress("..1")).toEqual("1");
      expect(Validation.ipAddress("1..1")).toEqual("1..1");
      expect(Validation.ipAddress("1.1.1")).toEqual("1.1.1");
    })
  })
})