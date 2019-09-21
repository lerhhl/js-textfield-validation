const Validation = require("./src/Validation");
const validateEmail = require("./src/validateEmail");
const validateNRIC = require("./src/validateNRIC");

/** Check whether IP address is in valid format */
const validateIPAddress = address => {
  let isValid = true;
  const regExpTest = RegExp("^\\d{1,3}[.]\\d{1,3}[.]\\d{1,3}[.]\\d{1,3}$");
  isValid = regExpTest.test(address);
  if (isValid) {
    const values = address.split('.')
    for (let i=0; i<4; i++) {
      if (values[i] > 255) {
        isValid = false;
        break;
      }
    }
  }
  return isValid;
}

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