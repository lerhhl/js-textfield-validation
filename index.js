const Validation = require("./src/Validation");
const validateEmail = require("./src/validateEmail");
const validateNRIC = require("./src/validateNRIC");
const validateIPAddress = require("./src/validateIPAddress");
const validateAlphanumericOnly = require("./src/validateAlphanumericOnly");

module.exports = {
  Validation,
  validateEmail,
  validateNRIC,
  validateIPAddress,
  validateAlphanumericOnly
}