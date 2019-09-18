/** Check whether value is a valid email format */
const validateEmail = email => {
  let valid = false;
  if (typeof email === "string") {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    valid = re.test(email);
  }
  return valid;
}

module.exports = validateEmail;