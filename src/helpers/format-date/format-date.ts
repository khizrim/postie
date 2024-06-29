import { MONTH_NAMES, WEEKDAY_NAMES } from 'src/helpers/format-date/format-date.constants.ts';

export const formatDate = (inputDate: Date): string => {
  const now = new Date();
  const diffInMilliseconds = now.getTime() - inputDate.getTime();
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  const oneWeekInMilliseconds = 7 * oneDayInMilliseconds;

  if (
    inputDate.getDate() === now.getDate() &&
    inputDate.getMonth() === now.getMonth() &&
    inputDate.getFullYear() === now.getFullYear()
  ) {
    const hours = inputDate.getHours().toString().padStart(2, '0');
    const minutes = inputDate.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  if (diffInMilliseconds < oneWeekInMilliseconds) {
    return WEEKDAY_NAMES[inputDate.getDay()];
  }

  if (inputDate.getFullYear() === now.getFullYear()) {
    const day = inputDate.getDate().toString().padStart(2, '0');
    const month = MONTH_NAMES[inputDate.getMonth()];
    return `${day} ${month}`;
  }

  const day = inputDate.getDate().toString();
  const month = MONTH_NAMES[inputDate.getMonth()];
  const year = inputDate.getFullYear().toString();
  return `${day} ${month} ${year}`;
};
