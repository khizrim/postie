export const emailValidator = (email: string): string => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email.length === 0) {
    return 'Please enter your email address';
  }

  if (!emailRegex.test(email)) {
    return 'Email is not valid';
  }

  return '';
};
