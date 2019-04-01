export default class Validation {
  constructor(value) {
    this.value = value;
  };
};

Validation.prototype.noSpace = function() {
  this.value = this.value.replace(/\s/, "");
  return this;
};

Validation.prototype.wordOnly = function() {
  this.value = this.value.replace(/\d/, "");
  return this;
};

Validation.prototype.singleSpace = function() {
  this.value = this.value.replace(/\s{2}/, " ");
  return this;
};

Validation.prototype.numOnly = function() {
  this.value = this.value.replace(/\D/, "");
  return this;
};

Validation.prototype.removeLeadingZero = function() {
  this.value = this.value.replace(/^0/, "");
  return this;
};

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

Validation.prototype.alphanumericOnly = function() {
  this.value = this.value.replace(/[^a-zA-Z0-9]/, "");
  return this;
};

Validation.prototype.validateEmail = function() {
  let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valid = false;
  if (re.test(this.value)) valid = true;
  return valid;
}