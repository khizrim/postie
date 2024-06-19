import type { ValidationResult } from 'src/utils/validators';

export const messageValidator = (message: string): ValidationResult => {
  const result: ValidationResult = {
    isValid: true,
    errorMessage: '',
  };

  if (message.trim().length === 0) {
    result.isValid = false;
    result.errorMessage = 'Message is required';
  }

  if (message.trim().length > 500) {
    result.isValid = false;
    result.errorMessage = 'Message is too long';
  }

  return result;
};
