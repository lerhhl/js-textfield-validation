const Validation = require("./src/Validation");
const validateEmail = require("./src/validateEmail");
const validateNRIC = require("./src/validateNRIC");
const validateIPAddress = require("./src/validateIPAddress");


/** Check whether the value contains alphanumberic only. */
const validateAlphanumericOnly = value => {
  let isValid = false;
  const regExpTest = /^[a-z0-9]+$/i;
  if (regExpTest.test(value)) {
    isValid = true;
  }
  return isValid;
};

module.exports = {
  Validation,
  validateEmail,
  validateNRIC,
  validateIPAddress,
  validateAlphanumericOnly
}