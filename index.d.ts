declare class Validation {
  constructor(value: string);

  // Chainable methods
  alphanumericOnly(): void;
  dollarValue(): void;
  ipAddress(): void;
  noSpace(): void;
  numOnly(): void;
  removeNum(): void;
  removeLeadingZero(): void;
  singleSpace(): void;
  wordOnly(): void;

  // Non-chainable methods
  validateEmail(email: string): void;
  validateIPAddress(address: string): void;
  validateNRIC(nric: string): void;
}