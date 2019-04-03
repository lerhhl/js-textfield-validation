export default class Validation {
  constructor(value) {
    this.value = value;
  };
};
/** Remove all the spaces */
Validation.prototype.noSpace = function() {
  this.value = this.value.replace(/\s/, "");
  return this;
};

/** Remove all numbers */
Validation.prototype.removeNum = function() {
  this.value = this.value.replace(/\d/, "");
  return this;
};

/** Remove all non alphabet */
Validation.prototype.wordOnly = function() {
  this.value = this.value.replace(/[^a-zA-Z]/, "");
  return this;
};

/** Accept single space between two characters only */
Validation.prototype.singleSpace = function() {
  this.value = this.value.replace(/\s{2}/, " ");
  return this;
};

/** Remove all the non integer */
Validation.prototype.numOnly = function() {
  this.value = this.value.replace(/\D/, "");
  return this;
};

/** Remove leading zero */
Validation.prototype.removeLeadingZero = function() {
  this.value = this.value.replace(/^0/, "");
  return this;
};

/** Create a value with two decimal places */
Validation.prototype.dollarValue = function() {
  this.value = this.value.replace(/\D/, "");
  this.value = this.value.replace(/^0/, "");
  if (this.value.length === 0) {
    this.value = '0';
  } else if (this.value.length > 2) {
    this.value = this.value.slice(0, -2) + '.' + this.value.slice(-2);
  };
  return this;
};

/** Accept alphanumeric only */
Validation.prototype.alphanumericOnly = function() {
  this.value = this.value.replace(/[^a-zA-Z0-9]/, "");
  return this;
};

/** Check whether value is a valid email format */
export const validateEmail = email => {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valid = false;
  if (re.test(email)) valid = true;
  return valid;
}

/** Check whether the value is a valid NRIC in Singapore */
export const validateNRIC = nric => {
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