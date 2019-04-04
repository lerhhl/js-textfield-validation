exports.validateEmail = email => {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valid = false;
  if (re.test(email)) valid = true;
  return valid;
}

exports.validateIPAddress = address => {
  let isValid = true;
  const regExpTest = RegExp("^\\d{1,3}[.]\\d{1,3}[.]\\d{1,3}[.]\\d{1,3}$");
  isValid = regExpTest.test(address);
  if (isValid) {
    const values = address.split('.');
    for (let i=0; i<4; i++) {
      if (values[i] > 255) {
        isValid = false;
        break;
      }
    }
  }
  return isValid;
}