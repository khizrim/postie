import type { ValidationResult } from 'src/utils/validators';

export const passwordValidator = (password: string): ValidationResult => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,40}$/;

  const result: ValidationResult = {
    isValid: true,
    errorMessage: '',
  };

  if (password.length === 0) {
    result.isValid = false;
    result.errorMessage = 'Password is required';
  }

  if (!passwordRegex.test(password)) {
    result.isValid = false;
    result.errorMessage = 'Password needs 1 uppercase and 1 digit';
  }

  return result;
};
