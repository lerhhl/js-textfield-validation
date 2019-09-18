const Validation = require("./src/Validation");

/** Check whether value is a valid email format */
const validateEmail = email => {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valid = false;
  if (re.test(email)) valid = true;
  return valid;
}

/** Check whether the value is a valid NRIC in Singapore */
const validateNRIC = nric => {
  if (nric.length !== 9) return false;

  nric = nric.toUpperCase();

  var i, icArray = [];
  for (i = 0; i < 9; i++) { icArray[i] = nric.charAt(i); }

  icArray[1] = parseInt(icArray[1], 10) * 2;
  icArray[2] = parseInt(icArray[2], 10) * 7;
  icArray[3] = parseInt(icArray[3], 10) * 6;
  icArray[4] = parseInt(icArray[4], 10) * 5;
  icArray[5] = parseInt(icArray[5], 10) * 4;
  icArray[6] = parseInt(icArray[6], 10) * 3;
  icArray[7] = parseInt(icArray[7], 10) * 2;

  var weight = 0;
  for (i = 1; i < 8; i++) { weight += icArray[i]; }

  var offset = (icArray[0] === "T" || icArray[0] === "G") ? 4 : 0;
  var temp = (offset + weight) % 11;

  var st = ["J","Z","I","H","G","F","E","D","C","B","A"];
  var fg = ["X","W","U","T","R","Q","P","N","M","L","K"];

  var theAlpha;
  if (icArray[0] === "S" || icArray[0] === "T") { theAlpha = st[temp]; }
  else if (icArray[0] === "F" || icArray[0] === "G") { theAlpha = fg[temp]; }

  return (icArray[8] === theAlpha);
}

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