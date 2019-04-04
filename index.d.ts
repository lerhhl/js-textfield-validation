declare class Validation {
  constructor(value: string);

  alphanumericOnly(): void;
  dollarValue(): void;
  ipAddress(): void;
  noSpace(): void;
  numOnly(): void;
  removeNum(): void;
  removeLeadingZero(): void;
  singleSpace(): void;
  wordOnly(): void;
  validateEmail(email: string): void;
  validateIPAddress(address: string): void;
  validateNRIC(nric: string): void;
}