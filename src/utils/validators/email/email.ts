import type { ValidationResult } from 'src/utils/validators';

export const emailValidator = (email: string): ValidationResult => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const result: ValidationResult = {
    isValid: true,
    errorMessage: '',
  };

  if (email.length === 0) {
    result.isValid = false;
    result.errorMessage = 'Email is required';
  }

  if (!emailRegex.test(email)) {
    result.isValid = false;
    result.errorMessage = 'Email is not valid';
  }

  return result;
};
