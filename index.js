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

/** Check whether value is an valid email format */
Validation.prototype.validateEmail = function() {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valid = false;
  if (re.test(this.value)) valid = true;
  return valid;
}