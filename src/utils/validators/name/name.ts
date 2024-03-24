import type { ValidationResult } from 'src/utils/validators';

export const nameValidator = (name: string): ValidationResult => {
  const nameRegex = /^([A-ZА-Я][a-zа-я-]*)$/;

  const result: ValidationResult = {
    isValid: true,
    errorMessage: '',
  };

  if (name.length === 0) {
    result.isValid = false;
    result.errorMessage = 'Name is required';
  }

  if (name.length < 2) {
    result.isValid = false;
    result.errorMessage = 'Name is too short';
  }

  if (name.length > 40) {
    result.isValid = false;
    result.errorMessage = 'Name is too long';
  }

  if (!nameRegex.test(name)) {
    result.isValid = false;
    result.errorMessage = 'Invalid name';
  }

  return result;
};
