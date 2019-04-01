declare class Validation {
  constructor(value: string);

  noSpace(): void;
  removeNum(): void;
  wordOnly(): void;
  singleSpace(): void;
  numOnly(): void;
  removeLeadingZero(): void;
  dollarValue(): void;
  alphanumericOnly(): void;
  validateEmail(): void;
}