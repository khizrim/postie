export const passwordValidator = (password: string): boolean => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/;
  return passwordRegex.test(password);
};
