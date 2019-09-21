/** Check whether the value contains alphanumberic only. */
const validateAlphanumericOnly = value => {
  let isValid = false;
  const regExpTest = /^[a-z0-9]+$/i;
  if (regExpTest.test(value)) {
    isValid = true;
  }
  if (typeof value === "undefined" || value === null) isValid = false;
  return isValid;
};

module.exports = validateAlphanumericOnly;