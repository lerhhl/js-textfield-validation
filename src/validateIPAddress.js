/** Check whether IP address is in valid format */
const validateIPAddress = address => {
  let isValid = true;
  const regExpTest = RegExp("^\\d{1,3}[.]\\d{1,3}[.]\\d{1,3}[.]\\d{1,3}$");
  isValid = regExpTest.test(address);
  if (isValid) {
    const values = address.split('.')
    for (let i=0; i<4; i++) {
      if (values[i] > 255 || values[i] < 1) {
        isValid = false;
        break;
      }
    }
  }
  return isValid;
}

module.exports = validateIPAddress;