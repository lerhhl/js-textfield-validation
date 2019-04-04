exports.noSpace = function(value) {
  return value.replace(/\s/, "");
};

exports.removeNum = function(value) {
  return value.replace(/\d/, "");
};

exports.wordOnly = function(value) {
  return value.replace(/[^a-zA-Z]/, "");
}

exports.singleSpace = function(value) {
  return value.replace(/\s{2}/, " ");
};

exports.numOnly = function(value) {
  return value.replace(/\D/, "");
};

exports.removeLeadingZero = function(value) {
  return value.replace(/^0/, "");
};
exports.dollarValue = function(value) {
  newValue = value.replace(/(\D)|(^0)/, "");
  if (newValue.length === 0) {
    newValue = '0';
  } else if (newValue.length > 2) {
    newValue = newValue.slice(0, -2) + '.' + newValue.slice(-2);
  };
  return newValue;
};

exports.alphanumericOnly = function(value) {
  return value.replace(/[^a-zA-Z0-9]/, "");
};

exports.ipAddress = function(value) {
  return value.replace(/([^0-9.])|(^[.]+)/, "");
}