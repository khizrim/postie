import type { ValidationResult } from 'src/utils/validators';

export const loginValidator = (login: string): ValidationResult => {
  const loginRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,20}$/;

  const result: ValidationResult = {
    isValid: true,
    errorMessage: '',
  };

  if (login.length === 0) {
    result.isValid = false;
    result.errorMessage = 'Login is required';
  }

  if (!loginRegex.test(login)) {
    result.isValid = false;
    result.errorMessage = 'Invalid login';
  }

  return result;
};
