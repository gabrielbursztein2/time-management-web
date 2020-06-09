import { message } from 'antd';
import queryString from 'query-string';
import isEmpty from 'lodash/isEmpty';

export const parseInputErrors = error => {
  if (!error) {
    return;
  }
  if (Array.isArray(error)) {
    return error[0];
  }
  return error;
};

export const applyQueryParams = (url, params = {}) => {
  if (isEmpty(params)) {
    return url;
  }
  const queryParams = queryString.stringify(params);
  return `${url}?${queryParams}`;
};

export const formatMinutesToTime = minutes => {
  let hours = '00';
  let min = '00';
  if (minutes) {
    hours = `0${parseInt(minutes / 60, 10)}`.slice(-2);
    min = `0${minutes % 60}`.slice(-2);
  }
  return `${hours}:${min}`;
};

export const formatTimeToMinutes = time => {
  if (time) {
    const [hoursStr, minutesStr] = time.split(':');
    const hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    return hours * 60 + minutes;
  }
  return 0;
};

export const sortByDate = entries => entries.sort((a, b) => new Date(b.date) - new Date(a.date));

export const isUserManager = user => user.role === 'user_manager';

export const isAdminUser = user => user.role === 'admin_user';

export const humanize = str =>
  str
    .replace(/^[\s_]+|[\s_]+$/g, '')
    .replace(/[_\s]+/g, ' ')
    .replace(/^[a-z]/, m => m.toUpperCase());

export const successMessage = msg => {
  message.success(msg);
};

export const errorMessage = msg => {
  message.error(msg);
};
