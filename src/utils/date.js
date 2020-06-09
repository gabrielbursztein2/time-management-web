import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import localeData from 'dayjs/plugin/localeData';
import en from 'dayjs/locale/en';
import { FORMAT_TIME, FORMAT_DAY_DATE_AND_MONTH, FORMAT_DATE_REQUEST } from 'constants/dateFormats';

dayjs.extend(utc);
dayjs.extend(advancedFormat);
dayjs.extend(localeData);
dayjs.locale({
  ...en,
  weekStart: 1
});

export const formatDate = date => dayjs(date).format(FORMAT_DAY_DATE_AND_MONTH);

export const formatDateRequest = date => {
  if (date) {
    return dayjs(date).format(FORMAT_DATE_REQUEST);
  }
};

export const formatTime = date => dayjs(date).format(FORMAT_TIME);

export const diff = (date1, date2) => dayjs(date1).diff(date2, 'minute');
