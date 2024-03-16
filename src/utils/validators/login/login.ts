export const loginValidator = (login: string): boolean => {
  const loginRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,20}$/;

  return loginRegex.test(login);
};
