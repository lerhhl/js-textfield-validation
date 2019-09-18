class Validation {
  constructor(value) {
    this.value = value;
    this.error = "";
  };

  /** Remove all the spaces */
  noSpace() {
    if (typeof this.value !== "string") {
      this.error = "Only String input is allowed.";
    } else {
      this.value = this.value.replace(/\s/, "");
      this.error = "";
    }
    return this
  };

  /** Remove all numbers */
  removeNum() {
    if (typeof this.value !== "string") {
      this.error = "Only String input is allowed.";
    } else {
      this.value = this.value.replace(/\d/, "");
      this.error = "";
    }
    return this
  };

  /** Remove all non alphabet */
  wordOnly() {
    if (typeof this.value !== "string") {
      this.error = "Only String input is allowed.";
    } else {
      this.value = this.value.replace(/[^a-zA-Z]/, "");
      this.error = "";
    }
    return this;
  };

  /** Accept single space between two characters only */
  singleSpace() {
    if (typeof this.value !== "string") {
      this.error = "Only String input is allowed.";
    } else {
      this.value = this.value.replace(/\s{2}/, " ");
      this.error = "";
    }
    return this;
  };

  /** Remove all the non integer */
  numOnly() {
    if (typeof this.value !== "string") {
      this.error = "Only String input is allowed.";
    } else {
      this.value = this.value.replace(/\D/, "");
      this.error = "";
    }
    return this;
  };

  /** Remove leading zero */
  removeLeadingZero() {
    if (typeof this.value !== "string") {
      this.error = "Only String input is allowed.";
    } else {
      this.value = this.value.replace(/^0/, "");
      this.error = "";
    }
    return this;
  };

  /** Create a value with two decimal places */
  dollarValue() {
    if (typeof this.value !== "string") {
      this.error = "Only String input is allowed.";
    } else {
      this.value = this.value.replace(/(\D)|(^0)/, "");
      this.error = "";
      if (this.value.length === 0) {
        this.value = '0.00';
      } else if (this.value.length === 1) {
        this.value = "0.0" + this.value
      } else if (this.value.length === 2) {
        this.value = "0." + this.value
      } else if (this.value.length > 2) {
        this.value = this.value.slice(0, -2) + '.' + this.value.slice(-2);
      };
    }
    return this;
  };
  
  /** Accept alphanumeric only */
  alphanumericOnly() {
    if (typeof this.value !== "string") {
      this.error = "Only String input is allowed.";
    } else {
      this.value = this.value.replace(/[^a-zA-Z0-9]/, "");
      this.error = "";
    }
    return this;
  };
  
  /** Accept number and dot only */
  ipAddress() {
    if (typeof this.value !== "string") {
      this.error = "Only String input is allowed.";
    } else {
      this.value = this.value.replace(/([^0-9.])|(^[.]+)/, "");
      this.error = "";
    }
    return this;
  }
  
  /** Truncate the value to a specific length */
  truncate(limit) {
    if (typeof this.value !== "string") {
      this.error = "Only String input is allowed.";
    } else if (typeof limit !== "number") {
      this.error = "Only Number input for truncate is allowed.";
    } else if (this.value.length <= limit) {
      this.error = "";
    } else {
      this.value = this.value.slice(0, limit);
      this.error = "";
    }
    return this;
  }
};

module.exports = Validation;